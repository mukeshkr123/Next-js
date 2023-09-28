## NEXT JS

## Creating your first next js app;

     `npx create-next-app`

## Navigation and routing

--> navigation

    1. app -> users -> `page.tsx `   `https://localhost/3000/users`

    2. app -> users -> new -> `page.tsx`  `https://localhost/3000/users/new`

--> Routing ==> `<Link href="/">  HOME  </Link>`

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
