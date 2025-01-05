import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 60px 100px;

    .banner {
        display: flex;
        width: 50%;
        flex-direction: column;
        box-sizing: border-box;
        padding-left: 70px;
        
        h1 {
            color: black;
            line-height: 70px;
            font-size: 50px;
            word-spacing: 4px;
            letter-spacing: 2px;
            span {
                display: block;
            }
        }

        .app-promo {
            font-weight: 500;
            font-size: 22.5px;
            line-height: 30px;
            color: #7C7C7C;

            span {
                display: block;
            }
        }
            
        .button-container {
            display: flex;
            flex-direction: row;
            gap: 18px;
            margin-top: 25px;
        }
    }

    .mobile-app-image {
        flex: 1;
        img {
            display: flex;
            justify-self: center;
            width: 65%;
        }
    }
`

const StyledButton = styled.div`
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
     
    img {
        width: 210px;
    }
`

const Button = ({ iconAlt, iconSrc }) => {
    return (
        <StyledButton>
            <img src={iconSrc} alt={iconAlt} />
        </StyledButton>
    )
}

const AppDownloadPromo = () => {
    return (
        <StyledContainer>
            <div className="banner">
                <h1>
                    <span>DOWNLOAD APP &</span>
                    <span>GET THE VOUCHER!</span>
                </h1>
                <p className="app-promo">
                    <span>
                        Get 30% off for first transaction using
                    </span>
                    <span>
                        Rondovision mobile app for now.
                    </span>
                </p>
                <div className="button-container">
                    <Button iconSrc="/images/app-store-download.png" iconAlt="appStore" />
                    <Button iconSrc="/images/get-it-on-google-play.png" iconAlt="googlePlay" />
                </div>
            </div>
            <div className="mobile-app-image">
                <img src="/images/mobile_app.png" alt="mobile-app" />
            </div>
        </StyledContainer>
    )
}

export default AppDownloadPromo;