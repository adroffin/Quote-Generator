import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// Array de citas con autores
const quotes = [
  {
    text: "You have power over your mind—not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius",
  },
  {
    text: "Luck is what happens when preparation meets opportunity.",
    author: "Seneca",
  },
  {
    text: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn",
  },
  {
    text: "How long are you going to wait before you demand the best for yourself?",
    author: "Epictetus",
  },
  {
    text: "More is lost by indecision than wrong decision.",
    author: "Marcus Tullius Cicero",
  },
];

const StyledButton = styled(Button)({
  backgroundColor: "#6200ea",
  color: "#fff",
  padding: "12px 24px",
  borderRadius: "8px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#3700b3",
  },
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
});

export default function App() {
  const [index, setIndex] = useState(0);

  const getRandomQuoteIndex = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return randomIndex;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container className="text-center mt-5">
      <h2 className="mb-3 text-warning">Stoic Quotes Generator</h2>
      <Card className="shadow-lg p-3">
        <h4 className="text-dark">{quotes[index].text}</h4>{" "}
        <p className="text-muted">- {quotes[index].author}</p>{" "}
      </Card>
      <StyledButton
        variant="contained"
        onClick={() => setIndex(getRandomQuoteIndex())}
        style={{ marginTop: "20px" }}
      >
        NEXT QUOTE
      </StyledButton>
    </Container>
  );
}
