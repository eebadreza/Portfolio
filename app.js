const stickSections = [...document.querySelectorAll('.sticky')];
// console.log(stickSections);

let images = [
    './assets/img/1.png',
    './assets/img/2.png',
    './assets/img/3.png',
    './assets/img/4.png',
    './assets/img/5.png',
];

images.forEach((img) => {
    stickSections.forEach((section) => {
        let image = document.createElement('img');
        image.src = img;
        section.querySelector('.scroll_section').appendChild(image);
    });
});

window.addEventListener('scroll', (e) => {
    for (let i = 0; i < stickSections.length; i++) {
        transform(stickSections[i]);
    }
});

function transform(section) {
    const offestTop = section.parentElement.offsetTop;
    // console.log(offestTop);
    const scrollSection = section.querySelector('.scroll_section');
    let precentage = ((window.scrollY - offestTop) / window.innerHeight) * 100;
    precentage = precentage < 0 ? 0 : precentage > 360 ? 360 : precentage;
    scrollSection.style.transform = `translate3d(${-precentage}vw, 0, 0)`;
}
