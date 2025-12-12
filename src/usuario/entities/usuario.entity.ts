import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Endereco } from '../../endereco/entities/endereco.entity';
import { ContatoEmergencia } from '../../contatoEmergencia/entities/contatoEmergencia.entity';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    nome: string;

    @Column({ nullable: false })
    dataNascimento: number;

    @Column({ length: 14, nullable: false })
    cpf: string;

    @Column({ length: 100, nullable: false })
    email: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    rendaMensal: number;

    @OneToOne(() => Endereco, (endereco) => endereco.usuario, { cascade: true })
    @JoinColumn()
    endereco: Endereco;

    @OneToOne(() => ContatoEmergencia, (contato) => contato.usuario, { cascade: true })
    @JoinColumn()
    contatoEmergencia: ContatoEmergencia;
}
