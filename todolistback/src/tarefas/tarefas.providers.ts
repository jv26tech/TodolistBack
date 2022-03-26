import { Connection, Repository } from 'typeorm';
import { Tarefas } from './tarefas.entity';

export const tarefasProviders = [
  {
    provide: 'TAREFAS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Tarefas),
    inject: ['DATABASE_CONNECTION'],
  },
];