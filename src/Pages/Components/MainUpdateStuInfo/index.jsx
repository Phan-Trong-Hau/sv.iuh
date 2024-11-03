import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./MainUpdateStuInfo.module.scss";
import UpdateItem from "../UpdateItem";
import RelItem from "../RelItem";
import Popup from "../../../components/Popup";

const cx = classNames.bind(styles);


let date = new Date().toISOString().split("T")[0];

const MainUpdateStuInfo = () => {
    const [info, setInfo] = useState(true);
    const [rel, setRel] = useState(false);
    const [click, setClick] = useState(false);
    const [popup, setPopup] = useState(false);
    const [items, setItems] = useState(() => {
        const storageItems = JSON.parse(localStorage.getItem("items"));
        return storageItems ?? [];
    });

    const handlePopup = () => setPopup(!popup);

    const handleAddItems = () => {
        setItems((prev) => {
            const newItems = [
                ...prev,
                items.length === 0 ? items.length : Math.max(...items) + 1,
            ];
            const jsonItems = JSON.stringify(newItems);
            localStorage.setItem("items", jsonItems);

            return newItems;
        });
    };

    const handleRemoveItems = (index) => {
        setItems((prev) => {
            const newItems = [...prev];
            newItems.splice(index, 1);
            const jsonItems = JSON.stringify(newItems);
            localStorage.setItem("items", jsonItems);

            return newItems;
        });
    };

    const handleClick = () => {
        setClick(!click);
    };

    const handleOnchangeInfo = () => {
        if (rel) {
            setRel(!rel);
            setInfo(!info);
        }
    };

    const handleOnchangeRel = () => {
        if (info) {
            setInfo(!info);
            setRel(!rel);
        }
    };

    return (
        <>
            <div className={cx("update")}>
                <main
                    style={click ? { width: "100%" } : {}}
                    className={cx("update-container", "container ")}
                >
                    <section className={cx("update-content")}>
                        <div className={cx("update-box")}>
                            <div className={cx("update-title")}>
                                <div className={cx("caption ", "bottom")}>
                                    <h2>Cập nhật thông tin sinh viên</h2>
                                    <div className={cx("action ")}>
                                        <button
                                            className={cx("btn ")}
                                            onClick={handlePopup}
                                        >
                                            Lưu
                                        </button>
                                        <button
                                            onClick={handleClick}
                                            className={cx("btn ")}
                                        >
                                            <i
                                                className={
                                                    click
                                                        ? cx(
                                                              "fa-solid fa-minimize"
                                                          )
                                                        : cx(
                                                              "fa-solid fa-maximize"
                                                          )
                                                }
                                            ></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("update-view")}>
                                <ul className={cx("nav-tabs")}>
                                    <li
                                        onClick={handleOnchangeInfo}
                                        className={info ? cx("active") : ""}
                                    >
                                        Thông tin cá nhân
                                    </li>
                                    <li
                                        onClick={handleOnchangeRel}
                                        className={rel ? cx("active") : ""}
                                    >
                                        Quan hệ gia đình
                                    </li>
                                </ul>
                                <div
                                    className={
                                        info
                                            ? cx("tab-info", "show")
                                            : cx("tab-info")
                                    }
                                    id="tab_ThongTin"
                                >
                                    <div className={cx("form-body")}>
                                        <div className={cx("form-group")}>
                                            <UpdateItem
                                                type={"date"}
                                                defaultValue={date}
                                                title={"Ngày sinh"}
                                                required={true}
                                            />
                                            <UpdateItem
                                                select={true}
                                                selectIndex={3}
                                                defaultValueSelect={27}
                                                title={"Dân tộc"}
                                            />
                                            <UpdateItem
                                                select={true}
                                                selectIndex={4}
                                                defaultValueSelect={8}
                                                title={"Tôn giáo"}
                                            />
                                            <UpdateItem
                                                radio={true}
                                                title={"Giới tính"}
                                            />
                                        </div>
                                        <div className={cx("form-group")}>
                                            <UpdateItem
                                                select={true}
                                                selectIndex={2}
                                                defaultValueSelect={32}
                                                title={"Quốc tịch"}
                                                required={true}
                                            />
                                            <UpdateItem
                                                type={"text"}
                                                id={"SoCMND"}
                                                name={"SoCMND"}
                                                placeholder={"123456789"}
                                                title={"Số CMND/CCCD"}
                                                required={true}
                                            />
                                            <UpdateItem
                                                type={"date"}
                                                defaultValue={date}
                                                title={"Ngày cấp"}
                                                required={true}
                                            />
                                            <UpdateItem
                                                select={true}
                                                selectIndex={5}
                                                defaultValueSelect={55}
                                                title={"Nơi cấp"}
                                                required={true}
                                            />
                                        </div>
                                        <div className={cx("form-group")}>
                                            <UpdateItem
                                                type={"tel"}
                                                id={"phone"}
                                                name={"phone"}
                                                placeholder={"0999999999"}
                                                title={"Số điện thoại"}
                                                required={true}
                                            />
                                            <UpdateItem
                                                type={"email"}
                                                name={"email"}
                                                id={"email"}
                                                placeholder={"0999999999"}
                                                title={"Địa chỉ email"}
                                                required={true}
                                            />
                                            <UpdateItem
                                                type={"date"}
                                                defaultValue={"ngày/tháng/năm"}
                                                title={"Ngày vào đoàn"}
                                            />
                                            <UpdateItem
                                                type={"date"}
                                                defaultValue={date}
                                                title={"Ngày vào đảng"}
                                            />
                                        </div>
                                        <div className={cx("form-group")}>
                                            <UpdateItem
                                                type={"text"}
                                                id={"address"}
                                                name={"address"}
                                                placeholder={
                                                    "số nhà, đường, xã/phường, huyện/quận, tỉnh/thành phố"
                                                }
                                                title={"Nguyên quán"}
                                            />
                                        </div>
                                        <div className={cx("form-group")}>
                                            <UpdateItem
                                                type={"text"}
                                                id={"MaBHXH_YT"}
                                                name={"MaBHXH_YT"}
                                                placeholder={
                                                    "Nhập mã số thẻ BHYT"
                                                }
                                                title={"Mã số thẻ BHYT"}
                                            />
                                            <UpdateItem
                                                type={"text"}
                                                id={"MaBHXH_YT"}
                                                name={"MaBHXH_YT"}
                                                placeholder={
                                                    "Nhập nơi đăng ký KCB trên thẻ BHYT (mới) - Tỉnh"
                                                }
                                                title={
                                                    "Nơi đăng ký KCB trên thẻ BHYT (mới) - Tỉnh"
                                                }
                                            />
                                            <UpdateItem
                                                type={"text"}
                                                id={"MaBHXH_YT"}
                                                name={"MaBHXH_YT"}
                                                placeholder={
                                                    "Nhập nơi đăng ký KCB (mới) - Bệnh viện"
                                                }
                                                title={
                                                    "Nơi đăng ký KCB (mới) - Bệnh viện"
                                                }
                                            />
                                        </div>
                                        <div className={cx("form-title")}>
                                            Nơi sinh
                                        </div>
                                        <div className={cx("form-group")}>
                                            <UpdateItem
                                                select={true}
                                                selectIndex={5}
                                                defaultValueSelect={1000}
                                                title={"Tỉnh/ Thành phố"}
                                                required={true}
                                            />
                                            <UpdateItem
                                                type={"text"}
                                                placeholder={"Huyện/ Quận"}
                                                title={"Huyện/ Quận"}
                                                required={true}
                                            />
                                            <UpdateItem
                                                type={"text"}
                                                placeholder={"Xã/ Phường"}
                                                title={"Xã/ Phường"}
                                                required={true}
                                            />
                                        </div>
                                        <div className={cx("form-title")}>
                                            Nơi đăng ký giấy khai sinh
                                        </div>
                                        <div className={cx("form-group")}>
                                            <UpdateItem
                                                select={true}
                                                selectIndex={5}
                                                defaultValueSelect={1000}
                                                title={"Tỉnh/ Thành phố"}
                                                required={true}
                                            />
                                            <UpdateItem
                                                type={"text"}
                                                placeholder={"Huyện/ Quận"}
                                                title={"Huyện/ Quận"}
                                                required={true}
                                            />
                                            <UpdateItem
                                                type={"text"}
                                                placeholder={"Xã/ Phường"}
                                                title={"Xã/ Phường"}
                                                required={true}
                                            />
                                        </div>
                                        <div className={cx("form-title")}>
                                            Nơi đăng ký hộ khẩu thường trú
                                        </div>
                                        <div className={cx("form-group")}>
                                            <UpdateItem
                                                select={true}
                                                selectIndex={5}
                                                defaultValueSelect={1000}
                                                title={"Tỉnh/ Thành phố"}
                                                required={true}
                                            />
                                            <UpdateItem
                                                type={"text"}
                                                placeholder={"Huyện/ Quận"}
                                                title={"Huyện/ Quận"}
                                                required={true}
                                            />
                                            <UpdateItem
                                                type={"text"}
                                                placeholder={"Xã/ Phường"}
                                                title={"Xã/ Phường"}
                                                required={true}
                                            />
                                            <UpdateItem
                                                type={"text"}
                                                placeholder={
                                                    "số nhà, đường, thôn xóm, ..."
                                                }
                                                title={
                                                    "số nhà, đường, thôn xóm, ..."
                                                }
                                            />
                                        </div>
                                        <div className={cx("form-title")}>
                                            Địa chỉ tạm trú (nếu có)
                                        </div>
                                        <div className={cx("form-group")}>
                                            <UpdateItem
                                                select={true}
                                                selectIndex={5}
                                                defaultValueSelect={1000}
                                                title={"Tỉnh/ Thành phố"}
                                                required={true}
                                            />
                                            <UpdateItem
                                                type={"text"}
                                                placeholder={"Huyện/ Quận"}
                                                title={"Huyện/ Quận"}
                                                required={true}
                                            />
                                            <UpdateItem
                                                type={"text"}
                                                placeholder={"Xã/ Phường"}
                                                title={"Xã/ Phường"}
                                                required={true}
                                            />
                                            <UpdateItem
                                                type={"text"}
                                                placeholder={
                                                    "số nhà, đường, thôn xóm, ..."
                                                }
                                                title={
                                                    "số nhà, đường, thôn xóm, ..."
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={
                                        rel
                                            ? cx("tab-relationship", "show")
                                            : cx("tab-relationship")
                                    }
                                    id="tab_QuanHeGD"
                                >
                                    <div className={cx("rel-title")}>
                                        <h3>CHA, MẸ, NGƯỜI GIÁM HỘ (NẾU CÓ)</h3>
                                    </div>
                                    <div className={cx("form-body")}>
                                        <RelItem title={"Thông tin Cha"} />
                                        <RelItem title={"Thông tin Mẹ"} />
                                        <RelItem
                                            title={"Thông tin Người giám hộ"}
                                        />
                                        {items.map((item, index) => (
                                            <RelItem
                                                key={index}
                                                handleRemoveItems={
                                                    handleRemoveItems
                                                }
                                                index={index}
                                            />
                                        ))}
                                        <div>
                                            <button
                                                className={cx("btn ")}
                                                onClick={handleAddItems}
                                            >
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("form-footer")}>
                                    <button
                                        className={cx("btn ")}
                                        onClick={handlePopup}
                                    >
                                        Lưu
                                    </button>
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

export default MainUpdateStuInfo;
