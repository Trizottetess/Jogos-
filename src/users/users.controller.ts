import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users') //-> definindo que minha rota comeca com '/users'
export class UsersController {
  constructor(private readonly usersService: UsersService) {} //-> injetando UsersService na classe - assim os metodos podem usar this.usersService

  @ApiOperation({ summary: 'Cadastrar um novo usuario' })
  @Post('register')
  create(@Body() body: { name: string; email: string; password: string }) {
    return this.usersService.create(body.name, body.email, body.password);
  }
}
