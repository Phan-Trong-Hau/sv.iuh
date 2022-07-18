import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import imgLogo from "../../assets/logo.png";
import imgUser from "../../assets/user.png";
import Sidebar from "../Sidebar";
import Popup from "../Popup";

const cx = classNames.bind(styles);

const Header = (props) => {
    const [click, setClick] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);
    const [popupLogOut, setPopupLogOut] = useState(false);

    const handlePopup = () => setPopupLogOut(!popupLogOut)
    
    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const handleClick = () => setClick(!click);
    const handleOpen = () => setOpenSidebar(!openSidebar);

    return (
       <>
          <header className={cx("header")}>
             <div className={cx("header-container container")}>
                <div className={cx("header-content")}>
                   <div className={cx("logo")}>
                      <Link to="/" className={cx("logo-link")}>
                         <img src={imgLogo} alt="Logo-IUH" />
                      </Link>
                   </div>
                   <div className={cx("header-search")}>
                      <form action="/ket-qua-tim-kiem">
                         <input
                            type="text"
                            id="k"
                            name="timkiem"
                            placeholder="Tìm kiếm..."
                            required
                         />
                         <button type="submit">
                            <i className="fa-solid fa-magnifying-glass"></i>
                         </button>
                      </form>
                   </div>
                   <div className={cx("menu-btn")} onClick={handleOpen}>
                      <i className="fa-solid fa-bars"></i>
                   </div>
                   <div className={cx("user-account")} onClick={handleClick}>
                      <div className={cx("user-info")}>
                         <img src={imgUser} alt="avatar-user" className={cx("img-user")} />
                         <Link to="#">Phan Trọng Hậu</Link>
                         <i className="fa-solid fa-sort-down"></i>
                      </div>
                      <div
                         className={cx("user-dropdown")}
                         style={
                            click ? { display: "block" } : { display: "none" }
                         }
                      >
                         <ul className={cx("us-links")}>
                            <li className={cx("us-item")}>
                               <Link to="/thong-tin-sinh-vien">
                                  Thông tin cá nhân
                               </Link>
                            </li>
                            <li className={cx("us-item")}>
                               <Link to="#" onClick={handlePopup}>
                                  Đổi mật khẩu
                               </Link>
                            </li>
                            <li className={cx("us-item")}>
                               <Link to="/">Đăng xuất</Link>
                            </li>
                         </ul>
                      </div>
                   </div>
                   <div className={cx("menu-top")}>
                      <ul className={cx("menu-list")}>
                         <li className={cx("menu-item")}>
                            <Link to="/">
                               <i className="fa-solid fa-house-chimney"></i>
                               Trang chủ
                            </Link>
                         </li>
                         <li className={cx("menu-item")}>
                            <Link to="/sinh-vien-tin-tuc-thong-bao">
                               <i className="fa-solid fa-bell"></i>
                               Tin tức
                            </Link>
                         </li>
                      </ul>
                   </div>
                </div>
             </div>
          </header>
          {props.checkSidebar || width <= 1024 ? (
             <Sidebar openSidebar={openSidebar} name="" />
          ) : (
             true
          )}

          {popupLogOut && <Popup index={5} handlePopup={handlePopup} />}
       </>
    );
};

export default Header;
