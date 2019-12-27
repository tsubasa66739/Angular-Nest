import {
  Column,
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity()
export class Blog extends BaseEntity {

  @PrimaryGeneratedColumn()
  readonly id?: number;

  @Column({length: 100})
  title: string;

  @Column('text')
  body: string;

  @Column('int')
  views: number = 0;

  @Column()
  isPublished: boolean = false;

  @Column({default: null})
  publishedAt?: Date;

  @UpdateDateColumn()
  readonly updatedAt?: Date;

  @CreateDateColumn()
  readonly createdAt?: Date;

  constructor(title: string, body: string) {
    super();
    this.title = title;
    this.body = body;
  }

}
