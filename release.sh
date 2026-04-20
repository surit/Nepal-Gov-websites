#!/bin/bash
set -e

echo "🚀 Nepal Gov Websites - Release v1.0.0 Automation"
echo "================================================"

# 1. Safety check
if [ -n "$(git status --porcelain)" ]; then
  echo "❌ Working tree not clean. Commit or stash first."
  exit 1
fi

CURRENT=$(git branch --show-current)
echo "📍 On branch: $CURRENT"

# 2. Create annotated tag
echo "🏷️  Creating tag v1.0.0..."
git tag -a v1.0.0 -m "Release v1.0.0: Initial production directory
✅ Complete .gov.np index
✅ Search & category filters
✅ Responsive, privacy-first design
🔗 https://nepal.surit.com.np"

# 3. Push tag
echo "📤 Pushing tag to origin..."
git push origin v1.0.0

# 4. Create archive branch (optional but requested)
echo "📦 Creating archive branch: release/v1..."
git checkout -b release/v1
git push -u origin release/v1
git checkout "$CURRENT"

# 5. GitHub Release (auto if gh CLI installed)
if command -v gh &> /dev/null; then
  echo "🐙 Creating GitHub release..."
  gh release create v1.0.0 --title "v1.0.0 - Initial Release" --notes "$(git tag -n99 v1.0.0 | sed '1d')"
else
  echo "💡 No 'gh' CLI found. Create release manually:"
  echo "   https://github.com/surit/Nepal-Gov-websites/releases/new"
fi

echo ""
echo "✅ v1.0.0 released & archived!"
echo "📌 Tag: v1.0.0"
echo "📂 Archive: release/v1"
echo "🚀 Main ready for v2.0.0 development"
