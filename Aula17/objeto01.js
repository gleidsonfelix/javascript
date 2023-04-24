let amigo = { nome: 'jose', 
sexo: 'masculino',
 peso: 85.2,
 engordar(p) {
    this.peso += p
 }

}
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)