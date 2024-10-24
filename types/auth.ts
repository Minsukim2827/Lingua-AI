import Record from 'pocketbase';

export interface User extends Record {
  id: string;
  email: string;
  emailVisibility: boolean;
  username: string;
  verified: boolean;
  created: string;
  updated: string;

}