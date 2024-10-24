import { create } from 'zustand';
import pb, { collections } from '@/lib/pocketbase';
import { User } from '@/types/auth';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isLoading: false,

  login: async (email: string, password: string) => {
      try {
          set({ isLoading: true });

          const authData = await collections.users.authWithPassword<User>(
              email,
              password
          );

          if (!authData?.record) {
              throw new Error('Authentication failed');
          }

          set({
              user: authData.record,
              isLoading: false
          });

          window.dispatchEvent(new Event('auth-change'));
      } catch (error) {
          set({ isLoading: false });
          console.error('Authentication error:', error);
          throw error;
      }
  },

  logout: async () => {
      try {
          set({ isLoading: true });
          pb.authStore.clear();
          set({ user: null, isLoading: false });
          window.dispatchEvent(new Event('auth-change'));
      } catch (error) {
          set({ isLoading: false });
          throw error;
      }
  },

  checkAuth: async () => {
      try {
          set({ isLoading: true });
          if (pb.authStore.isValid && pb.authStore.model) {
              // Type assertion here is safe because we've verified the auth store is valid
              const user = pb.authStore.model as User;
              set({ user, isLoading: false });
          } else {
              set({ user: null, isLoading: false });
          }
      } catch (error) {
          console.error('Auth check error:', error);
          set({ user: null, isLoading: false });
      }
  },
}));