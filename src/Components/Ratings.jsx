import { useState } from "react";

function Ratings(props){
    
    function handleChange(e){
        const rating = e.target.value;
        props.getValues(rating);
    }
    return(
        <div>
        <form>
            
            <input type="radio" value={'1'} onChange={(e)=>handleChange(e)} name="rating" id="r1" />
            <label form="r1">1</label>
            
            <input type="radio" value={'2'} onChange={(e)=>handleChange(e)} name="rating" id="r2" />
            <label form="r2">2</label>
            
            <input type="radio" value={'3'} onChange={(e)=>handleChange(e)} name="rating" id="r3" />
            <label form="r3">3</label>
            
            <input type="radio" value={'4'} onChange={(e)=>handleChange(e)} name="rating" id="r4" />
            <label form="r4">4</label>
            
            <input type="radio" value={'5'} onChange={(e)=>handleChange(e)} name="rating" id="r5" />
            <label form="r5">5</label>
        </form>
        </div>
    )
}
export default Ratings;