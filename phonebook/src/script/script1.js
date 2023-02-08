'use strict';

const data1 = [
  {
    name: 'Иван',
    surname: 'Петров',
    phone: '+79514545454',
  },
  {
    name: 'Анна',
    surname: 'Семёнов',
    phone: '+79999999999',
  },
  {
    name: 'Семён',
    surname: 'Иванов',
    phone: '+79800252525',
  },
  {
    name: 'Мария',
    surname: 'Попова',
    phone: '+79876543210',
  },
];

const key = 'data';

const newObj = {
  name: 'Мария',
  surname: 'Попова',
  phone: '+79876543210',
};


const data2 = [];
console.log(!!data1);
console.log(!!data2);

// localStorage.setItem(key, JSON.stringify(data2));


// const s = JSON.parse(localStorage.getItem(key));
// console.log(s);
// s.push(newObj);

// console.log(s);

// localStorage.setItem(key, JSON.stringify(s));


const a = [];
const b = {
  x1: 5,
  x2: 15,
  x3: 35,
};
console.log(a.push(b));
console.log(a);