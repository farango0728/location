import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { MinLength, IsNotEmpty, IsEmail } from 'class-validator';
import bcrypt from 'bcryptjs';
import {SharedProp} from './sharedProp.helpers'
import {GenderType} from './types'

@Entity()
export class User extends SharedProp {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ type: 'enum', enum: GenderType, default: GenderType.OTHER })
	gender: GenderType;

  /** The users email */
  @Column({ unique: true })
  @MinLength(6)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column()
  @MinLength(6)
  @IsNotEmpty()
  password: string;
 

  hashPassword(): void {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }

  checkPassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }
  
}