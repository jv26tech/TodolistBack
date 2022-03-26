import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { TarefasCadastrarDto } from './dto/tarefas.cadastrar.dto';
import { Tarefas } from './tarefas.entity';

@Injectable()
export class TarefasService {
  constructor(
    @Inject('TAREFAS_REPOSITORY')
    private tarefasRepository: Repository<Tarefas>,
  ) {}

  async listar(): Promise<Tarefas[]> {
    return this.tarefasRepository.find();
  }

  async cadastrar(data: TarefasCadastrarDto): Promise<ResultadoDto>{
    let tarefa = new Tarefas()
    tarefa.description = data.description
    tarefa.completed = data.completed
    this.tarefasRepository.save(tarefa)
    .then((result) => {
      return <ResultadoDto>{
        status: true,
        mensagem: 'sucesso'
      }
    })
    .catch((error) => {
      return <ResultadoDto>{
        status: false,
        mensagem: 'erro ao cadastrar tarefa'
      }
    })
    return{}
  }
}