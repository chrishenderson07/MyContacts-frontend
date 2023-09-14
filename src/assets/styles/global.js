import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  :root {
  font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.gray[900]};
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
  }
`
