import React from 'react';
import EmailMomentFromNow from "./EmailMomementFromNow";

interface Props {
    senderEmail: string;
    title: string;
    content: string;
    avatarUrl: string;
    onClick: () => void;
    date: Date;
    isCurrentEmail: boolean;
}

const EmailEmailsListItem: React.FC<Props> = ({
                                                  senderEmail,
                                                  content,
                                                  title,
                                                  avatarUrl,
                                                  onClick,
                                                  date,
                                                  isCurrentEmail
                                              }) => {


    return (
        <div className={`email-emails-list-item ${isCurrentEmail ? 'email-emails-list-item--active' : ''}`}
             onClick={onClick}>
            <div className={'email-emails-list-item-user-avatar'}
                 style={{backgroundImage: `url(${avatarUrl})`}}/>
            <div className={'email-emails-list-item-info-box'}>
                <div className={'time-box'}>
                    <i className="bx bx-time-five"/>
                    <p><EmailMomentFromNow date={date}/></p>
                </div>
                <h4>{senderEmail}</h4>

                <p className={'title'}>{title}</p>
                <p className={'content'}>{content}</p>
            </div>
        </div>
    );
};

export default EmailEmailsListItem;