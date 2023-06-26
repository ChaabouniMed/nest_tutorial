import { Body, Controller, Delete, Get , HttpCode, HttpStatus, Param, Patch, Post, Req } from '@nestjs/common';
import path from 'path';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('user')
export class UsersController {

  @Get()
  findAll(): string {
    return "Get all users";
  }


  @Get(":username")
  findOne(@Param("username") username : string): String {
    return username
  }

  @Post()
  create(@Body() createUserDto : CreateUserDto): CreateUserDto {
    //DTO => Data Transfer Object
    return createUserDto;
  }

  // @Post()
  // create2(@Req() req : Request): String {
  //   console.log(req.body);
  //   return "post with request"
  // }

  @Patch(":username")
  update(@Param("username") username : string, @Body() updateUserDto : UpdateUserDto) {
    return updateUserDto
  }

  @Delete(":username")
  @HttpCode(HttpStatus.NO_CONTENT) //204
  delete(@Param("username") username : string, ) {
  }

}
