export type User = {
  fullname: string;
  email: string;
  picture_url?: string;
};

export type Diary = {
  _id: string;
  user_id: string;
  title: string;
  details: string;
};

export const INITIAL_USER_STATE = {
  _id: '',
  email: '',
  fullname: '',
  picture_url: '',
};
export interface LoginResponse {
  message: boolean;
  user: User;
  token: string;
  status: number;
}
