import { drizzle } from 'drizzle-orm/neon-serverless';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';
import { config } from 'dotenv';

// Load environment variables
config();

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set in environment variables');
}

// Get the database URL from environment variable
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });

// Export types
export type User = typeof schema.users.$inferSelect;
export type NewUser = typeof schema.users.$inferInsert;