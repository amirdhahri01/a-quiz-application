import "./App.css";
import { useGlobalContext } from "./Context/Context";
import SetupForm from "./Form/SetupForm";
import LoadingScreen from "./Loading/LoadingScreen";
import Modal from "./Model/Modal";
function App() {
  const [
    waiting,
    loading,
    questions,
    correct,
    index,
    nextQuestions,
    checkAnswers,
  ] = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <LoadingScreen />;
  }

  const { incorrect_answers, correct_answer, question } = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  return (
    <main>
      <section className="quiz">
        <p className="correct-answers">
          correct Answers : {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  onClick={() => checkAnswers(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                ></button>
              );
            })}
          </div>
        </article>
        <button
          className="next-question"
          onClick={() => {
            nextQuestions();
          }}
        >
          next questions
        </button>
      </section>
    </main>
  );
}

export default App;
