// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { supabase } from "../../../utils/supabaseClient";


export default async function newTodo(req, res) {

    if(req.method === "POST"){
        const {data, error } = await supabase.from('Todos').insert({body: req.body.data}).single();
        console.log(req.body.data);
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
