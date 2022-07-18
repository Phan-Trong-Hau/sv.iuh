import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import styles from "../MainRegisterCourse/MainRegisterCourse.module.scss";

const cx = classNames.bind(styles);

const listData1 = [
   {
      nameCourse: "Giáo dục Quốc phòng và An ninh 1",
      priceCourse: "1.120.000",
      group: null,
      credits: 4,
   },
   {
      nameCourse: "Giáo dục thể chất 1",
      priceCourse: "560.000",
      group: null,
      credits: 2,
   },
   {
      nameCourse: "Kỹ năng làm việc nhóm",
      priceCourse: "560.000",
      group: null,
      credits: 2,
   },
   {
      nameCourse: "Nhập môn Lập trình",
      priceCourse: "560.000",
      group: 1,
      credits: 2,
   },
   {
      nameCourse: "Nhập môn Tin học",
      priceCourse: "560.000",
      group: null,
      credits: 2,
   },
   {
      nameCourse: "Toán cao cấp 1",
      priceCourse: "560.000",
      group: null,
      credits: 2,
   },
   {
      nameCourse: "Triết học Mác - Lênin",
      priceCourse: "840.000",
      group: null,
      credits: 3,
   },
];

const listData2 = [
   {
      nameCourse: "Toán ứng dụng",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Hàm phức và phép biến đổi Laplace",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Vật lý đại cương",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Logic học",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Cấu trúc rời rạc",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Mạng máy tính",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Phương pháp luận nghiên cứu khoa học",
      credits: 2,
      firstCourse: null,
   },
   {
      nameCourse: "Chủ nghĩa xã hội khoa học",
      credits: 2,
      firstCourse: "014164, 014165 ",
      spanFirstCourse: "(a)",
   },
   {
      nameCourse: "Lập trình IoT với Python",
      credits: 4,
      firstCourse: null,
   },
   {
      nameCourse: "Lập trình trong CNTT với Java",
      credits: 4,
      firstCourse: null,
   },

   {
      nameCourse: "Tiếng Anh 2",
      credits: 3,
      firstCourse: "015253 ",
      spanFirstCourse: "(a)",
   },
   {
      nameCourse: "Hệ cơ sở dữ liệu",
      credits: 4,
      firstCourse: "002009 ",
      spanFirstCourse: "(a)",
   },
   {
      nameCourse: "Hệ thống và Công nghệ Web",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Pháp luật đại cương",
      credits: 2,
      firstCourse: null,
   },
   {
      nameCourse: "Giao tiếp kinh doanh",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Kỹ năng xây dựng kế hoạch",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Toán ứng dụng",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Hàm phức và phép biến đổi Laplace",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Vật lý đại cương",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Logic học",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Cấu trúc rời rạc",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Mạng máy tính",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Phương pháp luận nghiên cứu khoa học",
      credits: 2,
      firstCourse: null,
   },
   {
      nameCourse: "Chủ nghĩa xã hội khoa học",
      credits: 2,
      firstCourse: "014164, 014165 ",
      spanFirstCourse: "(a)",
   },
   {
      nameCourse: "Lập trình IoT với Python",
      credits: 4,
      firstCourse: null,
   },
   {
      nameCourse: "Lập trình trong CNTT với Java",
      credits: 4,
      firstCourse: null,
   },

   {
      nameCourse: "Tiếng Anh 2",
      credits: 3,
      firstCourse: "015253 ",
      spanFirstCourse: "(a)",
   },
   {
      nameCourse: "Hệ cơ sở dữ liệu",
      credits: 4,
      firstCourse: "002009 ",
      spanFirstCourse: "(a)",
   },
   {
      nameCourse: "Hệ thống và Công nghệ Web",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Pháp luật đại cương",
      credits: 2,
      firstCourse: null,
   },
   {
      nameCourse: "Giao tiếp kinh doanh",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Kỹ năng xây dựng kế hoạch",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Quản trị doanh nghiệp",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Môi trường và con người",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Quản trị học",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Kế toán cơ bản",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Kỹ năng sử dụng bàn phím và thiết bị văn phòng",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Nhập môn an toàn thông tin",
      credits: 3,
      firstCourse: "002137 ",
      spanFirstCourse: "(a)",
   },
   {
      nameCourse: "Quản lý dự án hệ thống thông tin",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Quản trị doanh nghiệp",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Môi trường và con người",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Quản trị học",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Kế toán cơ bản",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Kỹ năng sử dụng bàn phím và thiết bị văn phòng",
      credits: 3,
      firstCourse: null,
   },
   {
      nameCourse: "Nhập môn an toàn thông tin",
      credits: 3,
      firstCourse: "002137 ",
      spanFirstCourse: "(a)",
   },
   {
      nameCourse: "Quản lý dự án hệ thống thông tin",
      credits: 3,
      firstCourse: null,
   },
];

const listData3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const listData4 = [1, 2, 3, 4, 5];

const listData5 = [
   {
      nameCourse: "Giáo dục Quốc phòng và An ninh 1",
      pointCourse: "6,70",
      credits: 4,
   },
   {
      nameCourse: "Giáo dục thể chất 1",
      pointCourse: "7,50",
      credits: 2,
   },
   {
      nameCourse: "Kỹ năng làm việc nhóm",
      pointCourse: "7,90",
      credits: 2,
   },
   {
      nameCourse: "Nhập môn Lập trình",
      pointCourse: "9,20",
      credits: 2,
   },
   {
      nameCourse: "Nhập môn Tin học",
      pointCourse: "7,00",
      credits: 2,
   },
   {
      nameCourse: "Toán cao cấp 1",
      pointCourse: "8,20",
      credits: 2,
   },
   {
      nameCourse: "Triết học Mác - Lênin",
      pointCourse: "8,00",
      credits: 3,
   },
];

const listData6 = [
   {
      nameCourse: "Giáo dục Quốc phòng và An ninh 1",
      priceCourse: "1.120.000",
      credits: 4,
   },
   {
      nameCourse: "Giáo dục thể chất 1",
      priceCourse: "560.000",
      credits: 2,
   },
   {
      nameCourse: "Kỹ năng làm việc nhóm",
      priceCourse: "560.000",
      credits: 2,
   },
   {
      nameCourse: "Nhập môn Lập trình",
      priceCourse: "560.000",
      credits: 2,
   },
   {
      nameCourse: "Nhập môn Tin học",
      priceCourse: "560.000",
      credits: 2,
   },
   {
      nameCourse: "Toán cao cấp 1",
      priceCourse: "560.000",
      credits: 2,
   },
   {
      nameCourse: "Triết học Mác - Lênin",
      priceCourse: "840.000",
      credits: 3,
   },
   {
      nameCourse: "Thu bảo hiểm y tế năm 2022",
      priceCourse: "563.500",
      credits: 0,
      code: "BHYT2022",
   },
   {
      nameCourse: "Thu BHYT năm 2021...",
      priceCourse: "141.000",
      credits: 0,
      code: "BHYT2021",
   },
];

const listData7 = [
   {
      nameCourse: "Thu bảo hiểm y tế năm 2022",
      priceCourse: "563.500",
      credits: 0,
      code: "BHYT2022",
   },
   {
      nameCourse: "Thu BHYT năm 2021...",
      priceCourse: "141.000",
      credits: 0,
      code: "BHYT2021",
   },
];

const listData8 = [
   {
      date: "15/12/2021 07:51",
      amountMoney: "563.500",
      banking: "Agribank PHQN",
   },
   {
      date: "07/10/2021 14:30",
      amountMoney: "141.000",
      banking: "Agribank PHQN",
   },
   {
      date: "23/09/2021 15:04",
      amountMoney: "4.760.000",
      banking: "Ngân hàng VietinBank",
   },
];

const RegisterTableList = (props) => {
   const [click, setClick] = useState();
   const prevElement = useRef();

   const handleClick = (e, index) => {
      // remove first value when first value set default
      if (
         e.currentTarget.parentElement.children[0].classList.value ===
         "tr-active"
      ) {
         e.currentTarget.parentElement.children[0].classList.remove(
            "tr-active"
         );
      }

      // remove active element old
      if (prevElement.current) {
         prevElement.current.classList.remove("tr-active");
         if (prevElement.current.children[0].children[0])
            prevElement.current.children[0].children[0].defaultChecked = false;
      }

      // add active element now
      e.currentTarget.classList.add("tr-active");
      if (e.currentTarget.children[0].children[0]) {
         e.currentTarget.children[0].children[0].defaultChecked = true;
         props.handleOnClick();
      }

      // set table item value
      if (props.setTableItemValue) props.setTableItemValue(index);

      // set prev element
      setClick(e.currentTarget);
   };

   useEffect(() => {
      prevElement.current = click;
   }, [click]);

   const listItems1 = listData1.map((item, index) => {
      return (
         <tr key={index} onClick={(e) => handleClick(e)}>
            <td>{index + 1}</td>
            <td>420300123456</td>
            <td className={cx("text-left")}>{item.nameCourse}</td>
            <td>DHDI17AQN</td>
            <td>{item.credits}</td>
            <td>{item.group}</td>
            <td className={cx("text-right")}>
               <span>{item.priceCourse}</span>
            </td>
            <td></td>
            <td>
               <i className="fa-solid fa-circle-check green"></i>
            </td>
            <td>Đăng ký mới</td>
            <td>28/09/2021</td>
            <td>Đã khóa</td>
            <td>
               <button className={cx("btn ")} onClick={props.handlePopup4}>
                  Xem
               </button>
            </td>
            <td>
               <button className={cx("btn ")} onClick={props.handlePopup1}>
                  Hủy
               </button>
            </td>
         </tr>
      );
   });

   const listItems2 = listData2.map((item, index) => {
      return (
         <tr key={index} onClick={(e) => handleClick(e)}>
            <td>
               <input type="radio" name="register-table__radio" />
            </td>
            <td>{index + 1}</td>
            <td>420300123456</td>
            <td>{item.nameCourse}</td>
            <td>{item.credits}</td>
            <td>
               {((index % 5) - (index % 3) - (index % 7)) % 2 ? (
                  <i className="fa-solid fa-circle-check green"></i>
               ) : (
                  <i className="fa-solid fa-circle-xmark"></i>
               )}
            </td>
            <td>
               {item.firstCourse} <span>{item.spanFirstCourse}</span>
            </td>
         </tr>
      );
   });

   const listItems3 = listData3.map((item, index) => {
      return (
         <tr
            key={index}
            className={index ? null : "tr-active"}
            onClick={(el, i = index) => handleClick(el, i)}
         >
            <td>{item}</td>
            <td className={cx("text-left")}>
               <strong>Cấu trúc rời rạc</strong>
               <br />
               Trạng thái:{" "}
               {index % 2 ? (
                  <span>Đang lên kế hoạch</span>
               ) : (
                  <span>Chấp nhận mở lớp</span>
               )}
               <br />
               Mã lớp học phần: 420300090120 - DHKHMT16A
            </td>
            {index % 2 ? <td>0 / 100</td> : <td>95 / 110</td>}
         </tr>
      );
   });

   const listItems4 = listData4.map((item, index) => {
      return (
         <tr className={"tr-active"} key={index}>
            <td className={cx("text-left")}>
               <div className={cx("color-black")}>
                  Lịch học:{" "}
                  <strong>
                     LT - Thứ 6 (Tiết 4 -> 6 ) <br />
                  </strong>
               </div>
               Cơ sở:{" "}
               <strong>
                  Cơ sở 1 (Thành phố Hồ Chí Minh) <br />
               </strong>
               Dãy nhà:{" "}
               <strong>
                  Trực tuyến <br />
               </strong>
               Phòng:{" "}
               <strong>
                  Trực tuyến 63 <br />
               </strong>
            </td>
            <td className={cx("text-left")}>
               <div className={cx("color-black")}>
                  <strong>GV: ThS Trần Văn Vinh</strong>
               </div>
               20/08/2021 - 26/11/2021
            </td>
         </tr>
      );
   });

   const listItems5 = listData5.map((item, index) => {
      return (
         <tr key={index} onClick={(e) => handleClick(e)}>
            <td>
               <input type="radio" name="register-table__radio" />
            </td>
            <td>{index + 1}</td>
            <td>420300123456</td>
            <td>{item.nameCourse}</td>
            <td>{item.pointCourse}</td>
            <td>{item.credits}</td>
            <td>
               <i className="fa-solid fa-circle-check green"></i>
            </td>
            <td></td>
         </tr>
      );
   });

   const listItems6 = listData6.map((item, index) => {
      return (
         <tr key={index} onClick={(e) => handleClick(e)}>
            <td>{index + 1}</td>
            <td>{item.code || 420300123456}</td>
            <td>{item.nameCourse}</td>
            <td>{item.credits}</td>
            <td>{item.code ? "" : "Đăng ký mới"} </td>
            <td>{item.priceCourse}</td>
            <td></td>
            <td>{item.priceCourse}</td>
            <td></td>
            <td></td>
            <td> Đã nộp</td>
         </tr>
      );
   });

   const listItems7 = listData7.map((item, index) => {
      return (
         <tr key={index} onClick={(e) => handleClick(e)}>
            <td>{index + 1}</td>
            <td>{item.code || 420300123456}</td>
            <td>{item.nameCourse}</td>
            <td>{item.credits}</td>
            <td>{item.code ? "" : "Đăng ký mới"} </td>
            <td>{item.priceCourse}</td>
            <td></td>
            <td>{item.priceCourse}</td>
            <td></td>
            <td></td>
            <td> Đã nộp</td>
         </tr>
      );
   });

   const listItems8 = listData8.map((item, index) => {
      return (
         <tr key={index} onClick={(e) => handleClick(e)}>
            <td>{index + 1}</td>
            <td>123456</td>
            <td>1234567</td>
            <td>{item.date}</td>
            <td>{item.amountMoney}</td>
            <td>{item.banking}</td>
            <td>
               <Link to="/">Xem</Link>
            </td>
            <td>
               <a
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Chi tiết
               </a>
            </td>
         </tr>
      );
   });

   return (
      <>
         {props.listData1 && listItems1}
         {props.listData2 && listItems2}
         {props.listData3 && listItems3}
         {props.listData4 && listItems4}
         {props.listData5 && listItems5}
         {props.listData6 && listItems6}
         {props.listData7 && listItems7}
         {props.listData8 && listItems8}
      </>
   );
};

export default RegisterTableList;
