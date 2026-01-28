import { PartialType } from '@nestjs/swagger';
import { CreateEnderecoDto } from './create-endereco.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEnderecoDto extends PartialType(CreateEnderecoDto) {
  @ApiProperty({ example: 1 })
  id: number;
}
