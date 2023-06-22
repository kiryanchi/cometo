import { useState } from "react";
import Nav from "../../components/nav/page";
import * as S from './style';

export default function Behelper() {
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
    birthday: null,
    profile: null,
    belong: null,
    proof: null,
    prootfile: null,
    introduce: null
  });
  return <>
    <Nav />
    <S.Behelper>
      <div className="mt" />
      <h1>
        헬퍼 정보 입력
      </h1>
      <span>헬퍼님의 기본정보 프로필 입력까지<br />꼼꼼하게 입력해주세요.</span>
      <hr />
      <div className="flexbox">
        <div className="left">
          이메일
        </div>
        <div className="middleInput">
          <input className="id" value={list.email_id} onChange={e => setList(a => ({ ...a, email_id: e.target.value }))} />
          @<input className="domain" value={list.email_domain} onChange={e => setList(a => ({ ...a, email_domain: e.target.value }))} />
          <input className="verifynumber" value={list.verifynum} onChange={e => setList(a => ({ ...a, verifynum: e.target.value }))} placeholder="인증번호를 확인해주세요" />
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
      <div className="flexbox">
        <div className="left">
          비밀번호
        </div>
        <div className="middleInput">
          <input className="pw" value={list.pw} onChange={e => setList(a => ({ ...a, pw: e.target.value }))} placeholder="비밀번호 입력" />
          <input className="re pw" value={list.re_pw} onChange={e => setList(a => ({ ...a, re_pw: e.target.value }))} placeholder="비밀번호 재입력" />
        </div>
      </div>
      <div className="flexbox">
        <div className="left">
          <p>이름</p>
          <p>휴대전화</p>
          <p>주소</p>
        </div>
        <div className="middleInput">
          <input className="name" value={list.name} onChange={e => setList(a => ({ ...a, name: e.target.value }))} placeholder="이름 입력" />
          <input className="phone" value={list.phone} onChange={e => setList(a => ({ ...a, phone: e.target.value }))} />
          <input className="address" value={list.address} onChange={e => setList(a => ({ ...a, address: e.target.value }))} placeholder="주소 입력" />
          <input className="addressdetail" value={list.addressDetail} onChange={e => setList(a => ({ ...a, addressDetail: e.target.value }))} placeholder="상세 주소 입력" />
        </div>
        <div className="right">
          <div className="address button">
            검색
          </div>
        </div>
      </div>
      <div className="flexbox">
        <div className="left">
          <p>성별</p>
          <p>생년월일</p>
        </div>
        <div className="middleInput">
          <input type="checkbox" onClick={e => setList(a => ({ ...a, gender: 'male' }))} checked={list.gender === 'male'} />남
          <input type="checkbox" onClick={e => setList(a => ({ ...a, gender: 'female' }))} checked={list.gender === 'female'} />여
          <input className="birthday" onChange={e => setList(a => ({ ...a, birthday: e.target.value }))} value={list.birthday} placeholder="생년월일" />
        </div>
      </div>
      <h1>프로필 입력</h1>
      <hr />
      <div className="flexbox">
        <div className="left">
          <p>프로필 사진</p>
          <p>소속기관</p>
          <p>자격 증명</p>
        </div>
        <div className="middleInput">
          <input className="profile" value={list.profile} onChange={e => setList(a => ({ ...a, profile: e.target.value }))} />
          <input className="proot" value={list.proof} onChange={e => setList(a => ({ ...a, proof: e.target.value }))} />
          <input className="prooffile" type="file" value={list.prootfile} onChange={e => setList(a => ({ ...a, prootfile: e.target.value }))} />
          <input className="addressdetail" value={list.addressDetail} onChange={e => setList(a => ({ ...a, addressDetail: e.target.value }))} />
        </div>
        <div className="right">
          <div className="file button">
            파일 선택
          </div>
        </div>
      </div>
      <div className="flexbox">
        <div className="left">
          자기 소개
        </div>
        <div className="middleInput">
          <textarea value={list.addressDetail} onChange={e => setList(a => ({ ...a, addressDetail: e.target.value }))} />
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
    </S.Behelper>
  </>;
}