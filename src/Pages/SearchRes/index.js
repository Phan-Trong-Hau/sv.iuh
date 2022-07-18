import { useEffect } from "react";
import Header from "../../components/Header";
import MainSearchRes from "../Components/MainSearchRes";

const SearchRes = () => {
     useEffect(() => {
        document.title = "Kết quả tìm kiếm";
     }, []);
    return (
        <>
            <Header checkSidebar={false}/>
            <MainSearchRes />
        </>
    )
}

export default SearchRes;