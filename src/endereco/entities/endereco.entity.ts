import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'tb_enderecos' })
export class Endereco {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    rua: string;

    @IsNotEmpty()
    @Column({ length: 20, nullable: false })
    numero: string;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    cidade: string;

    @IsNotEmpty()
    @Column({ length: 9, nullable: false })
    cep: string;

    @OneToOne(() => Usuario, (usuario) => usuario.endereco)
    usuario: Usuario;
}
