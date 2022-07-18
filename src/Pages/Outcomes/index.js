import { useEffect } from "react";
import Header from "../../components/Header";
import MainOutcomes from "../Components/MainOutcomes";

const Outcomes = () => {
    useEffect(() => {
       document.title = "Kết quả học tập";
    }, []);
    return (
        <>
            <Header checkSidebar={true} />
            <MainOutcomes />
        </>
    );
};

export default Outcomes;
