import styled from "styled-components";
import HeroSection from "./HeroSection";
import NewArrivalsSection from "./NewArrivalsSection";
import TrendingDealsSelection from "./TrendingDealsSelection";
import SaleAdvertisement from "./SaleAdvertisement";
import AppDownloadPromo from "./AppDownloadPromo";
import PromoSignUpForm from "./PromoSignupForm";
import BrandList from "./BrandList";
import Footer from "./Footer";

const StyledContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: white;
  height: 100%;
  width: fit-content;
  border-radius: 20px;
  overflow: hidden;
`;

const FashionLanding = () => {

  return (
    <StyledContainer>
      <HeroSection />
      <BrandList />
      <NewArrivalsSection />
      <SaleAdvertisement />
      <TrendingDealsSelection />
      <AppDownloadPromo />
      <PromoSignUpForm />
      <Footer />
    </StyledContainer>
  );
};

export default FashionLanding;
