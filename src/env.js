import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_FIRESTORE_API_KEY: z.string(),
    NEXT_PUBLIC_FIRESTORE_AUTH_DOMAIN: z.string(),
    NEXT_PUBLIC_FIRESTORE_PROJECT_ID: z.string(),
    NEXT_PUBLIC_FIRESTORE_STORAGE_BUCKET: z.string(),
    NEXT_PUBLIC_FIRESTORE_MESSAGING_SENDER_ID: z.string(),
    NEXT_PUBLIC_FIRESTORE_APP_ID: z.string(),
    NEXT_PUBLIC_FIRESTORE_MEASUREMENT_ID: z.string(),
    NEXT_PUBLIC_ONESIGNAL_APP_ID: z.string(),
    NEXT_PUBLIC_ONESIGNAL_REST_API_KEY: z.string(),
    NEXT_PUBLIC_ONESIGNAL_DEFAULT_ANDROID_CHANNEL_ID: z.string(),
    NEXT_PUBLIC_ONESIGNAL_ANNOUNCEMENT_CHANNEL_ID: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_FIRESTORE_API_KEY: process.env.NEXT_PUBLIC_FIRESTORE_API_KEY,
    NEXT_PUBLIC_FIRESTORE_AUTH_DOMAIN:
      process.env.NEXT_PUBLIC_FIRESTORE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIRESTORE_PROJECT_ID:
      process.env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID,
    NEXT_PUBLIC_FIRESTORE_STORAGE_BUCKET:
      process.env.NEXT_PUBLIC_FIRESTORE_STORAGE_BUCKET,
    NEXT_PUBLIC_FIRESTORE_MESSAGING_SENDER_ID:
      process.env.NEXT_PUBLIC_FIRESTORE_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_FIRESTORE_APP_ID: process.env.NEXT_PUBLIC_FIRESTORE_APP_ID,
    NEXT_PUBLIC_FIRESTORE_MEASUREMENT_ID:
      process.env.NEXT_PUBLIC_FIRESTORE_MEASUREMENT_ID,
    NEXT_PUBLIC_ONESIGNAL_APP_ID: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID,
    NEXT_PUBLIC_ONESIGNAL_REST_API_KEY:
      process.env.NEXT_PUBLIC_ONESIGNAL_REST_API_KEY,
    NEXT_PUBLIC_ONESIGNAL_DEFAULT_ANDROID_CHANNEL_ID:
      process.env.NEXT_PUBLIC_ONESIGNAL_DEFAULT_ANDROID_CHANNEL_ID,
    NEXT_PUBLIC_ONESIGNAL_ANNOUNCEMENT_CHANNEL_ID:
      process.env.NEXT_PUBLIC_ONESIGNAL_ANNOUNCEMENT_CHANNEL_ID,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  // emptyStringAsUndefined: true,
});

export { env };
