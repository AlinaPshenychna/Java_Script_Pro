const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array,itemRemove) {
return array.filter(function (elem) { 
    return elem !== itemRemove;
});
}

let newArray = removeElement(array, 5);
console.log(newArray);
// Результат: [1, 2, 3, 4, 6, 7]
