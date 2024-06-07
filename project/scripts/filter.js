document.addEventListener("DOMContentLoaded", () => {
    const courses = [
        {
            title: "Cell Phones and Health: Benefits and Risks",
            date: "13 June, 2024 (17:00hrs)",
            mode: "100% online",
            imgSrc: "images/1.jpeg",
            category: "online",
        },
        {
            title: "Essential Applications for Your Daily Life",
            date: "14 June, 2024 (18:00hrs)",
            mode: "In-person",
            imgSrc: "images/2.jpeg",
            category: "person",
        },
        {
            title: "Cell Phones and Society: How We Use Our Devices",
            date: "14 August, 2024 (18:00hrs)",
            mode: "100% online",
            imgSrc: "images/3.jpeg",
            category: "online",
        },
        {
            title: "Cell Phones currently in the Modern Era",
            date: "15 August, 2024 (17:00hrs)",
            mode: "In-person",
            imgSrc: "images/4.jpeg",
            category: "person",
        },
        {
            title: "Cell Phone Use in Children currently",
            date: "16 September, 2024 (17:00hrs)",
            mode: "100% online",
            imgSrc: "images/5.jpeg",
            category: "online",
        },
        {
            title: "Cell Phone Care in the Modern Era ",
            date: "17 September, 2024 (17:00hrs)",
            mode: "Flex",
            imgSrc: "images/6.jpeg",
            category: "flex",
        },
        {
            title: "Anti-Hacker Protection currently",
            date: "15 November, 2024 (17:00hrs)",
            mode: "In-person",
            imgSrc: "images/7.jpeg",
            category: "person",
        },
        {
            title: "Business with Mobile Technology",
            date: "15 December, 2024 (17:00hrs)",
            mode: "Flex",
            imgSrc: "images/8.jpeg",
            category: "flex",
        },
    ];

    const filterButtons = document.querySelectorAll("#filter-buttons button");
    const filterableCardsContainer = document.getElementById("filterable-cards");

    const generateCardHTML = (course) => `
    <div class="card p-0" data-name="${course.category}">
        <img src="${course.imgSrc}" alt="img" />
        <div class="card-body text-center">
        <h6 class="card-title" style="font-size: 1rem;">${course.title}</h6>
            <p class="card-text">${course.date}</p>
            <p class="card-text">${course.mode}</p>
            <a href="courses.html" class="btn choose-button-style mt-2 choose-button">Choose</a>
        </div>
    </div>
`;

    const renderCards = () => {
        filterableCardsContainer.innerHTML = courses.map(generateCardHTML).join("");
        addChooseButtonListeners(); // Agrega los event listeners para los botones "Elegir"
    };

    const addChooseButtonListeners = () => {
        const chooseButtons = document.querySelectorAll('.choose-button');
        chooseButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Acción a realizar cuando se hace clic en el botón "Elegir"
                console.log('Botón "Elegir" clickeado');
                // Aquí puedes agregar la lógica para manejar el clic del botón "Elegir"
            });
        });
    };

    const filterCards = (e) => {
        document.querySelector("#filter-buttons .active").classList.remove("active");
        e.target.classList.add("active");

        const filter = e.target.dataset.filter;
        const cards = document.querySelectorAll("#filterable-cards .card");

        cards.forEach(card => {
            if (card.dataset.name === filter || filter === "all") {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    };

    filterButtons.forEach(button => button.addEventListener("click", filterCards));
    renderCards();
});


