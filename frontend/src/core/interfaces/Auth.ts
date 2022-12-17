export interface User {
  email: string
  password: string
}

export interface Auth {
  userData: User | null
  errorMessage: string
}

export interface AuthState extends Auth {
  usersList: User[]
}