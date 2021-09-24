import React, {ChangeEvent, useState} from 'react';
import EmailEmailsListItem from "./EmailEmailsListItem";

const EmailEmailsList: React.FC = () => {

    const [search, setSearch] = useState<string>('');

    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
    };

    return (
        <div className={'email-emails-list'}>
            <div className={'email-emails-list-filter-box'}>
                <i className="bx bx-search"/>
                <input placeholder={'Research'} value={search} onChange={handleSearchInput}/>
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