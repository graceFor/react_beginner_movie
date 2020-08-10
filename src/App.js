//import React from 'react';
//import logo from './logo.svg';
// import './App.css';

const human = {
  name: "Nico",
  lastName: "Serrano",
  nationality: "Wish i was korean",
  favfood: {
    breakfast: "Sam",
    dinner: "dduk",
  },
};

//const name = human.name;
//const lastName = human.lastName;
const {
  name,
  lastName,
  nationality: difName,
  favfood: { dinner },
} = human;

//const dinner = human.favfood.dinner;

console.log(name, lastName, difName, dinner);
