# Next.js

## Creating Your First Next.js App

To create your first Next.js app, you can use the following command:

```bash
npx create-next-app
```

## NEXT js overview

### Navigation

1. To create a page at `https://localhost/3000/users`, you can create a file named `page.tsx` inside the `app -> users` directory.

2. For a new user page at `https://localhost/3000/users/new`, create another `page.tsx` file inside the `app -> users -> new` directory.

### Routing

To implement routing, you can use the `<Link>` component like this:

```jsx
<Link href="/">HOME</Link>
```

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

### Caching

Caching involves storing data somewhere that is faster to access. Data sources can include memory, the file system, or the network. You can control caching in the `fetch()` function like this:

```javascript
const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  next: { revalidate: 10 },
});
```

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

### Using CSS Modules in Next.js

CSS Modules are a powerful way to scope and modularize your styles in Next.js applications. They automatically generate unique class names, ensuring that your styles don't clash with other components.

To use CSS Modules in your Next.js project:

1. **Create a CSS Module**:

   Start by creating a `.module.css` file for your component's styles. For example, if you have a component named `MyComponent`, you can create a corresponding `MyComponent.module.css` file.

2. **Use it in MyComponent**:

   ```jsx
   import styles from "./MyComponent.module.css";
   <div className={styles.title}>
   ```

### Using Tailwind CSS

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

## Routing and Navigation in Next.js

### Routing Overview

In Next.js, routing is handled through a special file structure. Here are some key files and concepts:

1. **`page.tsx`**: This represents a page route. For example, `page.tsx` corresponds to the root route (`/`).

2. **`layout.tsx`**: This file defines the layout for your pages, providing a common structure for different parts of your application.

3. **`loading.tsx`**: This file can be used to display loading indicators or animations while data is being fetched.

4. **`route.tsx`**: This file can be used to represent a specific route in your application.

5. **`not-found.tsx`**: This file is used to handle 404 errors when a route is not found.

### Dynamic Routes

Next.js allows you to create dynamic routes by defining routes with parameters. Here's how you can set up dynamic routes:

1. For `/users/:id`:

   Create a file like `/users/[id]/page.tsx` and access the `id` parameter like this:

   ```jsx
   const UserDetailsPage = ({ params: { id } }: Props) => {
     return <div>UserDetailsPage {id}</div>;
   };
   ```

2. For `/users/:id/photos/:photoid`:

   Create a file like `/users/[id]/photos/[photoid]/page.tsx` and access the `id` and `photoId` parameters:

   ```jsx
   const PhotoPage = ({ params: { id, photoId } }: Props) => {
     return (
       <div>
         PhotoPage {id} / {photoId}
       </div>
     );
   };
   ```

These dynamic routes allow you to create pages that respond to different URL parameters, making your Next.js application flexible and data-driven.

### Catch-ALL-Segments

for `/products/grocery/dairy/milk`

create `/products/[[...slug]]/page.tsx`

and access slug

```
interface Props {
  params: { slug: string[] };
}
const ProductPage = ({ params: { slug } }: Props) => {
  return <div>ProductPage - {slug}</div>;
};
```

### Access Query String

To access `sortOrder` from the URL, use this code:

```javascript
const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  // Use sortOrder here
};
```

### Layouts

**_Admin Layout_** (`/admin/layout.tsx`)

```
const AdminLayout = ({ children }: Props) => (
  <div className="flex">
    <aside className="bg-slate-400 p-5 m-5">Admin Side Bar</aside>
    <div>{children}</div>
  </div>
);
```

**_Admin Page_** (`/admin/page.tsx`)

```
const AdminHomePage = () => <div>AdminHomePage</div>;
```

**Main_Page_Navbar** (`/layout.tsx`)

```
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

```
