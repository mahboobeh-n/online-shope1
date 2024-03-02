import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";


const Welcome = () =>{
    const [showWelcome , setShowWelcome] = useState();
    useEffect(()=>{
        const data = localStorage.getItem("shine")
        setShowWelcome(JSON.parse(data) ?? true)

    },[])
    const hideShow = () =>{
        return(
           setShowWelcome(false),
           localStorage.setItem("shine" , JSON.stringify(false))
        )
    }
    
    return (
        <>
        {showWelcome && (
            <div className="container">
        <div className="bg bg-danger">
            <FontAwesomeIcon
               icon={faClose}
               style={{float: "right" , margin : "5px"}}
               onClick={hideShow}>
            
            </FontAwesomeIcon>
            
            <h1>welcome</h1>
        </div>
        </div>
        )}
        </>
        
    )

    
}
export default Welcome;