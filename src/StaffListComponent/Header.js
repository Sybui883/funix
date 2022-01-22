import { Navbar, NavbarBrand } from "reactstrap";

function Header() {
  return (
    <div>
      <Navbar>
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
     
    </div>
  );
}

export default Header;
