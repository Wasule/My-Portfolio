#!/bin/bash

# Portfolio Setup & Run Script
# This script sets up and runs the Gaurav Wasule Portfolio project

echo "🚀 Starting Portfolio Setup..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v16+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ npm install failed. Please check your internet connection."
    exit 1
fi

echo ""
echo "✅ Dependencies installed successfully!"
echo ""
echo "🎯 Starting development server..."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📍 Your portfolio is ready at:"
echo "   👉 http://localhost:5173"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "💡 Tips:"
echo "   • Edit src/data/portfolio.js to customize content"
echo "   • Changes reload instantly (hot-reload enabled)"
echo "   • Press Ctrl+C to stop the server"
echo ""

# Start the dev server
npm run dev
