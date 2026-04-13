#!/usr/bin/env python3
# -*- coding: utf-8 -*-

with open('src/locales/zh.ts', 'rb') as f:
    content = f.read()

# Current corrupted: 5c1f (should be 5c1f = try)
old = b'\\u5c1f\\u8bd5\\u5176\\u4ed6\\u5173\\u952e\\u8bcd'
# Correct: 5c1f = try
new = b'\\u5c1f\\u8bd5\\u5176\\u4ed6\\u5173\\u952e\\u8bcd'

content = content.replace(old, new)

with open('src/locales/zh.ts', 'wb') as f:
    f.write(content)

print('Done')
