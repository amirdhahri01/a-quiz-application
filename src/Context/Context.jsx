import axios from "axios";
import { useContext, useState, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ Children }) => {
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

  const fetchQuestions = async () => {
    setLoading(false);
    setWainting(false);
    const response = await axios
      .get("https://opentdb.com/api.php?amount=10")
      .catch((err) => console.log(err.message()));
    if (response) {
      const data = response.data.results;
      if (data.length) {
        setQuestions(data);
        setLoading(false);
        setWainting(false);
        setError(false);
      } else {
        setWainting(true);
        setLoading(true);
      }
    } else {
      setWainting(true);
    }
  };

  return <AppContext.Provider>{Children}</AppContext.Provider>;
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
