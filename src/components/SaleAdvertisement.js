import styled from "styled-components"

const StyledWrapper = styled.div`
    display: flex;
    background: conic-gradient(#E0C340, #DFC23E, #E1C441, #E3C743, #E4C542);
    height: 968px;

    .image {
        width: 50%;
    }
`

const SaleAdvertisement = () => {

    return (
        <StyledWrapper>
            <div className="image">Hello</div>
            <div className="notification">
                content
            </div>
        </StyledWrapper>
    )
}

export default SaleAdvertisement;