import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;

    .banner {
        width: 50%;
        display: flex;
        flex-direction: column;
        
        .sub-title {
            font-weight: 500;
            font-size: 24px;
            line-height: 35px;
            color: #7C7C7C;
        }
            
        .button-container {
            display: flex;
            flex-direction: row;
            gap: 20px;
        }
    }
`

const StyledButton = styled.div`
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
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
                <div>
                    DOWNLOAD APP & GET THE VOUCHER!
                </div>
                <div className="sub-title">
                    Get 30% off for first transaction using Rondovision mobile app for now.
                </div>
                <div className="button-container">
                    <Button iconSrc="/images/app-store-download.png" iconAlt="appStore" />
                    <Button iconSrc="/images/get-it-on-google-play.png" iconAlt="googlePlay" />
                </div>
            </div>
            <div className="mobile-image">

            </div>
        </StyledContainer>
    )
}

export default AppDownloadPromo;