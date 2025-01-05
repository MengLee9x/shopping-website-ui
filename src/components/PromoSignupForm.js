import styled from 'styled-components';

const StyledContainer = styled.div`
    background-color: #E5C643;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 0;

    .newsletter-content {
        p {
            color: white;
            font-size: 25px;
            margin: 0 0;
        }
        h1 {
            color: white;

            margin-top: 0;
            span {

                justify-content: center;
                display: flex; 
            }
        }
    }

    .email-form {
        display: flex;
        align-items: center;
        background: white;
        padding: 4px 8px;
        border-radius: 10px;
        width: fit-content;
        margin: 30px;

        .email-input {
            border: none;
            background: transparent; 
            padding: 12px 12px;
            font-size: 20px;
            flex: 1;
            
            &::placeholder {
                color: #999;
                font-size: 18px;
            }

            &:focus {
                outline: none;
            }
        }

        .submit-button {
            padding: 12px 26px;
            background: black;
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: 500;
            font-size: 24px;
            cursor: pointer;
            text-transform: uppercase;
            &:hover {
                opacity: 0.9;
            }
        }   
    }
`

const PromoSignupForm = () => {
    return (
        <StyledContainer>
            <section className='newsletter-content'>
                <h1>
                    <span>
                        JOIN SHOPPING COMMUNITY TO
                    </span>
                    <span>
                        GET MONTHLY PROMO
                    </span>
                </h1>
                <p>Type your email down below and be young wild generation</p>
            </section>
            <form className="email-form">
                <input
                    type="email"
                    className="email-input"
                    placeholder="Add your email here"
                    aria-label="Email address"
                    required
                />
                <button
                    type="submit"
                    className="submit-button"
                >
                    SEND
                </button>
            </form>
        </StyledContainer>
    )
}

export default PromoSignupForm;