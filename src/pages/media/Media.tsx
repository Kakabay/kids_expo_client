import { Outlet } from "react-router-dom";
import { SidebarLayout } from "../../components/global/SidebarLayout";

const Media = () => {
  return (
    <SidebarLayout>
      <Outlet />
    </SidebarLayout>
  );
};

export default Media;
