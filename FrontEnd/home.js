//window.location.replace("http://127.0.0.1:5500/FrontEnd/login.html")

let works = []

async function getWorks() {
    return fetch('http://localhost:5678/api/works', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            return (data);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
            return ([])
        });
}

async function getCategories() {
    return fetch('http://localhost:5678/api/categories', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return (data);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
            return ([])
        });


}


async function populateWorks() {
    works = await getWorks();
    console.log(works);
    const gallery = document.getElementsByClassName('gallery')[0]
    console.log(gallery)

    for (let i = 0; i < works.length; i++) {
        const figure = document.createElement('figure')
        const image = document.createElement('img')
        const work = works[i]
        image.src = work.imageUrl
        image.alt = work.title
        /*ajouter id */
        const figcaption = document.createElement('figcaption')
        figcaption.innerText = work.title

        figure.appendChild(image)
        figure.appendChild(figcaption)

        gallery.appendChild(figure)
    }



}

function filtersWorks(category) {
    // faire une var qui se nomme (filterworks = var qui tri
    // regarder la dox mozzila et utiliser le filters sur le tableau works elle crée et retourne le tab 
    console.log(category)
}



async function populateFilters() {
    const categories = await getCategories();
    const filtersContainer = document.getElementsByClassName('FiltersButton')[0]; // Sélectionnez le conteneur des filtres

    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];

        const filterButton = document.createElement('button');

        filterButton.classList.add('log-button');

        filterButton.textContent = category.name;

        filterButton.addEventListener('click', () => {
            filtersWorks(category.name)
            // Logique de filtrage ici (à implémenter)
        });

        filtersContainer.appendChild(filterButton);
    }



}


populateWorks()



//copy coller get works ici = get gatégory
//reponse de la ligne 2 // const works = await getWorks();






populateFilters()