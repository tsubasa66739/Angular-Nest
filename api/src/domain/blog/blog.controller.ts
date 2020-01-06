import { BlogService } from './blog.service';
import { BlogRequestDto } from './dto/blog-request.dto';
import { Blog } from './blog.entity';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

/**
 * Controller of blog.
 */
@Controller('blog')
export class BlogController {

  constructor(
    private readonly blogService: BlogService,
  ) {}

  /**
   * Create new blog post API.
   * @param reqBody blog post request.
   */
  @Post()
  @ApiBody({
    type: BlogRequestDto,
  })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Blog,
  })
  async create(
    @Body() reqBody: BlogRequestDto,
  ): Promise<Blog> {
    return await this.blogService.create(reqBody.title, reqBody.body);
  }

  /**
   * Get all blog posts API.
   */
  @Get()
  @ApiOkResponse({
    description: 'Response all of found blogs.',
    type: [Blog],
  })
  async findAll(): Promise<Blog[]> {
    return await this.blogService.findAll();
  }

}
