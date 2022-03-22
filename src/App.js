import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./pages/homeScreen";
// import SignIn from "./auth/signin";
// import SignUp from "./auth/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "../src/context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/> */}
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
