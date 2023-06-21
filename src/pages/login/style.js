import { styled } from "styled-components";

export const Login = styled.div`
  border: 1px solid black;
  border-top: none;
  background-color: white;
  width: 65vw;
  height: calc(100vh - 102px);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  .form{
    text-align: center;
    width: 30vw;
    height: 50vh;
    border-radius: 10px;
    border: 1px solid black;
    div{
      padding-top: 20px;
      font-size: 30px;
    }
    input{
      padding-left: 20px;
      margin-top: 20px;
      height: 6vh;
      width: 23vw;
      border-radius: 20000px;
    }
    button{
      cursor: pointer;
      margin-top: 20px;
      height: 6vh;
      border-radius: 20000px;
      width: 20vw;
      border: none;
      color: white;
      background-color: #0071BB;
    }
    .kakao{
      width: 15vw;
      height: 4vh;
      background-color: #FFD361;
      border: 1px solid black;
      color: black;
    }
  }
`