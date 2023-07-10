import "./App.css";
import AppLoader from "./hoc/app-loader";
import BonusInfo from "./UI/bonus-info";

function App() {
  return (
    <div className="App">
      <AppLoader>
        <BonusInfo />
      </AppLoader>
    </div>
  );
}

export default App;
