"use client";
import React, { useState, useEffect } from "react";

const Loader = () => {
  const [title, setTitle] = useState("");
  const [reveal, setReveal] = useState(0);

  useEffect(() => {
    const sentences = ["Site is under development...", "But you can still see some of my work"];

    // Initial values
    let currentIndex = 0;
    let sentenceIndex = 0;
    let interval_time = 80;

    // First interval
    let typingInterval = setInterval(() => {
      // Checking index till end of first sentence
      if (currentIndex <= sentences[sentenceIndex].length) {
        // Printing caracters within interval
        setTitle(sentences[sentenceIndex].slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);

        // Clears interval on end of first sentence and resets the index values

        currentIndex = 0;
        sentenceIndex++;

        // Timeout function for 500ms pause
        setTimeout(() => {
          // Second interval start
          let typingInterval2 = setInterval(() => {
            // Checking till end of 2nd sentence

            if (currentIndex <= sentences[sentenceIndex].length) {
              setTitle(sentences[sentenceIndex].slice(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(typingInterval2);

              // Clears interval and add the animate class

              setTimeout(() => {
                setReveal(1);
              }, 500);
            }
          }, interval_time);
        }, 500);

        // Timeout end
      }
    }, interval_time);
    // Main interval end
  }, []);

  return (
    <>
      <div className={`loader ${reveal && "animate"}`}>
        <div className="title">{title}</div>
      </div>
    </>
  );
};

export default Loader;
