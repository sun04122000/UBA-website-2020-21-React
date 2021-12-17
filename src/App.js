import { Header } from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { StudentTeam } from "./components/StudentTeam";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomeScreen} exact />
      <Route path="/home" component={HomeScreen} />
      <Route path="/students" component={StudentTeam} />
    </Router>
  );
}

export default App;
