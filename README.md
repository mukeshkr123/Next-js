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

```jsx
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

```jsx
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

```jsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
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

### Navigation

**_Link_** - Only downloads the content of the target page.
Pre-fetches links that are in the viewport .
Caches pages on the client.

`<Link href={"/users/new"} className="btn btn-primary ">New User</Link>
`

### Programmatic Navigation

```jsx
"use client";

import { useRouter } from "next/navigation"; // make sure to import from necxt/navigation

const NewusersPage = () => {
  const router = useRouter();
  return (
    <div>
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        Create
      </button>
    </div>
  );
};

export default NewusersPage;
```

### Showing Loading UIs

1. The `<Suspense>` component declares a loading boundary,

```jsx
<Suspense fallback={<LoadingSpinner />}>
  {/* Async components or data fetching operations */}
  <UserTable sortOrder={sortOrder} />
</Suspense>
```

2. Using the (`loading.tsx`)

```jsx
const loading = () => {
  return <span className="loading loading-spinner loading-md"></span>;
};
```

### Handling Not Found

1. Using `loading.tsx`- Create a Loading.tsx component in your components directory.

```jsx
const Loading = () => {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
```

2. For custom notfound for different part

   -( `/users/[id]/page.tsx`)

```jsx
const UserDetailsPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div>UserDetailsPage {id}</div>;
};
```

- their custom not found page -(`/users/not-found.tsx`)

```jsx
const NotFoundPage = () => {
  return <div>This user doesn't exist</div>;
};
```

### Handling Unexpected Error

-- using (`error.jsx`) in the page directry

```jsx
"use client";
import React from "react";
interface Props {
  error: Error;
  reset: () => void;
}
const ErrorPage = ({ error, reset }: Props) => {
  console.log(error);
  return (
    <>
      <div>An unexpected error has occurred</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
```

**_we can add different (`error.tsx`) for differrent part of the component _**

## Buiding APIs

### Getting a collection of objects

(`api/users/route.tsx`) -url- `/api/users`

```jsx
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "mukesh",
    },
    {
      id: 2,
      name: "umesh",
    },
  ]);
}
```

### Getting a single object

(`api/users/[id]/route.tsx`) -url- `/api/users/:id`

```jsx
import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({
    id: 1,
    name: "mukesh",
  });
}
```

### Creating an object

(`api/users/route.tsx`) -url- `/api/users` method-

```jsx
export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 404 });
  return NextResponse.json(
    {
      id: 1,
      name: body.name,
    },
    { status: 201 }
  );
}
```

### Updating an Object

(`api/users/[id]/route.tsx`) -url- `/api/users/:id`

```jsx
//Updating a collection
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 404 });
  if (params.id > 10)
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );

  return NextResponse.json({ id: 1, name: body.name }, { status: 200 });
}
```

### Deleting an Object

(`api/users/[id]/route.tsx`) -url- `/api/users/:id`

```jsx
// deleting a object
export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );

  return NextResponse.json({});
}
```

### Validating requests with zod

`api/users/schem.ts`

```jsx
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
});

export default schema;
```

`api/users/[id]/route.tsx`

```jsx
import schema from "./schema.ts";
//Updating a collection
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });
  if (params.id > 10)
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );

  return NextResponse.json({ id: 1, name: body.name }, { status: 200 });
}
```

**This technique is used to validation of request body of any request**

## Optimisation

### Optimising images

**Using next/image Component**

```jsx
import Image from "next/image";

export default async function Home() {
  return (
    <main className="relative h-screen">
      <Image
        src={
          "https://images.unsplash.com/photo-1695653423034-d15c9f3d1328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
        }
        alt="coffee"
        // width={200}
        // height={200}
        sizes="(max-width:480px)100vw, (max-width:768px) 50vw, 33vw "
        fill
        // style={{ objectFit: "cover" }}
        className="object-cover"
        // quality={75}
        // priority
      />
    </main>
  );
}
```

**Configuring next.config**

```jsx
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
```

### Using Third-Party

**1. Create a separate component in root directory**

```jsx
import Script from "next/script";
import React from "react";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=TAG_ID" />
      <Script>
        {` window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'TAG_ID');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
```

**2. Use this in root layout.tsx**

```jsx
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";

<html lang="en" data-theme="winter">
  <GoogleAnalyticsScript />
  <body className={inter.className}>
    <Navbar />
    <main>{children}</main>
  </body>
</html>;
```

### Using Fonts

**Use this in mainlayout.tsx**

```jsx
import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

//import custom font
// const poppins = localFont({
//   src: "../public/fonts/poppins.woff",
//  variable:"--font-poppins" // custom css variable
// });

<html lang="en" data-theme="winter">
  <GoogleAnalyticsScript />
  <body className={roboto.className}>
    <Navbar />
    <main>{children}</main>
  </body>
</html>;
```

### Search Engine Optimisation

**To make seach engine friendly we must every page has a proper meta tags-**

```jsx
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
```

**To Dynamically create metadata**

```jsx
//generate metadata dynamically
export async function genrateMetadata(): Promise<Metadata> {
  const product = await fetch("");
  return {
    title: product.title,
    description: product.description,
  };
}
```
