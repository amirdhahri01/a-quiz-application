import { useGlobalContext } from "../Context/Context";
const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <div className="quiz quiz-small">
        <form className="setup-form">
          <h2>setup quiz</h2>
          <div className="form-control">
            <label htmlFor="amount">number</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={(e) => handleChange(e)}
              className="form-input"
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={(e) => handleChange(e)}
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="difficulty">difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={(e) => handleChange(e)}
            >
              <option value="ease">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              Can't generates questinos, please try again !
            </p>
          )}
          <button
            type="submit"
            className="submit-btn"
            onClick={(e) => handleSubmit(e)}
          >
            start
          </button>
        </form>
      </div>
    </main>
  );
};

export default SetupForm;
