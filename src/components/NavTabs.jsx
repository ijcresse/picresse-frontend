import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import TabList from './TabList';
import TabSearch from './TabSearch';
import TabAdd from './TabAdd';

const NavTabs = () => {

    return(
        <div className='nav-tabs-container'>
            <Tabs defaultActiveKey="list" className='mb-3' fill justify>
                <Tab eventKey="list" title="List">
                    <TabList />
                </Tab>
                <Tab eventKey="search" title="Search">
                    <TabSearch />
                </Tab>
                <Tab eventKey="add" title="Add">
                    <TabAdd />
                </Tab>
            </Tabs>
        </div>
    );
}

export default NavTabs;