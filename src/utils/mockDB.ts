// src/utils/mockDB.ts
type UserData = {
    name: string;
    skills: string;
    phone: string;
    slackHandle: string;
    languages: string;
    timezone: string;
  };
  
  export const mockDB = {
    getSignupStatus: (userId: string): boolean => {
      return localStorage.getItem(`user_${userId}_signupComplete`) === 'true';
    },
    
    setSignupStatus: (userId: string, status: boolean): void => {
      localStorage.setItem(`user_${userId}_signupComplete`, status.toString());
    },
  
    storeUserData: (userId: string, data: UserData): void => {
      localStorage.setItem(`user_${userId}`, JSON.stringify(data));
    },
  
    getUserData: (userId: string): UserData | null => {
      const data = localStorage.getItem(`user_${userId}`);
      return data ? JSON.parse(data) : null;
    }
  };
  
  