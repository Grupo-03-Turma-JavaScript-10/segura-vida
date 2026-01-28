import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API Segura Vida')
    .setDescription('Documentação da API do sistema de Seguro de Vida')
    .setVersion('1.0')
    .addTag('usuarios', 'Gerenciamento de usuários')
    .addTag('enderecos', 'Gerenciamento de endereços')
    .addTag('contatos-emergencia', 'Gerenciamento de contatos de emergência')
    .addTag('seguros-vida', 'Gerenciamento de seguros de vida')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  
  // Habilitar CORS
  app.enableCors();
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Aplicação rodando em: http://localhost:${port}`);
  console.log(`📚 Swagger disponível em: http://localhost:${port}/api/docs`);
}
bootstrap();
