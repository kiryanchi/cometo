import { useEffect, useState } from 'react';
import * as S from './style'
import { Link } from 'react-router-dom';

export default function Nav() {
  const [logined, setLogined] = useState(false);
  useEffect(e => {
    setLogined(e => localStorage.getItem("logined"));
  }, []);
  return <S.Nav>
    <div className='left'>
      <Link to={'/'}>
        헬퍼
      </Link>
    </div>
    <div className='right'>
      {logined ? <div className='logined'>
        login
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