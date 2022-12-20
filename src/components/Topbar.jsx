import React, { useState } from 'react';
import { ChevronDoubleDown, ChevronDoubleUp } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

import './Topbar.css';

const Topbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return(
      <div className='topbar-container'>
        <div className='topbar-title'>
          <h1 className='topbar-title-text'>Picresse</h1>
          <Button className='topbar-button btn btn-light' type='button' onClick={() => setIsCollapsed(!isCollapsed)}>
            { isCollapsed ? <ChevronDoubleUp /> : <ChevronDoubleDown /> }
          </Button>
        </div>
        <div>
          { isCollapsed ? 
          <div className={ isCollapsed ? 'topbar-content' : '' }>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
          </div> : <></>
          }
        </div>
      </div>
    );
}

export default Topbar;