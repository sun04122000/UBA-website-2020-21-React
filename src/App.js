import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" component={Header} exact />
      <Route path="/" component={HomeScreen} exact />
      <Route path="/" component={Footer} exact />
   
    </Router>
  );
}

export default App;
