import React from "react";
import QuoteWrapper from "./QuoteWrapper";

function QuoteItemList ({lists, onActive}) {
    return (
    <div className="item">
        {
            lists.map((list) => (
                <QuoteWrapper
                key={list.id}
                id={list.id}
                lists={list}
                onActive={onActive}
                {...list}/>
            ))
        }
    </div>
    );
}

export default QuoteItemList;