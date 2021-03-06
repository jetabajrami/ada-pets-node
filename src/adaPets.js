// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
   // Fill out as part of Wave 1.
  axios.get(BASE_URL)
  .then((response) =>{
    setResult(response.data)
  })
  .catch((error) =>{
    setError(error.message)
  });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!"); 
  }else{
    axios.get(BASE_URL + selectedPetId)
    .then(response =>{
      setResult(response.data)
    })
    .catch(error => {
      setError(error.message); 
    }) 
  }
  // Fill out as part of Wave 2.
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  }else{
    axios.delete(BASE_URL + selectedPetId)
    .then(response =>{
      console.log("We are going to miss you...!");
      setResult(response.data)
    })
    .catch(error => {
      setError("Failed, to remove"); 
    })
  }
  // Fill out as part of Wave 3.
};


const addPet = (petInfo) => {
  
  axios.post(BASE_URL, petInfo)
  .then(response => {
    console.log("Welcome to your house...!")
    setResult(response.data)
  })
  .catch(error => {
    setError("Pet failed to be added to the list"); 
  })
  // Fill out as part of Wave 4.
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
