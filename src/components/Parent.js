import React,{useState} from "react";
import Child from "./Child";

const Parent = ()=>{
     const[isLoggedIn,setisLoggedIn] = useState(false);

    return (
        <div>
            <Child isLoggedIn = {setisLoggedIn}/>
            <div>
                { isLoggedIn && <div className="">You are logged in!</div>}   
            </div>
        </div>
    )
}

export default Parent