import { useState } from "react";
import Pagination from "./Pagination";
import Ratings from "./Ratings";

function Survey(){
    const data = [{ id: '1', question: 'How satisfied are you with our products?' },
        { id: '2', question: 'How fair are the prices compared to similar retailers?' },
        { id: '3', question: 'How satisfied are you with the value for money of your purchase?' },
        { id: '4', question: 'How would you recommend us to your friends and family?' },
        { id: '5', question: 'What could we do to improve our service?' }
        ]
        const [currentPage, setCurrentpage] = useState(1);
        const itemstPerpage = 1;
        const size = data.length;
        const lastIndex = currentPage*itemstPerpage;
        const firstIndex =  lastIndex-itemstPerpage;
        const arr =  data.slice(firstIndex,lastIndex);

        
    return(
        <>
        <div>
            {arr.map((item, index)=>(
                <div key={index}>
                <h1>Question {currentPage}/ {size}</h1>
                <h1>{item.question}</h1>
                <Pagination length={size} currentPage={currentPage} setCurrentpage = {setCurrentpage}/>
                </div>
            ))}
        </div>
        </>
    )
}
export default Survey;