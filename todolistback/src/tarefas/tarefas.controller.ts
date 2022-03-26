import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { TarefasCadastrarDto } from './dto/tarefas.cadastrar.dto';
import { Tarefas } from './tarefas.entity';
import { TarefasService } from './tarefas.service';

@Controller('tarefas')
export class TarefasController {

    constructor(
        private tarefasService: TarefasService
    ) { }

    @Get('listar')
    async listar(): Promise<Tarefas[]>{
        return this.tarefasService.listar();
    }

    @Post()
    async cadastrar(@Body() data: TarefasCadastrarDto): Promise<ResultadoDto> {
        
        return this.tarefasService.cadastrar(data)
        
    }

}