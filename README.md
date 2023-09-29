# Next.js

## Creating Your First Next.js App

To create your first Next.js app, you can use the following command:

```bash
npx create-next-app
```

## Navigation and Routing

### Navigation

1. To create a page at `https://localhost/3000/users`, you can create a file named `page.tsx` inside the `app -> users` directory.

2. For a new user page at `https://localhost/3000/users/new`, create another `page.tsx` file inside the `app -> users -> new` directory.

### Routing

To implement routing, you can use the `<Link>` component like this:

```jsx
<Link href="/">HOME</Link>
```

## Client and Server Rendering

### Client-side Rendering

Client-side rendering has the following characteristics:

1. Large bundles.
2. Resource-intensive.
3. No SEO.
4. Less secure.

### Server-side Rendering

Server-side rendering has the following benefits:

1. Smaller bundles.
2. Resource-efficient.
3. SEO-friendly.
4. More secure.

Server components cannot:

- Listen to browser events.
- Access browser APIs.
- Maintain state.
- Use effects.

All components inside the `app` folder by default are server components. To use browser events, you can use `"use client"` in a separate file where it is necessary.

## Data Fetching

### Client-side Data Fetching

Client-side data fetching options include:

1. `useState()` + `useEffect()`.
2. React Query (Note: This can lead to large bundles, be resource-intensive, affect SEO, and be less secure with an extra roundtrip to the server).

### Server-side Data Fetching

Server-side data fetching can be done using `fetch()`:

```javascript
const res = await fetch("https://jsonplaceholder.typicode.com/users");
const users = await res.json();
```

## Caching

Caching involves storing data somewhere that is faster to access. Data sources can include memory, the file system, or the network. You can control caching in the `fetch()` function like this:

```javascript
const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  next: { revalidate: 10 },
});
```

## Static and Dynamic Rendering

### Static Rendering

Static rendering involves rendering at build time using `npm run build`.

### Dynamic Rendering

Dynamic rendering involves rendering at request time.

Rendering options:

1. Client-side rendering.
2. Server-side rendering:
   - Static (at build time).
   - Dynamic rendering (at request time).

## Styling in Next.js

### Global Styles

Avoid using global styles to style components in `global.css` to prevent complexity. Consider using CSS Modules for better scoping and modularity.

# Using CSS Modules in Next.js

CSS Modules are a powerful way to scope and modularize your styles in Next.js applications. They automatically generate unique class names, ensuring that your styles don't clash with other components.

To use CSS Modules in your Next.js project:

1. **Create a CSS Module**:

   Start by creating a `.module.css` file for your component's styles. For example, if you have a component named `MyComponent`, you can create a corresponding `MyComponent.module.css` file.

2. **Use it in MyComponent**:

   ```jsx
   import styles from "./MyComponent.module.css";
   <div className={styles.title}>
   ```

## Using Tailwind CSS

### Using daisyUI

To enhance Tailwind CSS, you can add the DaisyUI plugin:

1. Install DaisyUI:

   ```bash
   npm i -D daisyui@latest
   ```

2. Add the plugin to your `tailwind.config.ts` file:

   ```javascript
   plugins: [require("daisyui")];
   ```

This configuration will help make your styles beautiful and optimized.
