import React from 'react';
import PropTypes from 'prop-types';

import './reports.scss';

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0
        };
    }

    switchTab = (newTab) => {
        this.setState({
            activeTab: newTab
        });
    }

    renderTabs = () => {
        const { tabNames } = this.props;
        const { activeTab } = this.state;
        return (
            tabNames.map((tabName, i) => (
                <button
                    className="tabElement"
                    onClick={() => { this.switchTab(i); }}
                    id={i === activeTab ? 'isActive' : 'notActive'}
                >
                    {tabName}
                </button>))
        );
    }

    render() {
        const { activeTab } = this.state;
        const { children } = this.props;
        return (
            <div className="tapp__content content">
                <div id="tabs">
                    {
                        this.renderTabs()
                    }
                </div>
                <div
                    className="content__card"
                >
                    {
                        children[activeTab]
                    }
                </div>
            </div>
        );
    }
}

Tabs.propTypes = {
    children: PropTypes.node.isRequired,
    tabNames: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Tabs;
