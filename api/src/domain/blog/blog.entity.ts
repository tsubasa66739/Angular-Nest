import { BaseEntity } from '../../core/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Blog extends BaseEntity {

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

  constructor(title: string, body: string) {
    super();
    this.title = title;
    this.body = body;
  }

}
