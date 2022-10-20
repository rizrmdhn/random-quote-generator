import React from "react";
import NewQouteButton from "./NewQouteButton";
import QuoteAuthor from "./QuoteAuthors";
import QuoteText from "./QuoteText";
import TweetButton from "./TweetButton";

function QuoteBox ({ id, author, content, onActive}) {

    return (
        <div id="quote-box" >
            <QuoteText content={content}/>
            <QuoteAuthor author={author}/>
            <TweetButton author={author} content={content}/>
            <NewQouteButton id={id} onActive={onActive}/>
        </div>
    );
}

export default QuoteBox;