import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Url } from "./constants/url";
import { ThemeProvider } from "./context/ThemeContext";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path={Url.home} element={<Home />} />
            <Route path={Url.login} element={<Login />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
