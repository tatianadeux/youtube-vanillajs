/* RECREER LA PAGE D'ACCUEIL YOUTUBE :
/* 1 - Générer 12 vidéos 
    a) Créer une classe et une méthode 
    b) Créer l'affichage */
const thumbnails = document.querySelector('.thumbnails');

class Video{
    constructor(title, imageUrl, category, channel, channelPicture, views){
        this.title = title;
        this.imageUrl = imageUrl;
        this.category = category
        this.channel = channel;
        this.channelPicture = channelPicture;
        this.views = views;

        this.createVideo = function() {
            thumbnails.innerHTML += 
            `<section class="video-card">
                <div class="video-img">
                    <img src="${this.imageUrl}" alt="" class="w100">
                </div>
                <div class="flex a-center">
                    <div class="video-picture">
                        <img src="${this.channelPicture}" alt="" class="w100">
                    </div>
                    <div class="video-infos">
                        <p class="video-title">${this.title}</p>
                        <span class="video-text">${this.channel}</span>
                        <span class="video-text">• ${this.views}k de vues</span>
                    </div>
                </div>
            </section>`
        }
    }
}

const videosList = [
    new Video("Ces petits mots condescendants", "img/thumbnails/humour2.png", "Humour", "France Inter", "img/thumbnails/franceinter.png", 950),
    new Video("L'art de la conversation", "img/thumbnails/humour4.png", "Humour", "France Inter", "img/thumbnails/franceinter.png", 690),
    new Video("J'ai 25 ans", "img/thumbnails/humour.png", "Humour", "France Inter", "img/thumbnails/franceinter.png", 700),
    new Video("Le marathon de Paris", "img/thumbnails/humour3.png", "Humour", "France Inter", "img/thumbnails/franceinter.png", 215),
    new Video("beats to study to", "img/thumbnails/lofi.png", "En direct", "Lofi Station", "img/thumbnails/lofilogo.jpeg", 37),
    new Video("beats to sleep to", "img/thumbnails/lofi2.png", "En direct", "Lofi Station", "img/thumbnails/lofilogo.jpeg", 6),
    new Video("beats to relax to", "img/thumbnails/lofi3.png", "En direct", "Lofi Station", "img/thumbnails/lofilogo.jpeg", 25),
    new Video("beats to chill to", "img/thumbnails/lofi4.png", "En direct", "Lofi Station", "img/thumbnails/lofilogo.jpeg", 10),
    new Video("Le pouvoir des introvertis", "img/thumbnails/education.png", "Education", "Ted Talks", "img/thumbnails/tedlogo.png", 125),
    new Video("Penser avec son ventre", "img/thumbnails/education2.png", "Education", "Ted Talks", "img/thumbnails/tedlogo.png", 240),
    new Video("Devenir adulte : pourquoi ?", "img/thumbnails/education3.png", "Education", "Ted Talks", "img/thumbnails/tedlogo.png", 400),
    new Video("Rien ne nous arrive par hasard", "img/thumbnails/education4.png", "Education", "Ted Talks", "img/thumbnails/tedlogo.png", 150),
    new Video("The Mozart Collection", "img/thumbnails/music.png", "Musique", "Music Station", "img/thumbnails/musiclogo.png", 400),
    new Video("Viva la Vida | Coldplay", "img/thumbnails/music2.png", "Musique", "Music Station", "img/thumbnails/musiclogo.png", 900),
    new Video("Ignorance | Paramore", "img/thumbnails/music3.png", "Musique", "Music Station", "img/thumbnails/musiclogo.png", 260),
    new Video("I'm with you | Avril Lavigne", "img/thumbnails/music4.png", "Musique", "Music Station", "img/thumbnails/musiclogo.png", 587)
];

for (let i=0; i < videosList.length ; i++){
    videosList[i].createVideo();
}

/* 2 - Appliquer des filtres
    a) Créer une classe et une méthode
    b) Créer l'affichage
    c) En fonction du filtre sélectionné, gérer l'affichage */

const categories = document.querySelector('.category-section');

class Category {
    constructor(name, isActive){
        this.name = name;
        this.isActive = isActive;

        this.createCategory = function (){
            categories.innerHTML += `<button class="category-title">${this.name}</button>`
        }
    }
}

const categoriesList = [
    new Category("Tous", true),
    new Category("Humour", false),
    new Category("En direct", false),
    new Category("Education", false),
    new Category("Musique", false)
];

for (let j= 0; j < categoriesList.length ; j++) {
    categoriesList[j].createCategory();
    console.log(categoriesList[j].name);

    const categoryTitle = document.querySelector('.category-title')
    if (categoriesList[j].isActive){
        categoryTitle.style.backgroundColor = "#000";
        categoryTitle.style.border = "#000";
        categoryTitle.style.color = "#FFF";
    }
}

categories.addEventListener("click", (event) => {
    clickedCategory = event.target.innerHTML; 
    console.log(clickedCategory);
    videosListFiltered = videosList.filter(video => video.category === clickedCategory);
    // changer l'affichage de la catégorie
    // changer l'affichage des vignettes
    // Comment faire pour afficher toutes les vignettes quand "Tous" est sélectionné ?
})



/* 3 - Générer la barre de recherche
    a) Créer l'affichage
    b) Créer la fonction de recherche grâce à .filter (retourne un tableau) */