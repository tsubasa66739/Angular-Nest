import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {

  constructor(
  ) {}

  async create(title: string, body: string): Promise<Blog> {
    const reqBlog = new Blog(title, body);
    // const newBlog = this.blogRepository.create(reqBlog);
    // return this.blogRepository.save(newBlog);
    return reqBlog.save();
  }

  async findAll(): Promise<Blog[]> {
    // return this.blogRepository.find();
    return Blog.find();
  }

}
