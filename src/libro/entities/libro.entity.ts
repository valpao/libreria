import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Libro {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titolo: string;

  @Column()
  descrizione: string;

  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  data_creazione: Date;
}
