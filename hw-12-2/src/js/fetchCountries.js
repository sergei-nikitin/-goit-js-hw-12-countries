

export default function fetchCountry(name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(response => {
            if (response.status === 404) {
                return alert('status 404');
            }
            return response.json();
        })
}