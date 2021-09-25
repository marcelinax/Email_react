import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sendEmailMessage} from "../state/emailsSlice";
import {RootState} from "../store";

interface Props {
    setShowSendMessageModal: (param: boolean) => void;
}

const EmailSendMessageModal: React.FC<Props> = ({setShowSendMessageModal}) => {

    const [recipientEmail, setRecipientEmail] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const loggedUser = useSelector((state: RootState) => state.users.loggedUser);
    const users = useSelector((state: RootState) => state.users.users);

    const dispatch = useDispatch();


    const sendNewMessage = (): void => {
        if (recipientEmail === '') {
            setErrorMessage(`Enter a recipient's email!`);
            return;
        }
        if (!users.map(user => user.email).includes(recipientEmail)) {
            setErrorMessage(`This email doesn't exist.`);
            return;
        } else {
            dispatch(sendEmailMessage({
                senderEmail: loggedUser !== null ? loggedUser.email : '',
                recipientEmail,
                content,
                title,
                date: new Date(),
            }));
            setShowSendMessageModal(false);
        }
        setErrorMessage('');


    };


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
                    {errorMessage ? <p className={'error-message'}>{errorMessage}</p> : <></>}
                    <input placeholder={`Recipient's email`} value={recipientEmail}
                           onChange={handleRecipientEmailInput}/>

                    <input placeholder={`Title`} value={title} onChange={handleTitleInput}/>
                    <textarea placeholder={`Message...`} value={content} onChange={handleContentInput}/>
                </div>
                <div className={'email-send-message-modal-box-bottom'}>
                    <button onClick={sendNewMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default EmailSendMessageModal;