## NEXT JS

## Creating your first next js app;

     `npx create-next-app`

## Navigation and routing

--> navigation

    1. app -> users -> `page.tsx `   `https://localhost/3000/users`

    2. app -> users -> new -> `page.tsx`  `https://localhost/3000/users/new`

--> Routing ==> `<Link href="/">  HOME  </Link>`

## Client and Server rendering

==> Client side rendering

1. Large bundles
2. Resource intensive
3. No Seo
4. Less Secure

==> Server side rendering

1. Smaller bundles
2. Resource efficient
3. SEO
4. More secure

==> Server Components cannot
a. listen to browser events
b. access browser APIs
c. maintain state
d . Use effects

\*\* All components inside the app folder by default server components

==> To use the browser events we use `"use client"` in a separate where it is necessary

## Data fetching

==> Client

1. useState() + useEffect()
2. React Query
   -large bundles
   -Resource intensive
   -No Seo
   -Less secure
   -Extra roundtrip to server

==> Server

1. we can use fetch() for data fetching

`const res = await fetch("https://jsonplaceholder.typicode.com/users");
const users: User[] = await res.json();`

## Caching

Storing data somewhere that is faster to access ==> Data sources

1.  Memory
2.  File System
3.  Network

--> we can control caching in fetch()
`const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });`

## Static and Dynamic Rendering

==> Static Rendering --> Render at build time `npm eun build `
==> Dynamic Rendering --> Render at request time

Rendering :-

1. Client-side
2. Server-side :-
   a. static (at build time )
   b. Dynamic rendering (at request time)

## Styling Next js

## Global styles

--> Don't use .classess to style any components in `global.css` due to adding more classes it should be more complex

## CSS Modules

--> postcss automatically genrate different classnames

`/_ MyComponent.module.css _/
.myComponent {
background-color: lightblue;
padding: 20px;
}

.title {
font-size: 24px;
}
`

To use this ->
`// MyComponent.js
import React from 'react';
import styles from './MyComponent.module.css';

function MyComponent() {
return (

<div className={styles.myComponent}>
<h1 className={styles.title}>Hello, CSS Modules!</h1>
</div>
);
}

export default MyComponent;
`
