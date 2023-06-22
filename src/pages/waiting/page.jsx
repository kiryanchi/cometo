import { useEffect, useState } from "react";
import Nav from "../../components/nav/page";
import * as S from './style';
import car from '../../assets/car.png';

export default function Waiting() {
  const [matching, setMatching] = useState(false);
  const [helperinfo, setHelperinfo] = useState({
    name: '홍길동',
    date: null,
    hour: null
  });
  useEffect(e => {
    setMatching(true);
    setHelperinfo(e => helperinfo);
  }, [helperinfo]);
  return <>
    <Nav />
    <S.Waiting>
      <div className="mt" />
      <div className="Thanks">
        <p>신청해 주셔서 감사합니다.</p>
        <p>{!matching ? '매칭 중...' : "매칭 완료"}</p>
        {matching && <>
          <div className="sign">
            <p>헬퍼 이름: {helperinfo.name}</p>
            <p>요청 날짜: {helperinfo.date}</p>
            <p>요청 시간: {helperinfo.hour}</p>
            <br />
            <p>요청 당일 헬퍼가 집으로 찾아갑니다.</p>
            <p>늦지 않게 준비해주세요!</p>
          </div>
          <img src={car} alt='car' />
        </>
        }
      </div>
    </S.Waiting>
  </>;
}