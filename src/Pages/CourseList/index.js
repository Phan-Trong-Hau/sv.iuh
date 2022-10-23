// import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import MainCourseList from "../Components/MainCourseList";

const CourseList = () => {
    return (
        <>
            <Helmet>
                <title>Chương trình khung</title>
                <meta
                    name="description"
                    content="Khung chương trình đào tạo của sinh viên IUH"
                />
            </Helmet>
            <Header checkSidebar={false} />
            <MainCourseList />
        </>
    );
};

export default CourseList;
