import React, { useEffect,  useState } from "react";
import classNames from "classnames/bind";

import SidebarItem from "../SideBarItem";

import styles from "./Sidebar.module.scss";
import stylesMove from "../SidebarMove/SidebarMove.module.scss";

const list = [
    {
        title: "Trang chủ",
        path: "/",
        iBefore: "fa-solid fa-house-chimney",
        iAfter: "",
    },
    {
        title: "Thông tin chung",
        path: "#",
        iBefore: "fa-solid fa-tv",
        iAfter: "fa-solid fa-angle-down",
    },
    {
        title: "Học tập",
        path: "#",
        iBefore: "fa-solid fa-graduation-cap",
        iAfter: "fa-solid fa-angle-down",
    },
    {
        title: "Đăng ký học phần",
        path: "#",
        iBefore: "fa-regular fa-square-check",
        iAfter: "fa-solid fa-angle-down",
    },
    {
        title: "Học phí",
        path: "#",
        iBefore: "fa-brands fa-cc-visa",
        iAfter: "fa-solid fa-angle-down",
    },
];

const listOpen = [
   {
      title: "Trang chủ",
      path: "/",
      iBefore: "fa-solid fa-house-chimney",
      iAfter: "",
   },
   {
      title: "Thông tin chung",
      path: "#",
      iBefore: "fa-solid fa-tv",
      iAfter: "fa-solid fa-angle-down",
   },
   {
      title: "Học tập",
      path: "#",
      iBefore: "fa-solid fa-graduation-cap",
      iAfter: "fa-solid fa-angle-down",
   },
   {
      title: "Đăng ký học phần",
      path: "#",
      iBefore: "fa-regular fa-square-check",
      iAfter: "fa-solid fa-angle-down",
   },
   {
      title: "Học phí",
      path: "#",
      iBefore: "fa-brands fa-cc-visa",
      iAfter: "fa-solid fa-angle-down",
   },
   {
      title: "Tin tức",
      path: "/sinh-vien-tin-tuc-thong-bao",
      iBefore: "fa-solid fa-bell",
      iAfter: "",
   },
   {
      title: "Đăng xuất",
      path: "/",
      iBefore: "fa-solid fa-arrow-right-from-bracket",
      iAfter: "",
   },
];

const Sidebar = (props) => {
    const [close, setClose] = useState(false);
    const handleClose = () => {
        setClose(!close);
    };
    const listItems = list.map((item, index) => {
        return (
            <SidebarItem
                key={index}
                path={item.path}
                title={item.title}
                iBefore={item.iBefore}
                iAfter={item.iAfter}
                index={index}
            />
        );
    });

    const listItemsOpen = listOpen.map((item, index) => {
        return (
            <SidebarItem
                key={index}
                path={item.path}
                title={item.title}
                iBefore={item.iBefore}
                iAfter={item.iAfter}
                index={index}
            />
        );
    });

    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    let cx = classNames.bind(styles);
    if (props.name === "move") {
        cx = classNames.bind(stylesMove);
        return (
            <>
                <aside className={cx(props.name, styles.sidebar)}>
                    <div className={cx("sidebar-container")}>
                        <div
                            className={cx("sidebar-icon")}
                            onClick={handleClose}
                        >
                            <i className="fa-solid fa-angles-right"></i>
                        </div>
                        <ul className={cx("sidebar-list")}>
                            {width > 1024 ? listItems : listItemsOpen}
                        </ul>
                    </div>
                </aside>
            </>
        );
    }

    return (
        <>
            <aside
                className={
                    close || props.openSidebar
                        ? cx("sidebar", props.name)
                        : cx("sidebar", "close", props.name)
                }
            >
                <div className={cx("sidebar-container")}>
                    <div className={cx("sidebar-icon")} onClick={handleClose}>
                        <i className="fa-solid fa-angles-right"></i>
                    </div>
                    <ul className={cx("sidebar-list")}>
                        {width > 1024 ? listItems : listItemsOpen}
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
