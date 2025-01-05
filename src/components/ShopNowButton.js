import styled from "styled-components"

const StyledButton = styled.button`
    color: #fff;
    margin-top: 20px;
    background-color: #000000;
    border-radius: 4.75px;
    height: 60px;
    border: none;
    font-weight: 600;
    font-size: 20px;
    padding: 16px 25px;
`

const ShopNowButton = ({ text }) => {
    return (
        <StyledButton onClick={() => console.log("shopy shop")}>
            {text}
        </StyledButton>
    )
}

export default ShopNowButton;
