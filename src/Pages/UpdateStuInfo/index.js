import { useEffect } from 'react';
import Header from '../../components/Header';
import MainUpdateStuInfo from '../Components/MainUpdateStuInfo';

const UpdateStuInfo = () => {
    useEffect(() => {
       document.title = "Cập nhật thông tin sinh viên";
    }, []);
    return (
        <>
            <Header checkSidebar={true} />
            <MainUpdateStuInfo />
        </>
    );
};

export default UpdateStuInfo;