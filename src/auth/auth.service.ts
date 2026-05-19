import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    //-> busca o usuario pelo email e compara a senha com bcrypt.compare
    const user = await this.usersService.findByemail(email);

    if (!user) throw new UnauthorizedException('Email ou senha inválidos');

    const passwordMatch = await bcrypt.compare(password, user.password); //-> compara a senha digitada com o has salvo no banco

    if (!passwordMatch)
      throw new UnauthorizedException('email ou senha inválidos');

    return user;
  }

  async login(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.validateUser(email, password); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const payload = { sub: user.id, email: user.email, role: user.role };
    return { access_token: this.jwtService.sign(payload) };
  }
}
