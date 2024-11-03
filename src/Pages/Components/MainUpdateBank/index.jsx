import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./MainUpdateBank.module.scss";
import SidebarMove from "../../../components/SidebarMove";
import UpdateItem from "../UpdateItem";
import Popup from "../../../components/Popup";

const cx = classNames.bind(styles);

const MainUpdateBank = () => {
    const [popup, setPopup] = useState(false);
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    const handlePopup = () => setPopup(!popup);

    return (
        <>
            <div className={cx("update-bank")}>
                <main className={cx("bank-container", "container ")} style={click ? {width: '100%'}:{}}>
                    <section className={cx("bank-sidebar")}>
                        <SidebarMove />
                    </section>
                    <section className={cx("bank-content")}>
                        <div className={cx("bank-title")}>
                            <div className={cx("caption ")}>
                                <h2>Cập nhật thông tin ngân hàng</h2>
                                <div className={cx("action ")}>
                                    <button
                                        className={cx("btn")}
                                        onClick={handlePopup}
                                    >
                                        Lưu
                                    </button>
                                    <button
                                        className={cx("btn")}
                                        onClick={handleClick}
                                    >
                                        <i
                                            className={
                                                click
                                                    ? cx("fa-solid fa-minimize")
                                                    : cx("fa-solid fa-maximize")
                                            }
                                        ></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={cx("bank-view")}>
                            <div className={cx("form-body")}>
                                <div className={cx("form-group")}>
                                    <UpdateItem
                                        type="text"
                                        title="Tên ngân hàng"
                                        required={true}
                                    />
                                    <UpdateItem
                                        type="text"
                                        title="Tên chi nhánh"
                                        required={true}
                                    />
                                    <UpdateItem
                                        type="text"
                                        title="Tên chủ tài khoản"
                                        required={true}
                                    />
                                    <UpdateItem
                                        type="text"
                                        title="Số tài khoản"
                                        required={true}
                                    />
                                </div>
                                <div className={cx("form-group")}>
                                    <UpdateItem
                                        type="text"
                                        id="So_CMND"
                                        name="So_CMND"
                                        title="Số CMND/CCCD"
                                    />
                                    <UpdateItem type="date" title="Ngày cấp" />
                                    <UpdateItem
                                        select={true}
                                        selectIndex={5}
                                        defaultValueSelect={10000}
                                        title="Nơi cấp"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            {popup && <Popup handlePopup={handlePopup} />}
        </>
    );
};

export default MainUpdateBank;
