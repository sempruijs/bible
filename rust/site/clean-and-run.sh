#!/bin/bash

echo "🧹 Cleaning build artifacts..."
rm -rf dist/ target/ .stage/
cargo clean

echo "🔨 Building Tailwind CSS..."
tailwindcss -i ./style/tailwind.css -o ./style/output.css --config ./tailwind.config.js

echo "🚀 Starting trunk serve with cache busting..."
trunk serve --open --port 8080 --no-default-features

echo "
⚠️  If you still see old content in your browser:
1. Open Developer Tools (F12 or Cmd+Option+I)
2. Right-click the refresh button
3. Select 'Empty Cache and Hard Reload'
4. Or use Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows/Linux)
"