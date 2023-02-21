import { Route, Routes } from "react-router";
import { AppStyle } from "./AppStyle";
import { Login } from "./components/Login/Login";
import { Home } from "./pages/Home/Home";
const token = localStorage.getItem("token");


function App() {
  if(token){
    return(
      <AppStyle>
      <Routes>
       <Route path="/*" element={<Home />} />
      </Routes>
     </AppStyle>
    )
  }
  return (
    <AppStyle>
     <Routes>
        <Route path="/login" element={<Login />} />
     </Routes>
    </AppStyle>
  );
}

export default App;
