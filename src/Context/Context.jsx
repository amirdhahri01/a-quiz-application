import { useContext, useState, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({Children}) => {
  const [waiting, setWainting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sports",
    difficulty: "ease",
  });
  const [modal, setModal] = useState(false);
  
  return <AppContext.Provider>{Children}</AppContext.Provider>;
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext , AppProvider};
