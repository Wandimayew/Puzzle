import { createContext, useState , useContext} from "react";


const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [difficult,setDifficult]=useState("extra simple");
  const [level,setLevel]=useState(null)


  const handleImageChange=(data)=>{
    setData(data);
  }
  const handleDifficultyChange=(data)=>{
      setDifficult(data)
  }
  const handleLevelChange=(data)=>{
    setLevel(data)
  }
  const value={
    data,setData,handleImageChange,handleDifficultyChange,handleLevelChange,level,difficult
  }
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
const useData = () => {
    return useContext(DataContext);
  };
export { DataProvider, useData };
