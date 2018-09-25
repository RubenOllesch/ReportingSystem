import React from 'react';
import Tabs from './Tabs';
import ReportList from './Report/ReportList';
import ReportList1 from './Report/ReportList1';

import reportList from './../constants/reportList';

const Content = () => (
    <Tabs tabNames={['Offene Aufträge', 'Angenommene Aufträge']}>
        <ReportList reports={reportList}/>
        <ReportList1 />
    </Tabs>
);

export default Content;
