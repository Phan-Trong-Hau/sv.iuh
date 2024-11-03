import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./MainHome.scss";
import UserImg from "../../../assets/user.png";
import HomeItem from "../HomeItem";
import BarChart from "../BarChart";
import PieChart from "../PieChart";
import TableList from "../TableList";
import Select from "../../../components/Select";

const featureList = [
   {
      path: "/lich-theo-tuan",
      icon: "fa-solid fa-calendar-week",
      title: "Lịch theo tuần",
   },
   {
      path: "/ket-qua-hoc-tap",
      icon: "fa-solid fa-chart-column",
      title: "Kết quả học tập",
   },
   {
      path: "/dang-ky-hoc-phan",
      icon: "fa-brands fa-buffer",
      title: "Đăng ký học phần",
   },
   {
      path: "/tra-cuu-cong-no",
      icon: "fa-solid fa-dollar-sign",
      title: "Tra cứu công nợ",
   },
   {
      path: "/thanh-toan-truc-tuyen",
      icon: "fa-solid fa-file-invoice-dollar",
      title: "Thanh toán trực tuyến",
   },
   {
      path: "/phieu-thu-tong-hop",
      icon: "fa-solid fa-file-contract",
      title: "Phiếu thu tổng hợp",
   },
   {
      path: "/lich-theo-tien-do",
      icon: "fa-solid fa-calendar-check",
      title: "Lịch theo tiến độ",
   },
   {
      path: "/ghi-chu-nhac-nho-sinh-vien",
      icon: "fa-solid fa-briefcase",
      title: "Nhắc nhở",
   },
];

const MainHome = () => {
   const listItems = featureList.map((item, index) => {
      return (
         <HomeItem
            key={index}
            path={item.path}
            icon={item.icon}
            title={item.title}
         />
      );
   });

   const [selectedModeCol, setSelectedModeCol] = useState(0);
   const [selectedModeTable, setSelectedModeTable] = useState(0);

   return (
      <>
         <main className="home">
            <div className="home-container container">
               <div className="home-row">
                  <div className="home-profile">
                     <div className="home-profile-title">
                        <div className="caption">
                           <h2>Thông tin sinh viên</h2>
                        </div>
                     </div>
                     <div className="home-profile-content">
                        <div className="home-profile__user">
                           <div className="home-profile-user__img">
                              <img src={UserImg} alt="img-user" />
                           </div>
                           <Link to="/thong-tin-sinh-vien">
                              <span className="home-profile-user__info">
                                 Xem chi tiết
                              </span>
                           </Link>
                        </div>
                        <div className="home-profile-info">
                           <div className="home-profile-info__col">
                              <div className="home-profile-info__row">
                                 MSSV: <strong>21001111</strong>
                              </div>
                              <div className="home-profile-info__row">
                                 Họ tên:
                                 <strong> Phan Trọng Hậu</strong>
                              </div>
                              <div className="home-profile-info__row">
                                 Giới tính: <strong>Nam</strong>
                              </div>
                              <div className="home-profile-info__row">
                                 Ngày sinh:
                                 <strong> 01/04/2003</strong>
                              </div>
                              <div className="home-profile-info__row">
                                 Nơi sinh:
                                 <strong> Tỉnh Phú Yên</strong>
                              </div>
                           </div>
                           <div className="home-profile-info__col">
                              <div className="home-profile-info__row">
                                 Lớp học: <strong>DHKTPM17A</strong>
                              </div>
                              <div className="home-profile-info__row">
                                 Khóa học:
                                 <strong> 2021 - 2022</strong>
                              </div>
                              <div className="home-profile-info__row">
                                 Bậc đào tạo:
                                 <strong> Đại học</strong>
                              </div>
                              <div className="home-profile-info__row">
                                 Loại hình đào tạo:
                                 <strong> Chính quy</strong>
                              </div>
                              <div className="home-profile-info__row">
                                 Ngành:
                                 <strong> Kĩ thuật phần mềm</strong>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="box-menu">
                     <Link to="/ghi-chu-nhac-nho-sinh-vien">
                        <div className="item-box-menu">
                           <h4 className="name">Nhắc nhở mới, chưa xem</h4>
                           <div className="desc">
                              <div className="number">0</div>
                              <div className="menu-icon">
                                 <i className="fa-regular fa-bell border"></i>
                              </div>
                           </div>
                           <div className="text-left color">Xem chi tiết</div>
                        </div>
                     </Link>
                     <Link to="/lich-theo-tuan">
                        <div className="item-box-menu">
                           <h4 className="name">Lịch học trong tuần</h4>
                           <div className="desc">
                              <div className="number">0</div>
                              <div className="menu-icon">
                                 <i className="fa-solid fa-calendar-days border"></i>
                              </div>
                           </div>
                           <div className="text-left">Xem chi tiết</div>
                        </div>
                     </Link>
                     <Link to="/lich-theo-tuan">
                        <div className="item-box-menu">
                           <h4 className="name">Lịch thi trong tuần</h4>
                           <div className="desc">
                              <div className="number">0</div>
                              <div className="menu-icon">
                                 <i className="fa-regular fa-calendar-check border"></i>
                              </div>
                           </div>
                           <div className="text-left">Xem chi tiết</div>
                        </div>
                     </Link>
                  </div>
               </div>
               <div className="featured">
                  <div className="featured-list">{listItems}</div>
               </div>
               <div className="chart-custom">
                  <div className="chart-item">
                     <div className="chart-title">
                        <div className="caption">
                           <h2>Kết quả học tập</h2>
                           <div className="action">
                              <Select
                                 setSelectedModeCol={setSelectedModeCol}
                                 index={0}
                              />
                           </div>
                        </div>
                     </div>
                     <div className="chart-col">
                        <BarChart selectedModeCol={selectedModeCol} />
                     </div>
                  </div>
                  <div className="chart-item">
                     <div className="chart-title">
                        <div className="caption">
                           <h2>Tiến độ học tập</h2>
                        </div>
                        <div className="form-control"></div>
                     </div>
                     <div className="chart-pie">
                        <PieChart />
                        <p>19/156</p>
                     </div>
                  </div>
                  <div className="chart-item">
                     <div className="chart-title">
                        <div className="caption">
                           <h2>Lớp học phần</h2>
                           <div className="action">
                              <Select
                                 setSelectedModeTable={setSelectedModeTable}
                                 index={0}
                              />
                           </div>
                        </div>
                     </div>
                     <div className="chart-table">
                        <TableList selectedModeTable={selectedModeTable} />
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </>
   );
};

export default MainHome;
