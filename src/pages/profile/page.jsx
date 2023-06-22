import Nav from "../../components/nav/page";
import * as S from './style';
import calendar from '../../assets/calendar.png';
import profile from '../../assets/profile.png';
import light from '../../assets/light.png';
import { useEffect, useState } from "react";

export default function Profile() {
  const [infos, setInfos] = useState({
    name: "홍길동",
    birth: "1984-03-17",
    matching: false,
  });
  const [reqs, setReqs] = useState([
    {
      name: "홍길동",
      gender: "남",
      symptom: ['두통, 손목통증'],
      address: "서울",
      date: null,
      hour: null,
      detail: "졸려요"
    }, {
      name: "김강현",
      gender: "남",
      symptom: ['두통, 손목통증'],
      address: "서울",
      date: null,
      hour: null,
      detail: "졸려요"
    }, {
      name: "송강송강",
      gender: "남",
      symptom: ['두통, 손목통증'],
      address: "서울",
      date: null,
      hour: null,
      detail: "졸려요"
    },
  ]);
  const [focus, setFocus] = useState(0);
  const [match, setMatch] = useState({
    name: "김강현",
    gender: "남",
    symptom: ['두통, 손목통증'],
    address: "서울",
    date: null,
    hour: null,
    detail: "졸려요"
  });
  useEffect(e => {
    setReqs(e => e);
  }, []);
  return <>
    <Nav />
    <S.profile>
      <div className="mt" />
      <div className="main">
        <div className="left">
          <div className="name box">
            {infos.name}복지사 님
          </div>
          <img src={profile} alt='profile' />
          <div className="birth box">
            {infos.birth}
          </div>
        </div>
        <div className="inner">
          <img src={calendar} alt="calendar" />
          {!infos.matching ? <>
            {reqs.map((i, n) => <div className="req" key={n} onClick={e => {
              setFocus(a => n);
            }}>
              {i?.name} / {i?.gender} / {i?.symptom.map(i => `${i}`)}
            </div>)}
            <div className="reqhelp">
              <img src={light} alt="light" />
              <span>헬퍼 요청</span>
            </div>
            <div className="reqword">
              <div>
                <p>이름 : {reqs[focus]?.name}</p>
                <p>성별 : {reqs[focus]?.gender}</p>
                <p>증상 : {reqs[focus]?.symptom.map(i => i)}</p>
                <p>주소 : {reqs[focus]?.address}</p>
                <p>예약 날짜 : {reqs[focus]?.date}</p>
                <p>예약 시간 : {reqs[focus]?.hour}</p>
                <p>상세 : {reqs[focus]?.detail}</p>
              </div>
            </div>
            <div className="buttons">
              <button className="reject" onClick={e => {
                setReqs(e => {
                  return e.filter(a => a?.name !== reqs[focus]?.name);
                });
              }}>거절</button>
              <button onClick={e => {
                setInfos(e => ({ ...e, matching: true }));
                setMatch(reqs[focus]);
              }}>수락</button>
            </div></> :
            <>
              <div className="clientinfo">
                <p>이름 : {match?.name}</p>
                <p>성별 : {match?.gender}</p>
                <p>증상 : {match?.symptom.map(i => i)}</p>
                <p>주소 : {match?.address}</p>
                <p>예약 날짜 : {match?.date}</p>
                <p>예약 시간 : {match?.hour}</p>
                <p>상세 : {match?.detail}</p>
              </div>
            </>
          }
        </div>
      </div>
    </S.profile>
  </>;
}