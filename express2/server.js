const express = require("express");
const faker = require("faker");
const port = 8000;
const app = express();

class User{
    constructor(){
      
        this.id = Math.random(100-1)+1;
        this.firstname=faker.name.firstName();
        this.lastname=faker.name.lastname();
        this.phonenumber=faker.phone.phonenumber();
        this.email=faker.internet.email();
        this.password=faker.internet.password();
    }
}
console.log(new User());

class Company{
    constructor(){
        this.id=Math.random(100-1)+1;
        this.name=faker.company.companyName();
        this.street=faker.address.streetName();
        this.city=faker.address.city();
        this.state=faker.address.state();
        this.zipCode=faker.address.zipCode();
        this.country=faker.address.country();
    }
}
console.log(new Company());
    
// req is shorthand for request
// res is shorthand for response
app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});
app.get("/api/user/company", (req, res) => {
    res.json(new User(),new Company());
});

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

