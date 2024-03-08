# Next.js - Official Learn Course

- [Next.js - Official Learn Course](#nextjs---official-learn-course)
  - [Chapters](#chapters)
  - [Notes](#notes)
    - [Chapter 01 - Getting Started](#chapter-01---getting-started)
    - [Chapter 02 - CSS Styling](#chapter-02---css-styling)
    - [Chapter 03 - Optimizing Fonts and Images](#chapter-03---optimizing-fonts-and-images)

## Chapters

- [x] ~~_1. Getting Started_~~ [2024-03-08]
- [x] ~~_2. CSS Styling_~~ [2024-03-08]
- [x] ~~_3. Optimizing Fonts and Images_~~ [2024-03-08]
- [ ] 4.  Creating Fonts and Images
- [ ] 5.  Navigating Between Pages
- [ ] 6.  Setting Up Your Database
- [ ] 7.  Fetching Data
- [ ] 8.  Static and Dynamic Rendering
- [ ] 9.  Streaming
- [ ] 10. Partial Prerendering (Optional)
- [ ] 11. Adding Search and Pagination
- [ ] 12. Mutating Data
- [ ] 13. Handling Errors
- [ ] 14. Improving Accessibility
- [ ] 15. Adding Authentication
- [ ] 16. Adding Metadata

## Notes

### Chapter 01 - Getting Started

- `pnpx create-next-app@latest` - starts interactive install wizard

### Chapter 02 - CSS Styling

- Next.js supports both Tailwind and CSS modules (`component.module.css`)

### Chapter 03 - Optimizing Fonts and Images

- Optimize fonts with `next/font/google` module; may require setting `subsets` and/or `weight` properties
- Optimize images with `next/image` `<Image />` component. Explicitly set `width` and `height` attributes to minimize _CLS (Cumulative Layout Shift)_. Set `alt` attribute to improve a11y.
