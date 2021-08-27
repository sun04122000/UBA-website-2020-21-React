import { Header } from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" component={Header} exact />
    </Router>
  );
}

export default App;
