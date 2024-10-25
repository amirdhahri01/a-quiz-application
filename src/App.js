import "./App.css";
import SetupForm from "./Form/SetupForm";
import LoadingScreen from "./Loading/LoadingScreen";
import Modal from "./Model/Modal";

function App() {
  return (
    <>
      <SetupForm />
      <Modal />
      <LoadingScreen />
    </>
  );
}

export default App;
