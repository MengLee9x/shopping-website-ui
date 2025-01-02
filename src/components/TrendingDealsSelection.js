import CategoryShowcaseCard from "./CategoryShowcaseCard";
import Header from "./Header";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 70px 80px 70px;

    .card-container {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        gap: 47px;
    }
`

const TrendingDealsSelection = () => {
    return (
        <StyledContainer>
            <Header imageSrc="/images/youngs-favourite.png" alt="young-favourite" imageWidth="30%" />
            <div className="card-container">
                <CategoryShowcaseCard imageSrc="/images/trending-insta.png" title="Trending on instagram" />
                <CategoryShowcaseCard imageSrc="/images/under-40.png" title="All Under $40" />
            </div>
        </StyledContainer>
    )
}

export default TrendingDealsSelection;