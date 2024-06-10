import "./MainContent.css";
import discountPic from "./discount.jpg";

function MainContent() {
  return (
    <div className="MainContent">
      <img src={discountPic} className="Discount-pic"></img>
    </div>
  );
}

export default MainContent;
