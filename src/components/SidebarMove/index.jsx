import classNames from 'classnames/bind';

import Sidebar from "../Sidebar";
import QRcode from "../../assets/qr.png";
import style from "./SidebarMove.module.scss";

const cx = classNames.bind(style);

const SidebarMove = () => {
    return (
        <>
            <div className={cx("sidebar-move")}>
                <Sidebar name="move"/>
                <div className={cx("sidebar-img")}>
                    <a
                        href="https://ascvn.com.vn/huong-dan-app-mobile-danh-cho-sinh-vien.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={QRcode} alt="QR-code" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default SidebarMove;
