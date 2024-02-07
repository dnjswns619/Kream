import "../css/Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigation = useNavigate();
  return (
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
          <i className="logo_text">Kream</i>
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
          <ul className="tabs">
            <li className="tab active">
              <a href="#">추천</a>
            </li>
            <li className="tab">
              <a href="#">랭킹</a>
            </li>
            <li className="tab">
              <a href="#">럭셔리</a>
            </li>
            <li className="tab">
              <a href="#">남성</a>
            </li>
            <li className="tab">
              <a href="#">여성</a>
            </li>
            <li className="tab">
              <a href="#">발견</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header;