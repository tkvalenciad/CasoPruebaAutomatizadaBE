const axios = require('axios');
const chai = require('chai');
const chaiHttp = require('chai-http');

// Configuración de chai para trabajar con HTTP
chai.use(chaiHttp);
const expect = chai.expect;

// URL de la API
const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';

// Realizar la solicitud GET a la API
axios.get(apiUrl)
  .then((response) => {
    // Validar el status code de la respuesta
    expect(response.status).to.equal(200);

    // Validar el esquema de la respuesta
    expect(response.data).to.have.property('results').that.is.an('array');

    // Validar que la lista de objetos en la propiedad 'results' no sea nula o vacía
    expect(response.data.results).to.not.be.null;
    expect(response.data.results).to.not.be.empty;

    console.log('Pruebas exitosas');
  })
  .catch((error) => {
    console.error('Error en la solicitud:', error.message);
  });