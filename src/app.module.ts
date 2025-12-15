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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_segura_vida',
      entities: [ContatoEmergencia, Endereco, Usuario, SeguroVida],
      synchronize: true,
    }),
    UsuarioModule,
    EnderecoModule,
    ContatoEmergenciaModule,
    SeguroVidaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
