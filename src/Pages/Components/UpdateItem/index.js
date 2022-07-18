import classNames from "classnames/bind";

import Select from "../../../components/Select";
import styles from "../MainUpdateStuInfo/MainUpdateStuInfo.module.scss";

const cx = classNames.bind(styles);

const UpdateItem = (props) => {
    return (
        <>
            <div className={cx("item")}>
                <label className={cx("item-title")}>
                    {props.title}
                    {props.required ? (
                        <span className={cx("required")}> (*) </span>
                    ) : (
                        ""
                    )}
                </label>
                <div>
                    {props.select ? (
                        <Select
                            index={props.selectIndex}
                            defaultValue={props.defaultValueSelect}
                        />
                    ) : props.radio ? (
                        <div className={cx("radio")}>
                            <label>
                                <input
                                    className={cx("w20")}
                                    type="radio"
                                    name="Sex"
                                    defaultChecked
                                />
                                <span>Nam</span>
                            </label>
                            <label>
                                <input
                                    className={cx("w20")}
                                    type="radio"
                                    name="Sex"
                                />
                                <span>Nữ</span>
                            </label>
                        </div>
                    ) : (
                        <input
                            type={props.type}
                            defaultValue={props.defaultValue}
                            placeholder={props.placeholder}
                            id={props.id}
                            name={props.name}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default UpdateItem;
