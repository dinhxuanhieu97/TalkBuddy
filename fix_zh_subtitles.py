#!/usr/bin/env python3
# -*- coding: utf-8 -*-

with open('src/locales/zh.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix slide2 subtitle
content = content.replace(
    '"onboarding.slide2.subtitle": "Instantly find the right phrase for any urgent situation - airport, hospital, hotel, and more."',
    '"onboarding.slide2.subtitle": "\u5373\u522b\u627e\u5230\u9002\u5408\u6bcf\u79cd\u7ecf\u60c5\u7684\u53ef\u7528\u7684\u8bed\u8a00\uff0c\u673a\u573a\u3001\u533b\u9662\u3001\u9152\u5e97\u7b49\u3002"'
)

# Fix slide3 subtitle
content = content.replace(
    '"onboarding.slide3.subtitle": "Listen, repeat, and perfect your English accent with interactive phonics exercises."',
    '"onboarding.slide3.subtitle": "\u542c\u3001\u91cd\u590d\u3001\u901a\u8fc7\u4ea4\u4e92\u5f0f\u97f3\u7c27\u7ec4\u7ec7\u5b8c\u5584\u4f60\u7684\u82f1\u8bed\u53d1\u97f3\u3002"'
)

# Fix slide4 subtitle
content = content.replace(
    '"onboarding.slide4.subtitle": "Every phrase you learn is saved. Review your history and watch your English grow day by day."',
    '"onboarding.slide4.subtitle": "\u6bcf\u5b66\u4e00\u4e2a\u8bed\u90fd\u4f1a\u88ab\u5b58\u50a8\u3002\u67e5\u770b\u5b66\u4e60\u5386\u53f2\uff0c\u89c2\u770b\u4f60\u7684\u82f1\u8bed\u6bcf\u5929\u8fdb\u6b65\u3002"'
)

with open('src/locales/zh.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done')
