import Dnavbar from "../components/DnavBar";
import Dsidebar from "../components/DsideBar";
import MainFooter from "../components/MainFooter";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen bg-blue">
      <Dnavbar />
      <div className="flex-grow flex flex-col">
        <div className="flex flex-row justify-between items-start p-5">
          {/* ส่วนที่ 2: 2 คอลัมน์ */}
          <div className="w-1/2">
            {/* เนื้อหาคอลัมน์ซ้าย */}
            <Dsidebar />
          </div>
          <div className="w-1/2">
            {/* เนื้อหาคอลัมน์ขวา */}
            <div>MainPage</div>
          </div>
        </div>
        <div className="p-5">
          {/* ส่วนที่ 3: คอลัมน์เดียวเต็มความกว้าง */}
          <MainFooter />
        </div>
      </div>
    </div>
  );
}