let visibleFav = JSON.parse(localStorage.getItem('favorites'));
for (const elem of visibleFav) {
    let newElem = document.createElement('div');
    newElem.innerText = `${elem.name}, ${elem.age}, ${elem.status}`;

    document.body.append(newElem);
}