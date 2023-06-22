import { styled } from "styled-components";

export const Waiting = styled.div`
  background-color: white;
  border: 1px solid black;
  border-top: none;
  width: 65vw;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  .mt{
    height: 1px;
  }
  .Thanks{
    margin-top: 100px;
    text-align: center;
    p{
      margin-bottom: 50px;
      font-size: 25px;
    }
    .sign{
      width: 45vw;
      margin: auto;
      background-color: #C5DFEF;
      height: 30vh;
      font-size: 28px;
      p{
        margin-bottom:10px;
      }
    }
    img{
      margin-top: 200px;
      margin-bottom: 200px;
      width: 90%;
      object-fit: scale-down;
    }
  }
`