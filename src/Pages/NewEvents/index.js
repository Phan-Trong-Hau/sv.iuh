import { useEffect } from "react";
import Header from "../../components/Header";
import MainNewEvents from "../Components/MainNewEvents";

const NewEvents = () => {
   useEffect(() => {
      document.title = "Tin tức - Thông báo - Biểu mẫu";
   }, []);
   return (
      <>
         <Header checkSidebar={true} />
         <MainNewEvents />
      </>
   );
};

export default NewEvents;
