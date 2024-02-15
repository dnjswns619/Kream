import { NavLink } from "react-router-dom";
import "../css/Footer.css"

function Footer() {
  return (
    <footer>
      <div className="footerWrap">
        <div className="footerTop">
          <div className="footer-menu">
            <div className="menu-info">
              <strong>이용안내</strong>
              <ul className="menu-list">
                <li>검수기준</li>
                <li>이용정책</li>
                <li>패널티 정책</li>
                <li>커뮤니티 가이드라인</li>
              </ul>
            </div>
            <div className="menu-support">
              <strong>고객지원</strong>
              <ul className="menu-list">
                <li>공지사항</li>
                <li>서비스 소개</li>
                <li>스토어 안내</li>
                <li>판매자 방문접수</li>
              </ul>
            </div>
          </div>
          <div className="footer-serviceCenter">
            <strong>고객센터 1588-7813</strong>
            <div className="serviceCenter-infos">
              <p className="serviceCenter-info">운영시간 평일 10:00 - 18:00 (토∙일, 공휴일 휴무)</p>
              <p className="serviceCenter-info">점심시간 평일 13:00 - 14:00</p>
            </div>
            <p>1:1 문의하기는 앱에서만 가능합니다.</p>
            <NavLink className={"faqBtn"} to={"/faq"}>자주 묻는 질문</NavLink>
          </div>
        </div>
        <div className="footerBottom">
          
        </div>
      </div>
    </footer>
  )
}

export default Footer;