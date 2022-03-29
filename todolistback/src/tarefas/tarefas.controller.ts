import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response} from 'express'
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

    @Post("cadastrar")
    async cadastrar(@Req() req: Request, @Res() res: Response): Promise<ResultadoDto> {
        const data = this.tarefasService.cadastrar(req.body)
        //return this.tarefasService.cadastrar(data)
        return {status: true, mensagem: "sucesso"}
    }

    @Post("editar")
    async editar(@Req() req: Request, @Res() res: Response){
        const data = this.tarefasService.editar(req.body)
    }

    @Post("deletar")
    async deletar(@Req() req: Request, @Res() res: Response){
        const data = this.tarefasService.deletar(req.body)
    }

}