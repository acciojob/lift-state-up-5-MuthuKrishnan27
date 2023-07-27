import React,{useState} from "react";

const Child = ({isLoggedIn})=>{

    const [shouldhide,setShouldhide] = useState(false);

    function change(event){
        console.log(event.target.value);
    }
    
    function handlesubmit(event){ 
        setShouldhide(true); 
        isLoggedIn(true);
        event.preventDefault();
    }
    return (
        <div>{
            !shouldhide &&
            <form className="Form" onSubmit={handlesubmit}>
                <div>
                    <label>Username : </label>
                    <input type="text" onChange={(e)=>change(e)}></input>
                </div> 
                <div>
                    <label>Password : </label>
                    <input type="password"  onChange={(e)=>change(e)}></input>
                </div>
                <button type="submit">Submit</button>
            </form>
            }
        </div>
    )
}

export default Child