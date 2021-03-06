
export const formatDate = date => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
};

export const splitDate = date => {
    let formatedDate = '';
    const temp = date.split(',');
    formatedDate = temp[1];
    return formatedDate;
};

export const splitTime = date => {
    let formatedTime = '';
    const temp = date.split(',');
    formatedTime = temp[3];
    return formatedTime;
};
