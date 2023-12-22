import React from "react";

const PuzzleButtons = ({ onShuffle, disabled, onchangeImage }) => {
  return (
    <div className="flex px-4 gap-10">
      <button
        onClick={onShuffle}
        disabled={disabled}
        className="px-4 rounded-lg text-sm  bg-emerald-300 outline-cyan-400 hover:bg-emerald-200 py-1"
      >
        Shuffle
      </button>
      <button onClick={onchangeImage} className="px-4 text-sm rounded-lg bg-emerald-300 hover:bg-emerald-200 outline-cyan-400 py-1">
        Change Image
      </button>
    </div>
  );
};

export default PuzzleButtons;
