import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TarefasController } from './tarefas.controller';
import { tarefasProviders } from './tarefas.providers';
import { TarefasService } from './tarefas.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TarefasController],
  providers: [
    ...tarefasProviders,
    TarefasService,
  ],
})
export class TarefasModule {}