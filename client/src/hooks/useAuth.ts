import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { getCurrentUser } from '../lib/api';

export function useAuth() {
  const { user, setUser } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser().then(setUser);
  }, [setUser]);

  return {
    isAuthenticated: !!user,
    user,
  };
}