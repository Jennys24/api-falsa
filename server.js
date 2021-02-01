const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});


app.get("/api/usuario", (req, res) => {
  const users = [
    { firstName: faker.name.firstName(), 
      lastname: faker.name.lastName(), 
      rut: faker.random.number(), 
      num_phone: 56978451265, 
      email: "reimuhakurei@mailpost.com", 
      password: ""},
  ];
    res.json( usuario );
});


app.get("/api/empresa", (req, res) => {
  const empresa = [
    { rut: "762589462", 
    name: faker.company.companyName(), 
    direccion:{calle: "alemania", 
    codigo_post:489576, 
    estado:"Arauco"}},
  
  ];
  res.json( empresa );
});

app.get("/api/companies", (req, res) => {
  const users2 = [
    { firstName: faker.name.firstName(), 
      lastname: faker.name.lastName(), 
      rut: faker.random.number(), 
      num_phone: 56978451265, 
      email: faker.email(), 
      password: ""},
  ];
  const empresa2 = [
    { rut: "762589462", 
    name: faker.company.companyName(), 
    direccion:{calle: "alemania", 
    codigo_post:489576, 
    estado:"Arauco"}},
  ];  
    res.json( companies );
});



app.listen( port, () => console.log(`Listening on port: ${port}`) );