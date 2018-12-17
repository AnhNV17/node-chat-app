var generateMessage = (from, text) => {
    return {
        from, 
        text, 
        sentTime: new Date().getTime()
    };
};

module.exports = {generateMessage};