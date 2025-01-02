import styled from "styled-components";

const StyledCardContainer = styled.div`
    .image-container {
        border-radius: 10px;
    }

    .card-content {
        margin-top: 14px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-weight: 500;
        font-size: 15px;
        letter-spacing: -4%;

        .explore-now {
        color: #7F7F7F;
        font-size: 11px;
        }
    }
`

const CategoryShowcaseCard = ({ title, imageSrc, width }) => {
    return (
        <StyledCardContainer>
            <div className="image-container">
                <img
                    src={imageSrc}
                    alt="products"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
                />
            </div>
            <div className="card-content">
                <div>{title}</div>
                <div className="explore-now">Explore Now!</div>
            </div>
        </StyledCardContainer>
    )
}

export default CategoryShowcaseCard;