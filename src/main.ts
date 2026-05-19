import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //-> ativando a validacao no projeto

  const config = new DocumentBuilder() //-> constrói as configurações da documentação (título, descrição, versão)
    .setTitle('Game API')
    .setDescription('API para gerenciamento de jogos')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config); //->  lê toda a aplicação e gera o documento de documentação
  SwaggerModule.setup('api', app, document); //-> define que a documentação ficará disponível em /api

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
