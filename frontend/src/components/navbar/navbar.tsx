import "./navbar.scss";
import { useState } from "react";
import { Menu, Close } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleNavBar = () => {
    if (window.innerWidth < 500) {
      setOpen(!open);
    }
  };

  const menuStyle = open ? "menu open" : "menu";

  return (
    <div className="navbar">
      <div className="brand">
        <h1>Pet Store</h1>
      </div>
      <div className="hamburger">
        <Menu onClick={toggleNavBar} />
      </div>
      <div className={menuStyle}>
        <ul>
          <Close className="close" onClick={toggleNavBar} />
          <li onClick={toggleNavBar}>
            <Link to="/">Ana Sayfa</Link>
          </li>
          <li onClick={toggleNavBar}>
            <Link to="/products">Ürünler</Link>
          </li>
          <li onClick={toggleNavBar}>
            <Link to="/products/add">Ürün Ekle</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;