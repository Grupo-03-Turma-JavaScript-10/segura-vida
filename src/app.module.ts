import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/app.usuario.module';
import { EnderecoModule } from './endereco/app.endereco.module';
import { ContatoEmergenciaModule } from './contatoEmergencia/app.contatoEmergencia.module';
import { ContatoEmergencia } from './contatoEmergencia/entities/contatoEmergencia.entity';
import { Endereco } from './endereco/entities/endereco.entity';
import { Usuario } from './usuario/entities/usuario.entity';
import { SeguroVida } from './seguroVida/entities/seguroVida.entity';
import { SeguroVidaModule } from './seguroVida/app.seguroVida.module';
import { ProdService } from './data/services/prod.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,
      imports: [ConfigModule],
    }),
    UsuarioModule,
    EnderecoModule,
    ContatoEmergenciaModule,
    SeguroVidaModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
