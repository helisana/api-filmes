import Styled from "styled-components"

export const Container = Styled.div`
  padding: 2rem 0;

  h2 {
    text-align: center;
    margin: 40px 0;
    font-size: 40px;

  img {
    width: 180px;
    border-radius: 3px;
    margin-bottom: 2rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }

  a {    
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }

`

export const MovieList = Styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 5rem;
`

export const Movie = Styled.li `
    display: flex;
    flex-flow: column;

    align-items: center;
  img {
    width: 180px;
    border-radius: 3px;
    margin-bottom: 1.5rem;
  }

  span {
    font-weight: 500;
    font-size: 120%;
    text-align: center;
  }

  a {    
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }

`