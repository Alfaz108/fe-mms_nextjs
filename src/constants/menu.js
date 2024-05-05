import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import DocPassIcon from '@rsuite/icons/DocPass';
import ModelIcon from '@rsuite/icons/Model';
import PeoplesIcon from '@rsuite/icons/Peoples';
import DetailIcon from '@rsuite/icons/Detail';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import TagAuthorizeIcon from '@rsuite/icons/TagAuthorize';
const MENU_ITEMS = () => {
  return [
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: DashboardIcon,
      url: '/',
    },

    {
      key: 'border',
      label: 'Borders',
      icon: PeoplesIcon,
      url: '/border',
    },
    {
      key: 'category',
      label: 'Category',
      icon: ModelIcon,
      url: '/category',
    },

    {
      key: 'invoice',
      label: 'Invoice',
      icon: DetailIcon,
      url: '/invoice',
    },

    {
      key: 'bids',
      label: 'Bids',
      icon: UserInfoIcon,
      url: '/bids',
    },
    {
      key: 'tickets',
      label: 'Tickets',
      icon: TagAuthorizeIcon,
      url: '/tickets',
    },

    {
      key: 'reports',
      label: 'Reports',
      icon: DocPassIcon,
      url: '/reports',
    },
  ];
};

export default MENU_ITEMS;
