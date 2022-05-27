// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

/* catatan:
- tipe dari method new Set adalah objek
- di test3.test.js -> diminta dgn method length,`users[0].favoriteColor.length`
- supaya fix harus di inisialisasi menjadi array, bisa menggunakan Array.from() / spread operator 

array -> bisa dihitung -> use length
objek, map -> karena key-value pair -> use Object.keys(variabel).length
set -> bisa dihitung -> use size
*/

// first user favorite color & restaurant
const firstUserFavoriteColor = Array.from(new Set([
    'Yellow', 'Pink', 'White', 'Purple'
]));
const firstUserFavoriteRestaurant = Array.from(new Set([
    'Bento', 'Sushi', 'Pancake', 'Eggy', 'Tempura', 'Bento', 'Eggy', 'Padang', 'Tteok', 'Sushi', 'Sushi'
]));

// second user favorite color & restaurant
const secondUserFavoriteColor = new Set([
    'Blue', 'Black', 'Grey'
]);
const secondUserFavoriteRestaurant = new Set([
    'Tempura', 'Bento', 'Sushi', 'Pancake', 'Padang', 'Katsu', 'Geprek', 'Pancake', 'Eggy'
]);

// objek firstUser
const firstUser = {
    name: 'Monica',
    gender: 'Female',
    age: 17,
    email: 'monica@dingdong.com',
    favoriteColor: firstUserFavoriteColor,
    isHavePet: 'Yes',
    education: [
        {
            name: 'SD 01',  
            city: 'Jakarta', 
            graduate: 2016
        },
        {
            name: 'SMP 02',
            city: 'Jakarta',
            graduate: 2019
        },
        {
            name: 'SMA 03',
            city: 'Tangerang'
        }
    ],
    favoriteRestaurant: firstUserFavoriteRestaurant,
};

// objek secondUser
const secondUser = {
    name: 'Wendy',
    gender: 'Male',
    age: 23,
    email: 'wendy@dingdong.com',
    favoriteColor: [...secondUserFavoriteColor], //spread operator untuk membuat array baru / inisialisasi array
    isHavePet: 'No',
    education:[
        {
            name: 'SD 02',
            city: 'Jakarta',
            graduate: 2010
        },
        {
            name: 'SMP 03',
            city: 'Bogor',
            graduate: 2013
        },
        {
            name: 'SMA 01',
            city: 'Surabaya',
            graduate: 2016
        },
        {
            name: 'Universitas Maju',
            city: 'Tangerang'
        }
    ],
    favoriteRestaurant: [...secondUserFavoriteRestaurant]
};

const users = [];
users.push(firstUser,secondUser); //push data fisrtUser & secondUser ke array users

function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};