import styled from "styled-components"

const StyledButton = styled.button`
    color: #fff;
    margin-top: 20px;
    background-color: #000000;
    border-radius: 4.75px;
    height: 38.95px;
    border: none;
    font-weight: 500;
    font-size: 14.25px;
    padding: 10px 16px;
`

const ShopNowButton = () => {
    return (
        <StyledButton onClick={() => console.log("shopy shop")}>
            SHOP NOW
        </StyledButton>
    )
}

export default ShopNowButton;
