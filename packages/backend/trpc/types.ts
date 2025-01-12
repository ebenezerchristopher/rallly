export type RegistrationTokenPayload = {
  name: string;
  email: string;
  code: string;
};

export type LoginTokenPayload = {
  userId: string;
  code: string;
};

export type DisableNotificationsPayload = {
  pollId: string;
  watcherId: number;
};

export type RegisteredUserSession = {
  isGuest: false;
  id: string;
  name: string;
  email: string;
};

export type GuestUserSession = {
  isGuest: true;
  id: string;
};

export type UserSession = GuestUserSession | RegisteredUserSession;
