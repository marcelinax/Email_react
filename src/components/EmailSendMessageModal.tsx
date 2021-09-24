import React from 'react';

const EmailSendMessageModal: React.FC = () => {
    return (
        <div className={'email-send-message-modal'}>
            <div className={'email-send-message-modal-box'}>
                <div className={'email-send-message-modal-box-top'}>
                    <i className="bx bx-x close-btn"/>
                    <p>New message</p>
                </div>
                <div className={'email-send-message-modal-box-inputs'}>
                    <input placeholder={`Recipient's email`}/>
                    <input placeholder={`Title`}/>
                    <textarea placeholder={`Message...`}/>
                </div>
                <div className={'email-send-message-modal-box-bottom'}>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

export default EmailSendMessageModal;