import "./ItemPreview.css";

import closeIcon from "../../images/close.svg";

function ItemPreview({ handlePreview, frntImg, bckImg, altTxt }) {
  return (
    <div className="itemPreview">
      <img
        src={closeIcon}
        alt="Close Preview Button"
        className="itemPreview__close"
        onClick={handlePreview}
      />
      <div className="itemPreview__container">
        <div className="itemPreview__img-container">
          <img src={frntImg} alt={altTxt} className="itemPreview__img" />
          <div className="itemPreview__side-imgs">
            <img src={bckImg} alt={altTxt} className="itemPreview__side-img" />
            <img src={bckImg} alt={altTxt} className="itemPreview__side-img" />
            <img src={bckImg} alt={altTxt} className="itemPreview__side-img" />
          </div>
        </div>
        <div className="itemPreview__info">
          <div className="itemPreview__info-title">Basic Tee Shirt</div>
          <div className="itemPreview__info-txt">$19.99</div>
          <span className="itemPreview__info-dividor"></span>
          <div className="itemPreview__info-txt">Color: </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPreview;
