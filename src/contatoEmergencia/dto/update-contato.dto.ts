import { PartialType } from '@nestjs/swagger';
import { CreateContatoEmergenciaDto } from './create-contato.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateContatoEmergenciaDto extends PartialType(CreateContatoEmergenciaDto) {
  @ApiProperty({ example: 1 })
  id: number;
}
