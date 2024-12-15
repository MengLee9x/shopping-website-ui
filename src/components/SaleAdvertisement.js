import styled from "styled-components"
import ShopNowButton from "./ShopNowButton"

const StyledWrapper = styled.div`
    display: flex;
    background: conic-gradient(#E0C340, #DFC23E, #E1C441, #E3C743, #E4C542);
    height: 968px;
    font-size: 40px;

    .image {
        width: 50%;
        position: relative;
    }
    .sale {
        position: relative;
        width: 50%;
        z-index: 10;

        p {
            margin-bottom: 0;
            margin-top: 0;
        }

        span {
            display: block;
        }

        .sale-banner-text {
            position: relative;
            font-size: 110px;
            line-height: 120px;
            color: black;
            word-spacing: -20px;
            z-index: 10; 
        }

        .sale-description {
            font-size: 1rem;
        }

        .tilted-background-white {
            background-color: #fff;
            transform: rotate(-2deg);
            position: absolute;
            width: 60%;
            height: 10%;
            top: 45px;
            left: 40px;
            z-index: 1;
        }

    }
`

const SaleAdvertisement = () => {

    return (
        <StyledWrapper>
            <div className="image"></div>
            
            <section className="sale">
                <h1 className="sale-banner-text">
                    <span>PAYDAY</span>
                    <span>SALE NOW</span>
                <div className="tilted-background-white"></div>

                </h1>
                <p className="sale-description">
                    <span>Spend minimal $100 get 30% off</span>
                    <span>voucher code for your next purchase</span>
                </p>
                <p><strong>1 June - 10 June 2021</strong></p>
                <p>*Terms & Conditions apply</p>
                    
                <ShopNowButton />
            </section>
        </StyledWrapper>
    )
}

export default SaleAdvertisement;