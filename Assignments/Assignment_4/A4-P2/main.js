const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */
for (let i = 0; i < imageFilenames.length; i++) {
    const newImage = document.createElement('img');

    newImage.setAttribute('src', 'images/${imageFilenames[i]}');
    newImage.setAttribute('alt', altTexts);
    thumbBar.appendChild(newImage);

}
;

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'; 
    }else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});