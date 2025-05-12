// This file simulates an API service for authentication
// In a real app, this would connect to your backend server

import { User } from '@/types/user';

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API service
export const authService = {
  async login({ email, password }: LoginCredentials): Promise<AuthResponse> {
    // Simulate API call
    await delay(800);
    
    // This is just for demo purposes
    // In a real app, you would validate credentials with your API
    if (email && password) {
      // Simulate successful login
      const user: User = {
        id: '1',
        email,
        name: email.split('@')[0], // Use part of email as name
        role: 'admin',
      };
      
      return {
        user,
        token: 'mock-jwt-token',
      };
    }
    
    throw new Error('Invalid credentials');
  },
  
  async logout(): Promise<void> {
    // Simulate API call
    await delay(300);
    // In a real app, you might invalidate tokens on the server
    localStorage.removeItem('auth_token');
    return;
  },
  
  async getCurrentUser(): Promise<User | null> {
    // Simulate API call to get current user
    await delay(500);
    
    const token = localStorage.getItem('auth_token');
    if (!token) return null;
    
    // In a real app, you would decode the token or make an API call
    return {
      id: '1',
      email: 'user@example.com',
      name: 'Demo User',
      role: 'admin',
    };
  }
};