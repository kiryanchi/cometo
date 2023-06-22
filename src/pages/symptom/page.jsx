import Nav from "../../components/nav/page";
import * as S from "./style";
import body from '../../assets/body.png';
import { useState } from "react";

export default function Symptom() {
  const [list, setList] = useState({
    head: false,
    knee: false,
    neck: false,
    arms: false,
    foot: false,
    toes: false,
    hand: false,
    legs: false,
    body: false,
    etcs: false
  });
  return <>
    <Nav />
    <S.Symptom>
      <div className="left">
        <h1>어디가 아프세요?</h1>
        <div className="checks">
          <div><input type="checkbox" onChange={e => setList(a => ({ ...a, head: !a.head }))} checked={list.head} />머리</div>
          <div><input type="checkbox" onChange={e => setList(a => ({ ...a, knee: !a.knee }))} checked={list.knee} />무릎</div>
          <div><input type="checkbox" onChange={e => setList(a => ({ ...a, neck: !a.neck }))} checked={list.neck} />목</div>
          <div><input type="checkbox" onChange={e => setList(a => ({ ...a, foot: !a.foot }))} checked={list.foot} />발(발목)</div>
          <div><input type="checkbox" onChange={e => setList(a => ({ ...a, arms: !a.arms }))} checked={list.arms} />팔, 어깨</div>
          <div><input type="checkbox" onChange={e => setList(a => ({ ...a, toes: !a.toes }))} checked={list.toes} />발가락</div>
          <div><input type="checkbox" onChange={e => setList(a => ({ ...a, hand: !a.hand }))} checked={list.hand} />손(손목)</div>
          <div><input type="checkbox" onChange={e => setList(a => ({ ...a, legs: !a.legs }))} checked={list.legs} />하체</div>
          <div><input type="checkbox" onChange={e => setList(a => ({ ...a, body: !a.body }))} checked={list.body} />상체</div>
          <div><input type="checkbox" onChange={e => setList(a => ({ ...a, etcs: !a.etcs }))} checked={list.etcs} />기타</div>
        </div>
        <div className="button" onClick={e => {
          localStorage.setItem("bodylist", JSON.stringify(list));
          window.location.href = '/apply';
        }}>
          세부사항 적기▶
        </div>
      </div>
      <div className="img">
        <img src={body} alt="body" />
      </div>
    </S.Symptom>
  </>;
}