import { useEffect } from "react";
import Header from "../../components/Header";
import MainWeeklyProgress from "../Components/MainWeeklyProgress";

const WeeklyProgress = () => {
    useEffect(() => {
       document.title = "Lịch học, lịch thi theo tiến độ";
    }, []);
    return (
        <>
            <Header checkSidebar={true}/>
            <MainWeeklyProgress />
        </>
    );
};

export default WeeklyProgress;
