import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Endereco } from "./entities/endereco.entity";
import { EnderecoService } from "./services/endereco.service";
import { EnderecoController } from "./controllers/endereco.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Endereco])],
    controllers: [EnderecoController],
    providers: [EnderecoService],
    exports: [EnderecoService]
})

export class EnderecoModule { }
