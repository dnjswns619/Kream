import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigation = useNavigate();
  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__top">
          <ul className="top__list">
            <li className="top__list--item">고객센터</li>
            <li className="top__list--item">마이페이지</li>
            <li className="top__list--item">관심</li>
            <li className="top__list--item">알람</li>
            <li className="top__list--item">로그인</li>
          </ul>
        </div>
        <div className="header__main">
          <h1 onClick={() => { navigation("/") }} className="logo">
            <i className="logo__text">KREAM</i>
          </h1>
          <nav className="gnb">
            <ul className="gnb__list">
              <li className="gnb__list--item link_home" onClick={() => { navigation("/") }}>HOME</li>
              <li className="gnb__list--item" onClick={() => { navigation("/style") }}>STYLE</li>
              <li className="gnb__list--item" onClick={() => { navigation("/shop") }}>SHOP</li>
            </ul>
          </nav>
        </div>

        <div className="header__bottom">
          <nav>
            <div className="header__bottom--tabs tabs">
              <NavLink className={"tab"} to={"/"}>추천</NavLink>
              <NavLink className={"tab"} to={"/rank"}>랭킹</NavLink>
              <NavLink className={"tab"} to={"/luxury"}>럭셔리</NavLink>
              <NavLink className={"tab"} to={"/man"}>남성</NavLink>
              <NavLink className={"tab"} to={"/woman"}>여성</NavLink>
              <NavLink className={"tab"} to={"/discovery"}>발견</NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;