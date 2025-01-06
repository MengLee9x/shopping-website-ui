import styled from "styled-components";

const StyledContainer = styled.div`
    background-color: black;
    height: 500px;
    padding: 30px 70px 40px 70px;
    display: flex;

    .footer-tagline {
        width: 50%;
        margin-left: 50px;
        margin-top: 80px;

        h1 {
            color: white;
            margin-top: 0;
        }
        
        p {
            color: #8E8E8E;
            font-size: 20px;
        }

        .social-media-links-container {
            display: flex;
            gap: 15px;
        }
    }

    .footer-navigation {
        display: flex;
        justify-content: space-between;
        flex: 1;
        margin-top: 80px;
    }

    .footer-column {
        flex: 1; 
        display: flex;
        flex-direction: column; 
    }
      
    .footer-column__header {
        font-size: 20px;
        
        margin-bottom: 25px;
        margin-top: 5px;
        color: white;
    }
      
    .footer-column__list {
        list-style: none;
        padding: 0;
        margin: 0;
        color: #7A7A7A;
        font-size: 20px;
    }

    .footer-column__list li {
        margin-bottom: 25px;
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
            <section className="footer-navigation">
                <div class="footer-column">
                    <h3 class="footer-column__header">Company</h3>
                    <ul class="footer-column__list">
                        <li>About</li>
                        <li>Contact us</li>
                        <li>Support</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3 class="footer-column__header">Quick Links</h3>
                    <ul class="footer-column__list">
                        <li>Share Location</li>
                        <li>Orders Tracking</li>
                        <li>Size Guide</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3 class="footer-column__header">Legal</h3>
                    <ul class="footer-column__list">
                        <li>Terms & conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </section>
        </StyledContainer>
    )
}

export default Footer;