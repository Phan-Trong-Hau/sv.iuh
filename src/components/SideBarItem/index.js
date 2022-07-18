import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import SidebarLinkItem from "../SideBarLinkItem";
import styles from "../Sidebar/Sidebar.module.scss";

const cx = classNames.bind(styles);

const listLink = [
    [
        {
            title: "Thông tin sinh viên",
            path: "/thong-tin-sinh-vien",
        },
        {
            title: "Ghi chú nhắc nhở",
            path: "/ghi-chu-nhac-nho-sinh-vien",
        },
        {
            title: "Đề xuất cập nhật thông tin",
            path: "/de-xuat-cap-nhat-thong-tin-sinh-vien",
        },
        {
            title: "Đề xuất cập nhật thông tin ngân hàng",
            path: "/de-xuat-cap-nhat-thong-tin-ngan-hang",
        },
    ],
    [
        {
            title: "Kết quả học tập",
            path: "/ket-qua-hoc-tap",
        },
        {
            title: "Lịch theo tuần",
            path: "/lich-theo-tuan",
        },
        {
            title: "Lịch theo tiến độ",
            path: "/lich-theo-tien-do",
        },
        {
            title: "Lịch học lớp danh nghĩa",
            path: "/lich-hoc-lop-danh-nghia",
        },
    ],
    [
        {
            title: "Chương trình khung",
            path: "/chuong-trinh-khung",
        },
        {
            title: "Đăng ký học phần",
            path: "/dang-ky-hoc-phan",
        },
    ],
    [
        {
            title: "Tra cứu công nợ",
            path: "/tra-cuu-cong-no",
        },
        {
            title: "Thanh toán trực tuyến",
            path: "/thanh-toan-truc-tuyen",
        },
        {
            title: "Phiếu thu tổng hợp",
            path: "/phieu-thu-tong-hop",
        },
    ],
];

const SidebarItem = (props) => {
    const [click, setClick] = useState(false);
    const check = document.getElementsByClassName(styles.active);
    
    const handleClick = () => {
        if (check.length) {
            check[0].classList.remove(styles.active);
        }
        setClick(!click);
    };



    const linkItems = listLink.map((row, index) => {
        if (index === props.index - 1) {
            return row.map((linkItem, index1) => {
                return (
                    <SidebarLinkItem
                        key={index1}
                        path={linkItem.path}
                        title={linkItem.title}
                    />
                );
            });
        }
        return true;
    });

    return (
        <>
            <li className={cx("sidebar__item")} onClick={handleClick}>
                <Link to={props.path}>
                    <i className={props.iBefore}></i>
                    {props.title}
                    <i className={props.iAfter}></i>
                </Link>
                <ul
                    className={
                        click
                            ? cx("sidebar-links", "active")
                            : cx("sidebar-links")
                    }
                >
                    {linkItems}
                </ul>
            </li>
        </>
    );
};

export default SidebarItem;
