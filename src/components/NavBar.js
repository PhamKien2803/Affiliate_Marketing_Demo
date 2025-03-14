import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-container">
        <div className="nav-logo">
          <Link to="/">
            <img
              src="https://via.placeholder.com/150x50.png?text=Eva+Logo"
              alt="Eva Logo"
            />
          </Link>
        </div>
        <ul className="nav-links">
          <li className="dropdown">
            <Link to="/">Tin tức</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/tin-tuc/chinh-tri">Chính trị</Link>
              </li>
              <li>
                <Link to="/tin-tuc/xa-hoi">Xã hội</Link>
              </li>
              <li>
                <Link to="/tin-tuc/kinh-te">Kinh tế</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <Link to="/giai-tri">Giải trí</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/giai-tri/phim-anh">Phim ảnh</Link>
              </li>
              <li>
                <Link to="/giai-tri/nhac">Nhạc</Link>
              </li>
              <li>
                <Link to="/giai-tri/sao">Sao</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <Link to="/lam-dep">Làm đẹp</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/lam-dep/cham-soc-da">Chăm sóc da</Link>
              </li>
              <li>
                <Link to="/lam-dep/trang-diem">Trang điểm</Link>
              </li>
              <li>
                <Link to="/lam-dep/thoi-trang">Thời trang</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <Link to="/suc-khoe">Sức khỏe</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/suc-khoe/benh-phu-nu">Bệnh phụ nữ</Link>
              </li>
              <li>
                <Link to="/suc-khoe/meo-vat">Mẹo vặt</Link>
              </li>
              <li>
                <Link to="/suc-khoe/dinh-duong">Dinh dưỡng</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <Link to="/me-va-be">Mẹ và Bé</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/me-be/ba-bau">Bà bầu</Link>
              </li>
              <li>
                <Link to="/me-be/cham-con">Chăm con</Link>
              </li>
              <li>
                <Link to="/me-be/dinh-duong-cho-be">Dinh dưỡng cho bé</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="nav-search">
          <input type="text" placeholder="Tìm kiếm..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
