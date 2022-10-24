import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import MainRegisterCourse from "../Components/MainRegisterCourse";

const RegisterCourse = () => {
    return (
        <>
            <Helmet>
                <title>Đăng ký học phần</title>
                <meta
                    name="description"
                    content="Sinh viên tự đăng ký các môn học cho bản thân bao gồm học phần bắt buộc và học phần tự chọn"
                />
                <link rel="canonical" href="/dang-ky-hoc-phan" />
            </Helmet>
            <Header checkSidebar={true} />
            <MainRegisterCourse />
        </>
    );
};

export default RegisterCourse;
