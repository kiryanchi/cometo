import React from "react";
import Nav from "./components/nav/page";
import * as S from './style';
import { Link } from "react-router-dom";
import wheelchair from './assets/wheelchair.png';
import handinhand from './assets/handinhand.png';

function App() {
  return (<>
    <Nav />
    <S.Main>
      <div className="needhelp">
        <div className="left">
          <div>
            누군가의 <span>플러스</span>가<br /> 필요할 때
          </div>
          <Link to={'/symptom'}>
            도움 청하기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶
          </Link>
        </div>
        <div className="img">
          <img src={wheelchair} alt="wheelchair" />
        </div>
      </div>
      <div className="givehelp">
        <div className="left">
          <div>
            누군가의 <span>플러스</span>가<br />되고 싶을 때
          </div>
          <Link to={'/behelper'}>
            헬퍼 되기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶
          </Link>
        </div>
        <div className="img">
          <img src={handinhand} alt="handinhand" />
        </div>
      </div>
    </S.Main>
  </>);
}

export default App;
