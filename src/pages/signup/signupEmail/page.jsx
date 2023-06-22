import { useState } from "react";
import Nav from "../../../components/nav/page";
import * as S from './style';

export default function SignupEmail() {
  const [list, setList] = useState({
    email_id: null,
    email_domain: null,
    verifynum: null,
    pw: null,
    re_pw: null,
    name: null,
    phone: null,
    address: null,
    addressDetail: null,
    gender: null,
    birthday: null
  });
  return <>
    <Nav />
    <S.Email>
      <div className="mt" />
      <h1>
        회원가입
      </h1>
      <hr />
      <div className="flexbox">
        <div className="left">
          이메일
        </div>
        <div className="middleInput">
          <input className="id" value={list.email_id} onChange={e => setList(a => ({ ...a, email_id: e.target.value }))} />
          @<input className="domain" value={list.email_domain} onChange={e => setList(a => ({ ...a, email_domain: e.target.value }))} />
          <input className="verifynumber" value={list.verifynum} onChange={e => setList(a => ({ ...a, verifynum: e.target.value }))} />
        </div>
        <div className="right">
          <select onChange={e => setList(a => ({ ...a, email_domain: e.target.value }))}>
            <option>선택해주세요</option>
            <option value={'naver.com'}>naver.com</option>
            <option value={'daum.com'}>daum.com</option>
            <option value={'nate.net'}>nate.net</option>
            <option value={'google.com'}>google.com</option>
          </select>
          <div className="button">
            중복확인
          </div>
          <div className="button">
            인증확인
          </div>
        </div>
      </div>
      <hr />
      <div className="flexbox">
        <div className="left">
          비밀번호
        </div>
        <div className="middleInput">
          <input className="pw" value={list.pw} onChange={e => setList(a => ({ ...a, pw: e.target.value }))} />
          <input className="re pw" value={list.re_pw} onChange={e => setList(a => ({ ...a, re_pw: e.target.value }))} />
        </div>
      </div>
      <hr />
      <div className="flexbox">
        <div className="left">
          <p>이름</p>
          <p>휴대전화</p>
          <p>주소</p>
        </div>
        <div className="middleInput">
          <input className="name" value={list.name} onChange={e => setList(a => ({ ...a, name: e.target.value }))} />
          <input className="phone" value={list.phone} onChange={e => setList(a => ({ ...a, phone: e.target.value }))} />
          <input className="address" value={list.address} onChange={e => setList(a => ({ ...a, address: e.target.value }))} />
          <input className="addressdetail" value={list.addressDetail} onChange={e => setList(a => ({ ...a, addressDetail: e.target.value }))} />
        </div>
        <div className="right">
          <div className="address button">
            검색
          </div>
        </div>
      </div>
      <hr />
      <div className="flexbox">
        <div className="left">
          <p>성별</p>
          <p>생년월일</p>
        </div>
        <div className="middleInput">
          <input type="checkbox" onClick={e => setList(a => ({ ...a, gender: 'male' }))} checked={list.gender === 'male'} />남
          <input type="checkbox" onClick={e => setList(a => ({ ...a, gender: 'female' }))} checked={list.gender === 'female'} />여
          <input className="birthday" onChange={e => setList(a => ({ ...a, birthday: e.target.value }))} value={list.birthday} />
        </div>
      </div>
      <button className="done" onClick={e => {
        if (list.address && list.addressDetail && list.birthday && list.email_domain &&
          list.email_id && list.gender && list.name && list.phone && list.pw && list.re_pw &&
          list.verifynum) {
          alert('회원가입이 완료되었습니다.');
          window.location.href = '/login';
        }
        else {
          alert('모든 항목을 모두 작성해 주세요');
        }
      }}>가입완료</button>
    </S.Email>
  </>;
}