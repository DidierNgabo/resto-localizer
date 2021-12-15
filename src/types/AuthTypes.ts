export interface IUser {
  email: string;
  password: string;
}

export type AuthContextState = {
  currentUser: any;
  login: (user: IUser) => void;
  register: (user: IUser) => void;
  logout: () => void;
};
