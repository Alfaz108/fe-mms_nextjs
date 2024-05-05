'use client';
import { useState } from 'react';
import ReduxWrapper from '../../redux/ReduxWrapper';
import LeftSidebar from '../../layouts/leftSidebar';
import Topbar from '../../layouts/topBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuIcon from '@rsuite/icons/Menu';

export default function RootLayout({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState('1');

  const buttonFunction = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <ReduxWrapper>
      <html lang="en">
        <head>
          <link
            href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css"
            rel="stylesheet"
          />
        </head>
        <body>
          <div style={{ overflowX: 'hidden' }} className="d-flex">
            <div style={{ position: 'fixed' }}>
              <LeftSidebar
                expanded={expanded}
                activeKey={activeKey}
                setActiveKey={setActiveKey}
              />
            </div>

            <div className="flex-grow-1 d-flex flex-column dashBoardBackgroundColor">
              <div
                style={{
                  position: 'static',
                  height: '-55px',
                  top: 0,
                  width: '100%',
                  zIndex: 1000,
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    marginLeft: expanded ? '250px' : '50px',
                    transition: 'margin-left 0.5s',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '7px',
                      cursor: 'pointer',
                      zIndex: 1,
                    }}
                    onClick={buttonFunction}
                  >
                    <MenuIcon style={{ width: '30px', fontSize: '18px' }} />
                  </div>

                  <Topbar />
                </div>
              </div>

              {/* Content Area with Scrolling */}
              <div
                className="flex-grow-1 h-100"
                style={{
                  marginLeft: expanded ? '250px' : '50px',
                  transition: 'margin-left 0.3s',
                }}
              >
                {children}
              </div>
            </div>
          </div>
        </body>
      </html>
    </ReduxWrapper>
  );
}
