import styled from "styled-components";

const StyledContainer = styled.div`
    background-color: black;
    height: 500px;
    padding: 30px 70px 40px 70px;
    display: flex;

    .footer-tagline {
        width: 50%;
            margin-left: 50px;
            margin-top: 70px;
        h1 {
            color: white;
        }
        
        p {
            color: #8E8E8E
        }

        .social-media-links-container {
            display: flex;
            gap: 15px;
        }
    }


`

const Footer = () => {
    return (
        <StyledContainer>
            <section className="footer-tagline">
                <h1>FASHION</h1>

                <p>Complete your style with awesome clothes from us.</p>
                <div className="social-media-links-container">
                    <img src="/images/facebook-icon.png" alt="facebook" />
                    <img src="/images/insta-icon.png" alt="insta" />
                    <img src="/images/twitter-icon.png" alt="twitter" />
                    <img src="/images/linked-icon.png" alt="linked" />
                </div>
            </section>
        </StyledContainer>
    )
}

export default Footer;