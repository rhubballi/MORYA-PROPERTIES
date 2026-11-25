import React, { createContext, useContext, useState, useEffect } from 'react';
import { STORAGE_KEYS } from '../lib/supabase';

interface AdminUser {
  email: string;
  name: string;
  role: 'admin' | 'staff';
}

interface AuthContextType {
  user: AdminUser | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AdminUser | null>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ADMIN_SESSION);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved session", e);
      }
    }
    return null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.ADMIN_SESSION, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEYS.ADMIN_SESSION);
    }
  }, [user]);

  const login = async (email: string, pass: string): Promise<{ success: boolean; error?: string }> => {
    // Verified local administrative credentials
    const cleanEmail = email.trim().toLowerCase();
    
    // Check credentials (admin@morya.com / morya2026 or nilesh@morya.com)
    if (
      (cleanEmail === 'admin@morya.com' && pass === 'morya2026') ||
      (cleanEmail === 'nilesh@morya.com' && pass === 'morya2026') ||
      (cleanEmail === 'admin' && pass === 'admin')
    ) {
      const loggedUser: AdminUser = {
        email: cleanEmail,
        name: cleanEmail.includes('nilesh') ? 'Nilesh Ramchandra Tarde' : 'Administrator',
        role: 'admin'
      };
      setUser(loggedUser);
      return { success: true };
    }

    return { success: false, error: 'Invalid email or password. Use default admin credentials.' };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
