import axios from "axios";
import { useContext, useState, createContext } from "react";

const table = {
  sports: 19,
  history: 23,
  politics: 24,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
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

  const fetchQuestions = async (url) => {
    setLoading(true);
    setWainting(false);
    const response = await axios
      .get(url)
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

  const openModel = () => {
    setModal(true);
  };

  const closeModel = () => {
    setModal(false);
    setWainting(true);
    setCorrect(0);
  };

  const nextQuestions = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > oldIndex.length - 1) {
        openModel();
        return 0;
      } else {
        return index;
      }
    });
  };

  const checkAnswers = (value) => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
    nextQuestions();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuiz((oldQuiz) => {
      return { ...oldQuiz, [name]: value };
    });
  };

const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, difficulty, category } = quiz;
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}$category=${table[category]}&type=multiple`;
    fetchQuestions(url);
};

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        quiz,
        modal,
        nextQuestions,
        checkAnswers,
        handleSubmit,
        handleChange,
        closeModel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
