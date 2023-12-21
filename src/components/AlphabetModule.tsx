"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const AlphabetComponent = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyzæøå";
  const [currentLetter, setCurrentLetter] = useState(29);
  const [currentInput, setCurrentInput] = useState("");

  useEffect(() => {
    if (currentInput.toLowerCase() === alphabet[currentLetter]) {
      setCurrentLetter((prev) => prev + 1);
      setCurrentInput("");
    } else if (currentInput.length >= 1) {
      setCurrentInput("");
      setCurrentLetter(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentInput]);

  function getQuestion(letter: number) {
    switch (letter) {
      case 0:
        return "Hva er den første bokstaven i alfabetet?";
      default:
        return `Hvilken bokstav kommer etter ${alphabet[letter - 1]}?`;
    }
  }

  function handleChange(e: any) {
    setCurrentInput(e.target.value);
  }

  return (
    <>
      {currentLetter < 29 ? (
        <>
          <div>{`Status: ${currentLetter}/29`}</div>
          <div>{getQuestion(currentLetter)}</div>
          <div>
            <span>Skriv her: </span>
            <input
              autoComplete='off'
              type='text'
              className='p-2 rounded w-12'
              value={currentInput}
              onChange={handleChange}
            />
          </div>
        </>
      ) : (
        <>
          <div>Gratulerer, du har fullført alfabetet!</div>
          <Image
            src='/goggins.png'
            alt='You did it man'
            width={348}
            height={252}
          />
          <a
            href='you-did-it'
            className='bg-[#bc4749] text-white py-2 px-4 rounded'
          >
            Gå til gaven din
          </a>
        </>
      )}
    </>
  );
};

export default AlphabetComponent;
