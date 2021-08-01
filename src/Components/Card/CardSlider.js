import Card from "../Card/Card";
import styled from "styled-components";
import "../Card/Card.css";

const CardSlider = () => {

  const Caruosel2 = styled.div.attrs(() => ({ tabIndex: 0}))`
  background: #b4b4b4;
  padding-bottom: 80px;
  `;

  return (
    <Caruosel2><div className="container mt-5 carousel">
      <div>
          <h1 className="service__desktops">บริการ</h1>
          <h1 className="service__tablets">บริการ</h1>
          <h1 className="service__smartphone">บริการ</h1>
          </div>
      <Card />
    </div></Caruosel2>
  );
}

export default CardSlider;