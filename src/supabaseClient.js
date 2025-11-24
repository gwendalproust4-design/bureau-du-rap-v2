import { createClient } from '@supabase/supabase-js'

// REMPLACE AVEC TES INFOS (Celles de l'étape 2)
const supabaseUrl = 'https://ywbcjhcdsuizuoprwsmh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3YmNqaGNkc3VpenVvcHJ3c21oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MzcwMjQsImV4cCI6MjA3OTUxMzAyNH0.oel-J_rncyIpKJ_FS87pGks-aM-B0Kxx1v9ommCs4fU'

export const supabase = createClient(supabaseUrl, supabaseKey)