import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.supaUrl, process.env.supaKey)

supabase.rpc('increment_stats', { row_id: 1 }).then((res) => {
    console.log(res);
});
