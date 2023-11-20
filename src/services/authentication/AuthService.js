// services/authentication/AuthService.js

// Simulação de dados de usuários
const usersDatabase = [
    { id: 1, email: 'user@example.com', password: 'password123' },
    { id: 2, email: 'anotheruser@example.com', password: 'qwerty' },
   
  ];
  
  const AuthService = {
    login: async (email, password) => {
      // Simulação de autenticação
      const user = usersDatabase.find(
        (u) => u.email === email && u.password === password
      );
  
      if (user) {
        // Retorna os dados do usuário autenticado
        return { success: true, user };
      } else {
        return { success: false, error: 'Credenciais inválidas' };
      }
    },
  
    register: async (email, password) => {
      // Simulação de registro de um novo usuário
      const newUser = { id: usersDatabase.length + 1, email, password };
      usersDatabase.push(newUser);
  
      // Retorna os dados do novo usuário registrado
      return { success: true, user: newUser };
    },
  
    logout: async () => {
      // Lógica de logout
    },
  };
  
  export default AuthService;
  