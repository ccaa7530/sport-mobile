#!/usr/bin/env bash
commitId=$(git rev-parse --short HEAD)
echo "const gitCommit = '$commitId'" > ./src/version.ts
echo "export default  gitCommit" >> ./src/version.ts
echo "{\"gitCommit\": \"$commitId\"}" > ./public/version

# pnpm install --registry=https://registry.npmmirror.com qrcodejs2 --force\



# pnpm install --registry=https://registry.npmmirror.com qrcode -S