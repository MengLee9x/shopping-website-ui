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
        height: 405.1px;
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

        .image {
            position: absolute;
            top: 67px;
            right: 100px;
        }
      }
`

const HeroSection = () => {
    const [selectedTab, setSelectedTab] = useState("catalogue")

    return (
        <StyledContainer>
            <div className="nav-bar">
                <div style={{ alignSelf: "center"}}>
                    <img src="/images/fashion-icon.png" alt="fashion-icon" style={{ height: "42px" }}/>
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
                    <div> Live for influential and Innovative fashion!</div>
                </div>
                <ShopNowButton />
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