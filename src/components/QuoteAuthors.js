import React from "react";

function QuoteAuthor ({author}) {

    return (
        <div id="quote-author">
         <span id="author">- {author}</span>
        </div>
    );
}

export default QuoteAuthor;