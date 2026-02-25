import { User, IUser } from '../models/User';

export class UserDatabase {
  private users: Map<string, IUser> = new Map();

  // CREATE
  create(name: string, email: string, age?: number): IUser {
    const user = new User(name, email, age);
    this.users.set(user.id, user);
    return user;
  }

  // READ all
  findAll(): IUser[] {
    return Array.from(this.users.values());
  }

  // READ by ID
  findById(id: string): IUser | null {
    return this.users.get(id) || null;
  }

  // READ by email
  findByEmail(email: string): IUser | null {
    for (const user of this.users.values()) {
      if (user.email === email) {
        return user;
      }
    }
    return null;
  }

  // UPDATE
  update(id: string, name?: string, email?: string, age?: number): IUser | null {
    const user = this.users.get(id);
    if (!user) return null;
    
    user.name = name || user.name;
    user.email = email || user.email;
    if (age !== undefined) user.age = age;
    user.updatedAt = new Date();
    
    return user;
  }

  // DELETE
  delete(id: string): boolean {
    return this.users.delete(id);
  }

  // DELETE all
  clear(): void {
    this.users.clear();
  }

  // Get total count
  count(): number {
    return this.users.size;
  }
}