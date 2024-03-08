# Next.js - Official Learn Course

- [Next.js - Official Learn Course](#nextjs---official-learn-course)
  - [Chapters](#chapters)
  - [Notes](#notes)
    - [Chapter 01 - Getting Started](#chapter-01---getting-started)
    - [Chapter 02 - CSS Styling](#chapter-02---css-styling)
    - [Chapter 03 - Optimizing Fonts and Images](#chapter-03---optimizing-fonts-and-images)
    - [Chapter 04 - Creating Layouts and Pages](#chapter-04---creating-layouts-and-pages)
    - [Chapter 05 - Navigating Between Pages](#chapter-05---navigating-between-pages)
    - [Chapter 06 - Setting Up Your Database](#chapter-06---setting-up-your-database)
    - [Chapter 07 - Fetching Data](#chapter-07---fetching-data)

## Chapters

- [x] ~~_1. Getting Started_~~ [2024-03-08]
- [x] ~~_2. CSS Styling_~~ [2024-03-08]
- [x] ~~_3. Optimizing Fonts and Images_~~ [2024-03-08]
- [x] ~~_4. Creating Layouts and Pages_~~ [2024-03-08]
- [x] ~~_5. Navigating Between Pages_~~ [2024-03-08]
- [x] ~~_6. Setting Up Your Database_~~ [2024-03-08]
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
- Optimize images with `next/image` `<Image />` component. Explicitly set `width` and `height` attributes to minimize **CLS (Cumulative Layout Shift)**. Set `alt` attribute to improve a11y.

### Chapter 04 - Creating Layouts and Pages

- Next.js uses **file-system routing**
- Useful snippet for creating Next page components:
  - ```json
      "reactPageWithChildren": {
      "prefix": "rp",
      "body": [
        "import { ReactNode } from 'react'",
        "",
        "type Props = {",
        "\tchildren: ReactNode",
        "}",
        "",
        "export default async function ${2:${TM_FILENAME_BASE/^(.*)/${1:/pascalcase}/}}({ children }: Props){",
        "$0",
        "return <div>${2:${TM_FILENAME_BASE}}</div>",
        "}"
      ],
      "description": "Next page component w/ children"
    },
    ```
- Use settings to prefer non-relative imports:
  - `"typescript.preferences.importModuleSpecifier": "non-relative"`
  - ```tsx
    import SideNav from '@/app/ui/dashboard/sidenav';
    ```
- **Layout** components allow for **partial rendering** of views (i.e. layout components don't rerender when navigating sub-routes only the page specific content changes. The layout render is shared across all its sub-pages/layouts.)
- **RootLayout** (`/app/layout.tsx)`) is a required component in Next.js and serves as the project entry point.

### Chapter 05 - Navigating Between Pages

- `<Link/>` component enables **client-side navigation**. Linked content is lazy loaded and prefetched in the background upon entering viewport.
- `usePathname` to gain access to the _pathname_ (route path following the top-level domain)

### Chapter 06 - Setting Up Your Database

- `@vercel/postgres` package to setup project with vercel postgres service

### Chapter 07 - Fetching Data

- **Route Handlers** are used to create API endpoints
  - NOTE: _`route.ts` cannot be on the same level as a `page.ts`_
- **React Server Components** support promises, enabling simple solutions for async task like data fetching.
- Remember to use `Promise.all` or `Promise.allSettled` to avoid unnecessary **waterfall requests**
