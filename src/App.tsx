import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Url } from "./constants/url";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={Url.home} element={<Home />} />
          <Route path={Url.login} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
