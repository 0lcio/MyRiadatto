import React, { createContext, useState, useContext, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Stato di caricamento

  useEffect(() => {
    const initializeAuth = async () => {
      await checkAuthStatus();
      setLoading(false); // Il caricamento è completato
    };
    initializeAuth();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/verify', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await response.json();
      setIsAuthenticated(data.authenticated);
    } catch {
      setIsAuthenticated(false);
    }
  };

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = async () => {
    try {
      await fetch('http://localhost:3000/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      setIsAuthenticated(false);
    } catch {
      setIsAuthenticated(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Mostra un indicatore di caricamento
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


// Hook personalizzato per utilizzare il contesto di autenticazione
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);