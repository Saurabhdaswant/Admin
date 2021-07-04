import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="logo">
        <img src="svg/logo.svg" alt="" />
      </div>
      <div className="icons">
        <Link to="/Fut" className="icon activeIcon">
          <img src="svg/Bag.svg" alt="" />
        </Link>
        <Link to="/Note" className="icon">
          <img src="svg/customerCare.svg" alt="" />
        </Link>
        <Link to="/Fut" className="icon">
          <img src="svg/Calling.svg" alt="" />
        </Link>
        <div className="icon vector">
          <img src="svg/Vector.svg" alt="" />
        </div>
        <div className="icon ">
          <img src="svg/arrow.svg" alt="" />
        </div>
        <div className="icon dolar">
          <img src="svg/dolarr.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
