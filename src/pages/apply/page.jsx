import { useEffect, useState } from 'react';
import Nav from '../../components/nav/page';
import * as S from './style';

export default function Apply() {
  const [infos, setInfos] = useState({});
  const [pushes, setPushed] = useState({
    head: [],
    knee: [],
    neck: [],
    arms: [],
    foot: [],
    toes: [],
    hand: [],
    legs: [],
    body: [],
    etcs: '',
    hour: null,
    date: null,
    name: null
  });
  useEffect(e => {
    setInfos(JSON.parse(localStorage.getItem('bodylist')));
  }, []);
  return <>
    <Nav />
    <S.Apply>
      <div className='mt' />
      <h1>병원 헬퍼 서비스 신청하기</h1>
      <hr />
      {infos?.head &&
        <div className='form'>
          <h1>머리가 어떻게 아프신가요?</h1>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.head.push(e.target.value);
              setPushed(asdf);
            }} />발열
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.head.push(e.target.value);
              setPushed(asdf);
            }} />두통
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.head.push(e.target.value);
              setPushed(asdf);
            }} />어지러움
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.head.push(e.target.value);
              setPushed(asdf);
            }} />귀가 먹먹함
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.head.push(e.target.value);
              setPushed(asdf);
            }} />앞이 잘 안 보임
          </div>
        </div>
      }
      {infos?.knee &&
        <div className='form'>
          <h1>무릎이 어떻게 아프신가요?</h1>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.knee.push(e.target.value);
              setPushed(asdf);
            }} />골절
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.knee.push(e.target.value);
              setPushed(asdf);
            }} />골다공증
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.knee.push(e.target.value);
              setPushed(asdf);
            }} />통증
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.knee.push(e.target.value);
              setPushed(asdf);
            }} />떨림
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.knee.push(e.target.value);
              setPushed(asdf);
            }} />저림
          </div>
        </div>
      }
      {infos?.neck &&
        <div className='form'>
          <h1>목이 어떻게 아프신가요?</h1>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.neck.push(e.target.value);
              setPushed(asdf);
            }} />기침, 콧물
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.neck.push(e.target.value);
              setPushed(asdf);
            }} />비염
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.neck.push(e.target.value);
              setPushed(asdf);
            }} />성대결절
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.neck.push(e.target.value);
              setPushed(asdf);
            }} />침을 못 삼킴
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.neck.push(e.target.value);
              setPushed(asdf);
            }} />어지러움
          </div>
        </div>
      }
      {infos?.arms &&
        <div className='form'>
          <h1>팔이 어떻게 아프신가요?</h1>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.arms.push(e.target.value);
              setPushed(asdf);
            }} />쥐 남
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.arms.push(e.target.value);
              setPushed(asdf);
            }} />멍이 들고 안 빠짐
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.arms.push(e.target.value);
              setPushed(asdf);
            }} />통증
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.arms.push(e.target.value);
              setPushed(asdf);
            }} />골정
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.arms.push(e.target.value);
              setPushed(asdf);
            }} />반응 속도가 느림
          </div>
        </div>
      }
      {infos?.foot &&
        <div className='form'>
          <h1>발이 어떻게 아프신가요?</h1>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.foot.push(e.target.value);
              setPushed(asdf);
            }} />족저 근막염
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.foot.push(e.target.value);
              setPushed(asdf);
            }} />통증
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.foot.push(e.target.value);
              setPushed(asdf);
            }} />쥐가 남
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.foot.push(e.target.value);
              setPushed(asdf);
            }} />발등에 찍힘
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.foot.push(e.target.value);
              setPushed(asdf);
            }} />화상
          </div>
        </div>
      }
      {infos?.toes &&
        <div className='form'>
          <h1>발가락 어떻게 아프신가요?</h1>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.toes.push(e.target.value);
              setPushed(asdf);
            }} />내성발톰
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.toes.push(e.target.value);
              setPushed(asdf);
            }} />발톱 빠짐
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.toes.push(e.target.value);
              setPushed(asdf);
            }} />곪음
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.toes.push(e.target.value);
              setPushed(asdf);
            }} />무좀
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.toes.push(e.target.value);
              setPushed(asdf);
            }} />멍이 듬
          </div>
        </div>
      }
      {infos?.hand &&
        <div className='form'>
          <h1>손이 어떻게 아프신가요?</h1>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.hand.push(e.target.value);
              setPushed(asdf);
            }} />관절염
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.hand.push(e.target.value);
              setPushed(asdf);
            }} />통증
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.hand.push(e.target.value);
              setPushed(asdf);
            }} />부음
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.hand.push(e.target.value);
              setPushed(asdf);
            }} />골절
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.hand.push(e.target.value);
              setPushed(asdf);
            }} />손톱 빠짐
          </div>
        </div>
      }
      {infos?.legs &&
        <div className='form'>
          <h1>다리가 어떻게 아프신가요?</h1>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.legs.push(e.target.value);
              setPushed(asdf);
            }} />떨림
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.legs.push(e.target.value);
              setPushed(asdf);
            }} />통증
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.legs.push(e.target.value);
              setPushed(asdf);
            }} />쥐가 남
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.legs.push(e.target.value);
              setPushed(asdf);
            }} />걷기 힘듬
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.legs.push(e.target.value);
              setPushed(asdf);
            }} />화상
          </div>
        </div>
      }
      {infos?.body &&
        <div className='form'>
          <h1>몸이 어떻게 아프신가요?</h1>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.body.push(e.target.value);
              setPushed(asdf);
            }} />숨이 가쁨
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.body.push(e.target.value);
              setPushed(asdf);
            }} />소화 불량
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.body.push(e.target.value);
              setPushed(asdf);
            }} />설사
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.body.push(e.target.value);
              setPushed(asdf);
            }} />심근경색
          </div>
          <div>
            <input type='checkbox' onChange={e => {
              let asdf = pushes;
              asdf.body.push(e.target.value);
              setPushed(asdf);
            }} />복통
          </div>
        </div>
      }
      {infos?.etcs &&
        <div className='form'>
          <h1>어디가 어떻게 아프신가요?</h1>
          <textarea onChange={e => setPushed(a => ({ ...a, etcs: e.target.value }))} value={pushes.etcs} />
        </div>
      }
      <div className='reservation'>
        <div>
          <div className='flex'>
            이용 시간
            <select onChange={e => setPushed(a => ({ ...a, hour: e.target.value }))} value={pushes.hour}>
              <option value="2">2시간</option>
              <option value="3">3시간</option>
              <option value="4">4시간</option>
              <option value="5">5시간</option>
            </select>
          </div>
          <div className='flex'>
            예약 날짜
            <input value={pushes.date} onChange={e => setPushed(a => ({ ...a, date: e.target.value }))} placeholder='년도-월-일로 작성' />
          </div>
          <div className='flex'>
            이름
            <input value={pushes.name} onChange={e => setPushed(a => ({ ...a, name: e.target.value }))} placeholder='이름 작성' />
          </div>
        </div>
      </div>
      <div className='button' onClick={e => {
        console.log(pushes);
        window.location.href = '/waiting';
      }}>
        요청마치기
      </div>
    </S.Apply >
  </>;
}