import FashionLanding from "../components/FashionLanding";
import SaleAdvertisement from "../components/SaleAdvertisement";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 80px 130px;
`

const HomePage = () => {
  return (
    <StyledWrapper>
      <div className="landing-page">
        <FashionLanding />
      </div>
    </StyledWrapper>
  );
};

export default HomePage;
