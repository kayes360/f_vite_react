import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { useRef } from "react";
export const Counter = props => {
  const renderCounter  = useRef(0);
  renderCounter.current = renderCounter.current + 1; 
  console.log(renderCounter.current);
  // return <h1>Renders: {renderCounter.current}, {props.message}</h1>;
};
function App() {
  
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route  path="/" element={<Home />} />
            
            <Route path="/*" element={<PublicRoute />}>
              <Route  path="signup" element={<Signup />} /> 
              <Route  path="login" element={<Login />} />
           </Route>

            <Route path="/*" element={<PrivateRoute />}>
              <Route path="quiz/:id" element={<Quiz />} />
              <Route path="result/:id" element={<Result />} />
          </Route>

          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
