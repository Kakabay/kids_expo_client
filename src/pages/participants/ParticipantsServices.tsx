import { Outlet } from 'react-router-dom';
import { SidebarLayout } from '../../components/global/SidebarLayout';

const ParticipantsServices = () => {
  return (
    <div className="">
      <SidebarLayout>
        <Outlet />
      </SidebarLayout>
    </div>
  );
};

export default ParticipantsServices;
