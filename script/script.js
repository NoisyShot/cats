const nameCats = [
   `Кот с усами`,
   `Кошка с колпаком`,
   `Кот с тыквой`,
   `Кошка-балерина`
]

const imageCats = [
   `../img/cats/1.png`,
   `../img/cats/2.png`,
   `../img/cats/3.png`,
   `../img/cats/4.png`
]
for (let i = 0; i < nameCats.length; i++) {
   const dataNameCats = document.createTextNode(nameCats[i]);
   const textCats = document.getElementById(`name-cat-${i + 1}`);
   textCats.appendChild(dataNameCats);
}

const imagePaths = document.querySelectorAll(`.thumb img`)

for (let i = 0; i < imagePaths.length; i++) {
   imagePaths[i].src = imageCats[i];
   imagePaths[i].alt = nameCats[i];
}


старт в ве