import { useEffect } from "react";
import Header from "../../components/Header";
import MainReceipts from "../Components/MainReceipts";

const Receipts = () => {
    useEffect(() => {
       document.title = "Phiếu thu";
    }, []);
   return (
      <>
         <Header checkSidebar={false} />
        <MainReceipts />        
      </>
   );
};

export default Receipts;
