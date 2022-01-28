import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './pages/homeScreen';
import SignIn from './auth/signin';
import SignUp from './auth/signup';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/homescreen" element={<HomeScreen/>}/>
       
      </Routes>
  
  </BrowserRouter>
//  < SignIn/>
  // <HomeScreen/>
  );

}

export default App;
