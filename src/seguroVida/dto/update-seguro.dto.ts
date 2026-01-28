import { PartialType } from '@nestjs/swagger';
import { CreateSeguroVidaDto } from './create-seguro.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSeguroVidaDto extends PartialType(CreateSeguroVidaDto) {
  @ApiProperty({ example: 1 })
  id: number;
}
