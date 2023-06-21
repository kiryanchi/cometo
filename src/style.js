import { styled } from "styled-components";

export const Main = styled.div`
background-color: white;
  width: 65vw;
  border: 1px solid black;
  border-top: none;
  margin: auto;
  .needhelp{
    border-bottom: 1px solid black;
    height: 480px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 140px;
    .left{
      margin-left: 20px;
      div{
        font-size: 38px;
        margin-bottom: 60px;
        span{
          color: #0071BB;
        }
      }
      a{
        background-color: #0071BB;
        text-decoration: none;
        color: white;
        font-size: 24px;
        padding: 30px 25px;
        border-radius: 10px;
      }
    }
    .img{
      img{
        width: 450px;
        object-fit: scale-down;
        border-radius: 316511px;
      }
    }
  }
.givehelp{
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 140px;
  .left{
    margin-left: 20px;
    div{
      font-size: 38px;
      margin-bottom: 60px;
      span{
        color: #0071BB;
      }
    }
    a{
      background-color: #0071BB;
      text-decoration: none;
      color: white;
      font-size: 24px;
      padding: 30px 25px;
      border-radius: 10px;
    }
  }
  .img{
    img{
      width: 450px;
      object-fit: scale-down;
    }
  }
}
`