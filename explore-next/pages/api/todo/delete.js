// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { supabase } from "../../../utils/supabaseClient";


export default async function deleteTodo(req, res) {
console.log(req.body.id, 'req.body.id');

    if(req.method === "PUT"){
        const {data, error } = await supabase.from('Todos').delete().eq("id", req.body.id);
        if(error){
            console.log(error)
            return res.status(404).json({ success: false, data })
        }else{
            return res.status(200).json({ success: true, data })
        }
    }else{
        return res.status(500).json({ success: false, message: 'use Right Path' })
    }
}
