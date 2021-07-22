import React, { useContext } from 'react'
import {Link,Redirect} from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { DataContext } from '../Store/Provide';
function HomePage(){

    const dispatch=useContext(DataContext);

    const [redirect,setRedirect]=useState(null);

    

    function handleCreate() {
        dispatch({
            type:'handleCreate',
        })
        setRedirect('/generator');

        
    }

    if(redirect){
        return <Redirect to={redirect}/>
    }
    return(
        <div className="bg-black text-white h-screen flex justify-center items-center">
            
            <div>
                <h1 className="text-5xl text-green-500">Make My Resume</h1>
                <div className="flex flex-col my-4">
                   <button onClick={handleCreate}className="px-4 py-2 border-white border-2 rounded-full my-2 hover:bg-green-500" >Create a new</button>
                    <Link to="/generator" className="px-4 py-2 text-center border-white border-2 rounded-full hover:bg-green-500">Continue</Link>
                </div>
            </div>
        </div>
    )
}
export default HomePage;