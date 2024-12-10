import styled from "styled-components";
import { useState } from "react";

const StyledContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: white;
  height: 100%;
  border-radius: 20px;
  width: fit-content;

  .first-section-header {
    padding: 30px 70px;
  }

  .nav-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  .tabs-container {
    display: flex; 
    justify-content: flex-end; 
    gap: 30px;
    right: 0; 
    top: 50px;
  }

  .right-aligned-container div {
    padding: 10px; /* Add padding for better spacing */
    background-color: lightgray; /* Optional: Background color */
    border: 1px solid #ccc; /* Optional: Add borders */
  }

  .banner {
    position: relative;
    background-color: #f4f6f5;
    color: white;
    height: 405.1px;
    width: 817px;
    border-radius: 25px;
    padding-left: 55px;
    padding-top: 40px;

    .banner-greet {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: #191818;
      font-size: 15.2px;
      font-weight: 400;

    .title {
      display: flex;
      flex-direction: column;
      text-align: left;
      font-weight: 900;
      font-size: 45.6px;
      word-spacing: 100vw;
      margin-bottom: 15px;
      line-height: 65px;
      z-index: 10;
      }
    }

    .tilted-background-white {
      background-color: #fff;
      transform: rotate(-2deg);
      position: absolute;
      width: 210px;
      height: 55px;
      top: 45px;
      left: 40px;
    }

    .titled-background-yellow {
      background-color: #EBD96B;
      transform: rotate(-2deg);
      position: absolute;
      width: 235px;
      height: 55px;
      top: 175px;
      left: 45px;
    }

    .shop-now-btn {
      position: absolute;
      bottom: 50px;
      left: 55px;
      color: #fff;
      background-color: #000000;
      border-radius: 4.75px;
      height: 38.95px;
      border: none;
      font-weight: 500;
      font-size: 14.25px;
      padding: 10px 16px;
    }
  }

  .brand-list {
    background-color: #ebd96b;
    height: 82px;
    display: flex;
    justify-content: space-between;
    padding: 20px 80px;
    align-items: center;
  }

  .second-section-header {
    display: flex;
    flex-direction: column;
    padding: 40px 70px;

    .new-arrivals {
      background-color: green;
      justify-content: flex-end;
      width: 40%;
      margin-bottom: 40px;
    }

    .card-list {
      display: flex;
      flex-direction: row;
      gap: 80px;

      .card {
        .image-container {
          height: 330px;
          width: 230px;
          border-radius: 10px;
          background-color: grey;
        }

        .card-content {
          margin-top: 14px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          font-weight: 500;
          font-size: 15px;
          letter-spacing: -4%;

          .explore-now {
            color: #7F7F7F;
            font-size: 11px;
          }
        }
      }
    }
  }
`;

const FashionLanding = () => {
  const [selectedTab, setSelectedTab] = useState("catalouge");

  return (
    <StyledContainer>
      <div className="first-section-header">
        <div className="nav-bar">
          <div>Icon</div>
          <div className="tabs-container">
            <div>Catalouge</div>
            <div>Fashion</div>
            <div>Favourite</div>
            <div>Lifestyle</div>
            <div>Signup</div>
          </div>
        </div>
        <div className="banner">
          <div className="banner-greet">
            <div className="title">LET'S
              EXPLORE
              UNIQUE
              CLOTHES.</div>
            <div> Live for influential and Innovative fashion!</div>
          </div>
          <button className="shop-now-btn">SHOP NOW</button>
          <div className="tilted-background-white"></div>
          <div className="titled-background-yellow"></div>
        </div>
      </div>
      <div className="brand-list">
        <div>Brand</div>
        <div>Brand</div>
        <div>Brand</div>
        <div>Brand</div>
        <div>Brand</div>
        <div>Brand</div>
      </div>
      <div className="second-section-header">
        <div className="new-arrivals">Icon</div>
        <div className="card-list">
        <div className="card">
          <div className="image-container">Yellow Girl</div>
          <div className="card-content">
            <div>Hoodies & Sweatshirt</div>
            <div className="explore-now">Explore Now!</div>
          </div>
        </div>
        <div className="card">
          <div className="image-container">Yellow Girl</div>
          <div className="card-content">
            <div>Hoodies & Sweatshirt</div>
            <div className="explore-now">Explore Now!</div>
          </div>
        </div>
        <div className="card">
          <div className="image-container">Yellow Girl</div>
          <div className="card-content">
            <div>Hoodies & Sweatshirt</div>
            <div className="explore-now">Explore Now!</div>
          </div>
        </div>

      </div>
      </div>

      

    </StyledContainer>
  );
};

export default FashionLanding;
