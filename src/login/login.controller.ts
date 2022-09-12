import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { Request } from 'express';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { Http2ServerRequest } from 'http2';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  create(@Body() createLoginDto: CreateLoginDto, @Req() request: Request) {
   return  this.loginService.create(createLoginDto) == 'OK' ? 'OK' : 'KO';
  }

  @Get()
  findAll() {
    return this.loginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }
}
