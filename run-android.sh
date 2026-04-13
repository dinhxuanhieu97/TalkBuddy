#!/bin/bash
export ANDROID_HOME=~/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator
export JAVA_HOME=/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home

echo "Starting Android emulator..."
emulator -avd Pixel_9_Pro_XL -no-window -no-audio -no-boot-anim &
EMULATOR_PID=$!

echo "Waiting for emulator to boot (60s)..."
sleep 60

echo "Checking adb devices..."
adb devices

echo "Running yarn android..."
cd /Users/hieudx/Downloads/TalkBuddy-project/Talk-Buddy-App
yarn android
