import { useEffect } from "react";
import Header from "../../components/Header";
import MainNominalCalendar from "../Components/MainNominalCalendar";



const NominalCalendar = () => {
     useEffect(() => {
        document.title = "Xem lịch học";
     }, []);
    return (
        <>
            <Header checkSidebar={true}/>
            <MainNominalCalendar />
        </>
    )
}

export default NominalCalendar;