import { Outlet } from 'react-router-dom';
import { SidebarLayout } from '../../components/global/SidebarLayout';

const ParticipantsServices = () => {
  return (
    <SidebarLayout>
      <Outlet />
    </SidebarLayout>
  );
};

export default ParticipantsServices;
