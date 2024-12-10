<<<<<<< HEAD
import NavigationMenu from "../components/NavigationMenu";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <NavigationMenu />
    </div>
=======
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
>>>>>>> 431442927996b7724b26b83cdbfd98f7465da719
  );
};

export default HomePage;
