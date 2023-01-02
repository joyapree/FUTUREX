import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages import
import {Home, SignIn, Form} from './pages'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/form/tumor/:pg" element={<Form/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
