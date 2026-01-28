import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./entities/usuario.entity";
import { UsuarioController } from "./controller/usuario.controller";
import { UsuarioService } from "./services/usuario.service";
import { ContatoEmergenciaModule } from "../contatoEmergencia/app.contatoEmergencia.module";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario]), ContatoEmergenciaModule],
    controllers: [UsuarioController],
    providers: [UsuarioService],
    exports: [UsuarioService]
})

export class UsuarioModule {}