import "./App.css";
import SetupForm from "./Form/SetupForm";
import LoadingScreen from "./Loading/LoadingScreen";
import Modal from "./Model/Modal";

function App() {
  return (
    <main>
      <section className="quiz">
        <p className="correct-answers">correct Answers : 3</p>
        <article className="container">
          <h2>Text</h2>
          <div className="btn-container"></div>
        </article>
        <button className="next-question">next questions</button>
      </section>
    </main>
  );
}

export default App;
