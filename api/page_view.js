import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.VITE_SVELTE_APP_SUPABASE_URL, process.env.supaKey)
let resultApi;
supabase.rpc('increment_stats', { row_id: 1 }).then((res) => {
    result = res;
});


module.exports = (req, res) => {
    res.json({
        result: resultApis
    })

}
