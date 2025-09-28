# Project Images Guide

## 📁 Folder Structure
```
public/images/projects/
├── doodle-detect/
│   ├── cover.jpg          # Main project hero
│   ├── 1.jpg             # App interface
│   ├── 2.jpg             # Architecture diagram  
│   └── 3.jpg             # Results/performance
├── nagiscape/
│   ├── cover.jpg          # Landing page
│   ├── 1.jpg             # Sound mixer interface
│   ├── 2.jpg             # User dashboard
│   └── 3.jpg             # Mobile responsive
├── cerita-nusa/
│   ├── cover.jpg          # Admin dashboard
│   ├── 1.jpg             # Content management
│   └── 2.jpg             # AI summarization
└── research/
    ├── cover.jpg          # Research overview
    ├── 1.jpg             # Methodology diagram
    └── 2.jpg             # Results visualization
```

## 🎨 Image Specifications - FLEXIBLE SIZES!

### ✅ **Any Size Works!** 
- **No strict requirements** - Upload any image size
- **Automatic scaling** - CSS `object-fit: cover` handles everything
- **Consistent display** - All images fit perfectly in containers
- **Recommended**: Higher resolution is better (at least 800px wide)

### Cover Images (Main)
- **Minimum**: 800px wide (any height)
- **Recommended**: 1200px+ wide
- **Format**: JPG, PNG, or WebP
- **Content**: Clean, professional project showcase

### Gallery Images  
- **Minimum**: 600px wide (any height)
- **Recommended**: 1000px+ wide
- **Format**: JPG, PNG, or WebP
- **Content**: Screenshots, diagrams, results

## 🖼️ Content Guidelines

### DoodleDetect
- `cover.jpg`: App interface with drawing canvas
- `1.jpg`: Real-time sketch recognition demo
- `2.jpg`: ML pipeline architecture diagram
- `3.jpg`: Performance comparison chart

### Nagiscape  
- `cover.jpg`: Clean soundscape mixer interface
- `1.jpg`: Audio controls and visualization
- `2.jpg`: User authentication flow
- `3.jpg`: Mobile responsive design

### CeritaNusa
- `cover.jpg`: Admin dashboard overview
- `1.jpg`: Content management interface
- `2.jpg`: BERT integration workflow

### Research
- `cover.jpg`: Research paper preview/abstract
- `1.jpg`: Methodology flowchart
- `2.jpg`: Performance results graphs

## 🔧 Optimization Tips

1. **Compress images**: Use 85% quality
2. **WebP format**: Better compression than JPG
3. **Lazy loading**: Built into Next.js Image component
4. **Alt text**: Descriptive for accessibility
5. **Fallback**: SVG placeholder for missing images

## 📱 Responsive Behavior

- **Mobile**: Single column gallery
- **Tablet**: Maintains aspect ratios
- **Desktop**: Full gallery with smooth transitions
- **Touch**: Swipe gestures supported

## 🎯 Professional Standards

- ✅ Clean, minimal screenshots
- ✅ Consistent lighting/contrast
- ✅ Remove personal data
- ✅ High resolution source images
- ✅ Professional color scheme
- ❌ Cluttered interfaces
- ❌ Lorem ipsum text
- ❌ Development console errors
- ❌ Personal information visible