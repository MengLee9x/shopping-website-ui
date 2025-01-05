import FashionLanding from "../components/FashionLanding";
import SaleAdvertisement from "../components/SaleAdvertisement";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 80px 130px;
`

const HomePage = () => {
  return (
    <StyledWrapper>
      <FashionLanding />
    </StyledWrapper>
  );
};

export default HomePage;
