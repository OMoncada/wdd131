const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = (document.lastModified);


const postsElement = document.querySelector("#posts");
let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;
if (numVisits !== 0) {
    postsElement.textContent = numVisits;
} else {
    postsElement.textContent = `This is your first review posted!`;
    numVisits++;
}

numVisits++;
localStorage.setItem("numVisits", numVisits);