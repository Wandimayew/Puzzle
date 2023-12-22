import "./App.css";
import Home from "./components/Home";
import { DataProvider } from "./context/DataContext";
import PuzzleGallery from "./components/PuzzleGallery"

function App() {
  return (
    <>
      <DataProvider>
        <div className="w-auto flex flex-col gap-10">
          <Home />
          <PuzzleGallery />
        </div>
      </DataProvider>
    </>
  );
}

export default App;
