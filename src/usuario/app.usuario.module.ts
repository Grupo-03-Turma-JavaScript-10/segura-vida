import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./entities/usuario.entity";
import { UsuarioController } from "./controller/usuario.controller";
import { UsuarioService } from "./services/usuario.service";
import { SeguroVidaModule } from "../seguroVida/app.seguroVida.module";
import { ContatoEmergenciaModule } from "../contatoEmergencia/app.contatoEmergencia.module";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario]), SeguroVidaModule, ContatoEmergenciaModule],
    controllers: [UsuarioController],
    providers: [UsuarioService],
    exports: [UsuarioService]
})

export class UsuarioModule {}