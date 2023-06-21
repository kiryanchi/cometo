import { useEffect, useState } from 'react';
import * as S from './style'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Nav() {
  const [logined, setLogined] = useState(false);
  useEffect(e => {
    setLogined(e => localStorage.getItem("logined"));
  }, []);
  return <S.Nav>
    <div className='left'>
      <Link to={'/'}>
        <img src={logo} alt='logo' />
      </Link>
    </div>
    <div className='middle'>
      <h1>헬퍼</h1>
      <span>
        당신의 삶의 플러스
      </span>
    </div>
    <div className='right'>
      {logined ? <div className='logined'>
        <Link to="/profile">{logined}</Link>
      </div> :
        <div className='unlogined'>
          <Link to='/behelper'>
            헬퍼 되기
          </Link>
          <Link to='/signup'>
            회원가입
          </Link>
          <Link to={'/login'}>
            로그인
          </Link>
        </div>}
    </div>
  </S.Nav>;
}