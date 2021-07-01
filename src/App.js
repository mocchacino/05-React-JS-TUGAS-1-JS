import React, {Component} from "react";
import MenuUtama from "./Page/MenuUtama";
import MenuProduct from "./Page/MenuProduct";
import MenuTentangKami from "./Page/MenuTentangKami";
import MenuKontak from "./Page/MenuKontak";

const Header = () => {
  return(
    <div>
      <h1>Ini Halaman Untuk Header</h1>
    </div>
  )
}

class App extends Component{
  render(){
    return (
      <div>
        <Header />
        <MenuUtama />
        <MenuProduct />
        <MenuKontak />
        <MenuTentangKami />
        <Footer />
      </div>
    );
  }
}

const Footer = () => {
  return(
    <div>
      <h1>Ini Halaman Untuk Footer</h1>
    </div>
  )
}

export default App;
