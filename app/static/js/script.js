document.addEventListener("DOMContentLoaded", function (country) {

    function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
        let message;
        // Change code below this line
        let totalPrice = orderedQuantity * pricePerDroid;
        if (totalPrice > customerCredits) {

            // console.log(message = 'Insufficient funds!');
        } else {
            // console.log('total price', totalPrice);
            // console.log(message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`);

        }
        // Change code above this line
        return message;
    }

    // makeTransaction(3000, 5, 23000);
    // makeTransaction(1000, 3, 15000);
    // makeTransaction(5000, 10, 8000);
    // makeTransaction(2000, 8, 10000);
    // makeTransaction(500, 10, 5000);

    function checkStorage(available, ordered) {
        let message;
        // Change code below this line

        // console.log(ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you");

    }

    // checkStorage(100, 50)


    function getShippingCost(country) {
        let message;
        // Change code below this line
        switch (country) {
            case 'China':
                message = `Shipping to ${country} will cost 100 credits`;
                break;
            case 'Chile':
                message = `Shipping to ${country} will cost 250 credits`;
                break;
            case 'Australia':
                message = `Shipping to ${country} will cost 170 credits`;
                break;
            case 'Jamaica':
                message = `Shipping to ${country} will cost 120 credits`;
                break;
            default:
                message = "Sorry, there is no delivery to your country";
        }
        // Change code above this line
        return message;
    }

    // const clients = ['client1', 'client2', 'client3', 'client4', 'client5'];
    // console.log('all clients', clients);
    // console.log('new array', clients.slice(-1));
    const scores = [1, 2, 3, 4, 5];

    const deletedScores = scores.splice(0, 3);
    //
    // console.log(scores);
    // console.log(deletedScores);
    const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
    const lastElementIndex = fruits.length - 1;
    const lastElement = fruits[lastElementIndex];

    // console.log(lastElement);

    function getExtremeElements(array) {
        // Change code below this line
        //first variant
        const planets = [];
        const firstElement = array[0];
        const lastElement = array[array.length - 1];
        return planets.push(firstElement, lastElement);
        //second variant
        // const planets = [array[0], array[array.length  - 1]];
        // return planets;
        // Change code above this line
    }

    // getExtremeElements([1, 2, 3, 4, 5])
    function calculateEngravingPrice2(message, pricePerWord) {
        // Change code below this line
        let totalPrice = message.split(' ').length;
        // console.log('message.split(\' \').length', totalPrice);
        return totalPrice;
        // Change code above this line
    }

    calculateEngravingPrice2("JavaScript is in my blood", 10);

    function calculateEngravingPrice1(message, pricePerWord) {
        // Change code below this line
        let totalPrice = message.split(' ');

        // console.log('message.split(\' \')', message.split(' '));
        return totalPrice;
        // Change code above this line
    }

    calculateEngravingPrice1("JavaScript is in my blood", 10);

    function slugify(title) {
        // Change code below this line
        const slug = title.split(' ').join('-').toLowerCase();
        // console.log(slug);
        return slug;


        // Change code above this line
    }

    slugify("Arrays for begginers");


    function makeArray(firstArray, secondArray, maxLength) {
        // Change code below this line

        let newArr = [];
        newArr = firstArray.concat(secondArray);
        if (newArr.length > maxLength) {
            console.log(newArr.slice(0, maxLength + 1));
            return newArr.slice(0, maxLength + 1);
        }
        return newArr;

        // Change code above this line
    }

    // makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);


    function calculateTotal(number) {
        // Change code below this line
        let totalSum = 0;
        for (let i = 0; i <= number; i++) {
            if (i === 0) {
                continue;
            }
            totalSum += i;

        }
        // console.log(totalSum);
        return totalSum;


        // Change code above this line
    }

    // calculateTotal(3);

    function findLongestWord(string) {
        // Change code below this line
        let newString = string.split(' ');
        let longestWord = newString[0];
        for (let i = 0; i < newString.length; i++) {
            if (longestWord.length <= newString[i].length) {
                longestWord = newString[i];
            }
        }
        // console.log(longestWord);
        return longestWord;


        // Change code above this line
    }

    findLongestWord("The quick brown fox jumped over the lazy dog");

    // function checkForSpam(message) {
    //     let result;
    //     // Change code below this line
    //     result = message.toLowerCase().includes('spam' || 'sale');
    //     // Change code above this line
    //     // console.log(result)
    //     return result;
    // }

    function checkForSpam(message) {
        let result;
        // Change code below this line
        result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
        // Change code above this line
        // console.log(result);
        return result;
    }


    checkForSpam("Latest technology news");
    checkForSpam("JavaScript weekly newsletter")
    checkForSpam("Get best sale offers now!")
    checkForSpam("Amazing SalE, only tonight!")
    checkForSpam("Trust me, this is not a spam message")
    checkForSpam("Get rid of sPaM emails. Our book in on sale!")
    checkForSpam("[SPAM] How to earn fast money?")

    // multiply(1, 2, 3);

    // const multiply = function (x, y, z) {
    //     // console.log(`Результат умножения равен ${x * y * z}`);
    // };
    //
    // multiply(4, 5, 6);

    const bookShelf = {
        books: ["The Last Kingdom"], getBooks() {
            // console.log(this);
        },
    };
    bookShelf.getBooks();


//     const apartment = {
//         descr: "Spacious apartment in the city center",
//         rating: 4,
//         price: 2153,
//     };
//     const keys = [];
//     const values = [];
// // Change code below this line
//     for (const key in apartment) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
//     console.log(keys);
//     console.log(values)

    function countProps(object) {
        let propCount = 0;
        // Change code below this line
        const keys = [];
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                propCount++;
            }
        }

        return propCount;
    }

    // console.log( countProps({}))
    // console.log(countProps({ name: "Mango", age: 2 }))
    // console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))

    // const products = [
    //     {name: "Radar", price: 1300, quantity: 4},
    //     {name: "Scanner", price: 2700, quantity: 3},
    //     {name: "Droid", price: 400, quantity: 7},
    //     {name: "Grip", price: 1200, quantity: 9},
    // ];

    // function getAllPropValues(propName) {
    //     // Change code below this line
    //     const arrValues = [];
    //     for (const product of products) {
    //         if(product.hasOwnProperty(propName)) {
    //             arrValues.push(product[propName]);
    //         }
    //         // for(const key in product) {
    //         //     if(key === propName) {
    //         //         arrValues.push(product[key]);
    //         //     }
    //         // }
    //     }
    //     console.log(arrValues);
    //     return arrValues;
    //     // Change code above this line
    // }
    // getAllPropValues("name");
    // getAllPropValues("quantity");
    //
    // function calculateTotalPrice(productName) {
    //     // Пиши код ниже этой строки
    //     for (const product of products) {
    //         if (product.hasOwnProperty(productName)) {
    //
    //         }
    //     }
    //
    //
    //     // Пиши код выше этой строки
    // }

    //
    //
    // function checkStorage(available, ordered) {
    //     // Change code below this line
    //
    //     if (ordered === 0) {
    //         return  "Your order is empty!";
    //     }
    //     if (ordered > available) {
    //         return  "Your order is too large, not enough goods in stock!";
    //     }
    //
    //     return "The order is accepted, our manager will contact you";
    //
    //     // Change code above this line
    // }
    //
    // checkStorage(100, 50)


    function makeTask(data) {
        const completed = false;
        const category = "General";
        const priority = "Normal";
        // Change code below this line
        return {
            category,
            priority,
            completed,
            ...data
        };

        // Change code above this line
    }

    // console.log(makeTask({}));
    // console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
    function makeTask2(arr1, arr2, arr3, ...data) {
        // console.log(data);
    }

    makeTask2([25, 25, 15], [25, 25, 15, 24, 10, 13], [25, 10, 15]);


    /* const atTheOldToad = {
         potions: [
             { name: "Speed potion", price: 460 },
             { name: "Dragon breath", price: 780 },
             { name: "Stone skin", price: 520 },
         ],

         getPotions() {
             return this.potions;
         },
         addPotion(newPotion) {
             for(const potion of this.potions) {
                 if (potion.name === newPotion.name) {
                     return `Error! Potion ${newPotion.name} is already in your inventory!`;
                 }
             }
             this.potions.push(newPotion);
             return this.potions;
         },
         removePotion(potionName) {
             for (let i = 0; i < this.potions.length; i++) {
                 if(this.potions[i].name === potionName) {
                     // console.log(potionName);
                     this.potions.splice( i, 1);
                     return this.potions;

                 }

             }
             return `Potion ${potionName} is not in inventory!`;

         },
         updatePotionName(oldName, newName) {
             const potionIndex = this.potions.indexOf(oldName);
             for(const potion of this.potions) {
                 if(potion.name === oldName) {
                     potion.name = newName;
                 }
                 console.log(potion);
             }

         },

     };*/

    const atTheOldToad = {
        potions: [
            {name: "Speed potion", price: 460},
            {name: "Dragon breath", price: 780},
            {name: "Stone skin", price: 520},
        ],
        // Change code below this line
        getPotions() {
            return this.potions;
        },
        addPotion(newPotion) {
            const {name: newPotionName, price} = newPotion;
            for (const potionElement of this.potions) {
                if (potionElement.name === newPotionName) {
                    return `Error! Potion ${newPotion.name} is already in your inventory!`;
                }
            }
            this.potions.push(newPotion);
            this.getPotions();
        },
        removePotion(potionName) {
            let potionIndex = 0;

            for (const potion of this.potions) {
                if (potion.name === potionName) {
                    this.potions.splice(potionIndex, 1);
                }
                potionIndex++;
            }
            return `Potion ${potionName} is not in inventory!`;
        },
        updatePotionName(oldName, newName) {

            for (const potion of this.potions) {
                if (potion.name === oldName) {
                    potion.name = newName;
                    console.log(this.potions)
                }
            }
            return `Potion ${oldName} is not in inventory!`;
        },
        // Change code above this line
    };


    // console.log(atTheOldToad.getPotions());
    // console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
    //
    // console.log(atTheOldToad.removePotion("Dragon breath"));
    // console.log(atTheOldToad.getPotions());
    // console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));


    function getEvenNumbers(start, end) {
        // Change code below this line
        const evenNubers = [];
        for (let i = start; i <= end; i += 1) {
            if (i % 2 === 0) {
                evenNubers.push(i);
            }

            return evenNubers;
        }

        // Change code above this line
    }

    // console.log(getEvenNumbers(2, 5));
    // console.log(getEvenNumbers(3, 11));
    // const names = '1, 2, 3, 4';
    // const phone = '45646, 5645646, 456456, 45648';
    // const arrNames = names.split(', ');
    // const arrPhones = phone.split(', ');
    //
    // for (const arrName of arrNames) {
    //     console.log(arrPhones.indexOf(arrName));
    //
    // }
    let string = 'rewe ewe rwwc dfdf';
    let arr;
    arr = string.split(' ');
    // console.log(arr);
    let newString = arr.slice(1, -1);

    // console.log(newString);


    function makePizza(pizzaName, callback) {
        // console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
        callback(pizzaName);
    }

    makePizza("Royal Grand", function deliverPizza(pizzaName) {
        // console.log(`Delivering pizza ${pizzaName}.`);
    });
// Change code below this line


    makePizza("Ultracheese", function eatPizza(pizzaName) {
        `Eating pizza ${pizzaName}`
    })


    function logItems(array) {
        for (let i = 0; i < array.length; i++) {
            // console.log(`[${i+ 1}] - [${array[i]}]`);
        }

    }

    logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

    logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

    function calculateEngravingPrice(message, pricePerWord) {
        const result = message.split('').length * pricePerWord;
        return result;
    }


    // console.log(
    //     calculateEngravingPrice(
    //         'Proin sociis natoque et magnis parturient montes mus',
    //         10,
    //     ),
    // ); // 80
    //
    // console.log(
    //     calculateEngravingPrice(
    //         'Proin sociis natoque et magnis parturient montes mus',
    //         20,
    //     ),
    // ); // 160
    //
    // console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200
    //
    // console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100

    // function findLongestWord(string) {
    //     const arr = string.split(' ');
    //     let longestWord = arr[0];
    //
    //     // console.log(longestWord);
    //     for(const word of arr) {
    //         if(longestWord.length < word.length) {
    //             longestWord = word;
    //         }
    //     }
    //     return longestWord;
    // }
    //
    // console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
    //
    // console.log(findLongestWord('Google do a roll')); // 'Google'
    //
    // console.log(findLongestWord('May the force be with you')); // 'force'


    // const users = {
    //     name: 'Vasya',
    //     getName() {
    //         // console.log(this);
    //         function newName() {
    //             // console.log(this);
    //         }
    //     }
    //
    // }
    // users.getName();


    const pizzaPalace = {
        pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
        order(pizzaName, onSuccess, onError) {
            if (!this.pizzas.includes(pizzaName)) {
                return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
            }
            return onSuccess(pizzaName);
        },

    };
// Change code above this line

// Callback for onSuccess
    function makePizza(pizzaName) {
        return `Your order is accepted. Cooking pizza ${pizzaName}.`;
    }

// Callback for onError
    function onOrderError(error) {
        return `Error! ${error}`;
    }

// Method calls with callbacks
//     console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
//     console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
//     console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
//     console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));


    const products = [
        {name: "Radar", price: 1300, quantity: 4},
        {name: "Scanner", price: 2700, quantity: 3},
        {name: "Droid", price: 400, quantity: 7},
        {name: "Grip", price: 1200, quantity: 9},
    ];

    function getAllPropValues(propName) {
        // Change code below this line

        const newArr = [];
        for (const element of products) {
            // if(element.hasOwnProperty(propName)) {
            //     newArr.push(element[propName]);
            // }
            for (const key in element) {
                if (key === propName) {
                    newArr.push(element[propName])
                }
            }
        }
        return newArr;

        // Change code above this line
    }

    //
    // console.log(getAllPropValues("name"));
    // console.log(getAllPropValues("quantity"));
    // console.log(getAllPropValues("price"));
    // console.log(getAllPropValues("category"));

    function getCommonElements(array1, array2) {
        // Change code below this line
        const newArr = [];
        let index = 0;
        for (const element of array1) {
            if (array2.includes(element)) {
                newArr.push(element);
            }
        }
        return newArr
        // Change code above this line
    }

    // console.log(getCommonElements([1, 2, 3], [2, 4]));

    function changeEven(numbers, value) {
        // Change code below this line
        const cleanArr = [];
        numbers.forEach(number => {
            if (number % 2 === 0) {
                cleanArr.push(number + value)
            }

        })
        return cleanArr;
        // Change code above this line
    }

    //
    // console.log(changeEven([1, 2, 3, 4, 5], 10))
    // console.log(changeEven([2, 8, 3, 7, 4, 6], 10))
    // console.log(changeEven([17, 24, 68, 31, 42], 100))
    // console.log(changeEven([44, 13, 81, 92, 36, 54], 100))

    const books = [
        {
            title: "The Last Kingdom",
            author: "Bernard Cornwell",
            genres: ["adventure", "history"],
        },
        {
            title: "Beside Still Waters",
            author: "Robert Sheckley",
            genres: ["fiction"],
        },
        {
            title: "Redder Than Blood",
            author: "Tanith Lee",
            genres: ["horror", "mysticism"],
        },
    ];
// Change code below this line
//
//     const genres = books.flatMap(genresBook => genresBook.genres);
//     console.log(genres);

    const books2 = [
        {
            title: "The Last Kingdom",
            author: "Bernard Cornwell",
            genres: ["adventure", "history"],
        },
        {
            title: "Beside Still Waters",
            author: "Robert Sheckley",
            genres: ["fiction", "mysticism"],
        },
        {
            title: "Redder Than Blood",
            author: "Tanith Lee",
            genres: ["horror", "mysticism", "adventure"],
        },
    ];
// Change code below this line
    const allGenres = books2.flatMap(book => book.genres);
    const uniqueGenres = allGenres.filter((genres, index) => {
        // console.log( allGenres.indexOf(genres) === index)
    });

    const users = [
        {
            name: "Moore Hensley",
            email: "moorehensley@indexia.com",
            eyeColor: "blue",
            friends: ["Sharron Pace"],
            isActive: false,
            balance: 2811,
            gender: "male",
            age: 37
        },
        {
            name: "Sharlene Bush",
            email: "sharlenebush@tubesys.com",
            eyeColor: "blue",
            friends: ["Briana Decker", "Sharron Pace"],
            isActive: true,
            balance: 3821,
            gender: "female",
            age: 34
        },
        {
            name: "Ross Vazquez",
            email: "rossvazquez@xinware.com",
            eyeColor: "green",
            friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
            isActive: false,
            balance: 3793,
            gender: "male",
            age: 24
        },
        {
            name: "Elma Head",
            email: "elmahead@omatom.com",
            eyeColor: "green",
            friends: ["Goldie Gentry", "Aisha Tran"],
            isActive: true,
            balance: 2278,
            gender: "female",
            age: 21
        },
        {
            name: "Carey Barr",
            email: "careybarr@nurali.com",
            eyeColor: "blue",
            friends: ["Jordan Sampson", "Eddie Strong"],
            isActive: true,
            balance: 3951,
            gender: "male",
            age: 27
        },
        {
            name: "Blackburn Dotson",
            email: "blackburndotson@furnigeer.com",
            eyeColor: "brown",
            friends: ["Jacklyn Lucas", "Linda Chapman"],
            isActive: false,
            balance: 1498,
            gender: "male",
            age: 38
        },
        {
            name: "Sheree Anthony",
            email: "shereeanthony@kog.com",
            eyeColor: "brown",
            friends: ["Goldie Gentry", "Briana Decker"],
            isActive: true,
            balance: 2764,
            gender: "female",
            age: 39
        }
    ]

    // const getUsersWithFriend = (users, friendName) => {
    //     console.log(users.filter(user => user.friends.includes(friendName)))
    //     console.log(users.flatMap(user => user.friends).filter(user => user.includes(friendName)))
    //   return users.filter(user => user.friends.includes(friendName));
    // };


    // getUsersWithFriend(users, "Briana Decker")

    const getFriends = (users) => {
        const friendsUsers = users.flatMap(user => user.friends).filter((uniqueFriend, index, arr) => {
            let indexElement = arr.indexOf(uniqueFriend);
            if (indexElement === index) {
                // console.log(uniqueFriend)
                return uniqueFriend;
            }
        });
        // console.log('friendsUsers', friendsUsers);
        return friendsUsers;
        // const uniqueIndex = friendsUsers.filter((uniqueFriend, index) => {
        //     let indexElement = friendsUsers.indexOf(uniqueFriend);
        //     if(indexElement === index) {
        //         console.log(uniqueFriend)
        //         return uniqueFriend;
        //     }
        // })

    };

    getFriends(users);

    // const getTotalBalanceByGender = (users, gender) => {
    //     return users.filter(user => user.gender === gender).reduce((acc, user) => {
    //         return acc + user.balance
    //     }, 0)
    // };
    // // console.log(getTotalBalanceByGender(users, 'male'))
    // getTotalBalanceByGender(users);


    const getActiveUsers = (users) => {
        // console.log(users.isActive);
        return users.filter(user => user.isActive)
    };

    const salaries = {
        John: 100,
        Nadi: 60,
        Yura: 50
    }

    getActiveUsers(users);

    function f(object) {
        let total = 0;
        for (const key in object) {
            total += object[key];
        }
        // console.log(total);
        return total;
    }

    f(salaries);


    const players = [
        {name: "Mango", playtime: 1270, gamesPlayed: 4},
        {name: "Poly", playtime: 469, gamesPlayed: 2},
        {name: "Ajax", playtime: 690, gamesPlayed: 3},
        {name: "Kiwi", playtime: 241, gamesPlayed: 1},
    ];
// Change code below this line

    const totalAveragePlaytimePerGame = players.reduce((middleValue, player) => {
        // console.log(player);
        // console.log(middleValue);
        return middleValue + player.playtime / player.gamesPlayed;
        // console.log('middleValue', middleValue);
        // console.log(middleValue + player.playtime);


    }, 0);
    // console.log(totalAveragePlaytimePerGame);
    const calculateTotalBalance = users => {
        users.reduce((acc, user) => {
            // console.log(acc);
            return acc + user.balance;
        }, 0)
    };
    calculateTotalBalance(users);

    const authors = [
        "Tanith Lee",
        "Bernard Cornwell",
        "Robert Sheckley",
        "Fyodor Dostoevsky",
        "Howard Lovecraft",
    ];
// Change code below this line

    const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
    // console.log(authorsInAlphabetOrder);

    const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
    // console.log(authorsInReversedOrder)

    const books3 = [
        {
            title: "The Last Kingdom",
            author: "Bernard Cornwell",
            rating: 8.38,
        },
        {
            title: "Beside Still Waters",
            author: "Robert Sheckley",
            rating: 8.51,
        },
        {
            title: "The Dream of a Ridiculous Man",
            author: "Fyodor Dostoevsky",
            rating: 7.75,
        },
        {title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94},
        {title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67},
    ];
    const MIN_BOOK_RATING = 8;
// Change code below this line

    // const sortedByAuthorName = [...books3].sort((a, b)=> a.author.localeCompare(b.author));
    // console.log(sortedByAuthorName)
    // const sortedByReversedAuthorName = [...books3].sort((a, b)=> b.author.localeCompare(a.author));
    //
    // const sortedByAscendingRating = [...books3].sort((a, b)=> a.rating - b.rating);
    //
    // const sortedByDescentingRating = [...books3].sort((a, b)=> b.rating - a.rating);

    // const names = [...books3].filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((a, b) => a.localeCompare(b));
    // console.log(names);
    //
    // function confirmEnding(str, target) {
    //     console.log(str.substring(str.length - target.length))
    //
    //     return str.substring(str.length - target.length) === target;
    //
    // }
    //
    // console.log(confirmEnding("Bastian", "n"));
    // console.log(confirmEnding("Connor", "n"));

    const apartment = {
        descr: "Spacious apartment in the city center",
        rating: 4,
        price: 2153,
    };
    const values = [];
    // Change code below this line
    const keys = Object.keys(apartment);
    for (const key of keys) {
        values.push(apartment[key])
    }

    // console.log(values);


    function countProps(object) {
        // Change code below this line
        let propCount = 0;

        const keys = Object.keys(object)
        for (const key in keys) {
            propCount += 1;
        }


        return propCount;
        // Change code above this line
    }

    function getCommonElements(array1, array2) {
        const newArr = [];
        for (const element of array1) {
            if (array2.includes(element)) {
                // console.log(element);
                newArr.push(element);
            }
            console.log(newArr);
        }
        // for(let i = 0; i < array2.length; i++) {
        //     // if(array1.includes(array2[i])) {
        //     //     // console.log('РАВНЫ',array2[i]);
        //     //     newArr.push(array2[i])
        //     // }
        //     // console.log(i);
        //     for (let j = 0; j < array1.length ; j++) {
        //       let x = j * i
        //     }
        // }
        // return newArr;

        return newArr;
    }

    // getCommonElements([1, 2, 3], [2, 4]);
    // getCommonElements([1, 2, 3], [2, 1, 17, 19]);
    // getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
    // getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
    // getCommonElements([1, 2, 3], [10, 20, 30]);
    const products2 = [
        {name: "Radar", price: 1300, quantity: 4},
        {name: "Scanner", price: 2700, quantity: 3},
        {name: "Droid", price: 400, quantity: 7},
        {name: "Grip", price: 1200, quantity: 9},
    ];

    function getAllPropValues(propName) {
        // Change code below this line
        const arrNames = [];
        for (const product of products2) {
            if (product.hasOwnProperty(propName)) {
                arrNames.push(product[propName]);

            }
            // for (const productKey in product) {
            //     if(productKey === propName) {
            //         console.log(product[productKey])
            //         arrNames.push(product[productKey]);
            //     }
            // }

        }
        // console.log(arrNames)

        return arrNames
        // Change code above this line
    }

    getAllPropValues("name")


    function booWho(bool) {
        // console.log(typeof(bool))
        if (typeof bool === 'boolean') {
            // console.log('boolean', true)
            bool = true;
        }
        bool = false;
        return bool;
    }

    booWho(true)
    booWho(false)
    booWho([1, 2, 3])
    booWho([].slice)
    booWho({"a": 1})
    booWho(1)
    booWho(NaN)
    booWho("a")
    booWho("true")
    booWho("false")


    // function titleCase(str) {
    //     let arrString = str.toLowerCase().split(' ');
    //     let string = [];
    //     for (let i = 0; i < arrString.length; i++) {
    //         string.push(arrString[i][0].toUpperCase() + arrString[i].slice(1))
    //     }
    //     // console.log(string)
    //     // console.log(string.join(' '))
    //     return string.join(' ')
    // }
    //
    // titleCase("I'm a little tea pot");
    //
    // function frankenSplice(arr1, arr2, n) {
    //     let newArr = [...arr2];
    //     //     newArr.splice(n, 0, ...arr1)
    //     //    newArr.push(...arr2)
    //     newArr.splice(n, 0, ...arr1);
    //     // console.log(newArr);
    //     return newArr;
    //     // console.log(newArr);
    // }
    //
    // frankenSplice([1, 2, 3], [4, 5, 6], 1);
    // const getTotalFriendCount = users => {
    //     const userArr = users.reduce((acc, user) => acc + user.friends.length, 0);
    //
    //     // console.log(userArr)
    //     // console.log(userArr);
    //
    //     // return users.flatMap(user => user.friends.length)
    // };
    //
    // getTotalFriendCount(users);
    // Напиши функцию findBestEmployee(employees),
    // которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач).
    // Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

    const findBestEmployee = function (employees) {
        // твой код
        const bestEmployee = Math.max(...Object.values(employees))
        for (const key in employees) {
            if (employees[key] === bestEmployee) {
                return key;
            }
        }
    };

    /*
    * Вызовы функции для проверки работоспособности твоей реализации.
    */
    // console.log(
    //     findBestEmployee({
    //         ann: 29,
    //         david: 35,
    //         helen: 1,
    //         lorence: 99,
    //     }),
    // ); // lorence
    //
    // console.log(
    //     findBestEmployee({
    //         poly: 12,
    //         mango: 17,
    //         ajax: 4,
    //     }),
    // ); // mango
    //
    // console.log(
    //     findBestEmployee({
    //         lux: 147,
    //         david: 21,
    //         kiwi: 19,
    //         chelsy: 38,
    //     }),
    // ); // lux

    // Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
    // Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

    // const getAllPropValues = (arr, prop) => arr.reduce((acc, el) => (el.hasOwnProperty(prop) ? [...acc, el[prop]] : acc),[]);

    // const products5 = [
    //     {name: 'Радар', price: 1300, quantity: 4},
    //     {name: 'Сканер', price: 2700, quantity: 3},
    //     {name: 'Дроид', price: 400, quantity: 7},
    //     {name: 'Захват', price: 1200, quantity: 2},
    // ];
    //
    // const getAllPropValues4 = function (arr, prop) {
    //     // твой код
    //     const arrValues = [];
    //     for (const elementArray of arr) {
    //         if (arr.hasOwnProperty(prop)) {
    //             arrValues.push(arr[prop]);
    //         }
    //
    //     }
    //     return arrValues;
    // }
    //
    //
    //     /*
    //     * Вызовы функции для проверки работоспособности твоей реализации.
    //     */
    //     console.log(getAllPropValues4(products5, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
    //
    //     console.log(getAllPropValues4(products5, 'quantity')); // [4, 3, 7, 2]
    //
    //     console.log(getAllPropValues4(products5, 'category')); // []

    // Дано: массив, содержащий хеши имен
    // Возврат: строка, отформатированная как список имен, разделенных запятыми,
    // за исключением последних двух имен, которые должны быть разделены амперсандом.

    // function list(array) {
    // // пиши тут свой код
    // return array.map((element) => {
    //         return element.name
    //     }).join(' & ')
    // }
    //
    //
    // // ТЕСТЫ
    //
    // console.log(
    // list([
    // { name: "Bart" },
    // { name: "Lisa" },
    // { name: "Maggie" },
    // { name: "Petya" },
    // ])
    // ); // returns 'Bart, Lisa, Maggie & Petya'
    // console.log(list([{ name: "Bart" }, { name: "Lisa" }])); // returns 'Bart & Lisa'
    // console.log(list([{ name: "Bart" }])); // returns 'Bart'
    // console.log(list([])); // ''


    // Напиши функцию calculateTotalPrice(allProdcuts, productName),
    // которая получает массив объектов и имя продукта (значение свойства name).
    // Возвращает общую стоимость продукта (цена * количество).
    // Вызовы функции для проверки работоспособности твоей реализации.

    // const products7 = [
    //     {name: 'Радар', price: 1300, quantity: 4},
    //     {name: 'Сканер', price: 2700, quantity: 3},
    //     {name: 'Дроид', price: 400, quantity: 7},
    //     {name: 'Захват', price: 1200, quantity: 2},
    // ];
    //
    // const calculateTotalPrice = function (allProdcuts, productName) {
    //     // твой код
    //     // const calculateTotalPrice = (allProdcuts, productName) =>
    //     //     allProdcuts.reduce(
    //     //         (acc, { name, price, quantity }) =>
    //     //             name === productName ? price * quantity : acc,
    //     //         0
    //     //     );
    //     // allProdcuts.reduce(
    //     //         (acc, el) => (el.name === productName ? el.price * el.quantity : acc),
    //     //         0
    //     //     );
    //     return  arr.reduce((acc, element) => {
    //       if(element.name === productName) {
    //         return element.price * element.quantity
    //       }
    //   },0)
    //  // for(const element of allProdcuts) {
    //  //     if(element.name === productName) {
    //  //         return element.price * element.quantity
    //  //     }
    //  // }
    //
    // };
    //
    // /*
    // * Вызовы функции для проверки работоспособности твоей реализации.
    // */
    // console.log(calculateTotalPrice(products7, 'Радар')); // 5200
    //
    // console.log(calculateTotalPrice(products7, 'Дроид')); // 2800


    // Напиши скрипт управления личным кабинетом интернет банка.
    // Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

    /*
    * Типов транзацкий всего два.
    * Можно положить либо снять деньги со счета.
    */
    const Transaction = {
        DEPOSIT: 'deposit',
        WITHDRAW: 'withdraw',
    };

    /*
    * Каждая транзакция это объект со свойствами: id, type и amount
    */

    // const account = {
    //     // Текущий баланс счета
    //     balance: 0,
    //
    //     // История транзакций
    //     transactions: [],
    //
    //     /*
    //     * Метод создает и возвращает объект транзакции.
    //     * Принимает сумму и тип транзакции.
    //     */
    //     createTransaction(amount, type) {
    //         this.id++;
    //         const transaction = {
    //             id: this.id,
    //             amount,
    //             type,
    //         }
    //         return transaction;
    //     },
    //
    //     /*
    //     * Метод отвечающий за добавление суммы к балансу.
    //     * Принимает сумму танзакции.
    //     * Вызывает createTransaction для создания объекта транзакции
    //     * после чего добавляет его в историю транзакций
    //     */
    //     deposit(amount) {
    //         const transaction = this.createTransaction(amount, Transaction.DEPOSIT)
    //         this.balance += amount
    //         this.transactions.push(transaction);
    //     },
    //     /*
    //     * Метод отвечающий за снятие суммы с баланса.
    //     * Принимает сумму танзакции.
    //     * Вызывает createTransaction для создания объекта транзакции
    //     * после чего добавляет его в историю транзакций.
    //     *
    //     * Если amount больше чем текущий баланс, выводи сообщение
    //     * о том, что снятие такой суммы не возможно, недостаточно средств.
    //     */
    //     withdraw(amount) {
    //         if (this.balance < amount) {
    //             return 'нехватает средств';
    //         }
    //         this.balance -= amount
    //         const transaction = this.createTransaction(amount, Transaction.WITHDRAW)
    //         this.transactions.push(transaction);
    //     },
    //
    //     /*
    //     * Метод возвращает текущий баланс
    //     */
    //     getBalance() {
    //         return this.balance
    //     },
    //
    //     /*
    //     * Метод ищет и возвращает объект транзации по id
    //     */
    //     getTransactionDetails(id) {
    //       return this.transactions.find((transaction)=> transaction.id === id)
    //     },
    //
    //     /*
    //     * Метод возвращает количество средств
    //     * определенного типа транзакции из всей истории транзакций
    //     */
    //     getTransactionTotal(type) {
    //         let totalType = 0;
    //         // this.transactions.filter((transaction) => {
    //         //
    //         // })
    //        for(const transaction of this.transactions) {
    //            if(type === transaction.type) {
    //               return totalType += transaction.amount
    //            }
    //        }
    //     },
    // };
    // account.deposit(2000);
    // account.deposit(1000);
    // account.deposit(500);
    // account.deposit(2000);
    //
    // console.log(account.getBalance())
    // console.log(account.getTransactionTotal('deposit'))


//
//     Task 2
// Нужно написать функцию которая принимает 1 параметр key, которая будет перебирать объект
// если у объекта есть такой ключ - вернет true
// Есть 2 варианта решения, сначала напишем функцию, потом решим простым способом

    const obj = {
        name: 'Igor',
        car: 'Mercedes',
        carColor: 'black'
    }

    function getParameters(key, object) {
        // for(const objKey in object){
        //     if(objKey === key) {
        //         return true
        //     }
        // }
        // return key in object

        return object.hasOwnProperty(key);
    }

    // console.log(getParameters('name', obj))


    // const arr = [2, 5, 5]
    // const res = arr.push('10')
    // console.log()
    // console.log(res)

    function minus(value1 = 0) {

        return function (number = 0) {
            // if(!value1 && !number){
            //     return 0
            // }
            // if(!value1) {
            //     value1 = 0;
            // } else if(!number) {
            //     number = 0;
            // }
            // console.log(value1)
            // console.log(number)
            return value1 - number
        }
    }

    const resultMinus = minus();
    const result = resultMinus();

    // console.log(result)

    function multiplyMaker(value) {
        let value2 = value;
        return function (number) {
            return value2 *= number
        }
    }

    const multiply = multiplyMaker(2);


    // console.log(multiply(2))
    // console.log(multiply(1))
    // console.log(multiply(3))
    // console.log(multiply(10))
// Change code below this line
//     const getNamesSortedByFriendCount = users => {
//       return  [...users].sort((a, b)=> a.friends.length - b.friends.length).map(user => user.name)
//     };
    // console.log(getNamesSortedByFriendCount(users));
// Change code above this line

    // const players = [
    //     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
    //     { name: "Poly", playtime: 469, gamesPlayed: 2 },
    //     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
    //     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
    // ];
// Change code below this line

    // const totalAveragePlaytimePerGame = players.reduce((acc, player)=>{
    //     return acc + (player.playtime / player.gamesPlayed)
    // });
    //
    // totalAveragePlaytimePerGame(players);

    // const orders = [
    //     { email: 'solomon@topmail.ua', dish: 'Burger' },
    //     { email: 'artemis@coldmail.net', dish: 'Pizza' },
    //     { email: 'jacob@mail.com', dish: 'Taco' },
    // ];

// Пиши код ниже этой строки
//     function composeMessage(position) {
//
//         return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
//
//     }
//     const messages = [];
//     for(let i = 0; i < orders.length; i++) {
//         messages.push(composeMessage.call(orders[i], i + 1));
//     }

    function greet(clientName) {
        return `${clientName}, добро пожаловать в «${this.service}».`;
    }

    const steam = {service: 'Steam'};
    const steamGreeter = greet.bind(steam);
    steamGreeter('Манго'); // "Манго, добро пожаловать в «Steam»."

    const gmail = {service: 'Gmail'};
    const gmailGreeter = greet.bind(gmail);
    // console.log(gmailGreeter('Поли'));
    gmailGreeter('Поли'); // "Поли, добро пожаловать в «Gmail»."


    function showThis() {
        // console.log("this in showThis: ", this);
    }

// Вызываем в глобальном контексте
//     showThis();
// this in showThis: Window
//     const user = {username: "Mango",};
//     showThis.call(user);
//     user.showContext = showThis;
// Записываем ссылку на функцию в свойство объекта
// Обратите внимание, что это не вызов - нет ()
// Вызываем функцию в контексте объекта
// this будет указывать на текущий объект, в контексте
// которого осуществляется вызов, а не на глобальный объект.
//     user.showContext();

    function greetGuest(greeting) {
        // console.log(greeting);
        // console.log(`${greeting}, ${this.username}.`)
    }

    // const mango = {username: "Манго",};
    // const poly = {username: "Поли",};
    // greetGuest.apply(mango, ["Добро пожаловать"]); // Добро пожаловать, Манго. // С приездом, Поли.
    // greetGuest.apply(poly, ["С приездом"]);

    const getTotalFriendCount = users => {
        const newArr = users.reduce((acc, user) => {
            // console.log(acc + user.friends)
            // console.log(typeof acc);
            // console.log(acc + user.friends)
            return acc + user.friends;
        }, []).split(',')
        // console.log(typeof newArr);
        return newArr.length
    };
    getTotalFriendCount(users);


    // class StringBuilder {
    //     #mail;
    //
    //     constructor(initialValue, mail) {
    //         this.value = initialValue;
    //         this.#mail = mail
    //     }
    //
    //     addItem(newMail) {
    //         return this.#mail;
    //     }
    //     getItem() {
    //         return this.#mail;
    //     }
    //
    //     getValue() {
    //         return this.value;
    //     }
    //
    //     padEnd(str) {
    //         this.value += str;
    //         this.getValue();
    //     }
    //
    //     padStart(str) {
    //         this.value = str + this.value;
    //         this.getValue();
    //     }
    //
    //     padBoth(str) {
    //         this.value = str + this.value + str;
    //         this.getValue();
    //     }
    //
    //
    // }

// Change code above this line
//     const builder = new StringBuilder(".", "mail@mail.com");
//     // console.log(builder);
//     builder.addItem('mail@mail.com');
    // console.log(builder.getItem());
    // console.log(builder.getValue()); // "."
    // builder.padStart("^");
    // console.log(builder.getValue()); // "^."
    // builder.padEnd("^");
    // console.log(builder.getValue()); // "^.^"
    // builder.padBoth("=");
    // console.log(builder.getValue()); // "=^.^="


    // class Storage {
    //     // Change code below this line
    //     #items;
    //
    //     constructor(items) {
    //         this.#items = items;
    //     }
    //
    //     getItems() {
    //         return this.#items;
    //     }
    //
    //     addItem(newItem) {
    //         this.#items.push(newItem);
    //     }
    //
    //     removeItem(itemToRemove) {
    //         this.#items = this.#items.filter(item => item !== itemToRemove);
    //     }
    // }

// Change code above this line
//     const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
    // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
    // storage.addItem("Droid");
    // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
    // storage.removeItem("Prolonger");
    // console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

    class Car {
        // Change code below this line
        #price;

        constructor({price}) {
            this.#price = price;
        }

        static #MAX_PRICE = 50000;

        get price() {
            return this.#price;
        }

        set price(newPrice) {
            if (newPrice > Car.#MAX_PRICE) {
                return this.#price;
            }

            this.#price = newPrice;
        }

        // Change code above this line
    }


    const audi = new Car({price: 35000});
    // console.log(audi)
    // console.log(audi.price); // 35000

    audi.price = 49000;
    // console.log(audi.price); // 49000

    audi.price = 51000;
    // console.log(audi.price); // 49000
    // class User {
    //     email;
    //
    //     constructor(email) {
    //         this.email = email;
    //     }
    //
    //     get email() {
    //         return this.email;
    //     }
    //
    //     set email(newEmail) {
    //         this.email = newEmail;
    //     }
    // }

    // class Admin extends User {
    //     // Change code below this line
    //     blacklistedEmails = [];
    //     static AccessLevel = {
    //         BASIC: "basic",
    //         SUPERUSER: "superuser",
    //     };
    //
    //     constructor({email, accessLevel}) {
    //         super(email);
    //         this.accessLevel = accessLevel;
    //     }
    //
    //     blacklist(email) {
    //         this.blacklistedEmails.push(email);
    //     };
    //
    //     isBlacklisted(email) {
    //         return this.blacklistedEmails.includes(email);
    //     };
    //
    //
    //     // Change code above this line
    // }
    //
    // const mango = new Admin({
    //     email: "mango@mail.com",
    //     accessLevel: Admin.AccessLevel.SUPERUSER,
    // });

    // console.log(mango.email); // "mango@mail.com"
    // console.log(mango.accessLevel); // "superuser"

    // mango.blacklist("poly@mail.com");
    // console.log(mango.blacklistedEmails); // ["poly@mail.com"]
    // console.log(mango.isBlacklisted("mango@mail.com")); // false
    // console.log(mango.isBlacklisted("poly@mail.com")); // true


    function sumAll(arr) {
        let counter = 0;
        const sortableArray = arr.sort((a, b) => a - b);
        const firstElement = sortableArray[0];
        const lastElement = sortableArray[sortableArray.length - 1];

        for (let i = firstElement; i <= lastElement; i++) {
            counter += i;
        }
        return counter;
    }

    // console.log(sumAll([1, 4]))
    // console.log(sumAll([4, 1]))
    // console.log(sumAll([5, 10]))
    // console.log(sumAll([10, 5]))
    function diffArray(arr1, arr2) {
        let newArr = [];
        newArr = arr1.concat(arr2);
        let firstElement = newArr[0];
        return newArr.filter((item) => {

        })
        // return arr1.filter((item) => arr2.every((element)=> element !== item))
        // for(const element of arr2) {
        //     console.log('for', element)
        //     if(!arr1.includes(element)) {
        //         console.log(element)
        //         newArr.push(element)
        //     }
        // }
        // return newArr;
    }

    // console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

    var someAdjective = 'js';
    var myStr = "Learning to code is ";
    myStr += someAdjective;

    // console.log(myStr)

///!!!!!!!!!!!!!!!!!!!!!!!!!!!!---------ES6-----////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // class StringBuilder {
    //     constructor(initialValue) {
    //         this.value = initialValue;
    //     }
    //
    //     getValue() {
    //         return this.value;
    //     }
    //
    //     padEnd(str) {
    //         this.value = this.value + str;
    //     }
    //
    //     padStart(str) {
    //         this.value = str + this.value;
    //     }
    //
    //     padBoth(str) {
    //         this.padStart(str);
    //         this.padEnd(str);
    //     }
    // }

// Change code above this line
//     const builder = new StringBuilder(".");
    // console.log(builder.getValue()); // "."
    // builder.padStart("^");
    // console.log(builder.getValue()); // "^."
    // builder.padEnd("^");
    // console.log(builder.getValue()); // "^.^"
    // builder.padBoth("=");
    // console.log(builder.getValue()); // "=^.^="

///!!!!!!!!!!!!!!!!!!!!!!!!!!!!---------ES5-----////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     function StringBuilder(baseValue) {
//         this.value = baseValue;
//     }
//     StringBuilder.prototype.getValue = function() {
//         return this.value;
//     }
//
//     StringBuilder.prototype.padStart = function(str) {
//         this.value =  str + this.value;
//     }
//     StringBuilder.prototype.padEnd = function(str) {
//         this.value =  this.value + str;
//     }
//
//     StringBuilder.prototype.padBoth = function(str) {
//         this.padEnd(str);
//         this.padStart(str);
//     }
//
//     const builder = new StringBuilder('.');
//     console.log(builder.getValue()); // '.'
//     builder.padStart('^');
//     console.log(builder.getValue()); // '^.'
//     builder.padEnd('^');
//     console.log(builder.getValue()); // '^.^'
//     builder.padBoth('=');
//     console.log(builder.getValue()); // '=^.^='


//     class Storage {
//         constructor(items) {
//             this.items = items;
//         }
//         getItems() {
//             return this.items;
//         }
//         addItem(newItem) {
//             console.log(this.items.push(newItem))
//             this.items.push(newItem);
//             console.log(this.items)
//         }
//         removeItem(itemToRemove) {
//             this.items = this.items.filter((item) => item !== itemToRemove)
//         }
//     }
//
// // Change code above this line
//     const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//     console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//     storage.addItem("Droid");
//     console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//     storage.removeItem("Prolonger");
//     console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


    class User {
        email;

        constructor(email) {
            this.email = email;
        }

        get email() {
            return this.email;
        }

        set email(newEmail) {
            this.email = newEmail;
        }
    }

    class Admin extends User {
        // Пиши код ниже этой строки

        static AccessLevel = {
            BASIC: 'basic',
            SUPERUSER: 'superuser'
        };

        accessLevel;
        blacklistedEmails = [];

        constructor({email, accessLevel}) {
            super(email);
            this.accessLevel = accessLevel;
        }

        blacklist(email) {
            this.blacklistedEmails.push(email);
        }

        isBlacklisted(email) {
            return this.blacklistedEmails.includes(email)
        }

        // Пиши код выше этой строки
    }

    const mango = new Admin({
        email: 'mango@mail.com',
        accessLevel: Admin.AccessLevel.SUPERUSER
    });

    // console.log(mango.email); // mango@mail.com
    // console.log(mango.accessLevel); // superuser
    // mango.blacklist('poly@mail.com');
    // console.log(mango.blacklistedEmails); // 'poly@mail.com'
    // console.log(mango.isBlacklisted('mango@mail.com')); //  false
    // console.log(mango.isBlacklisted('poly@mail.com')); // true

    // function Cat(name) {
    //     this.name = name;
    // }
    //
    // Cat.prototype = {
    //     constructor: Animal,
    // };
    //
    // function Bear(name) {
    //     this.name = name;
    // }
    //
    // Bear.prototype = {
    //     constructor: Animal,
    //
    // };
    //
    // function Animal() { }
    //
    // Animal.prototype = {
    //     constructor: Animal,
    //     eat: function() {
    //         console.log("nom nom nom");
    //     }
    // };
    // console.log(new Cat('trdsfdsf'))

    // const str = 'Hello world';
    //
    // console.log(str.__proto__ === String.prototype);
    // console.log(str.__proto__);
    // console.log(String.prototype);
    const getTotalBalanceByGender = (users, gender) => {
        const result = users.filter((user) => {
            return user.gender === gender
        }).reduce((acc, user) => {
            console.log(acc)
            return acc + user.balance
        }, 0)
        return result
        // console.log(result)
    };

    getTotalBalanceByGender(users);
});


// Напиши класс User для создания пользователя со следующим свойствами:
//
//     name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers

// class User {
//     constructor({name, age, followers}) {
//         this.name = name;
//         this.age = age;
//         this.followers = followers;
//     }
//     getInfo() {
//         console.log(`User ${this.name} is ${ this.age} years old and has ${this.followers} followers`)
//     }
// }
//
// const mango = new User({
//     name: 'Mango',
//     age: 2,
//     followers: 20,
// });
//
// mango.getInfo(); // User Mango is 2 years old and has 20 followers
//
// const poly = new User({
//     name: 'Poly',
//     age: 3,
//     followers: 17,
// });
//
// poly.getInfo(); // User Poly is 3 years old and has 17 followers


// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

// const inventory = {
//     items: ['Knife', 'Gas mask'],
//
//     add(itemName) {
//         console.log(`Adding ${itemName} to inventory`);
//
//         this.items.push(itemName);
//     },
//     remove(itemName) {
//         console.log(`Removing ${itemName} from inventory`);
//
//         this.items = this.items.filter(item => item !== itemName);
//     },
// };
// // console.log(inventory.items)
// const invokeInventoryAction = function (itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//     action.apply(inventory, [itemName]);
// };
//
// invokeInventoryAction('Medkit', inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory
//
// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
//
// invokeInventoryAction('Gas mask', inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory
//
// console.log(inventory.items); // ['Knife', 'Medkit']


// Джейден Смит, сын Уилла Смита, является звездой таких фильмов,
// как The Karate Kid (2010) и After Earth (2013). Джейден также
// известен своей философией, которую он распространяет через Twitter.
// Когда он пишет в Твиттере, он известен тем, что почти всегда использует
// каждое слово с большой буквы. Для простоты вам придется писать каждое слово
// с заглавной буквы, посмотрите, как ожидается сокращение в приведенном ниже примере.
// Ваша задача - преобразовать строки в то, как они были бы написаны Джейденом Смитом.
// Строки - это настоящие цитаты Джейдена Смита, но они не пишутся с заглавной
// буквы так, как он их изначально набирал.

// String.prototype.toJadenCase = function() {
//     // console.log(this.split(' '))
//     // console.log(this)
//     return this.trim().split(' ').map((word) => {
//         return !word ? '' : word[0].toUpperCase() + word.slice(1)
//
//     }).join(' ');
// }
//
// const sentence = "How can mirrors be real  if  our eyes aren't real   ";
//
// console.log(sentence.toJadenCase()); // "How Can Mirrors Be Real If Our Eyes Aren't Real"


// -----------------------------------------

// Вам будет дан массив целых чисел. Ваша задача - взять этот массив и найти индекс N,
// где сумма целых чисел слева от N равна сумме целых чисел справа от N.
// Если нет индекса, который мог бы сделать это, верните - 1.

// Например:

// Допустим, вам дан массив {1,2,3,4,3,2,1}:
// Ваша функция вернет индекс 3, потому что в 3-й позиции массива сумма левой части
// индекса ({1,2,3}) и сумма правой части индекса ({3,2, 1}) оба равны 6.

// Посмотрим еще на один.
// Вам дан массив {1,100,50, -51,1,1}:
// Ваша функция вернет индекс 1, потому что в 1-й позиции массива сумма левой части
// индекса ({1}) и сумма правой части индекса ({50, -51,1,1 }) оба равны 1.

// Последний:
// Вам дан массив {20,10, -80,10,10,15,35}
// В индексе 0 левая сторона {}
// Правая сторона: {10, -80,10,10,15,35}
// При добавлении они оба равны 0. (Пустые массивы в этой задаче равны 0)
// Индекс 0 - это место, где левая и правая стороны равны.

// function findEvenIndex(arr) {
//
// }
//
//
// // ТЕСТЫ
// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
// console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); // 0
// -----------------------------------------

function findEvenIndex(arr) {
    let resultLeft = 0;
    let resultRight = 0;
    for (let i = 0; i < arr.length; i++) {
        resultRight = 0;
        for (let j = arr.length - 1; j > i; j--) {
            resultRight += arr[j];
        }
        if (resultLeft === resultRight) {
            return i;
        }
        resultLeft += arr[i];
    }

    return -1;
}

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
// console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); // 0


// Напиши функцию, которая будет принимать один параметр - строку.
// Функция должна считать количество определенных букв в строке и
// выводить ответ в формате ключ - буква, значение - количество таких букв в строке

// function count(string) {
//    return [...string].reduce((acc, el)=> {
//         // console.log(acc.hasOwnProperty(el))
//        acc.hasOwnProperty(el) ? acc[el] += 1 : acc[el] = 1;
//
//        return acc;
//         // return acc.hasOwnProperty(el);
//     }, {})
// }

// console.log(count('lllllabababablllllll')); /*{a: 4, b: 4,l: 12}*/


// Напиши класс Car с указанными свойствами и методами.

// class Car {
/*
* Добавь статический метод `getSpecs(car)`,
* который принимает объект-машину как параметр и выводит
* в консоль значения свойств maxSpeed, speed, isOn, distance и price.
*/

/*
* Конструктор получает объект настроек.
*
* Добавь свойства будущеего экземпляра класса:
* speed - текущая скорость, изначально 0
* price - цена автомобиля
* maxSpeed - максимальная скорость
* isOn - заведен ли автомобиль, значения true или false. Изначально false
* distance - общий киллометраж, изначально 0
*/
// constructor() {}

/*
* Добавь геттер и сеттер для свойства price,
* который будет работать с свойством цены автомобиля.
*/

/*
* Добавь код для того чтобы завести автомобиль
* Записывает в свойство isOn значение true
*/
// turnOn() {}

// /*
// * Добавь код для того чтобы заглушить автомобиль
// * Записывает в свойство isOn значение false,
// * и сбрасывает текущую скорость в 0
// */
// turnOff() {}
//
// /*
// * Добавялет к свойству speed полученное значение,
// * при условии что результирующая скорость
// * не больше чем значение свойства maxSpeed
// */
// accelerate(value) {}
//
// /*
// * Отнимает от свойства speed полученное значение,
// * при условии что результирующая скорость не меньше нуля
// */
// decelerate(value) {}
//
// /*
// * Добавляет в поле distance киллометраж (hours * speed),
// * но только в том случае если машина заведена!
// */
// drive(hours) {}
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
//
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);
//
// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
//
// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();
//
// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
//
// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000


// Task 4
// У нас есть объект, нужно создать функцию, которая будет его перебирать
// и если значение какого-то поля это массив (сделать проверку на массив),
// в таком случае добавляем к объекту obj1 поля в формате 'I like элемент массива', после вызова функции мы должны
// получить объект вот в таком виде
// {
// 'I like c++': "c++",
// 'I like java': "java",
// 'I like js': "js",
// 'i like my work': true,
// 'my name': "John",
// 'programming languages': ['js', 'java', 'c++']
// }

const test = {
    "my name": "John",
    "i like my work": true,
    "programming languages": ["js", "java", "c++"],
};

function getAttribute(object) {
    for (const key in object) {
        if (Array.isArray(object[key])) {
            object[key].forEach((elem) => {
                object[`i like${elem}`] = elem
            })
        }
    }
}

getAttribute(test);

// console.log(test)
function getIndexToIns(arr, num) {
    arr.push(num);
    const indexElement = arr.sort((a, b) => a - b).findIndex((el, index) => {
        return el >= num;

    })
    return indexElement;
}

// console.log(getIndexToIns([2, 5, 10], 15));


const orders = [
    {email: 'solomon@topmail.ua', dish: 'Burger'},
    {email: 'artemis@coldmail.net', dish: 'Pizza'},
    {email: 'jacob@mail.com', dish: 'Taco'},
];


function composeMessage(position) {
    return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;

}

const messages = [];
for (let i = 0; i < orders.length; i++) {
    messages.push(composeMessage.call(orders[i], i + 1));
}

function mutation(arr) {
    const firstElementArray = arr[0].toLowerCase();
    const secondElementArray = arr[1].toLowerCase()
    for (let i = 0; i < secondElementArray.length; i++) {
        if (!firstElementArray.includes(secondElementArray[i])) {
            return false;
        }

    }
    return true;
}

mutation(["hello", "hey"]);

function chunkArrayInGroups(arr, size) {
    let result = [];
    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
        // console.log('i', i * size);
        // console.log('i2', (i * size) + size);
        result.push(arr.slice((i * size), (i * size) + size));
    }
    return result;
}

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, 'three')
    arr.push(7, "VIII", 9)
    // Only change code above this line
    return arr;
}

// console.log(mixedNumbers(['IV', 5, 'six']));

// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
//     // console.log(sum)
//     if(sum  === 10) {
//         // console.log('sum',sum)
//         // console.log(arr.indexOf(arr[i]))
//     }
//
// }
// Only change code above this line
// console.log(arr);

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function removeFirstTwo(list) {
    // Only change code below this line


    let a, b, resultArray;
    [a, b, ...resultArray] = [...list]// Change this line
    // console.log(...resultArray)
    // Only change code above this line
    return resultArray;
}

const arr = removeFirstTwo(source);

function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (!arr[i].includes(elem)) {
            console.log(arr[i])
            // newArr.push(arr[i])
        }

    }
    // Only change code above this line
    return newArr;
}

//
// В HTML есть пустой список ul#ingredients.
//
// <ul id="ingredients"></ul>
//
// В JavaScript есть массив строк.


// Напиши скрипт, который для каждого элемента массива ingredients:
//
//     Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//     Добавит название ингредиента как его текстовое содержимое.
//     Добавит элементу класс item.
//     После чего вставит все <li> за одну операцию в список ul.ingredients.

// const ingredients = [
//     'Potatoes',
//     'Mushrooms',
//     'Garlic',
//     'Tomatos',
//     'Herbs',
//     'Condiments',
// ];
//
// const ingredientsContainer = document.getElementById('ingredients');
//
// const result = ingredients.map((ingredient) => {
//     const el = document.createElement('li');
//     el.textContent = ingredient;
//     el.classList.add('item');
//     return el;
// })
// ingredientsContainer.append(...result);

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// const inputValue = document.getElementById('name-input');
// const outputValue = document.getElementById('name-output');
// inputValue.addEventListener('input', ({target: {value}})=> {
//     outputValue.textContent = !value.trim() ? 'Anonymous' : value;
// })

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и
// изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.
//
// const input = document.getElementById('font-size-control');
// const text = document.getElementById('text');
// input.addEventListener('input', () => {
//     text.style.fontSize = input.value + 'px';
// })


// Напиши скрипт управления формой логина.
//
// <form class="login-form">
//     <label>
//         Email
//         <input type="email" name="email" />
//     </label>
//     <label>
//         Password
//         <input type="password" name="password" />
//     </label>
//     <button type="submit">Login</button>
// </form>
//
// Обработка отправки формы form.login-form должна быть по событию submit.
//     При отправке формы страница не должна перезагружаться.
//     Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
//     Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
//     где имя поля будет именем свойства, а значение поля - значением свойства.
//     Для доступа к элементам формы используй свойство elements.
//     Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.


// const form = document.querySelector('.login-form');
//
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const [email, password] = form.elements;
//     if (!email.value || !password.value) {
//         return alert('Все поля должны быть заполнены');
//     }
//     console.log({[email.name]: email.value, [password.name]: password.value})
// })


// const [input, create, destroy] = document.getElementById('controls').children;
// const container = document.getElementById('boxes');
// let size = 30;
// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
//
// create.addEventListener('click', () => {
//     createBoxes(input.value);
//
// })
// destroy.addEventListener('click', () => {
//     container.innerHTML = '';
//     size = 30;
// })
//
// function createBoxes(amount) {
//     const elements = [];
//     for (let i = 0; i < amount; i++) {
//         const div = document.createElement('div');
//         div.style.width = size + 'px';
//         div.style.height = size + 'px';
//         div.style.backgroundColor = getRandomHexColor();
//         elements.push(div);
//         size += 10;
//     }
//     container.append(...elements)
// }


const SIZES = {
    BIG: {price: 25, cal: 100, time: 15},
    SMALL: {price: 15, cal: 50, time: 7},
    MEDIUM: {price: 15, cal: 50, time: 7}
}
const STUFFING = {
    CHEESE: {price: 6.5, cal: 45, time: 2},
    BEACON: {price: 10, cal: 70, time: 6},
    TOMATO: {price: 12.1, cal: 4, time: 5},
    CHICKEN: {price: 9.3, cal: 30, time: 5.1}
}
const SAUCES = {
    MUSTARD: {price: 3, cal: 5, time: 1},
    KETCHUP: {price: 4.2, cal: 20, time: 1.5},
    BOLOGNESE: {price: 7.5, cal: 50, time: 3}
}

const Pizza = {
    _sizePizza: '',
    listSupplements: [],
    listSauces: [],
    get sizePizza() {
        return this._sizePizza;
    },
    set sizePizza(value) {
        this._sizePizza = value;
    },
    addSupplements(supplement) {
        if (this.listSupplements.includes(supplement)) {
            return alert('Данная добавка уже есть в списке!!!');
        }
        this.listSupplements.push(supplement);
    },
    addSauces(sauce) {
        for (const key in SAUCES) {
            if (SAUCES.hasOwnProperty(sauce)) {
                if (this.listSauces.includes((sauce))) {
                    return `${sauce} уже есть в списке`;
                }
                this.listSauces.push(sauce);
            }
        }


    },
    removeSupplements(supplement) {
        if (!this.listSupplements.includes(supplement) || this.listSupplements.length === 0) {
            return alert('Данный элемент отсутствует в списке или список пуст');
        }
        this.listSupplement = this.listSupplements.filter(item => {
            return item !== supplement
        })
    },
    removeSauces(sauce) {
        if (!this.listSauces.includes(sauce) || this.listSauces.length === 0) {
            return alert('Данный элемент отсутствует в списке или список пуст');
        }
        this.listSauces = this.listSauces.filter(item => {
            return item !== sauce
        })
    },
    countPrice() {
        const listSupplementsPrice = this.listSupplements.reduce((acc, item) => {
            return acc + item.price
        }, 0);
        const listSaucesPrice = this.listSauces.reduce((acc, item) => {
            return acc + item.price;
        }, 0);
        return this.sizePizza.price + listSupplementsPrice + listSaucesPrice;
    },
    countCal() {
        const listSupplementsCal = this.listSupplements.reduce((acc, item) => {
            return acc + item.cal
        }, 0);
        const listSaucesCal = this.listSauces.reduce((acc, item) => {
            return acc + item.cal;
        }, 0);
        return this.sizePizza.cal + listSupplementsCal + listSaucesCal;
    }
}

Pizza.sizePizza = SIZES.BIG;
Pizza.addSupplements(STUFFING.BEACON);
Pizza.addSupplements(STUFFING.CHEESE);
Pizza.addSupplements(STUFFING.TOMATO);
Pizza.addSauces('BOLOGNESE');
Pizza.addSauces(SAUCES.MUSTARD);
// console.log(Pizza.countPrice());
// console.log(Pizza.countCal());
// console.log(Pizza)


const textInput = document.querySelector('#validation-input');
let value = 0;
textInput.addEventListener('blur', () => {
    //console.log(textInput.dataset.length);
    if (Number(textInput.dataset.length) === textInput.value.length) {
        toggleClass('valid', 'invalid');
    } else {
        toggleClass('invalid', 'valid');
    }
});

//МЕНТОР//
function toggleClass(add, remove) {
    textInput.classList.add(add);
    textInput.classList.remove(remove);
}