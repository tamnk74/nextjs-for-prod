declare namespace NodeJS {
  interface ProcessEnv {
    // Existing environment variables
    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
    CLERK_SECRET_KEY: string;
    XATA_API_KET: string;

    // Cloudflare Turnstile
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: string;
    TURNSTILE_SECRET_KEY: string;
  }
}
