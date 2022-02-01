// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import Cors from 'cors';
import { supabase } from "../../../utils/supabaseClient";

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}
 async function getAllTodo(req, res) {
    await runMiddleware(req, res, cors)

    /**/ if(req.method === "GET"){
        const {data, error } = await supabase.from('Todos').select('*');
        if(error){
             res.status(404).json({ success: false, data })
        }else{
            return res.status(200).json({ name: true, data })
        }
    }else{
        return res.status(500).json({ success: false, message: 'use Right Path' })
    }

    
}

export default getAllTodo;