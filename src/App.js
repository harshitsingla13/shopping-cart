import "./App.css";

import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer.component";
import HomePage from "./page/home.page";
import Header from "./components/header/header.component";
import Product from "./page/product.page";
import LoginPage from "./page/login.page";
import RegisterPage from "./components/register/register.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products" element={<Product />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
