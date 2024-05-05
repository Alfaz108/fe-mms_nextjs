import React from 'react';
import '../../App.css';
import { Sidenav, Nav } from 'rsuite';

import MENU_ITEMS from '../constants/menu';
import Image from 'next/image';
import logo from '../assets/logo/logo2.png';
import Think from '../assets/image/think.png';
import { useRouter } from 'next/navigation';

const LeftSidebar = ({ expanded, activeKey, setActiveKey }) => {
  const router = useRouter();

  const handleMenuItemClick = (menuItem) => {
    if (menuItem.url) {
      router.push(menuItem.url);
      setActiveKey(menuItem.key);
    }
  };
  const renderMenuItem = (menuItem) => {
    if (menuItem.children) {
      return (
        <Nav.Menu
          hover-none
          key={menuItem.key}
          eventKey={menuItem.key}
          title={menuItem.label}
          icon={menuItem?.icon && <menuItem.icon />}
        >
          {menuItem.children.map((child) => renderMenuItem(child))}
        </Nav.Menu>
      );
    } else {
      return (
        <Nav.Item
          onClick={() => handleMenuItemClick(menuItem)}
          style={{
            width: '250px',
            fontWeight: `${menuItem?.fontWeight}`,
            backgroundColor: '#ffffff',
          }}
          hover-none
          key={menuItem.key}
          eventKey={menuItem.key}
          icon={menuItem?.icon && <menuItem.icon />}
        >
          {menuItem.label}
        </Nav.Item>
      );
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidenav
        expanded={expanded}
        defaultOpenKeys={['3', '4']}
        style={{ flex: 'none' }}
      >
        <Sidenav.Header>
          <div
            expanded={expanded}
            style={{
              padding: '15px',
              fontSize: '20px',
              fontWeight: 'bold',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'left',
              justifyContent: 'left',
              backgroundColor: '#ffffff',
            }}
          >
            <Image
              src={logo}
              alt="Logo"
              width={35}
              height={35}
              style={{
                width: expanded ? '35px' : '35px',
                marginRight: '10px',
                marginLeft: '-5px',
              }}
            />
            {expanded && <span className="text-primary">DHAROSH</span>}
          </div>
        </Sidenav.Header>
        <Sidenav.Body
          style={{
            backgroundColor: '#ffffff',
          }}
        >
          <Nav className="" activeKey={activeKey} onSelect={setActiveKey}>
            {MENU_ITEMS().map((menuItem) => renderMenuItem(menuItem))}
          </Nav>

          <div style={{ width: '200px' }} className="w-75 d-block">
            <Image
              style={{ width: '250px', marginRight: '-50px' }}
              className="img-fluid"
              src={Think}
              alt=""
            />
          </div>
        </Sidenav.Body>
      </Sidenav>
      <div style={{ flex: '1', overflowY: 'auto' }}></div>
    </div>
  );
};

export default LeftSidebar;
