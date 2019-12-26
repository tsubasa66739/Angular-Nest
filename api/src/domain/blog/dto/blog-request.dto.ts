import { ApiProperty } from '@nestjs/swagger';

export class BlogRequestDto {

  @ApiProperty()
  title: string;

  @ApiProperty()
  body?: string;
}
