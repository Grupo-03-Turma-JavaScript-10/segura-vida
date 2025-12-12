import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({ name: 'tb_contatos_emergencia' })
export class ContatoEmergencia {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    nome: string;

    @Column({ nullable: false })
    telefone: number;

    @Column({ length: 50, nullable: false })
    grauParentesco: string;

    @OneToOne(() => Usuario, (usuario) => usuario.contatoEmergencia)
    usuario: Usuario;
}
