import { v4 as uuidv4 } from 'uuid';

export interface IUser {
  id: string;
  name: string;
  email: string;
  age?: number;
  createdAt: Date;
  updatedAt: Date;
}

export class User implements IUser {
  id: string;
  name: string;
  email: string;
  age?: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(name: string, email: string, age?: number) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.age = age;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  update(name?: string, email?: string, age?: number): void {
    if (name) this.name = name;
    if (email) this.email = email;
    if (age !== undefined) this.age = age;
    this.updatedAt = new Date();
  }
}