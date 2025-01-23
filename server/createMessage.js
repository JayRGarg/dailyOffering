//import { parse } from "csv-parse";
const fs = require("fs");
const { parse } = require("csv-parse/sync");


const getPhilQuote = (mood) => {
    //let quotes = [];
    let csv = fs.readFileSync(`./data/quotes/${mood}.csv`, {encoding:'utf8'}); 
    let quotes = parse(csv, { columns:true, skip_empty_lines:true });
    return quotes[Math.floor(Math.random()*quotes.length)];
};

const getAction = (mood) => {
    let action = '';
    if (mood == 'motivated') {
        action = 'rigorous';
    } else {
        action = 'restful';
    }
    let csv = fs.readFileSync(`./data/actions/${action}.csv`, {encoding:'utf8'}); 
    let actions = parse(csv, { columns:true, skip_empty_lines:true });
    return actions[Math.floor(Math.random()*actions.length)];
};

const getAffirmation = (mood) => {
    let affirmation = '';
    if (mood == 'motivated') {
        affirmation = 'inspiring';
    } else {
        affirmation = 'uplifting';
    }
    let csv = fs.readFileSync(`./data/affirmations/${affirmation}.csv`, {encoding:'utf8'}); 
    let affirmations = parse(csv, { columns:true, skip_empty_lines:true });
    return affirmations[Math.floor(Math.random()*affirmations.length)];
};

const getData = (name, mood) => {
    let philosophical = getPhilQuote(mood);
    //let quote = `${name}, ${philosophical.quote}`
    return {
        name: name,
        philQuote: philosophical.quote,
        author: philosophical.author,
        action: getAction(mood).action,
        affirmation: getAffirmation(mood).affirmation,
    };
};

console.log(getData('Jay', 'motivated'));
module.exports = getData;