import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CourseList from "./Pages/CourseList";
import Home from "./Pages/Home";
import NominalCalendar from "./Pages/NominalCalendar";
import Outcomes from "./Pages/Outcomes";
import Profile from "./Pages/Profile";
import Reminder from "./Pages/Reminder";
import UpdateBank from "./Pages/UpdateBank";
import UpdateStuInfo from "./Pages/UpdateStuInfo";
import WeeklyCalendar from "./Pages/WeeklyCalendar";
import WeeklyProgress from "./Pages/WeeklyProgress";
import RegisterCourse from "./Pages/RegisterCourse";
import DebtLookup from "./Pages/DebtLookup";
import OnlinePayment from "./Pages/OnlinePayment";
import GeneralReceipts from "./Pages/GeneralReceipts";
import Receipts from "./Pages/Receipts";
import SearchRes from "./Pages/SearchRes";
import NewEvents from "./Pages/NewEvents";

function App() {
   return (
      <Router>
         <div className="App">
            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="thong-tin-sinh-vien" element={<Profile />}></Route>
               <Route
                  path="ghi-chu-nhac-nho-sinh-vien"
                  element={<Reminder />}
               ></Route>
               <Route
                  path="de-xuat-cap-nhat-thong-tin-sinh-vien"
                  element={<UpdateStuInfo />}
               ></Route>
               <Route
                  path="de-xuat-cap-nhat-thong-tin-ngan-hang"
                  element={<UpdateBank />}
               ></Route>
               <Route path="ket-qua-hoc-tap" element={<Outcomes />}></Route>
               <Route
                  path="lich-theo-tuan"
                  element={<WeeklyCalendar />}
               ></Route>
               <Route
                  path="lich-theo-tien-do"
                  element={<WeeklyProgress />}
               ></Route>
               <Route
                  path="lich-hoc-lop-danh-nghia"
                  element={<NominalCalendar />}
               ></Route>
               <Route
                  path="chuong-trinh-khung"
                  element={<CourseList />}
               ></Route>
               <Route
                  path="dang-ky-hoc-phan"
                  element={<RegisterCourse />}
               ></Route>
               <Route path="tra-cuu-cong-no" element={<DebtLookup />}></Route>
               <Route
                  path="thanh-toan-truc-tuyen"
                  element={<OnlinePayment />}
               ></Route>
               <Route
                  path="phieu-thu-tong-hop"
                  element={<GeneralReceipts />}
               ></Route>
               <Route
                  path="sinh-vien-tin-tuc-thong-bao"
                  element={<NewEvents />}
               ></Route>
               <Route path="phieu-thu" element={<Receipts />}></Route>
               <Route path="ket-qua-tim-kiem" element={<SearchRes />}></Route>
            </Routes>
         </div>
      </Router>
   );
}

export default App;
