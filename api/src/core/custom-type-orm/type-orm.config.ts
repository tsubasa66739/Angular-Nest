import { CustomNamingStrategy } from './custom-naming.strategy';
import { Blog } from 'src/domain/blog/blog.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  entities: [
    Blog,
  ],
  synchronize: true,
  namingStrategy: new CustomNamingStrategy(),
};
