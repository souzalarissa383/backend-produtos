import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  ENTIDADE: string;

  @Column()
  ENTIDADE_ID: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  DTINC: Date;
}
