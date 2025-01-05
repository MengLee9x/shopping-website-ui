import styled from "styled-components"
import ShopNowButton from "./ShopNowButton"

const StyledWrapper = styled.div`
    display: flex;
    background: conic-gradient(#E0C340, #DFC23E, #E1C441, #E3C743, #E4C542);
    font-size: 40px;

    .image-container {
        flex: 1;
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .sale {
        padding: 100px 80px;
        width: 50%;
        box-sizing: border-box;
    
        h1 {
            margin-top: 0;
        }

        p {
            margin-bottom: 0;
            margin-top: 0;
            font-size: 27px;
            color: black;
        }

        .sale-banner-text {
            position: relative;
            font-size: 100px;
            color: black;
            line-height: 120px;
            word-spacing: -5px;
            
            span {
                display: block;
                position: relative;
                z-index: 2;
            }

            .tilted-background-white {
                background-color: #fff;
                transform: rotate(-2deg);
                position: absolute;
                width: 72%;
                height: 46%;
                top: 3px;
                left: -15px;
                z-index: 1;
            }
        }

        .sale-description {
            span {
                font-weight: 500;
                color: #231300;
                line-height: 40px;
                display: block;
            }
        }

        .sale-duration {
            margin-top: 15px;
            line-height: 40px;
            span {
            display: block;
            }
        }
    }
`

const SaleAdvertisement = () => {

    return (
        <StyledWrapper>
            <section className="image-container">
                <img src="/images/yellow-girl.png" alt="yellow-girl" className="image" />
            </section>
            <section className="sale">
                <h1 className="sale-banner-text">
                    <span>PAYDAY</span>
                    <span>SALE NOW</span>
                    <div className="tilted-background-white"></div>
                </h1>
                <p className="sale-description">
                    <span className="first-line">Spend minimal $100 get 30% off</span>
                    <span className="second-line">voucher code for your next purchase</span>
                </p>
                <p className="sale-duration">
                    <span><strong>1 June - 10 June 2021</strong></span>
                    <span>*Terms & Conditions apply</span>
                </p>
                <ShopNowButton text="SHOP NOW" />
            </section>
        </StyledWrapper>
    )
}

export default SaleAdvertisement;