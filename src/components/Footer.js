import { Link, NavLink } from "react-router-dom";
import "../css/Footer.css"
import "../css/Footer.scss"

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
          <div className="linkList-wrap">
            <ul>
              <li>
                <a href="https://www.kreamcorp.com/">회사소개</a>
              </li>
              <li>
                <a href="https://recruit.kreamcorp.com/">인재채용</a>
              </li>
              <li>
                <a href="https://www.kreamcorp.com/view/contact.html">제휴제안</a>
              </li>
              <li>
                <Link to={"/areement"}>이용약관</Link>
              </li>
              <li>
                <Link className="privacy_link" to={"/privacy"}>개인정보처리방침</Link>
              </li>
            </ul>
            <div className="snsList-wrap">
              <a href="https://www.instagram.com/kream.co.kr/">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
              </a>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="businessInfo-wrap">
            <div className="business_info info-top">
              <span>크림 주식회사</span>
              <span>
                사업자등록번호 : 570-88-01618
                <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=5708801618">사업자정보확인</a>
              </span>
              <span>통신판매업 : 제 2021-성남분당C-0093호</span>
            </div>
            <div className="business_info info-bottom">
              <span>사업장소재지 : 경기도 성남시 분당구 분당내곡로 131 판교테크원 타워1, 8층</span>
              <span>호스팅 서비스 : 네이버 클라우드 (주)</span>
            </div>
          </div>
          <div className="notice-wrap">
            <p>크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은 각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타 거래 체결 과정에서 고지하는 내용 등에 따라 검수하고 보증하는 내용에 대한 책임은 크림(주)에 있습니다.</p>
            <p>© KREAM Corp.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;