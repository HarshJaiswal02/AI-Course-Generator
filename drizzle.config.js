/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-content-generator_owner:JIjvut8DVWE0@ep-delicate-union-a5gzm9m9.us-east-2.aws.neon.tech/ai-content-generator?sslmode=require",
  },
};
