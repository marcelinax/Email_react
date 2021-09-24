import moment from "moment";

const parseDate = (date: Date): string => {
    return moment(date).fromNow();
};

export default parseDate;