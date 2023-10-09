import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/Home.page";
import Products from "./pages/products/Products";
import AddProduct from "./pages/add-product/AddProduct";
import EditProduct from "./pages/edit-product/EditProduct";
import DeleteProduct from "./pages/delete-product/DeleteProduct";


const App: React.FC = () => {
   return (
      <div>
         {/* Navbar */}
         <Navbar />

         {/* Wrapper */}
         <div className="wrapper">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/products">
                  <Route index element={<Products />} />
                  <Route path="add" element={<AddProduct />} />
                  <Route path="edit/:id" element={<EditProduct />} />
                  <Route path="delete/:id" element={<DeleteProduct />} />
               </Route>
            </Routes>
         </div>
      </div>
   );
};

export default App;