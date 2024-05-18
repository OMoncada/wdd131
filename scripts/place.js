const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = (document.lastModified);

const temp = 44;
const windSpeed = 6;
function calculateWindchill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        const windchill = 35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16;
        const roundedWindchill = Math.round(windchill * 100) / 100;
        return roundedWindchill;
    } else {
        return "N/A";
    }
}
const windchillFactor = document.querySelector('#windchill-factor');
windchillFactor.textContent = calculateWindchill(temp, windSpeed); 