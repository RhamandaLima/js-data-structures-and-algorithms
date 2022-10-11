// até 05: 

var framework = 'Angular';
var framework = 'React';
console.log(framework)

// a partir da ES2015 foram introduzidas as palavras reservadas let e const:

let language = 'Javascript!';
//let language = 'Ruby!'; // Lança erro
console.log(language)

const PI = 3.141593; 
//PI = 3.0 // lança erro
console.log(PI)

const jsFramework = {
    name: 'Angular'
};

jsFramework.name = 'React';

// um const permite que as propriedades do objeto recebam novos valores ou sejam atualizadas, mas a referência à variável em si não pode ser alterada. 

/*jsFramework = { 
    name: 'Vue'
}; // lança erro */
