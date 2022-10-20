import React from "react";
import QuoteBox from "./QuoteBox";

function QuoteWrapper ({ author, content, onActive}) {

    return (
        <div id="wrapper">
            <QuoteBox author={author} content={content} onActive={onActive}/>
        </div>
    );
}

export default QuoteWrapper;