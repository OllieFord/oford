import { createClient } from '@supabase/supabase-js'


export default function increment_page_view(request, response) {
    const supabase = createClient(process.env.VITE_SVELTE_APP_SUPABASE_URL, process.env.supaKey)
    supabase.rpc('increment_stats', { row_id: 1 }).then((res) => {
        return response.status(200).json({ status: 'Success' });
    });
}
