import { useEffect } from 'react';
import Header from '../../components/Header'
import MainRegisterCourse from '../Components/MainRegisterCourse';


const RegisterCourse = () => {
    useEffect(() => {
       document.title = "Đăng ký học phần";
    }, []);
    return (
        <>
            <Header checkSidebar={true}/>
            <MainRegisterCourse />
        </>
    )
}

export default RegisterCourse;