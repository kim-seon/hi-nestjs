import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // function 이름은 아무거나 해도 됨
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
