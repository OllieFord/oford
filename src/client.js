import { createClient } from '@supabase/supabase-js'
import { variables } from './variables'

const options = {
    schema: 'public',
    autoRefreshToken: true,
}

// Create a single supabase client for interacting with your database 
const supabase = createClient(variables.supaUrl, variables.supaAnonKey)


export { supabase }