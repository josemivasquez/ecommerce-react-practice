import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'
import Checkout from "./pages/client/checkoutPage/checkoutPage.jsx"
import SalesPage from "./pages/client/salesPage/salesPage.jsx";
import MainBody from "./pages/client/salesPage/mainBody/mainBody.jsx";
import CategoryBody from "./pages/client/salesPage/categoryBody/categoryBody.jsx";
import ProductGridSelect from "./components/admin/productGridSelect/productGridSelect.jsx";
import ButtonControl from "./components/admin/buttonControl/buttonControl.jsx";
import CategoryEditModal from "./components/admin/categoryEditModal/categoryEditModal.jsx";
import ProductEditModal from "./components/admin/productEditModal/productEditModal.jsx";
import LogIn from "./pages/admin/logInPage/logInPage";
import EditPage from "./pages/admin/editPage/editPage.jsx";





export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SalesPage/>}>
          <Route path='' element={<MainBody/>} />
          <Route path='cat' element={<CategoryBody/>} />
        </Route>
        <Route path='checkout' element={<Checkout/>} />


        <Route path='dev' element={<EditPage/>} />

      </Routes>
    </Router>
  )
}