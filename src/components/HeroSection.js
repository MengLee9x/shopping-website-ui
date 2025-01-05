import { useState } from "react";
import styled from "styled-components";
import ShopNowButton from "./ShopNowButton";

const StyledContainer = styled.div`
    padding: 30px 70px 40px 70px;

    .nav-bar {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }
    
      .tabs-container {
        display: flex; 
        justify-content: flex-end; 
        gap: 45px;
        font-weight: 500;
        font-size: 18px;
        align-items: center;
        list-style-type: none;

        .tab-item {
            cursor: pointer;
        }

        .sign-up {
            background: black;
            color: white;
            font-weight: 500;
            font-size: 18px;
            border-radius: 7px;
            padding: 10px 20px;
        }
      }
    
      .right-aligned-container div {
        padding: 10px; 
        background-color: lightgray;
        border: 1px solid #ccc; 
      }
    
      .banner {
        position: relative;
        background-color: #f4f6f5;
        color: white;
        height: 600px;
        border-radius: 25px;
        padding: 70px 0 30px 85px;
    
        .banner-greet {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          p {
            margin-top: 0;
            margin-bottom: 10px;
            font-size: 24px;
            font-weight: 400;
            color: #191818;
          }
    
        .title {
          display: flex;
          flex-direction: column;
          text-align: left;
          font-weight: 900;
          font-size: 80px;
          word-spacing: 100vw;
          margin-bottom: 15px;
          line-height: 100px;
          z-index: 10;
          color: black;
          }
        }
    
        .tilted-background-white {
          background-color: #fff;
          transform: rotate(-2deg);
          position: absolute;
          width: 380px;
          height: 90px;
          top: 70px;
          left: 60px;
        }
    
        .titled-background-yellow {
          background-color: #EBD96B;
          transform: rotate(-2deg);
          position: absolute;
          width: 415px;
          height: 95px;
          top: 267px;
          left: 65px;
        }

        .image {
            position: absolute;
            top: 75px;
            right: 70px;

            img {
              width: 700px;
            }
        }
      }
`

const HeroSection = () => {
  return (
    <StyledContainer>
      <div className="nav-bar">
        <div style={{ alignSelf: "center" }}>
          <img src="/images/fashion-icon.png" alt="fashion-icon" style={{ height: "42px" }} />
        </div>
        <ul className="tabs-container">
          <li className="tab-item">CATALOGUE</li>
          <li className="tab-item">FASHION</li>
          <li className="tab-item">FAVOURITE</li>
          <li className="tab-item">LIFESTYLE</li>
          <li className="sign-up">SIGN UP</li>
        </ul>
      </div>
      <div className="banner">
        <div className="banner-greet">
          <div className="title">LET'S
            EXPLORE
            UNIQUE
            CLOTHES.</div>
          <p className="statement">Live for influential and Innovative fashion!</p>
        </div>
        <ShopNowButton text="Shop Now" />
        <div className="tilted-background-white"></div>
        <div className="titled-background-yellow"></div>
        <div className="image">
          <img src="/images/hero-section-girl.png" alt="hero-section" />
        </div>
      </div>
    </StyledContainer>
  )
}

export default HeroSection;