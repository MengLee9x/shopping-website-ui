import FashionLanding from "../components/FashionLanding";
import SaleAdvertisement from "../components/SaleAdvertisement";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding-top: 80px;
  padding-left: 130px;
`

const HomePage = () => {
  return (
    <StyledWrapper>
      <div className="landing-page">
        <FashionLanding />
      </div>
      <SaleAdvertisement />
    </StyledWrapper>
  );
};

export default HomePage;
