const paintings = [
    { src: "/Projectweek2/images/me-and-my-parrots.jpeg", alt: "Painting 1" },
    { src: "/Projectweek2/images/portrait-of-a-lady-in-white.jpeg", alt: "Painting 2" },
    { src: "/Projectweek2/images/portrait-of-natasha-gelman.jpeg", alt: "Painting 3" },
    { src: "/Projectweek2/images/window-display-on-a-detroit-street.jpeg", alt: "Painting 4" },
    { src: "/Projectweek2/images/self-portrait-with-monkey.jpeg", alt: "Painting 5" },
    { src: "/Projectweek2/images/self-portrait-with-necklace-of-thorns.jpeg", alt: "Painting 6" },
    { src: "/Projectweek2/images/self-_portrait-with-thorn-necklace-and-hummingbird.jpeg", alt: "Painting 7" },
    { src: "/Projectweek2/images/still-life-with-parrot-and-flag.jpeg", alt: "Painting 8" },
    { src: "/Projectweek2/images/the-broken-column.jpeg", alt: "Painting 9" },
    { src: "/Projectweek2/images/the-two-fridas.jpeg", alt: "Painting 10" }
];

const container = document.getElementById('painting-container');


for (let i = 0; i < paintings.length; i++) {

    const div = document.createElement('div');
    div.classList.add('image-box');  

    const img = document.createElement('img');
    img.src = paintings[i].src;  
    img.alt = paintings[i].alt;  


    div.appendChild(img);

 
    container.appendChild(div);
}
