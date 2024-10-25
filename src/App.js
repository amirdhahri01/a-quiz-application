import "./App.css";
import SetupForm from "./Form/SetupForm";
import LoadingScreen from "./Loading/LoadingScreen";
import Model from "./Model/Model";

function App() {
  return (
    <>
      <SetupForm />
      <Model />
      <LoadingScreen />
    </>
  );
}

export default App;
