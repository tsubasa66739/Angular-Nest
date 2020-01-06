import { ApiProperty } from '@nestjs/swagger';

export class BlogRequestDto {

  @ApiProperty({
    description: 'The title of a blog.',
  })
  title: string;

  @ApiProperty({
    description: 'The body of a blog.',
    required: false,
  })
  body?: string;
}
