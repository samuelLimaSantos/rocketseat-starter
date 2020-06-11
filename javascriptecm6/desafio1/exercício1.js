class Usuario {
  
    constructor (email, senha, admin = false) {
      this.email = email;
      this.senha = senha;
      this.admin = admin;
    }
  
    isAdmin() {    
      return (this.admin === true) ? true : false;
      
    }
  
  }
  
  class Admin extends Usuario {
    constructor(email, senha) {
      super(email, senha, true);
    }
  }
  
  const User1 = new Usuario("email@teste.com", "senha123");
  const Adm1 = new Admin("email@teste.com", "senha123");
  
  console.log(User1.isAdmin()); // false
  console.log(Adm1.isAdmin()); // true