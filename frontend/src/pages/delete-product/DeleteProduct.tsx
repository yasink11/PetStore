import "./delete-product.scss";
import { useNavigate, useParams } from "react-router-dom";
import {  Button } from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../constants/url.constant";

const DeleteProduct = () => {
   const redirect = useNavigate();
   const { id } = useParams();

   const handleDeleteBtnClick = () => {
      axios
         .delete(`${baseUrl}/${id}`)
         .then((resposne) => redirect("/products", { state: { message: "Ürün başarıyla silindi." } }))
         .catch((error) => alert("HATA!"));
   };

   const handleBackBtnClick = () => {
      redirect("/products");
   };

   return (
      <div className="delete-product">
         <h2>Ürün Sil</h2>
         <h4>Bu ürünü silmek istediğinize emin misiniz?</h4>

         <div>
            <Button variant="outlined" color="error" onClick={handleDeleteBtnClick}>
               Sil
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleBackBtnClick}>
               Vazgeç
            </Button>
         </div>
      </div>
   );
};

export default DeleteProduct;