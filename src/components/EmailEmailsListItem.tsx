import React from 'react';

interface Props {
    senderEmail: string;

    title: string;
    content: string;
    avatarUrl: string;
}

const EmailEmailsListItem: React.FC<Props> = ({senderEmail, content, title, avatarUrl}) => {
    return (
        <div className={'email-emails-list-item'}>
            <div className={'email-emails-list-item-user-avatar'}
                 style={{backgroundImage: `url(${avatarUrl})`}}/>
            <div className={'email-emails-list-item-info-box'}>
                <div className={'time-box'}>
                    <i className="bx bx-time-five"/>
                    <p>5min</p>
                </div>
                <h4>{senderEmail}</h4>

                <p className={'title'}>{title}</p>
                <p className={'content'}>{content}</p>
            </div>
        </div>
    );
};

export default EmailEmailsListItem;