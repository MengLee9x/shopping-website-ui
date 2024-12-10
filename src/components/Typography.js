import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`
  /* Import Poppins font with different weights */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;900&display=swap');

  /* Define color variables */
  :root {
    --primary-color: #FF5733;
    --secondary-color: #33C3FF;
    --accent-color: #FFC300;
    --text-color: #333333;
  }

  /* Base font styles */
  html {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: var(--text-color);
    line-height: 1.6;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 900; /* Poppins Black */
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  /* Paragraphs */
  p {
    font-weight: 400; /* Poppins Regular */
    font-size: 1rem;
    line-height: 1.8;
    color: var(--text-color);
    margin-bottom: 1.5rem;
  }

  /* Links */
  a {
    font-weight: 500; /* Poppins Medium */
    color: var(--secondary-color);
    text-decoration: none;
  }

  a:hover {
    color: var(--accent-color);
    text-decoration: underline;
  }

  /* Small text */
  small {
    font-size: 0.875rem;
    color: var(--text-color);
  }
`;

export default Typography;
