import React from "react";

function NewQouteButton({ id, onActive }) {
  const actionButton = () => {
    onActive(id);
  }

  return (
    <button id="new-quote" className="btn btn-primary" onClick={actionButton}>New Quote</button>
  )
}

export default NewQouteButton;