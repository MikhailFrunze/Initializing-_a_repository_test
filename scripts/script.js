//Дан массив с числами [34, 4, 1, 0, 9, 5]. Найдите сумму элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.

let arr = [34, 4, 1, 0, 9, 5];

// let sum = arr.reduce((total, el) => (total + arr[0,1,2])); // I have also tried this way

let sum = arr.reduce((total, el, i, arr) => {
    if (el === 0) {
        arr.splice(1);
    }
    return total += el;
});

console.log(sum);