import React from 'react';
import { Accordion, Button, FileUpload, Input, RadioButton, TextArea } from 'chayns-components/lib';
import 'chayns-components/lib/react-chayns-upload/index.css';

const Content = () => (
    <div className="tapp__content content">
        <div
            className="content__card"
        >
            <Accordion
                dataGroup="report"
                head="Was ist passiert?"
                defaultOpened
            >
                <div className="accordion__content">
                    <Input
                        placeholder="Titel"
                        onChange={(value) => {
                            console.log(value);
                        }}
                    />
                    <FileUpload
                        type="image"
                        multiple={false}
                        onChange={(validFiles) => {
                                console.log(validFiles);
                            }}
                    />
                    <TextArea
                        placeholder="Details"
                        autogrow
                        onChange={(value) => {
                            console.log(value);
                        }}
                    />
                </div>
            </Accordion>
            <Accordion
                dataGroup="report"
                head="Wo ist es passiert?"
            >
                <div className="accordion__content">
                    <Input
                        placeholder="Ort"
                        onChange={(value) => {
                            console.log(value);
                        }}
                    />
                </div>
            </Accordion>
            <Accordion
                dataGroup="report"
                head="Wer soll sich darum kümmern?"
            >
                <div className="accordion__content">
                    <RadioButton
                        name="receiver"
                    >
                        Dev
                    </RadioButton>
                    <RadioButton
                        name="receiver"
                    >
                        HR
                    </RadioButton>
                    <RadioButton
                        name="receiver"
                    >
                        Facility Management
                    </RadioButton>
                </div>
            </Accordion>
            <Accordion
                dataGroup="report"
                head="Priorität"
            >
                <div className="accordion__content">
                    <RadioButton
                        name="priority"
                    >
                        Notfall
                    </RadioButton>
                </div>
            </Accordion>
            <div style={{ textAlign: 'center' }}>
                <Button
                    style={{
                        background: '#4c993d',
                    }}
                >
                    Absenden
                </Button>
            </div>

        </div>
    </div>
);

export default Content;
