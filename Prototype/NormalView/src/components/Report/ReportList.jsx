import React from 'react';
import Report from './Report';

import NO_REPORTS_MESSAGE from './../../constants/text';

const ReportList = (config) => {
    if (Array.isArray(config.reports) && config.reports.length > 0) {
        return (
            config.reports.map(report => <Report config={report} />)
        );
    }
    return <p>{NO_REPORTS_MESSAGE}</p>;
};

export default ReportList;
