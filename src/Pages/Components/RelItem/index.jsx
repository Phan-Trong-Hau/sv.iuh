import classNames from "classnames/bind";
import UpdateItem from "../UpdateItem";
import styles from "../MainUpdateStuInfo/MainUpdateStuInfo.module.scss";

const cx = classNames.bind(styles);

const RelItem = (props) => {

    const handleClick = (index) => {
        props.handleRemoveItems(index);
    }

    return (
        <>
            <div className={cx("form-item")}>
                <div
                    className={
                        props.title
                            ? cx("form-group")
                            : cx("form-group", "exception")
                    }
                >
                    {props.title ? (
                        <label className={cx("item-name")}>{props.title}</label>
                    ) : (
                        <>
                            <UpdateItem
                                select={true}
                                selectIndex={6}
                                defaultValueSelect={1000}
                                title={"Mối quan hệ"}
                                required={true}
                            />
                        </>
                    )}

                    <div className={cx("checkbox")}>
                        <label>
                            <input type="checkbox" className={cx("w20")} />
                            <span>Đã mất</span>
                        </label>
                    </div>
                    {!props.title && (
                        <button onClick={() => handleClick(props.index)}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    )}
                </div>
                <div className={cx("form-group")}>
                    <UpdateItem
                        type={"text"}
                        title={"Họ và tên"}
                        required={true}
                    />
                    <UpdateItem
                        type={"date"}
                        title={"Ngày sinh"}
                        required={true}
                    />
                </div>
                <div className={cx("form-group")}>
                    <UpdateItem
                        type={"text"}
                        placeholder={"123456789"}
                        title={"Số CMND/CCCD"}
                        required={true}
                    />
                    <UpdateItem
                        type={"date"}
                        title={"Ngày cấp CMND/CCCD"}
                        required={true}
                    />
                </div>
                <div className={cx("form-group")}>
                    <UpdateItem
                        select={true}
                        selectIndex={5}
                        defaultValueSelect={1000}
                        title={"Nơi cấp CMND/CCCD"}
                        required={true}
                    />
                </div>
                <div className={cx("form-group")}>
                    <UpdateItem
                        type={"text"}
                        placeholder={"0399999999"}
                        title={"Số điện thoại"}
                    />
                    <UpdateItem type={"text"} title={"Nghề nghiệp"} />
                </div>
                <div className={cx("form-title")}>Hộ khẩu thường trú</div>
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
                        placeholder={"số nhà, đường, thôn xóm, ..."}
                        title={"số nhà, đường, thôn xóm, ..."}
                    />
                </div>
                <div className={cx("form-group")}>
                    <div className={cx("checkbox")}>
                        <label>
                            <input type="checkbox" className={cx("w20")} />
                            <span>Là chủ hộ</span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RelItem;
