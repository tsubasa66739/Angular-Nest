import { BlogService } from './blog.service';
import { BlogRequestDto } from './dto/blog-request.dto';
import { Blog } from './blog.entity';
import { Controller, Post, Body, Get } from '@nestjs/common';

@Controller('blog')
export class BlogController {

  constructor(
    private readonly blogService: BlogService,
  ) {}

  @Post()
  async create(
    @Body() reqBody: BlogRequestDto,
  ): Promise<Blog> {
    return await this.blogService.create(reqBody.title, reqBody.body);
  }

  @Get()
  async findAll(): Promise<Blog[]> {
    return await this.blogService.findAll();
  }

}
