import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, CardText, CardTitle, Button } from "reactstrap";

function App() {
  const [randomQuote, getRandomQuote] = useState([]);

  useEffect(() => {
    axios.get("https://api.quotable.io/random").then((res) => {
      const quote = res.data;
      getRandomQuote(quote);
    });
  }, []);

  const getNewRandomQuote = () => {
    axios.get("https://api.quotable.io/random").then((res) => {
      const quote = res.data;
      getRandomQuote(quote);
    });
  };

  return (
    <div className="quote-container container-fluid">
      <Card
        id="quote-box"
        body
        className="m-auto my-2"
        style={{
          width: "20rem",
        }}
      >
        <CardTitle id="author" className="m-auto" tag="h5">
          {randomQuote.author}
        </CardTitle>
        <CardText id="text" className="m-auto mt-5 mb-5">
          {randomQuote.content}
        </CardText>
        <div className="action_button">
          <Button
            id="tweet-quote"
            className="me-4"
            color="primary"
            href={
              "https://twitter.com/intent/tweet?text=" +
              randomQuote.content +
              " - " +
              randomQuote.author
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-twitter"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
            Tweet
          </Button>
          <Button
            id="new-quote"
            onClick={() => getNewRandomQuote()}
            color="primary"
          >
            New Quote
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default App;
