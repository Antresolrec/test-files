const fluWrappers = document.querySelectorAll('.flu__wrapper');

for (let index = 0; index < fluWrappers.length; index++) {
    const fluWrapper = fluWrappers[index];
    const btnAddBlock = fluWrapper.querySelector('.flu__add');
    const fluRow = fluWrapper.querySelector('.flu__row');
    const fluRows = fluWrapper.querySelector('.flu__rows');
    const cloneRow = fluRow.cloneNode(true);
    btnAddBlock.addEventListener('click', () => {
        fluRows.append(cloneRow);
    })
}
