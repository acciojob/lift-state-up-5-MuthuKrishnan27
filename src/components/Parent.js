import React,{useState} from "react";
import Child from "./Child";

const Parent = ()=>{
     const[isLoggedIn,setisLoggedIn] = useState(false);

    return (
        <div>
             <h1>Parent Component</h1>
            <Child isLoggedIn = {setisLoggedIn}/>
            <div>
                { isLoggedIn && <p>You are logged in!</p>}   
            </div>
        </div>
    )
}

export default Parent