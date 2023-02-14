import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./containers/Cart";
import AddItemToList from "./containers/AddItemToList";
import AboutPage from "./containers/AboutPage";
import CheckOutPage from "./containers/CheckOutPage";
import Navbarr from "./containers/Navbar";

// toaster and the routes paths
function App() {
  return (
    <div className="bg" >

   
    <Router>
    <Navbarr/>
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<ProductListing />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/add-product" element={<AddItemToList />} />
        <Route exact path="/product/:productId" element={<ProductDetails />} />
        <Route exact path="/aboute-project-and-me" element={<AboutPage />} />
        <Route exact path="/check-out" element={<CheckOutPage />} />

        <Route>404 Not Found</Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
