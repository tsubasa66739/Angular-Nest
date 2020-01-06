import {
  Column,
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Blog extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty()
  readonly id?: number;

  @Column({length: 100})
  @ApiProperty()
  title: string;

  @Column('text')
  @ApiProperty()
  body: string;

  @Column('int')
  @ApiProperty()
  views: number = 0;

  @Column()
  @ApiProperty()
  isPublished: boolean = false;

  @Column({default: null})
  @ApiProperty({
    type: 'string',
  })
  publishedAt?: Date;

  @UpdateDateColumn()
  @ApiProperty({
    type: 'string',
  })
  readonly updatedAt?: Date;

  @CreateDateColumn()
  @ApiProperty({
    type: 'string',
  })
  readonly createdAt?: Date;

  constructor(title: string, body?: string) {
    super();
    this.title = title;
    this.body = body;
  }

}
