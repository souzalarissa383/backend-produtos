import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  CODPROD: number;

  @Column({ nullable: true })
  DSCRPROD: string;

  @Column({ nullable: true })
  MARCA: string;

  @Column({ nullable: true })
  VALOR: string;
}