import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
  // app.enableCors();
  Logger.log(`mandeha ny seveur ;-) ${ await app.getUrl()}`)

}

bootstrap();
