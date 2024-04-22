# Astro Auth + Supabase and React 

> How to add login with Supabase for your project

1. Download the project from `GitHub` and in the terminal type `npm install` 
```
npm install
```

1.1. Add this code in `src/env.d.ts`
```sh
interface ImportMetaEnv {
  readonly SUPABASE_URL: string
  readonly SUPABASE_ANON_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

2. create `.env` important create private `.env.local` 
```sh
SUPABASE_URL=YOUR_SUPABASE_URL
SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

3. Create new project in [Supabase](https://supabase.com/dashboard/sign-in?returnTo=%2Fprojects)
> NOTE: replace YOUR_SUPABASE_URL and YOUR_SUPABASE_ANON_KEY in `.env`

4. install supabase in terminal with your project 
```
npm install @supabase/supabase-js
```

5. Create new folder `lib` adn file `supabase.ts` src/lib/supabase.ts
```sh
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY,
);
```
6. Create project in [google cloud](https://cloud.google.com/) and [github dev](https://github.com/bastndev)

7. add links to `supabase` and `ACTIVE` google and github 

8. Documentation [Astro.js](https://docs.astro.build/en/guides/backend/supabase/)

9. change 
```
  <form action="/api/auth/login" method="post">
```