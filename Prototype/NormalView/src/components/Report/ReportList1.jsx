import React from 'react';
import { Accordion, Button } from 'chayns-components/lib';

const ReportList = () => (
    <div>
        <Accordion
            dataGroup="report"
            head="Kaffeemaschine kaputt"
            badge="Küche Junior-Team"
        >
            <div className="accordion__content">
                <img style={{ width: '100%' }} src="http://www.wehatetowaste.com/wp-content/uploads/2017/05/krups.jpg" alt=""/>
                <p>Wir können schon den ganzen Tag nicht arbeiten </p>
                <div style={{ textAlign: 'center' }}>
                    <Button
                        style={{
                            background: '#e11c00',
                            textAlign: 'center',
                        }}
                    >
                        Löschen
                    </Button>
                    <Button
                        style={{
                            background: '#4c993d',
                            textAlign: 'center',
                        }}
                    >
                        Abschließen
                    </Button>
                </div>
            </div>
        </Accordion>
    </div>
);

export default ReportList;
