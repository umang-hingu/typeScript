export interface Items {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

export interface Notification {
  status: string;
  title: string;
  message: string;
}

export interface Action {
  type: string;
  payload: Notification;
}

export interface UserAction {
    type: string;
    payload: UserData;
  }
export interface UserData {
  email?: string | undefined;
  password?: string | undefined;
  token?: string | undefined;
}
export interface RegUserData {
    email?: string | undefined;
    password?: string | undefined;
    token?: string | undefined;
  }

export interface InitialState {
  items: Items[];
  notification: Notification | null;
  registeredUserData: RegUserData | null;
  loginUserData: UserData | null;
}
