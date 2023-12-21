import { useEffect, useState } from "react";

const AlphabetComponent = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyzæøå";
  const [currentLetter, setCurrentLetter] = useState(0);
  const [currentInput, setCurrentInput] = useState("");

  useEffect(() => {
    if (currentInput === alphabet[currentLetter]) {
      setCurrentLetter((prev) => prev + 1);
      setCurrentInput("");
    } else if (currentInput.length >= 1) {
      setCurrentInput("");
      setCurrentLetter(0);
    }
  }, [currentInput]);

  function getQuestion(letter: number) {
    switch (letter) {
      case 0:
        return "Hva er den første bokstaven i alfabetet?";
      default:
        return `Hvilken bokstav kommer etter ${alphabet[letter - 1]}?`;
    }
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
              type='text'
              className='p-2 rounded w-12'
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
            />
          </div>
        </>
      ) : (
        <>
          <div>Gratulerer, du har fullført alfabetet!</div>
          <img src='goggins.png' alt='You did it man' />
          <a
            className='bg-[#bc4749] text-white py-2 px-4 rounded'
            href='you-did-it'
          >
            Gå til gaven din
          </a>
        </>
      )}
    </>
  );
};

export default AlphabetComponent;
