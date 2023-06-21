import { styled } from "styled-components";

export const Nav = styled.div`
  width: 65vw;
  border: 1px solid black;
  border-top: none;
  height: 100px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .left{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    width: 200px;
    height: 100%;
    border: 1px solid black;
    a{
      text-decoration: none;
      color: black;
    }
  }
  .right{
    width: 300px;
    display: flex;
    align-items: center;
    height: 100%;
    border: 1px solid black;
    margin-left: 400px;
    .unlogined{
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      a{
        text-decoration: none;
        &:active{
          margin-top: 2px;
        }
      }
    }
  }
`