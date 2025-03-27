import React from "react";
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="accordion-container" onClick={() => setIsOpen(!isOpen)}>
        {title}
        {isOpen ? "\u25BE" : "\u25B8"}
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Accordion title="CS" content="Computer science" />
      <Accordion
        title="AIML"
        content="Artificial Intelligence and Machine Learning"
      />
    </div>
  );
}
