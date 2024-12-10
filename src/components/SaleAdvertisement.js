import styled from "styled-components"

const StyledWrapper = styled.div`
    display: flex;
    background: conic-gradient(#E0C340, #DFC23E, #E1C441, #E3C743, #E4C542);
    height: 968px;
    font-size: 40px;

    .image {
        width: 50%;
    }
    .notification {
        width: 50%;
        padding: 130px 200px 70px 155px;

        .sale-banner-text {
            display: flex;
            flex-direction: column;
            font-weight: 900;
            font-size: 110px;
            word-spacing: 100vw;
            margin-bottom: 15px;
            line-height: 140px;
            z-index: 10;
        }
    }
`

const SaleAdvertisement = () => {

    return (
        <StyledWrapper>
            <div className="image">Hello</div>
            <div className="notification">
                <div className="sale-banner-text">
                    <div>PAYDAY</div>
                    <div>
                        SALE NOW
                    </div>
                </div>
                <div className="notification-content">
                    Spend minimal $100 get 30% off
                    voucher code for your next purchase
                    <span>1 June - 10 June 2021</span>
                    *Terms & Conditions apply
                </div>
                <div className="">

                </div>
            </div>
        </StyledWrapper>
    )
}

export default SaleAdvertisement;