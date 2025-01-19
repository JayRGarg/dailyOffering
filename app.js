const generateMessage = (name, mood) {
    let philosophical = getPhilQuote(name, mood);
    return {
        philQuote: philosophical.quote,
        author: philosophical.author,
        action: getAction(mood),
        affirmation: getAffirmation(name, mood)
    };
};