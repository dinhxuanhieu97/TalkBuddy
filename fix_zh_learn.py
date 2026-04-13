#!/usr/bin/env python3
# -*- coding: utf-8 -*-

with open('src/locales/zh.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix corrupted learn translations
content = content.replace('"learn.noResults": " "', '"learn.noResults": "\\u6682\\u65e0\\u7ed3\\u679c"')
content = content.replace('"learn.tryDifferentSearch": "    "', '"learn.tryDifferentSearch": "\\u5c1f\\u8bd5\\u5176\\u4ed6\\u5173\\u952e\\u8bcd"')
content = content.replace('"learn.searchScenes": "  ..."', '"learn.searchScenes": "\\u641c\\u7d22\\u573a\\u666f..."')
content = content.replace('"learn.continueLearning": "  "', '"learn.continueLearning": "\\u7ee7\\u7eed\\u5b66\\u4e60"')
content = content.replace('"learn.popularScenes": "  "', '"learn.popularScenes": "\\u70ed\\u95e8\\u573a\\u666f"')
content = content.replace('"learn.failedToPlayAudio": "  "', '"learn.failedToPlayAudio": "\\u64ad\\u653e\\u97f3\\u9891\\u5931\\u8d25"')

with open('src/locales/zh.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done')
