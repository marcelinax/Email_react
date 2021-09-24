import React, {ChangeEvent, useState} from 'react';

const EmailLoginForm: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [avatarUrl, setAvatarUrl] = useState<string>('');

    const handleEmailInput = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    };
    const handleAvatarUrlInput = (e: ChangeEvent<HTMLInputElement>): void => {
        setAvatarUrl(e.target.value);
    };


    return (
        <div className={'email-login-form'}>
            <div className={'email-login-form-box'}>
                <i className="bx bx-envelope-open"/>
                <div className={'email-login-form-box-inputs-box'}>
                    <input placeholder={'E-mail'} value={email} onChange={handleEmailInput}/>
                    <input placeholder={'Avatar url'} value={avatarUrl} onChange={handleAvatarUrlInput}/>
                </div>
                <button>LOGIN</button>
            </div>
        </div>
    );
};

export default EmailLoginForm;
