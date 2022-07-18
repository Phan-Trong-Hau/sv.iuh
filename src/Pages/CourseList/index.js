import { useEffect } from "react";
import Header from "../../components/Header";
import MainCourseList from '../Components/MainCourseList'

const CourseList = () => {
    useEffect(() => {
       document.title = "Chương trình khung";
    }, []);
    return (
        <>
            <Header checkSidebar={false} />
            <MainCourseList />
        </>
    );
};

export default CourseList;
