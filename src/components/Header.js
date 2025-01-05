import styled from "styled-components";

const StyledHeader = styled.div`
    margin-bottom: 30px;

    .title {
        position: relative;
        zIndex: 10;
    }

    .styling {
        position: absolute;
        zIndex: 1;
    }
`

const Header = ({ imageSrc, alt, imageWidth }) => {
    return (
        <StyledHeader>
            <div className="title">
                <img
                    src={imageSrc}
                    alt={alt}
                    style={{ width: imageWidth, height: '100%', objectFit: 'cover' }}
                />
            </div>
        </StyledHeader>
    )
}

export default Header;