import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 0

  h2 {
    margin: 2rem 0;
  }

  .movie {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 300px;
    border-radius: 10px;
  }

  .movie__details {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    margin-left: 3rem;
    max-width: 50%;
  }

  .movie__details h2 {
    margin: 2rem 0;
  }

  button {
    background-color: #6654da;
    border: none;
    border-radio: 2px;
    color: #fff;
    font-size: 18px;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    transition: all 0.3s;
    cursor: pointer;
  }

  buttom:hover {
    background-color: #584582;
  }
  
  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 120%
  }

  .lancamento {
    font-size: 100%;
    opacity: 0.5
  }
`