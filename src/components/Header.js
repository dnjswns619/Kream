import "../css/Header.css";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigation = useNavigate();
  return (
    <header>
      <div className="header">
        <div className="header_top">
          <ul>
            <li>고객센터</li>
            <li>마이페이지</li>
            <li>관심</li>
            <li>알람</li>
            <li>로그인</li>
          </ul>
        </div>
        <div className="header_main">
          <h1 onClick={() => { navigation("/") }} className="logo">
            <i className="logo_text">KREAM</i>
          </h1>
          <nav className="GNB_wrap">
            <ul>
              <li onClick={() => { navigation("/") }} className="link_home">HOME</li>
              <li onClick={() => { navigation("/style") }}>STYLE</li>
              <li onClick={() => { navigation("/shop") }}>SHOP</li>
            </ul>
          </nav>
        </div>

        <div className="header_bottom">
          <nav>
            <div className="tabs">
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