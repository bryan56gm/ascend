// Styled Component
import { createGlobalStyle } from 'styled-components'
// Config Styled Component
import { ColorsStyled } from '../config/colors.styled'
import { SizesStyled } from '../config/sizes.styled'

const GlobalStyles = createGlobalStyle`
    ${ColorsStyled}
    ${SizesStyled}

    html {
        scroll-behavior: smooth
    }

    body {
        background: var(--body-color);
        font-family: "Montserrat Alternates", sans-serif;
        font-size: var(--normal-font-size);
        color: var(--text-color);
        color: white;
        min-height: 100vh;
    }

    main{
        overflow: hidden;
        padding-top: var(--header-height);
    }

    strong {
        font-weight: inherit
    }

    p{
        font-size: clamp(14px, 4vw, 18px);
        line-height: 1.5rem;
    }

    h1, h2, h3, h4 {
        font-weight: var(--font-medium);
        margin: 0;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none
    }

    button,
    input {
        border: none;
        outline: none;
    }

    button {
        cursor: pointer;
        font-family: var(--body-font);
        font-size: var(--normal-font-size);
    }
`

export { GlobalStyles }
