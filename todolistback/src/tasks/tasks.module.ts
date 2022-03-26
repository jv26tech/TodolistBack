import { Module } from '@nestjs/common';
import { TarefasModule } from 'src/tarefas/tarefas.module';
import { TaskService } from './shared/task.service';
import { TasksController } from './tasks.controller';

@Module({
    imports: [],
    controllers: [TasksController],
    providers: [TaskService]
})
export class TasksModule {}
