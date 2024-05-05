'use client';
import React, { useState } from 'react';
import { Badge } from 'rsuite';
import GearIcon from '@rsuite/icons/Gear';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'next/image';
import RumonImg from '../assets/image/Rumon.jpg';

const Topbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="w-100 ">
      <div className="d-flex align-items-center justify-content-end ">
        <div className="icon-example-list">
          <div className="d-flex p-1 align-items-center justify-content-center">
            <div className="me-3">
              <GearIcon spin style={{ fontSize: '1.3em', cursor: 'pointer' }} />
            </div>
            <div className="pt-2 pe-2 d-flex align-items-center">
              <span onClick={handleDropdownToggle}>
                <Badge color="blue">
                  <Image
                    src={RumonImg}
                    alt="no image"
                    width={35}
                    height={35}
                    style={{
                      width: '35px',
                      borderRadius: '50%',
                    }}
                  />
                </Badge>
              </span>
              <Dropdown
                show={dropdownOpen}
                alignRight
                onClose={handleDropdownClose}
              >
                <Dropdown.Toggle
                  className=" pb-2 ms-2 pe-4 text-info bg-white custom-toggle"
                  onClick={handleDropdownToggle}
                >
                  Admin
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Profile</Dropdown.Item>
                  <Dropdown.Item>
                    <span className="mdi mdi-logout">Logout</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
