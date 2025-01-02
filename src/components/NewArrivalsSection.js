import Header from "./Header"
import CategoryShowcaseCard from "./CategoryShowcaseCard"
import styled from "styled-components"

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 70px 80px 70px;

    .card-container {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        gap: 80px;
    }
`

const NewArrivalsSection = () => {
    return (
        <StyledContainer>
            <Header imageSrc="/images/new-arrivals.png" alt="new-arrivals" imageWidth="22%" />
            <div className="card-container">
                <CategoryShowcaseCard imageSrc="/images/hoodies.png" title="Hoodies & Sweatshirt" />
                <CategoryShowcaseCard imageSrc="/images/coats.png" title="Coats & Parkas" />
                <CategoryShowcaseCard imageSrc="/images/t-shirt.png" title="Tees & T-Shirt" />
            </div>
        </StyledContainer>
    )
}

export default NewArrivalsSection