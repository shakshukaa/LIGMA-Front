import MainHeader from "./components/MainHeader";
import classes from "./App.module.css";
import Main from "./pages/Main";

function App() {
  return (
    <div className={classes.screen}>
          <MainHeader />
          <Main/>
    </div>
  );
}

export default App;
