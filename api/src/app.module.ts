import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './domain/blog/blog.module';
import { typeOrmConfig } from './core/type-orm/type-orm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
