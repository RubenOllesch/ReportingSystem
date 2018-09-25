import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Button } from 'chayns-components/lib';

const Report = ({ config }) => (
    <Accordion
        dataGroup="report"
        head={config.title}
        badge={config.location}
    >
        <div className="accordion__content">
            <img style={{ width: '100%' }} src={config.picSrc} alt=""/>
            <p>{config.text}</p>
            <p>{config.status}</p>
            <div style={{ textAlign: 'center' }}>
                <Button
                    style={{
                        background: '#4c993d',
                        textAlign: 'center'
                    }}
                >
                    Annehmen
                </Button>
            </div>
        </div>
    </Accordion>
);

Report.propTypes = {
    config: PropTypes.shape({
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        picSrc: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
    }).isRequired
};

export default Report;
