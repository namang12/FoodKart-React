import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import foodimage from "../../assets/foodimage.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FoodKart</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={foodimage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
