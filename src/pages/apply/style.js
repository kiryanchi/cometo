import { styled } from "styled-components";

export const Apply = styled.div`
  background-color: white;
  border: 1px solid black;
  border-top: none;
  width: 65vw;
  margin: auto;
  text-align: center;
  .mt{
    height: 1px;
  }
  h1{
    margin-top: 41px;
    margin-bottom: 20px;
    font-size: 35px;
  }
  hr{
    width: 80%;
  }
  .form{
    margin: auto;
    text-align: left;
    width: 80%;
    div{
      display: flex;
      align-items: center;
      input[type="checkbox"]{
        width: 30px;
        height: 30px;
      }
    }
    textarea{
      width: 50vw;
      height: 30vh;
    }
  }
  .reservation{
    display: flex;
    justify-content: center;
    .flex{
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      input{
        width: 200px;
      }
    }
  }
  .button{
    margin: auto;
    margin-top: 100px;
    width: 180px;
    background-color: #0071BB;
    text-decoration: none;
    color: white;
    font-size: 24px;
    padding: 30px 25px;
    border-radius: 10px;
    margin-bottom: 30px;
  }
`