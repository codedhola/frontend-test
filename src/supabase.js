import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cubnyfvbztjqtifvplxf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1Ym55ZnZienRqcXRpZnZwbHhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzOTYzNjMsImV4cCI6MjAwMTk3MjM2M30.JRyYHe_mgz35RFGYOFSr3g765zV_vHxnTXCB0xOSX78";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
