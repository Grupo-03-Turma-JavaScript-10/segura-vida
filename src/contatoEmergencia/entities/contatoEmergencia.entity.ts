import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'tb_contatos_emergencia' })
export class ContatoEmergencia {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    nome: string;

    @IsNotEmpty()
    @Column({ nullable: false })
    telefone: number;

    @IsNotEmpty()
    @Column({ length: 50, nullable: false })
    grauParentesco: string;

    @OneToOne(() => Usuario, (usuario) => usuario.contatoEmergencia)
    usuario: Usuario;
}
