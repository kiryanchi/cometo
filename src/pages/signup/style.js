import { styled } from "styled-components";

export const Signup = styled.div`
  height: calc(100vh - 102px);
  background-color: white;
  width: 65vw;
  border: 1px solid black;
  border-top: none;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  .inner{
    border: 1px solid black;
    width: 27vw;
    height: 70vh;
    text-align: center;
    h1{
      margin-top: 70px;
      font-size: 25px;
      margin-bottom: 20px;
    }
    hr{
      width: 80%;
      margin-top: 100px;
    }
    a{
      text-decoration: none;
    }
    button{
      cursor: pointer;
      margin: auto;
      margin-top: 30px;
      margin-bottom: 30px;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 7vh;
      border-radius: 20000px;
      width: 20vw;
      background-color: white;
      img{
        width: 30px;
        object-fit: scale-down;
      }
    }
    .kakao{
      background-color: #FFE661;
    }
    .bottom{
      display: flex;
      width: 90%;
      margin: auto;
      margin-top: 30px;
      justify-content: space-around;
      align-items: center;
      img{
        width: 30px;
        object-fit: scale-down;
      }
      a{
        text-decoration: none;
        color: #0071BB;
        div{
          border: 1px solid #0071BB;
          padding: 5px 20px;
        }
      }
    }
  }
`