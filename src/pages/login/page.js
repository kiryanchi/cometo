import { useState } from 'react';
import Nav from '../../components/nav/page';
import * as S from './style'

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  return <>
    <Nav />
    <S.Login>
      <form className='form' onSubmit={e => {
        e.preventDefault();
        console.log(id);
      }}>
        <div>로그인</div><br />
        <input className='id' onChange={e => setId(a => e.target.value)} value={id} />
        <input className='pw' onChange={e => setPw(a => e.target.value)} value={pw} />
        <button className='kakao'>카카오로 로그인하기</button>
        <button>제출</button>
      </form>
    </S.Login>
  </>;
}