import { styled } from "styled-components";

export const Symptom = styled.div`
  background-color: white;
  border: 1px solid black;
  border-top: none;
  height: calc(100vh - 102px);
  width: 65vw;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .left{
    width: 18%;
    .checks{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      input{
        &[type="checkbox"]{
          width: 30px;
          height: 30px;
          cursor: pointer;
        }
      }
    }
    .button{
      margin-top: 100px;
      width: 180px;
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
      width: 60vh;
      object-fit: scale-down;
    }
  }
`