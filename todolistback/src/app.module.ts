import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarefasModule } from './tarefas/tarefas.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule, TarefasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
