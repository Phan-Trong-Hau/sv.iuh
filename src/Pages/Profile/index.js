import { useEffect } from 'react';
import Header from '../../components/Header';
import MainProfile from '../Components/MainProfile';

const Profile = () => {
    useEffect(() => {
       document.title = "Thông tin sinh viên";
    }, []);
    return (
        <>
            <Header checkSidebar={false} />
            <MainProfile />
        </>
    );
};

export default Profile;