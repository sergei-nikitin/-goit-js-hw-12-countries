import './styles.css';
import './styles.css';
import templateCard from './templates/country-card.hbs';
import countryNameList from './templates/country-name-list.hbs';
import getRefs from './js/get-refs';
import fetchCountry from './js/fetchCountries';

// default modules
import { alert, notice, info, success, error, defaultModules } from '@pnotify/core';
// default styles
import "@pnotify/core/dist/PNotify.css";
// default theme
import "@pnotify/core/dist/BrightTheme.css";


var debounce = require('lodash.debounce');
const refs = getRefs();


refs.input.addEventListener('input', debounce(log, 500));

function log(e) {
    e.preventDefault();
    const enteredCountry = e.target.value.trim();

    fetchCountry(enteredCountry)
        .then(renderHtml);

};


function renderHtml(arr) {
    if (arr.length === 1) {
        const markUp1 = templateCard(arr);
        refs.mainDiv.innerHTML = markUp1;
        
    } else if (arr.length >= 2 && arr.length <= 10) {
        console.log(arr.length)
        const markUp2 = countryNameList(arr);
        refs.mainDiv.innerHTML = markUp2;
        
    } else {
        error({
            text: 'введите более специфичное название страны',
            type: 'info',
            delay: 2000,
        });
    }
}

