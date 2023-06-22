import { useState } from 'react';
import Nav from '../../components/nav/page';
import * as S from './style'
import axios from 'axios';

export default function Login({ url }) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  return <>
    <Nav />
    <S.Login>
      <form className='form' onSubmit={async e => {
        e.preventDefault();
        if (id !== '' && pw !== '') {
          try {
            await axios.post(`${url}/user/login`, { email: id, password: pw })
              .then(e => {
                console.log(e.data);
              });
          } catch (e) {
            console.log(e);
          }
          localStorage.setItem('logined', JSON.stringify({ id: id, type: 'client' }));
          window.location.href = '/';
        }
        else {
          alert('아이디와 패스워드를 입력해주세요');
        }
      }}>
        <div>로그인</div><br />
        <input className='id' placeholder='이메일' onChange={e => setId(a => e.target.value)} value={id} />
        <input className='pw' placeholder='비밀번호' onChange={e => setPw(a => e.target.value)} value={pw} />
        <button className='kakao'>카카오로 로그인하기</button>
        <button >로그인</button>
      </form>
    </S.Login>
  </>;
}