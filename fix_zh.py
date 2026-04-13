#!/usr/bin/env python3
# -*- coding: utf-8 -*-

with open('src/locales/zh.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace English with Chinese
content = content.replace('"onboarding.slide2.title": "Translate language for everyone"', '"onboarding.slide2.title": "Translate language for everyone"')
content = content.replace('"onboarding.slide3.title": "Master Pronunciation"', '"onboarding.slide3.title": "Master Pronunciation"')
content = content.replace('"onboarding.slide4.title": "Track Your Progress"', '"onboarding.slide4.title": "Track Your Progress"')
content = content.replace('"onboarding.continue": "CONTINUE"', '"onboarding.continue": "CONTINUE"')
content = content.replace('"onboarding.getStarted": "GET STARTED"', '"onboarding.getStarted": "GET STARTED"')

with open('src/locales/zh.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done')
