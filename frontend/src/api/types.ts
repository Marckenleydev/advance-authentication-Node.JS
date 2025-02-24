export interface RegisterFormData {
    email: string;
    password: string;
    name: string;
  }
  
  export interface SignInFormData {
    email: string;
    password: string;
  }
  
  export interface UserType {
    id: string;
    email: string;
    name: string;
    isVerified: boolean;
    lastLogin: any;
    createdAt:any;
    
  }