# Next Js Guide

## Creating Your First Next.js App

### Step 1: Project Initialization

Open your terminal or command prompt and navigate to the directory where you want to create your Next.js app. Then, run the following command:

```bash
npx create-next-app my-next-app
```

Replace `my-next-app` with the name you want to give to your project. This command will create a new Next.js application in a directory named after your project name.

### Step 2: Project Setup

The `create-next-app` command will guide you through the setup process and ask you some questions:

- Select your preferred package manager (npm or Yarn).
- Choose whether to use TypeScript or JavaScript.
- Set up ESLint for code linting and formatting.
- Install required dependencies.

Allow the command to complete the setup by following the prompts.

### Step 3: Starting the Development Server

Once the setup is complete, navigate to your project's directory using the terminal:

```bash
cd my-next-app
```

To start the development server and see your Next.js app in action, run the following command:

```bash
npm run dev
```

This command will start the development server, and you'll see a message indicating that your app is running at `http://localhost:3000`. Open your web browser and navigate to that URL to view your newly created Next.js app.

### Step 4: Building Your App

Now that your development server is running, you can start building your Next.js app. You can create pages, components, and styles as needed for your project. Any changes you make to your code will be automatically reflected in your local development server.

### Step 5: Deployment

When you're ready to deploy your Next.js app to a production environment, you can use various hosting platforms, such as Vercel, Netlify, or AWS. Each platform has its deployment process, so be sure to refer to their documentation for detailed instructions.

That's it! You've successfully created your first Next.js app and are ready to start building and deploying your web applications. Enjoy developing with Next.js!

## Next.js Overview

Next.js is a powerful React framework for building modern web applications with a focus on server-side rendering and efficient routing. Let's delve deeper into its key features and concepts.

### Navigation

1. **Creating Pages:** In Next.js, you can create pages by adding files to the `pages` directory. For example, to create a page at `https://localhost:3000/users`, you can create a `page.tsx` file inside the `pages/users` directory.

2. **Nested Pages:** For nested routes like `https://localhost:3000/users/new`, you can create another `page.tsx` file inside the `pages/users/new` directory. Next.js automatically handles the routing.

### Routing

Routing in Next.js is straightforward. To create links to different pages, you can use the `<Link>` component, as shown below:

```jsx
import Link from "next/link";

<Link href="/">HOME</Link>;
```

This component allows you to define navigation links within your application easily.

### Client-side Rendering (CSR)

Client-side rendering (CSR) is a rendering approach where the initial HTML page is minimal, and the majority of content is loaded and rendered on the client-side. However, CSR has some downsides:

1. **Large Bundles:** CSR can result in large JavaScript bundles, leading to slower page loads.

2. **Resource-Intensive:** It can be resource-intensive as it relies on the client's device to handle rendering.

3. **Limited SEO:** SEO optimization can be challenging since search engines may have difficulty indexing client-rendered content.

4. **Security Concerns:** It can be less secure due to potential client-side vulnerabilities.

### Server-side Rendering (SSR)

Server-side rendering (SSR) is a rendering approach where the server generates the HTML for each page before sending it to the client. SSR offers several benefits:

1. **Smaller Bundles:** SSR typically results in smaller JavaScript bundles, leading to faster page loads.

2. **Resource-Efficient:** It offloads rendering to the server, reducing the client's workload.

3. **SEO-Friendly:** SSR is inherently SEO-friendly since the server provides fully rendered HTML content to search engines.

4. **Enhanced Security:** SSR can be more secure since sensitive logic remains on the server.

However, server components in Next.js cannot perform the following client-side tasks:

- Listen to browser events.
- Access browser APIs.
- Maintain state.
- Use effects.

To enable client-side functionality in specific parts of your application, you can use `"use client"` in separate files.

### Client-side Data Fetching

Client-side data fetching options include:

1. **`useState()` + `useEffect()`:** You can use React's built-in state management and lifecycle methods for data fetching on the client side.

2. **React Query:** While powerful, React Query can lead to larger bundles, be resource-intensive, affect SEO due to extra roundtrips to the server, and introduce security concerns if not configured correctly.

### Server-side Data Fetching

Server-side data fetching can be achieved using the `fetch()` function, making API requests on the server before rendering the page. This approach ensures that the data is available before the initial render.

```javascript
const res = await fetch("https://jsonplaceholder.typicode.com/users");
const users = await res.json();
```

### Caching

Caching involves storing data in a location that is faster to access, such as memory, the file system, or a network cache. You can control caching in the `fetch()` function by specifying caching options, such as `revalidate`.

```javascript
const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  next: { revalidate: 10 },
});
```

### Static Rendering

Static rendering is the process of pre-rendering pages at build time using the `npm run build` command. This generates static HTML files for each page, resulting in fast and cacheable content.

### Dynamic Rendering

Dynamic rendering, on the other hand, involves rendering pages at request time. You have two options for dynamic rendering:

1. **Client-side Rendering:** Content is loaded and rendered on the client side, which can be resource-intensive.

2. **Server-side Rendering (SSR):**
   - **Static SSR:** Content is generated at build time and served statically.
   - **Dynamic SSR:** Content is generated at request time on the server.

These rendering options allow you to choose the most suitable approach based on your application's requirements and performance considerations.

Next.js is a versatile framework that empowers developers to create efficient and SEO-friendly web applications while providing flexibility in choosing rendering strategies. Understanding these concepts will help you make informed decisions when building with Next.js.

## Styling in Next.js

Styling is a crucial aspect of building modern web applications. Next.js offers various approaches for styling your components. Let's explore how to manage styles, including using CSS Modules, integrating Tailwind CSS, and enhancing it with the DaisyUI plugin.

### Global Styles

Avoid using global styles (defined in a `global.css` file) to style individual components in your Next.js application. Global styles can lead to complexity, as they affect the entire application, making it challenging to manage styles for individual components.

### Using CSS Modules in Next.js

CSS Modules are a powerful way to manage styles in Next.js applications. They provide scoping and modularity by automatically generating unique class names for each CSS module. Here's how to use CSS Modules in your Next.js project:

1. **Create a CSS Module**:

   Start by creating a `.module.css` file for the styles of your component. For example, if you have a component named `MyComponent`, you can create a corresponding `MyComponent.module.css` file.

   ```css
   /* MyComponent.module.css */
   .title {
     font-size: 24px;
     color: #333;
   }
   ```

2. **Use it in MyComponent**:

   Import the styles from your CSS Module and apply them to your component elements. The generated class names will be scoped to the component.

   ```jsx
   import styles from "./MyComponent.module.css";

   const MyComponent = () => {
     return <div className={styles.title}>Styled Title</div>;
   };
   ```

By following this pattern, you can ensure that styles are encapsulated within the component, preventing conflicts with styles from other components.

### Using Tailwind CSS in Next.js

[Tailwind CSS](https://tailwindcss.com/) is a popular utility-first CSS framework that can be seamlessly integrated into Next.js projects. To use Tailwind CSS in your Next.js application, follow these steps:

1. **Install Tailwind CSS**:

   Install Tailwind CSS and its dependencies using npm or Yarn:

   ```bash
   npm install tailwindcss postcss autoprefixer
   ```

   Initialize Tailwind CSS configuration files:

   ```bash
   npx tailwindcss init -p
   ```

2. **Configure CSS**:

   In your project's `tailwind.config.js` file, customize your styles by adding or modifying configuration options. Tailwind CSS provides extensive customization options to tailor your styles according to your project's needs.

3. **Create Utility Classes**:

   In your JSX files, you can apply Tailwind CSS utility classes directly to your elements to style them. For example:

   ```jsx
   const MyComponent = () => {
     return (
       <div className="bg-blue-500 text-white p-4">
         This is a Tailwind CSS component
       </div>
     );
   };
   ```

4. **Purge Unused Styles**:

   In production builds, it's essential to optimize the bundle size by purging unused styles. Tailwind CSS has built-in support for this. Ensure that your Next.js configuration is set up to enable CSS purging.

5. **Customization and Theming**:

   Tailwind CSS allows for easy theming and customization. You can define your custom styles, colors, and more in the configuration file to match your project's design.

### Using DaisyUI with Tailwind CSS

[DaisyUI](https://daisyui.com/) is a plugin that enhances Tailwind CSS by providing additional utility classes and components. To integrate DaisyUI into your Tailwind CSS project within Next.js, follow these steps:

1. **Install DaisyUI**:

   Use npm or Yarn to install the DaisyUI plugin as a development dependency:

   ```bash
   npm install -D daisyui@latest
   ```

2. **Configure Tailwind CSS**:

   Open your project's `tailwind.config.js` or `tailwind.config.ts` file, and add DaisyUI as a plugin to the `plugins` array:

   ```javascript
   // tailwind.config.js or tailwind.config.ts

   module.exports = {
     // ... other configuration options

     plugins: [require("daisyui")],
   };
   ```

   Ensure that DaisyUI is listed as a plugin within the `plugins` array.

By integrating Tailwind CSS and optionally enhancing it with the DaisyUI plugin into your Next.js application, you can rapidly build stylish and responsive user interfaces while benefiting from its utility-first approach and extensive customization options.

## Routing and Navigation in Next.js

Routing and navigation are essential aspects of building web applications. Next.js provides a powerful routing system that allows you to create dynamic routes and handle navigation seamlessly. Let's explore routing and navigation in Next.js in detail.

### Routing Overview

In Next.js, routing is managed through a special file structure. Here are some key files and concepts related to routing:

1. **`page.tsx`**: Represents a page route. For example, `page.tsx` corresponds to the root route (`/`).

2. **`layout.tsx`**: Defines the layout for your pages, providing a common structure for different parts of your application.

3. **`loading.tsx`**: Used to display loading indicators or animations while data is being fetched.

4. **`route.tsx`**: Represents a specific route in your application.

5. **`not-found.tsx`**: Handles 404 errors when a route is not found.

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

To handle catch-all segments in your routes, such as `/products/grocery/dairy/milk`, you can create a file like `/products/[[...slug]]/page.tsx` and access the `slug` parameter:

```jsx
interface Props {
  params: { slug: string[] };
}

const ProductPage = ({ params: { slug } }: Props) => {
  return <div>ProductPage - {slug}</div>;
};
```

This approach allows you to capture and work with multiple segments of the URL dynamically.

### Accessing Query Parameters

To access query parameters from the URL, such as `sortOrder`, you can use the following code:

```javascript
const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  // Use sortOrder here
};
```

This allows you to retrieve and utilize query parameters within your components or pages.

### Layouts

Layouts are essential for providing a consistent structure to different parts of your application. In Next.js, you can define layouts and reuse them across multiple pages. For example, you can create an admin layout like this:

**_Admin Layout_** (`/admin/layout.tsx`):

```jsx
const AdminLayout = ({ children }: Props) => (
  <div className="flex">
    <aside className="bg-slate-400 p-5 m-5">Admin Side Bar</aside>
    <div>{children}</div>
  </div>
);
```

You can then use this layout in an admin page:

**_Admin Page_** (`/admin/page.tsx`):

```jsx
const AdminHomePage = () => <div>AdminHomePage</div>;
```

This way, you can maintain a consistent structure for admin-related pages.

### Navigation

Next.js provides the `<Link>` component for declarative navigation within your application. It offers several advantages, including:

- Efficiently downloads the content of the target page.
- Prefetches links in the viewport.
- Caches pages on the client for faster navigation.

Example usage of the `<Link>` component:

```jsx
<Link href="/users/new" className="btn btn-primary">
  New User
</Link>
```

### Programmatic Navigation

You can also perform programmatic navigation in Next.js using the `useRouter` hook. Here's an example of programmatic navigation on a button click:

```jsx
"use client";

import { useRouter } from "next/navigation"; // Make sure to import from next/navigation

const NewUsersPage = () => {
  const router = useRouter();

  return (
    <div>
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        Create
      </button>
    </div>
  );
};

export default NewUsersPage;
```

This code snippet uses the `router.push` method to navigate to the `/users` page when the button is clicked.

### Showing Loading UIs

To show loading UIs while fetching data or rendering components, you can use the `<Suspense>` component. It defines a loading boundary and allows you to display loading indicators or components while asynchronous operations are in progress.

Example usage of `<Suspense>`:

```jsx
<Suspense fallback={<LoadingSpinner />}>
  {/* Async components or data fetching operations */}
  <UserTable sortOrder={sortOrder} />
</Suspense>
```

You can create a `LoadingSpinner` component to provide a visually appealing loading indicator.

### Handling Not Found

Next.js makes it easy to handle 404 errors when a route is not found. You can create custom not-found pages for different parts of your application. For example:

- In a specific page file (`/users/[id]/page.tsx`), you can check for a condition and trigger a not-found page:

  ```jsx
  const UserDetailsPage = ({ params: { id } }: Props) => {
    if (id > 10) notFound(); // Custom not-found logic
    return <div>UserDetailsPage {id}</div>;
  };
  ```

- You can create a custom not-found page (`/users/not-found.tsx`) to handle not-found errors:

  ```jsx
  const NotFoundPage = () => {
    return <div>This user doesn't exist</div>;
  };
  ```

This approach allows you to customize not-found pages based on your application's needs.

### Handling Unexpected Errors

To handle unexpected errors in your Next.js application, you can create an `error.tsx` component in the page directory. This component can display an error message and provide a retry option for the user.

Here's an example of an `error.tsx` component:

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

You can use this component to display error messages and allow users to retry actions that resulted in errors.

By understanding and implementing these routing and navigation concepts in Next.js, you can create dynamic and user-friendly web applications with ease.

## Building APIs in Next.js

Building APIs is a crucial part of many web applications. Next.js makes it easy to create APIs by organizing your API routes within your project structure. Let's explore how to create different types of API routes in Next.js.

### Getting a Collection of Objects

To create an API route that fetches a collection of objects, you can create a file like `api/users/route.tsx`. This route can respond to requests to `/api/users`.

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

This code snippet defines a `GET` route that returns an array of user objects as JSON.

### Getting a Single Object

To fetch a single object by ID, create an API route with a parameter. For example, you can create `api/users/[id]/route.tsx` to respond to requests to `/api/users/:id`.

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

This route handles requests with a dynamic `id` parameter and returns the corresponding user object.

### Creating an Object

To create an object, implement a `POST` request handler in your API route. For example, `api/users/route.tsx` can handle `POST` requests to `/api/users`.

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

This code snippet parses the JSON request body, validates it, and responds with the created object.

### Updating an Object

To update an object, implement a `PUT` request handler in your API route. For example, `api/users/[id]/route.tsx` can handle `PUT` requests to `/api/users/:id`.

```jsx
// Updating a collection
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

This route handles `PUT` requests, updates the object, and responds with the updated object.

### Deleting an Object

To delete an object, create a `DELETE` request handler in your API route. For example, `api/users/[id]/route.tsx` can handle `DELETE` requests to `/api/users/:id`.

```jsx
// Deleting an object
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

This code snippet handles `DELETE` requests and responds with an empty JSON object upon successful deletion.

### Validating Requests with Zod

You can validate request bodies with Zod to ensure that incoming data meets specific criteria. First, create a validation schema in a separate file, such as `api/users/schema.ts`.

```jsx
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
});

export default schema;
```

Then, in your API route, import the validation schema and use it to validate incoming data before processing the request.

```jsx
import schema from "./schema.ts";
// Updating a collection
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

This technique helps ensure that the request body adheres to specified validation rules.

By following these examples and techniques, you can build robust APIs in Next.js that handle various CRUD (Create, Read, Update, Delete) operations and perform input validation when necessary.

## Next.js Application Optimization

### Table of Contents

- [Optimizing Images](#optimizing-images)
- [Using Third-Party Scripts](#using-third-party-scripts)
- [Loading Custom Fonts](#loading-custom-fonts)
- [Search Engine Optimization (SEO)](#search-engine-optimization-seo)
- [Lazy Loading Components and Libraries](#lazy-loading-components-and-libraries)

### Optimizing Images

### Using the `next/image` Component

The `next/image` component is a powerful tool for optimizing images in your Next.js application. It provides features like lazy loading, responsive images, and automatic optimization. Here's how to use it:

```jsx
import Image from "next/image";

<main className="relative h-screen">
  <Image
    src="image-url.jpg"
    alt="Image Alt Text"
    // Other attributes like width, height, sizes, and more
  />
</main>;
```

### Configuring `next.config.js`

To optimize remote images, configure your `next.config.js` to specify remote image patterns. This allows Next.js to optimize images from specific domains. Example:

```javascript
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

### Using Third-Party Scripts

### Integrating Google Analytics

You can integrate Google Analytics into your Next.js application using the `next/script` component. Create a separate component to include the Google Analytics script and add it to your layout:

```jsx
import Script from "next/script";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=YOUR_TAG_ID"
      />
      <Script>{` // Google Analytics initialization code`}</Script>
    </>
  );
};
```

Include this component in your root layout:

```jsx
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";

<html lang="en" data-theme="winter">
  <GoogleAnalyticsScript />
  <body className={inter.className}>{/* Your content */}</body>
</html>;
```

### Loading Custom Fonts

#### Using Google Fonts

Load custom fonts in your Next.js application using the `next/font/google` package. Here's an example with the Inter and Roboto fonts:

```jsx
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

<html lang="en" data-theme="winter">
  {/* Your font styles */}
</html>;
```

### Search Engine Optimization (SEO)

### Dynamic Metadata Generation

To make your pages search engine-friendly, ensure that each page has proper meta tags. You can generate metadata dynamically using functions like `genrateMetadata()`. Example:

```jsx
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function genrateMetadata(): Promise<Metadata> {
  const product = await fetch("..."); // Fetch data dynamically
  return {
    title: product.title,
    description: product.description,
  };
}
```

### Lazy Loading Components and Libraries

### Lazy Loading Heavy Components

Use the `next/dynamic` package to lazy load heavy components. Disable server-side rendering (SSR) for these components if needed:

```jsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading....</p>,
});
```

### Lazy Loading Libraries

You can also lazy load libraries like lodash when they are needed:

```jsx
<button
  onClick={async () => {
    // Lazy load the lodash library
    const _ = (await import("lodash")).default;

    // Perform operations with lodash
  }}
>
  Show
</button>
```

---

## Database Integration with Prisma

Prisma is a powerful database toolkit and Object-Relational Mapping (ORM) tool that makes it easy to work with databases in your Node.js applications. This guide will walk you through setting up Prisma with different database engines: MySQL, PostgreSQL, and MongoDB.

### Database Engines

1. MySQL
2. PostgreSQL
3. MongoDB

### Setting Up Prisma

### Step 1: Install Prisma

Install Prisma by running the following command:

```bash
npm install prisma
```

### Step 2: Initialize Prisma

Run the following command to initialize Prisma in your project:

```bash
npx prisma init
```

This will create a `prisma` folder with a `schema.prisma` file and generate a `.env` file containing the `DATABASE_URL` connection string for PostgreSQL.

### Step 3: Configure the Database

#### PostgreSQL Configuration

In the `.env` file, set the `DATABASE_URL` to your PostgreSQL connection string:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/your-database"
```

#### MySQL Configuration

In the `.env` file, set the `DATABASE_URL` to your MySQL connection string:

```env
DATABASE_URL="mysql://root:password@localhost:3306/your-database"
```

### Defining Models

Define your data models in the `schema.prisma` file. For example:

```prisma
model User {
  id        Int     @id @default(autoincrement())
  email     String  @unique
  name      String
  followers Int     @default(0)
  isActive  Boolean @default(true)
}
```

### Creating Migrations

To create database migrations for SQL databases (MySQL or PostgreSQL), run the following command:

```bash
npx prisma migrate dev
```

### Creating a Prisma Client

Create a `client.ts` file in the root directory of your project to instantiate the Prisma client. This ensures a single instance of the client is used throughout your application:

```typescript
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

### Getting Data

### Get All Users

To retrieve all users, use the following code in `api/users/route.ts`:

```typescript
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}
```

### Get a Single User

To retrieve a single user by ID, use the following code in `api/users/[id]/route.ts`:

```typescript
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}
```

### Creating Data

To create a single user by ID, use the following code in `api/users/[id]/route.ts`:

```typescript
import prisma from "@/prisma/client";

//Create an object
export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 404 });

  const userExist = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (userExist)
    return NextResponse.json(
      { error: " Username already exists" },
      { status: 400 }
    );

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}
```

### Updating a user

To update a single user by ID, use the following code in `api/users/[id]/route.ts`:

```typescript
//Updating a collection
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!user)
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );

  const updateUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updateUser);
}
```

### Deleting a User

To delete a single user by ID, use the following code in `api/users/[id]/route.ts`:

```typescript
// deleting a object
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user)
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );

  await prisma.user.delete({
    where: { id: user.id },
  });

  return NextResponse.json({});
}
```

---

## Uploading Files with Cloudinary

### Choosing a Cloud Platform

When it comes to uploading and managing files in your web application, several cloud platforms offer robust solutions. Here are a few options to consider:

1. **Amazon S3**
2. **Google Cloud**
3. **Microsoft Azure**
4. **Cloudinary**

This guide will focus on setting up file uploading with **Cloudinary**, a popular cloud-based media management platform.

### Setting up Cloudinary

To get started with Cloudinary, follow these steps:

1. **Sign Up for Cloudinary**

   Sign up for a Cloudinary account at [Cloudinary's website](https://cloudinary.com).

2. **Install `next-cloudinary` Package**

   Install the `next-cloudinary` package in your project using npm or yarn:

   ```bash
   npm install next-cloudinary
   ```

3. **Configure Your Environment Variables**

   In your project's `.env` file, add your Cloudinary cloud name as follows:

   ```env
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
   ```

### Uploading Files

Create a component or page for file uploads in your application:

```jsx
import { CldUploadWidget } from "next-cloudinary";
import React from "react";

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="s0jas6ry">
      {({ open }) => (
        <button className="btn btn-primary" onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadPage;
```

### Displaying Uploaded Images

To display uploaded images, you can use the following code:

```jsx
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="A Coffee Image"
        />
      )}
      <CldUploadWidget
        uploadPreset="s0jas6ry"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
```

## Sending Emails

### Setting up React Email

install the package

`npm i react-email @react-email/components`

create a script in package.json file

```jsx
 "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "preview-email": "email dev -p 3030"
  },
```

create a emails folder in root directory of app
and create a basic email template

```jsx
import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTempalte = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome abroad! </Preview>
      <Body>
        <Container>
          <Text> Hello {name}</Text>
          <Link href="https://www.google.com">www.google.com</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTempalte;
```

## Previewing Emails

run the command `npm run preview-email`

befor running the above following command
add this on .gitignore file

```
# react-email
.react-email/
```

### Styling Emails

```jsx
import React from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTempalte = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome abroad! </Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl"> Hello {name}</Text>
            <Link href="https://www.google.com">www.google.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body = {
  background: "#fff",
};

const heading = {
  fontSize: "32px",
};

export default WelcomeTempalte;
```
