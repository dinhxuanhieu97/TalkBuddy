#!/usr/bin/env python3
# -*- coding: utf-8 -*-

with open('src/locales/zh.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace English with Chinese using Unicode escapes
content = content.replace('"onboarding.slide2.title": "Translate language for everyone"', '"onboarding.slide2.title": "\u7ffb\u8bd1\u8bed\u8a00\u9009\u4e2a\u4eba"')
content = content.replace('"onboarding.slide3.title": "Master Pronunciation"', '"onboarding.slide3.title": "\u638c\u63e1\u53d1\u97f3"')
content = content.replace('"onboarding.slide4.title": "Track Your Progress"', '"onboarding.slide4.title": "\u8ddf\u8e2a\u4f60\u7684\u8fdb\u5ea6"')
content = content.replace('"onboarding.continue": "CONTINUE"', '"onboarding.continue": "\u7ee7\u7eed"')
content = content.replace('"onboarding.getStarted": "GET STARTED"', '"onboarding.getStarted": "\u5f00\u59cb\u5b66\u4e60"')

with open('src/locales/zh.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done')
