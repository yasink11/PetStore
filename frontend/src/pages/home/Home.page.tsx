import "./home.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import kitten from "../../assets/images/Kitten.jpg"

const Home = () => {
   const redirect = useNavigate();
   return (
      <div className="home">
         <h1>Pet Store'a Hoş geldiniz</h1>
         <Button variant="outlined" color="primary" onClick={() => redirect("/products")}>
          Ürün Listesi
         </Button>
         <img src={kitten} alt="kitten" />
      </div>
   );
};

export default Home;