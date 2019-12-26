import { PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";

export class BaseEntity {

  @PrimaryGeneratedColumn()
  readonly id?: number;

  @UpdateDateColumn()
  readonly updatedAt?: Date;

  @CreateDateColumn()
  readonly createdAt?: Date;

}