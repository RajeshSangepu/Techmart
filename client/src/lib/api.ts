import { supabase } from './supabase';
import type { User } from '../types';

export async function getCurrentUser(): Promise<User | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single();

    return data;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

export async function signIn(email: string, password: string) {
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signUp(email: string, password: string, name: string) {
  return supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
    },
  });
}

export async function signOut() {
  return supabase.auth.signOut();
}