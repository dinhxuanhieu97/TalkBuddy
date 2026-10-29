# TalkBuddy Mobile App — 数据同步 API 对接指南

## 认证

所有请求需要在 Header 中携带 API Key：

```
X-API-Key: db1a180767297ee4691e51d057993f6e32ad800676fc0cdc9a7c9661298cfa78
```

> **注意**：此 Key 仅供内部 App 使用，不要硬编码到客户端代码中，建议通过 App 的环境变量或配置文件注入。

---

## API 1：获取清单

**用途**：App 启动时调用，获取所有分类的版本号，判断哪些需要更新。

```
GET https://talkbuddy.wayjet.io/api/export/manifest?accent=en-US&speed=normal
```

**参数**：
| 参数 | 可选值 | 默认值 | 说明 |
|------|--------|--------|------|
| accent | `en-US`, `en-GB`, `en-AU` | `en-US` | 语音口音 |
| speed | `slow`, `normal`, `fast` | `normal` | 语速 |

**响应示例**：
```json
{
  "success": true,
  "data": {
    "categories": {
      "airport": {
        "titleZh": "机场",
        "titleEn": "Airport",
        "sceneCount": 55,
        "phraseCount": 556,
        "cachedAudioCount": 550,
        "version": "b83926b4"
      },
      "hotel": {
        "titleZh": "酒店",
        "titleEn": "Hotel",
        "sceneCount": 53,
        "phraseCount": 489,
        "cachedAudioCount": 487,
        "version": "fa8cc69f"
      }
    },
    "totalCategories": 17,
    "totalScenes": 794,
    "accent": "en-US",
    "speed": "normal",
    "generatedAt": "2026-04-02T..."
  }
}
```

**关键字段**：
- `version` — 内容指纹，变化时表示该分类有新增/修改场景
- `cachedAudioCount` — 已生成的音频数（应约等于 phraseCount）

---

## API 2：下载分类数据包

**用途**：下载某个分类的完整 ZIP 包，包含场景 JSON + TTS 音频文件。

```
GET https://talkbuddy.wayjet.io/api/export/bundle/{category}?accent=en-US&speed=normal
```

**参数**：
| 参数 | 说明 |
|------|------|
| `{category}` | 分类 ID，见下方列表 |
| `accent` | 同上 |
| `speed` | 同上 |

**17 个分类 ID**：
```
airport, hotel, restaurant, shopping, transport, medical,
social, emergency, entertainment, banking, accommodation,
daily-life, foundation, housing, government, education, workplace
```

**响应**：ZIP 文件（`Content-Type: application/zip`）

**ZIP 内部结构**：
```
talkbuddy-airport-en-US-normal.zip
├── scenes.json          # 该分类所有场景 + 对话数据
├── manifest.json        # 音频索引（text → 文件名映射）
└── audio/
    ├── a1b2c3d4...ogg   # TTS 音频文件（OGG 格式）
    ├── e5f6g7h8...ogg
    └── ...
```

### scenes.json 结构

```json
[
  {
    "id": "airport-check-in",
    "category": "airport",
    "titleZh": "值机",
    "titleEn": "Check-in",
    "description": "在机场值机柜台办理登机手续",
    "otherRole": "值机柜台工作人员",
    "flows": [
      {
        "id": "standard",
        "titleZh": "标准值机",
        "titleEn": "Standard Check-in",
        "difficulty": "basic",
        "turns": [
          {
            "index": 0,
            "speaker": "them",
            "textEn": "Good morning! May I see your passport please?",
            "textZh": "早上好！请出示您的护照。",
            "audioFile": "audio/a1b2c3d4e5f6.ogg",
            "keyPhrases": [{"en": "passport", "zh": "护照"}],
            "culturalNote": null,
            "responseTip": "递上护照"
          },
          {
            "index": 1,
            "speaker": "you",
            "textEn": "Here you are. I'd like a window seat, please.",
            "textZh": "给您。我想要靠窗的座位。",
            "audioFile": "audio/f7g8h9i0j1k2.ogg",
            "keyPhrases": [{"en": "window seat", "zh": "靠窗座位"}]
          }
        ]
      }
    ]
  }
]
```

### manifest.json 结构

```json
{
  "category": "airport",
  "titleZh": "机场",
  "titleEn": "Airport",
  "accent": "en-US",
  "speed": "normal",
  "sceneCount": 55,
  "totalAudioFiles": 550,
  "missingAudioFiles": 6,
  "generatedAt": "2026-04-02T...",
  "audioIndex": [
    {
      "text": "Good morning! May I see your passport please?",
      "file": "audio/a1b2c3d4e5f6.ogg",
      "cached": true
    }
  ]
}
```

---

## App 同步逻辑

```
App 启动
  │
  ├─ 1. GET /api/export/manifest
  │     → 获取 17 个分类的 version
  │
  ├─ 2. 对比本地存储的 version
  │     → 找出 version 变化的分类
  │
  ├─ 3. 对每个需要更新的分类：
  │     GET /api/export/bundle/{category}
  │     → 下载 ZIP
  │     → 解压到本地存储
  │     → 更新本地 version 记录
  │
  └─ 4. 完成同步
```

### 首次同步

17 个分类全部下载，总计约 **150-200MB**。建议：
- 在 WiFi 环境下进行
- 显示下载进度条
- 支持断点续传（按分类粒度，已下载的分类不重复下载）

### 增量同步

只下载 `version` 变化的分类。通常只有 1-2 个分类更新，几 MB 搞定。

---

## 音频文件说明

- **格式**：OGG Opus（24kHz，高质量语音）
- **文件名**：SHA256 哈希值（和 `audioFile` 字段对应）
- **播放**：标准音频播放器即可，Android/iOS 原生支持 OGG
- **大小**：每个文件 5-60KB，平均约 15KB

---

## 测试命令

```bash
# 1. 测试清单（应返回 17 个分类）
curl -H "X-API-Key: db1a180767297ee4691e51d057993f6e32ad800676fc0cdc9a7c9661298cfa78" \
  "https://talkbuddy.wayjet.io/api/export/manifest?accent=en-US&speed=normal"

# 2. 测试下载 foundation（最小的分类，约 4.5MB）
curl -H "X-API-Key: db1a180767297ee4691e51d057993f6e32ad800676fc0cdc9a7c9661298cfa78" \
  -o test-foundation.zip \
  "https://talkbuddy.wayjet.io/api/export/bundle/foundation?accent=en-US&speed=normal"

# 3. 查看 ZIP 内容
unzip -l test-foundation.zip

# 4. 无 Key 访问应返回 401
curl "https://talkbuddy.wayjet.io/api/export/manifest"
# → {"success":false,"error":"Invalid or missing API key"}
```

---

## 注意事项

1. **不要在客户端暴露 API Key** — 通过服务端中转或编译时注入
2. **音频格式是 OGG** — 不是 MP3，确认播放器支持
3. **ZIP 可能较大**（transport 分类约 20MB）— 需要处理大文件下载
4. **version 是内容指纹** — 不是递增数字，用字符串比较判断是否变化
5. **Cloud Run 超时 300 秒** — 大分类的 ZIP 生成可能需要 10-30 秒
