import React, { useState, useEffect } from "react";
import one from "../assets/one.jpeg";
import PuzzleButtons from "./PuzzleButtons";
import { useData } from "../context/DataContext";

const PuzzleCard = () => {
  // const imageWidth = 450;
  // const imageHeight = 400;
  const { data, difficult } = useData();
  const [difficulty, setDifficulty] = useState("medium");
  const [pieces, setPieces] = useState([]);
  const [movesLog, setMovesLog] = useState([]);
  const [shuffled, setShuffled] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [backgroundUrl, setBackgroundUrl] = useState(one);
  const [isFirst, setIsFirst] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  const getImageDimensions = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 600) {
      // Adjust dimensions for small screens
      return {
        width: screenWidth - 20,
        height: (screenWidth - 20) * (400 / 450),
      };
    } else {
      // Default dimensions
      return { width: 450, height: 400 };
    }
  };

  const { width: imageWidth, height: imageHeight } = getImageDimensions();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * data.length);
    console.log("random index", randomIndex);
    const randomImage = data[randomIndex];
    console.log("random image", randomImage);

    shufflePieces();
    setBackgroundUrl(randomImage);
    setIsDragging(true);
    setResetTimer(true);
  }, [data]);
  useEffect(() => {
    setDifficulty(difficult);
  }, [difficult]);

  const getGridSize = () => {
    switch (difficulty) {
      case "extra simple":
        return { rows: 3, columns: 3 };
      case "simple":
        return { rows: 4, columns: 4 };
      case "medium":
        return { rows: 5, columns: 5 };
      case "hard":
        return { rows: 7, columns: 7 };
      case "extra hard":
        return { rows: 9, columns: 9 };
      default:
        return { rows: 4, columns: 4 }; // Default size for medium difficulty
    }
  };
  const { rows, columns } = getGridSize();
  useEffect(() => {
    shufflePieces();
  }, [rows, columns]);
  const pieceWidth = imageWidth / columns;
  const pieceHeight = imageHeight / rows;

  const initialPieces = Array.from(
    { length: rows * columns },
    (_, index) => index
  );

  const shufflePieces = () => {
    const shuffledPieces = [...initialPieces].sort(() => Math.random() - 0.5);
    setPieces(shuffledPieces);
    setMovesLog([]);
    setShuffled(true);
    setCompleted(false);
    if (resetTimer) {
      setResetTimer(false);
    }
  };

  const handleDragStart = (e, index) => {
    if (completed) {
      e.preventDefault();
      return;
    }
    setIsDragging(true);

    if (resetTimer) {
      setResetTimer(false);
    }
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDrop = (e, targetIndex) => {
    setIsDragging(false);
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);

    if (draggedIndex !== targetIndex) {
      const updatedPieces = [...pieces];
      const draggedPiece = updatedPieces[draggedIndex];
      updatedPieces[draggedIndex] = updatedPieces[targetIndex];
      updatedPieces[targetIndex] = draggedPiece;

      setPieces(updatedPieces);
      setMovesLog([...movesLog, { from: draggedIndex, to: targetIndex }]);
    }
  };

  const onChangeImage = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    console.log("random index", randomIndex);
    const randomImage = data[randomIndex];
    console.log("random image", randomImage);
    setBackgroundUrl(randomImage);
  };

  useEffect(() => {
    if (shuffled && isPuzzleCompleted()) {
      console.log("Completed");
      setCompleted(true);
    }
  }, [movesLog, shuffled]);

  const isPuzzleCompleted = () => {
    return JSON.stringify(pieces) === JSON.stringify(initialPieces);
  };

  function renderPuzzlePieces() {
    return pieces.map((pieceIndex, index) => {
      const row = Math.floor(pieceIndex / columns);
      const col = pieceIndex % columns;

      const pieceStyle = {
        width: pieceWidth + "px",
        height: pieceHeight + "px",
        backgroundImage: `url(${backgroundUrl})`,
        backgroundPosition: `-${col * pieceWidth}px -${row * pieceHeight}px`,
        backgroundSize: `${imageWidth}px ${imageHeight}px`,
        // border: "1px solid #000",
        boxSizing: "border-box",
        cursor: completed ? "default" : "grab",
      };
      return (
        <div
          key={index}
          style={pieceStyle}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={(e) => e.preventDefault()}
        ></div>
      );
    });
  }

  return (
    <div className="2/3 flex flex-col gap-4 py-10 px-1 lg:px-6">
      <div>
      {
        completed && (
          <h1 className="text-green-600">Completed successfully</h1>
        )
      }
      </div>
      <div className="flex-1 2/3 flex flex-col lg:flex-row gap-10 py-10 px-1 lg:px-6">
      <div className="w-full lg:w-[450px] relative flex justify-center items-center">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            width: "100%",
          }}
        >
          {renderPuzzlePieces()}
        </div>
      </div>
      <div>
        <PuzzleButtons
          onShuffle={shufflePieces}
          disabled={completed}
          onchangeImage={onChangeImage}
        />
      </div>
      </div>
    </div>
  );
};

export default PuzzleCard;
