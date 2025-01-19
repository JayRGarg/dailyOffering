const generateMessage = (name, mood) {
    return {
        philQuote: getPhilQuote(name, mood),
        action: getAction(mood),
        affirmation: getAffirmation(name, mood)
    }
}