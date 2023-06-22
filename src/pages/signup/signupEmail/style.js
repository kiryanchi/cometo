import { styled } from "styled-components";

export const Email = styled.div`
  padding-bottom: 30px;
  background-color: white;
  width: 65vw;
  margin: auto;
  border: 1px solid black;
  border-top: none;
  text-align: center;
  .mt{
    height: 1px;
  }
  h1{
    margin-top: 50px;
    font-size: 30px;
    margin-bottom: 10px;
  }
  hr{
    width: 60%;
  }
  .flexbox{
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: left;
    .left{
      font-size: 20px;
      p{
        display: flex;
        height: 30px;
        margin-bottom: 30px;
        width: 80px;
        margin-top: 0;
      }
    }
    .middleInput{
      width: 60%;
      input{
        height: 30px;
        margin-bottom: 20px;
        width: 320px;
        &[type="checkbox"]{
          margin: 0 50px;
          width: 30px;
        }
      }
      .id{
        width: 150px;
      }
      .domain{
        width: 150px;
      }
      .birthday{
        margin-top: 30px;
      }
    }
    .right{
      width: 170px;
      display: flex;
      flex-wrap: wrap;
      select{
        height: 30px;
        width: 90px;
        margin-right: 5px;
      }
      .button{
        height: 30px;
        background-color: #EAD5C3;
        display: flex;
        width: 70px;
        align-items: center;
        justify-content: center;
      }
      .address{
        margin-top:110px;
      }
    }
  }
  .done{
    background-color: #0071BB;
    width: 350px;
    border-radius: 897645312px;
    height: 60px;
    color: white;
    border: none;
    font-size: 20px;
    cursor: pointer;
    &:active{
      background-color: #0070bbc7;
    }
  }
`