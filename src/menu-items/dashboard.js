// assets
import { DashboardOutlined, SolutionOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    SolutionOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'personal',
            title: 'Personal',
            type: 'item',
            url: '/personal',
            icon: icons.SolutionOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
