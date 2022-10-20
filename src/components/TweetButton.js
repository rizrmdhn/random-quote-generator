import React from "react";


function TweetButton({ content, author }) {
  
    return (
     <a id="tweet-quote" className="btn btn-primary" href={'https://twitter.com/intent/tweet?text=' + content + ' - ' + author} target='_blank' rel="noopener noreferrer">Qoute</a>
    )
  }
  
  export default TweetButton;
