import { styled } from "styled-components";

export const Nav = styled.div`
  background-color: white;
  width: 65vw;
  border-top: none;
  height: 100px;
  margin: auto;
  display: flex;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  justify-content: space-around;
  align-items: center;
  .left{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 100%;
    a{
      text-decoration: none;
      display: flex;
      img{
        object-fit: scale-down;
        padding: -1px;
        width: 70px;
      }
    }
  }
  .middle{
    text-align: center;
    margin: 180px;
    color: #96C5E3;
    h1{
      font-size: 30px;
      margin-bottom: 10px;
    }
    span{
      font-size: 18px;
    }
  }
  .right{
    width: 300px;
    display: flex;
    align-items: center;
    height: 100%;
    .unlogined{
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      a{
        color: black;
        text-decoration: none;
        &:active{
          margin-top: 2px;
        }
      }
    }
    .logined{
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      a{
        text-decoration: none;
        color: black;
        &:active{
          margin-top: 2px;
        }
      }
    }
  }
`