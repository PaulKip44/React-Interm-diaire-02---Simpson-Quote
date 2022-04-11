import React from "react";
import axios from "axios";
import QuoteCard from "./QuoteCard";
import logo from "./logo.svg";
import "./App.css";

const sampleQuote = {
  quote:
    'For once maybe someone will call me "sir" without adding, "You\'re making a scene."',
  character: "Homer Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  characterDirection: "Right",
};

function App() {
  const [quote, setQuote] = React.useState(sampleQuote);

  const getQuote = () => {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        setQuote(data[0]);
      });
  };

  return (
    <div className="App">
      <QuoteCard quote={quote} />
      <button type="button" onClick={getQuote}>
        Get a new quote !
      </button>
    </div>
  );
}

export default App;
