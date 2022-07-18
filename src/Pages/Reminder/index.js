import { useEffect } from 'react';
import Header from '../../components/Header';
import MainReminder from '../Components/MainReminder';

const Reminder = () => {
    useEffect(() => {
       document.title = "Ghi chú nhắc nhở";
    }, []);
    return (
        <>
            <Header checkSidebar={false} />
            <MainReminder />
        </>
    );
};

export default Reminder;