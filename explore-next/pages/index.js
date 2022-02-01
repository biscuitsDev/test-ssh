import { useSession } from "next-auth/react";
import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";
import ExistUser from "../components/ExistUser";
import deleteIcon from "../public/delete.png";




// Load Data note: getStaticProps run / call only single time 
/* export async function getStaticProps(){
  const res = await fetch('http://localhost:5000/api/v1/todos');
  const data = await res.json();
  console.log(data)
  return {
  props: {
    data: data.allTodo
  }
  }
} */



const App = () => {
  const [listData, setListData] = useState('');
  const [reload, setReload] = useState(false);
  const [list, setList] = useState([]);
  const {data: session, status} = useSession()


  useEffect( () => {

    /* 
          (async() => {
            const res = await fetch('https://next-todo0.vercel.app/api/todo/allTodo');
          const data = await res.json();
          console.log(data);
          const newData = data.data;
          setList(newData);
          })()
    */
          status === 'unauthenticated' && Router.push('/api/auth/signin')

    fetch('https://next-todo0.vercel.app/api/todo/allTodo')
    .then(res => res.json())
    .then((data) => setList(data.data))
  }, [reload])
  
  const handleOnSubmit = (event) => {


  // Send Data to db
  fetch('https://next-todo0.vercel.app/api/todo/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({data: listData})
  }).then((res) => res.json())
    .then(() => setReload((prev) => !prev))
  
  event.preventDefault();
}


// Delete Todo 
  const handleDelete = async (id) => {
    
      fetch('https://next-todo0.vercel.app/api/todo/delete', {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({id})
      }).then(res => res.json() ) 
      .then(data => setReload((prev) => !prev))
      .catch(err => console.log(err));
      console.log(id); 
  }

  console.log("object", session, status);

  

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center mt-5" >Track Your Daily To Do List!</h1>
      <div className="absolute right-1 top-0">
      <ExistUser/>
      </div>
    <div className='w-full md:w-6/12 lg:w-4/12 mx-auto'>
      <form onSubmit={handleOnSubmit} className='mx-auto text-center flex mt-5 w-full'>
        <input onChange={(e) => {
          console.log(e.target.value)
          setListData(e.target.value)
        }} type="text" className="py-3 px-3 focus:outline-none w-10/12 text-gray-700 text-2xl h-12"/>
        <button type="submit" className='py-3 bg-black px-5 w-2/12  text-gray-50 right-0'>Add</button>
      </form>

      {
        list.map((list, index) =>(
          <div className="bg-gray-50 py-2 text-2xl  px-5 mt-5 rounded-md flex justify-between items-center" key={index}>
            <span className="break-all w-10/12">{list.body}</span>
            <span  className='w-1/12 block cursor-pointer'><Image className='block w-full ' onClick={() => handleDelete(list.id)} src={deleteIcon} alt="delete-icon" /></span>
          </div>
        ))
      }
</div>
    </div>
  );
};


// check sas

export default App;