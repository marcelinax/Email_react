import React, {useEffect, useState} from 'react';
import parseDate from "../utils/parseDate";

interface Props {
    date: Date;
}

const EmailMomentFromNow: React.FC<Props> = ({date}) => {

    const [parsedDate, setParsedDate] = useState<string>('');
    const [timer, setTimer] = useState<any>(null);

    useEffect(() => {
        setParsedDate(parseDate(date));
        if (timer)
            clearTimeout(timer);
        setTimer(setTimeout(() => {
            setParsedDate(parseDate(date));
        }, 1000));
    }, [date]);

    return (
        <>{parsedDate}</>
    );
};

export default EmailMomentFromNow;