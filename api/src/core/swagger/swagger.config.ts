import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Angular-Nest example')
  .setDescription('The Angular-Nest API description')
  .setVersion('1.0')
  .addTag('Angular-Nest')
  .build();
