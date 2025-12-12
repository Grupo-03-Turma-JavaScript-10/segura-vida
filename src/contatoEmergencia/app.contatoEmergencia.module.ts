import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ContatoEmergencia } from "./entities/contatoEmergencia.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ContatoEmergencia])],
    controllers: [],
    providers: [],
    exports: []
})

export class ContatoEmergenciaModule {}
