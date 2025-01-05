import styled from "styled-components";
import BrandIcon from "./BrandIcon";

const StyledContainer = styled.div`
    background-color: #ebd96b;
    height: 82px;
    display: flex;
    justify-content: space-between;
    padding: 20px 80px;
    align-items: center;
`

const BrandList = () => {
    return (
        <StyledContainer>
            <BrandIcon iconSrc="/images/h2m.png" />
            <BrandIcon iconSrc="/images/obey.png" />
            <BrandIcon iconSrc="/images/shopify.png" />
            <BrandIcon iconSrc="/images/lacoste.png" />
            <BrandIcon iconSrc="/images/levis.png" />
            <BrandIcon iconSrc="/images/amazon.png" />
        </StyledContainer>
    )
}

export default BrandList;