// supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zzabvczdlmbdsqvrkwej.supabase.co"; 
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6YWJ2Y3pkbG1iZHNxdnJrd2VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5NzM5NzMsImV4cCI6MjA1MDU0OTk3M30.9BMbfJfNLIJwiB3b2iAASYKbU8E3BG-Ls4Qrqjy0ceo"; // ضع مفتاح API هنا

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
