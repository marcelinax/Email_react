import React from 'react';
import EmailEmailsListItem from "./EmailEmailsListItem";

const EmailEmailsList: React.FC = () => {
    return (
        <div className={'email-emails-list'}>
            <div className={'email-emails-list-filter-box'}>
                <i className="bx bx-search"/>
                <input placeholder={'Research'}/>
            </div>
            <div className={'email-emails-list-box'}>
                <EmailEmailsListItem/>
                <EmailEmailsListItem/>
                <EmailEmailsListItem/>
                <EmailEmailsListItem/>
                <EmailEmailsListItem/>
            </div>
        </div>
    );
};

export default EmailEmailsList;