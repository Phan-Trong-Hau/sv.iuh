import { useEffect } from "react";
import Header from "../../components/Header";
import MainHome from "../Components/MainHome";

const Home = () => {
    useEffect(() => {
       document.title = "Cổng thông tin sinh viên";
    }, []);
    return (
        <>
            <Header checkSidebar={true}/>
            <MainHome />
        </>
    );
};

export default Home;
