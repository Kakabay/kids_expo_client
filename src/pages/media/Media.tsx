import { SidebarLayout } from "@/components/layout/SidebarLayout";
import { Outlet } from "react-router-dom";

const Media = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default Media;
