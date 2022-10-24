import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import MainProfile from "../Components/MainProfile";

const Profile = () => {
    return (
        <>
            <Helmet>
                <title>Thông tin sinh viên</title>
                <meta
                    name="description"
                    content="Nơi lưu trữ thông tin của từng sinh viên "
                />
                <link rel="canonical" href="/thong-tin-sinh-vien" />
            </Helmet>
            <Header checkSidebar={false} />
            <MainProfile />
        </>
    );
};

export default Profile;
