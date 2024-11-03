import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import MainUpdateStuInfo from "../Components/MainUpdateStuInfo";

const UpdateStuInfo = () => {
    return (
        <>
            <Helmet>
                <title>Cập nhật thông tin sinh viên</title>
                <meta
                    name="description"
                    content="Cập nhật thông tin sinh viên IUH"
                />
                <link
                    rel="canonical"
                    href="/de-xuat-cap-nhat-thong-tin-sinh-vien"
                />
            </Helmet>
            <Header checkSidebar={true} />
            <MainUpdateStuInfo />
        </>
    );
};

export default UpdateStuInfo;
