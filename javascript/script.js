// // Array Calback Methods

// const nums1 = [3, 8, -2, 7];
// const firstNeg = nums1.find(n => n < 0);
// console.log(firstNeg); // ➝ -2


// const nums2 = [4, 6, -5, 9];
// const index = nums2.findIndex(n => n < 0);
// console.log(index); // ➝ 2


// const fruits = ['apple', 'banana', 'mango'];
// fruits.forEach(fruit => console.log(fruit.toUpperCase()));
// // ➝ APPLE
// // ➝ BANANA
// // ➝ MANGO


// const nums3 = [1, 2, 3];
// const doubled = nums3.map(n => n * 2);
// console.log(doubled); // ➝ [2, 4, 6]


// const nums4 = [5, -2, 8, -4];
// const positives = nums4.filter(n => n > 0);
// console.log(positives); // ➝ [5, 8]


// const nums5 = [2, 4, 6];
// const allEven = nums5.every(n => n % 2 === 0);
// console.log(allEven); // ➝ true


// const nums6 = [1, 3, 7];
// const hasEven = nums6.some(n => n % 2 === 0);
// console.log(hasEven); // ➝ false



// // Callback Hell Example
// function getCheese(callback) {
//     setTimeout(() => {
//         const cheese = '🧀'
//         console.log('here is your cheese', cheese)
//         callback(cheese);
//     }, 2000)
// }

// function makeDough(cheese, callback) {
//     setTimeout(() => {
//         const dough = cheese + '🍩'
//         console.log('here is your dough', dough)
//         callback(dough);
//     }, 2000)
// }

// function makePizza(dough, callback) {
//     setTimeout(() => {
//         const pizza = dough + '🍕'
//         console.log('here is your pizza', pizza)
//         callback(pizza);
//     }, 2000)
// }

// getCheese((cheese) => {
//     makeDough(cheese, (dough) => {
//         makePizza(dough, (pizza) => {
//             console.log("Got the pizza", pizza);
//         });
//     });
// });



// Refactored above code using:
// 
// 1. Promises ->

function getCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = '🧀'
            resolve(cheese);
        }, 2000)
    })
}

function makeDough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese + '🍩'
            resolve(dough);
            // reject('Bad Cheese')
        }, 2000)
    })
}

function makePizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough + '🍕'
            resolve(pizza);
        }, 2000)
    })
}

// getCheese().then((cheese) => {
//     console.log('here is the cheese', cheese);
//     return makeDough(cheese);
// }).then((dough) => {
//     console.log('here is your dough', dough);
//     return makePizza(dough)
// }).then((pizza) => {
//     console.log('here is your pizza', pizza);
// }).catch((data) => {
//     console.log('error occured', data);
// }).finally(() => {
//     console.log('Process Ended!');
// });

// 2. Async Await 

async function orderPizza() {
    try {
        const cheese = await getCheese();
        console.log('here is the cheese', cheese);
        const dough = await makeDough(cheese);
        console.log('here is your dough', dough);
        const pizza = await makePizza(dough);
        console.log('here is your pizza', pizza);
    } catch (error) {
        console.log('error occured', error);
    }
    console.log('Process Ended!');
}

// orderPizza();


console.log(document.getElementById('box-2'));
console.log(document.getElementsByTagName('div'));
console.log(document.getElementsByClassName('random'));
document.getElementById('box-2').classList.remove("random")


