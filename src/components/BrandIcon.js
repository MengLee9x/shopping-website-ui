import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const BrandIcon = ({ iconSrc }) => {
    return (
        <StyledContainer>
            <img src={iconSrc} alt="brand" />
        </StyledContainer>
    )
}

export default BrandIcon;