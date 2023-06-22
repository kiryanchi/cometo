import { styled } from "styled-components";

export const profile = styled.div`
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
  .main{
    display: flex;
    justify-content: space-between;
    .left{
      text-align: center;
      .box{
        margin-top: 20px;
        margin-bottom: 20px;
        width: 150px;
        font-size: 20px;
        border: 1px solid black;
      }
    }
    .inner{
      text-align: center;
      width: 50vw;
      img{
        width: 70%;
        object-fit: scale-down;
      }
      .req{
        width: 85%;
        padding-left: 20px;
        margin: auto;
        display: flex;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 20px;
        height: 50px;
        background-color: #C5DFEF;
        font-size: 20px;
        cursor: pointer;
      }
      .reqhelp{
        display: flex;
        img{
          width: 100px;
        }
        span{
          padding-top: 40px;
          font-size: 25px;
        }
      }
      .reqword{
        display: flex;
        align-items: center;  
        justify-content: center;
        margin-bottom: 80px;
        height: 200px;
        font-size: 20px;
        padding-left: 20px;
        background-color: #C5DFEF;
        p{
          padding: 5px;
        }
      }
      .buttons{
        margin-bottom: 100px;
        button{
          font-size: 20px;
          padding: 5px 20px;
          background-color: #0071BB;
          color: white;
        }
        .reject{
          background-color: #FFD361;
          color: black;
          margin-right: 50px;
        }
      }
      .clientinfo{
        margin-bottom: 80px;
        height: 200px;
        font-size: 20px;
        padding-left: 20px;
        margin-top: 30px;
        height: 250px;
        background-color: #C5DFEF;
        p{
          padding: 5px;
        }
      }
    }
  }
`