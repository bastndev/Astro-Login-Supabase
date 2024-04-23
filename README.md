# Astro Auth + Supabase and React 

<img width="1424" src="public/images/github/screenshot.jpg">

1. Download the project from `GitHub` and in the terminal type `npm install` 
```
npm install
```

2. create environment Variables `.env` important create private `.env.local` 
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
4.1. Add this code in `src/env.d.ts`
```sh
interface ImportMetaEnv {
  readonly SUPABASE_URL: string
  readonly SUPABASE_ANON_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

5. Create new folder `/lib` in /src and file `supabase.ts` src/lib/supabase.ts
```sh
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY,
);
```
6. Create project in [google cloud](https://cloud.google.com/) and [github dev](https://github.com/bastndev)

7. Code - Documentation [Astro.js](https://docs.astro.build/en/guides/backend/supabase/)

8. add this is code in buttons for `login` and `exit`
```
  <form action="/api/auth/login" method="post">

  <form action="/api/auth/logout">
```

> [!IMPORTANT]
> Change or Add in: `astro.config.mjs` output: 'server',

## Technology Used

| Technology  | Purpose               | Link                                                 |
|-------------|-----------------------|------------------------------------------------------|
| Astro       | Astro Doc Supabase    | [Docs](https://docs.astro.build/en/getting-started/) |
| TailwindCSS | Styling               | [Docs](https://tailwindcss.com/)                     |
| React       | Library               | [Docs](https://react.dev/)                           |
| Supabase    | Database/storage/auth | [Docs](https://supabase.com/)                        |
| Google      | Google cloud          | [Docs](https://supabase.com/)                        |
| GitHub      | Github Dev            | [Docs](https://supabase.com/)                        |

[X/Twitter](https://twitter.com/bastndev) - [Linkedin](https://www.linkedin.com/in/bastndev/)
