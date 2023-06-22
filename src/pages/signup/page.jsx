import Nav from "../../components/nav/page";
import * as S from './style';
import kakao from '../../assets/kakao.png';
import email from '../../assets/email.png';
import profiel from '../../assets/profile.png';
import { Link } from "react-router-dom";

export default function Signup() {
  return <>
    <Nav />
    <S.Signup>
      <div className="inner">
        <h1>회원가입</h1>
        <span>원하시는 회원가입 방법을 선택해주세요</span>
        <button className="kakao"><img src={kakao} alt="kakao" />&nbsp;카카오로 간편 가입</button>
        <Link to={'/signup/email'}>
          <button className="email"><img src={email} alt='email' />&nbsp;이메일로 간편 가입</button>
        </Link>
        <hr />
        <div className="bottom">
          <img src={profiel} alt="profile" /> 이미 가입된 계정이 있으신가요?
          <Link to='/login'>
            <div className="loginbutton" >
              로그인
            </div>
          </Link>
        </div>
      </div>
    </S.Signup>
  </>;
}