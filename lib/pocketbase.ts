"use client";

import PocketBase from 'pocketbase';
import { User } from '@/types/auth';

// Create a typed version of PocketBase
const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL || 'http://127.0.0.1:8090');

export default pb;

export const collections = {
    users: pb.collection<User>('users'),
};