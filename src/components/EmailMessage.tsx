import React from 'react';

const EmailMessage: React.FC = () => {

    const renderEmailMessagePlaceholder = (): JSX.Element => {
        return (<div className={'email-message-placeholder'}>
            <i className="bx bx-envelope-open"></i>
            <h3>Select a message from the mailbox</h3>
        </div>);
    };

    return (
        <div className={'email-message'}>
            {renderEmailMessagePlaceholder()}
        </div>
    );
};

export default EmailMessage;