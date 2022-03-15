import React, { useEffect, useState } from "react";

const text = [
  `Enthusiastic Dev`,
  "Front-end Dev",
  "Full stack Dev (in the future)",
  "ReactJS, Redux, Mui, Antd",
  "SCSS, JavaScript, TypeScript",
];
const textPhase = {
  Typing: "typing",
  Pausing: "pausing",
  Deleting: "deleting",
};
const TYPING_INTERVAL = 150;
const PAUSING_TIME = 1000;
const DELETING_INTERVAL = 80;

const useTextTyping = (text) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [phase, setPhase] = useState(textPhase.Typing);
  useEffect(() => {
    switch (phase) {
      case textPhase.Typing: {
        const nextTyping = text[selectedIndex].slice(0, typingText.length + 1);

        if (nextTyping === typingText) {
          setPhase(textPhase.Pausing);
          return;
        }
        const timeout = setTimeout(() => {
          setTypingText(nextTyping);
        }, TYPING_INTERVAL);
        return () => clearTimeout(timeout);
      }
      case textPhase.Deleting: {
        if (!typingText) {
          const nextIndex = selectedIndex + 1;
          setSelectedIndex(text[nextIndex] ? nextIndex : 0);
          setPhase(textPhase.Typing);
          return;
        }
        const nextRemaining = text[selectedIndex].slice(
          0,
          typingText.length - 1
        );

        const timeout = setTimeout(() => {
          setTypingText(nextRemaining);
        }, DELETING_INTERVAL);
        return () => clearTimeout(timeout);
      }
      case textPhase.Pausing:
      default:
        const timeout = setTimeout(() => {
          setPhase(textPhase.Deleting);
        }, PAUSING_TIME);
        return () => clearTimeout(timeout);
    }
  }, [text, typingText, selectedIndex, phase]);
  return typingText;
};

const Typing = () => {
  const textAnimation = useTextTyping(text);
  return (
    <div>
      <h2 className="typing">{textAnimation}</h2>
    </div>
  );
};

export default Typing;
