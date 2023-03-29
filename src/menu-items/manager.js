import { DashboardOutlined, SolutionOutlined } from '@ant-design/icons';

const icons = {
    DashboardOutlined,
    SolutionOutlined
};

const manager = {
    id: 'group-manager',
    title: 'Manager',
    type: 'group',
    children: [
        {
            id: 'manager',
            title: 'Manager',
            type: 'item',
            url: '/manager',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        }
    ]
};

export default manager;
