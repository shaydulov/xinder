const Person = function(name, last, age){
    this.name = name;
    this.lastName = last;
    this.age = age;
}

Person.prototype.calcYear = function(){
    console.log(this.name, 2024 - this.age);
}

const jahongir = new Person("Jahongir", "Shaydulov", 19);
console.log(jahongir);
jahongir.calcYear();