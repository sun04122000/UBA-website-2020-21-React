import { Header } from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { StudentTeam } from "./components/StudentTeam";
import { Beladi } from "./components/Villages/Beladi/Beladi.js";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomeScreen} exact />
      <Route path="/home" component={HomeScreen} />
      <Route path="/students" component={StudentTeam} />
      <Route path="/beladi" component={Beladi} />
    </Router>
  );
}

export default App;
