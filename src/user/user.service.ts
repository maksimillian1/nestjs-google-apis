import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public async getAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  public async getUserByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({where: {email} });
  }

  public async create(user: any): Promise<User> {
    return await this.usersRepository.save(user);
  }

}
