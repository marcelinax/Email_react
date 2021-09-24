import React from 'react';

const EmailEmailsListItem: React.FC = () => {
    return (
        <div className={'email-emails-list-item'}>
            <div className={'email-emails-list-item-user-avatar'}
                 style={{backgroundImage: `url(https://st.depositphotos.com/1011382/2845/i/950/depositphotos_28451549-stock-photo-real-normal-person-portrait.jpg)`}}/>
            <div className={'email-emails-list-item-info-box'}>
                <div className={'time-box'}>
                    <i className="bx bx-time-five"/>
                    <p>5min</p>
                </div>
                <h4>Charlie.Davis@gmail.com</h4>

                <p className={'title'}>Need an existenital reaston for</p>
                <p className={'content'}>Użytkownik klika plusik (w menu po lewej) wyskakuje modal, w którym wypełnia
                    dane odbiorcy adresu email, tytuł oraz treść maila. Klika wyślij po czym ten mail dodaje się do bazy
                    mailiUżytkownik klika plusik (w menu po lewej) wyskakuje modal, w którym wypełnia
                    dane odbiorcy adresu email, tytuł oraz treść maila. Klika wyślij po czym ten mail dodaje się do bazy
                    maili</p>
            </div>
        </div>
    );
};

export default EmailEmailsListItem;