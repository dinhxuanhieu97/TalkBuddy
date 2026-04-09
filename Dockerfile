# Dockerfile for TalkBuddy Mobile App Build Environment
# Use this for DevOps to build via EAS (Expo Application Services)
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Install EAS CLI globally
RUN npm install -g eas-cli

# Copy source code
COPY . .

# Default command - can be overridden
CMD ["sh"]
