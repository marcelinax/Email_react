import React, {ChangeEvent, useState} from 'react';

interface Props {
    setShowSendMessageModal: (param: boolean) => void;
}

const EmailSendMessageModal: React.FC<Props> = ({setShowSendMessageModal}) => {

    const [recipientEmail, setRecipientEmail] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');


    const handleRecipientEmailInput = (e: ChangeEvent<HTMLInputElement>): void => {
        setRecipientEmail(e.target.value);
    };
    const handleTitleInput = (e: ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value);
    };
    const handleContentInput = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setContent(e.target.value);
    };

    return (
        <div className={'email-send-message-modal'}>
            <div className={'email-send-message-modal-box'}>
                <div className={'email-send-message-modal-box-top'}>
                    <i className="bx bx-x close-btn" onClick={() => setShowSendMessageModal(false)}/>
                    <p>New message</p>
                </div>
                <div className={'email-send-message-modal-box-inputs'}>
                    <input placeholder={`Recipient's email`} value={recipientEmail}
                           onChange={handleRecipientEmailInput}/>
                    <input placeholder={`Title`} value={title} onChange={handleTitleInput}/>
                    <textarea placeholder={`Message...`} value={content} onChange={handleContentInput}/>
                </div>
                <div className={'email-send-message-modal-box-bottom'}>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

export default EmailSendMessageModal;