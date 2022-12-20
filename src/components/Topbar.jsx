import React, { useState } from 'react';
import { ChevronDoubleDown, ChevronDoubleUp } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

import './Topbar.css';

const Topbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    /*
    structure:
    fullwidth bar
    isCollapsed:
    only show centered title and dropdown button

    !isCollapsed:
    show tab view: list / search / add components
    */
    return(
      <div className='topbar-container'>
        <div className='topbar-always-visible'>
          <div className='topbar-title'>
            <h1 className='topbar-title-text'>Picresse</h1>
          </div>
          <Button className='topbar-button btn btn-light' type='button' onClick={() => setIsCollapsed(!isCollapsed)}>
            { isCollapsed ? <ChevronDoubleDown /> : <ChevronDoubleUp /> }
          </Button>
        </div>

        <div className='topbar-dropdown'>
          dropdown space
        </div>
      </div>
    );
}

export default Topbar;