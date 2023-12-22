import React, { useState } from "react";
import { IoArrowDown } from "react-icons/io5";
import { IoMdArrowUp } from "react-icons/io";
import { useData } from "../context/DataContext";

const PuzzleDifficulty = () => {
  const { handleDifficultyChange } = useData();
  const [showDifficulty, setShowDifficulty] = useState(false);
  const hard = "hard";
  const medium = "medium";
  const simple = "simple";
  const extraSimple = "extra simple";
  const extraHard = "extra hard";

  const difficulty = [extraSimple, simple, medium, hard, extraHard];
  const handleArrowDown = () => {
    console.log("arrow down clicked");
    setShowDifficulty(true);
  };
  const handleArrowUp = () => {
    setShowDifficulty(false);
  };
  const handleDifficulty = (item, index) => {
    handleDifficultyChange(item);
    console.log("the difficulty is ", item);
    console.log("the difficulty index is", index);
  };
  return (
    <div className="flex gap-3 flex-row py-3 sm:py-10 px-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="flex gap-2  bg-blue-400 w-full lg:w-1/2 p-2 h-10 justify-start items-start">
        <h1>Difficulty</h1>
        <div>
          {showDifficulty ? (
            <div
              onClick={() => handleArrowUp()}
              className="cursor-pointer w-7 h-7 flex items-center justify-center"
            >
              <IoMdArrowUp size={20} />
            </div>
          ) : (
            <div
              onClick={() => handleArrowDown()}
              className="cursor-pointer w-7 h-7 flex items-center justify-center"
            >
              <IoArrowDown size={20} />
            </div>
          )}
        </div>
      </div>
      {showDifficulty && (
        <div className="w-full  gap-3 sm:w-1/2 md:w-full lg:w-full">
          {difficulty.map((item, index) => (
            <p
              key={index}
              onClick={() => handleDifficulty(item, index)}
              className="cursor-pointer hover:outline hover:bg-gray-400 rounded-md flex px-2"
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default PuzzleDifficulty;
