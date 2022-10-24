import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import MainSearchRes from "../Components/MainSearchRes";

const SearchRes = () => {
    return (
        <>
            <Helmet>
                <title>Kết quả tìm kiếm</title>
                <meta
                    name="description"
                    content="Kết quả tìm kiếm thông tin sinh viên trường IUH"
                />
                <link rel="canonical" href="/ket-qua-tim-kiem" />
            </Helmet>
            <Header checkSidebar={false} />
            <MainSearchRes />
        </>
    );
};

export default SearchRes;
