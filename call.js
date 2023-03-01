let a = {
    name: "Pedro 1",
    falar() {
        console.log("Olá, sou o exemplo do " + this.name);
    }
} 

b = {
    name: "Pedro 2",
};

a.falar.call(b);