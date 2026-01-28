import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { ContatoEmergencia } from "../../contatoEmergencia/entities/contatoEmergencia.entity";
import { Endereco } from "../../endereco/entities/endereco.entity";
import { SeguroVida } from "../../seguroVida/entities/seguroVida.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'db_blogpessoal',
            entities: [ContatoEmergencia,Endereco, SeguroVida, Usuario],
            synchronize: true,
    };
  }
}