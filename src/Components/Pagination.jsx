import { useEffect, useState } from "react";
import Ratings from "./Ratings";
import { Link } from "react-router-dom";

function Pagination(props){
    const length = props.length;
    const currentPage = props.currentPage;
    useEffect(()=>{
        if(currentPage==length){

            setIsCompleted(true);
        }
        
    },[currentPage])

    
    const [isCompleted,setIsCompleted] = useState(false);
    const [rating,setRating] = useState();
    const [userData,setUserData] = useState([]);
    const [isSubmitted,setIsSubmitted] = useState(false);
    

    if(isSubmitted){
        localStorage.setItem('data',JSON.stringify(userData));
        window.location = '/';
    }

    function nextPage(){
        setUserData((prev)=>[...prev,{id:currentPage, value:rating}])
        props.setCurrentpage((prev)=>prev+1);
        localStorage.setItem('data',JSON.stringify(userData));
    }
    function handleChange(e){
        const val = e.target.value;
        setRating(val);
    }
    function handleSubmit(){
    console.log(rating);
    setUserData((prev)=>[...prev,{id:currentPage,value:rating}]);
    setIsSubmitted(true);
    alert('Form Submitted Successfully');
        
    }

    function getValues(val){
        setRating(val);
    }
    console.log(userData);

    function prevPage(){
        setIsCompleted(false);
        
        props.setCurrentpage((curr)=>  {
            
            if(curr==1){
                return 1;
            }
            else{
                return curr-1;
            }
        });
    }
    return(
        <>
        
        {currentPage==length?<textarea rows={5} cols={30} onChange={(e)=>handleChange(e)} />:<Ratings getValues={getValues}/>}
        <div></div>
        <button onClick={prevPage}>Prev</button>
        {isCompleted?<button onClick={handleSubmit}>Submit</button>:<button onClick={nextPage}>Next</button>}
        </>
    )
}
export default Pagination;