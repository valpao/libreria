import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LibroService } from './libro.service';

import { Libro } from './entities/libro.entity';

@Controller('libro')
export class LibroController {
  constructor(private readonly libroService: LibroService) {}

  @Post()
  add(@Body() libro: Libro) {
    return this.libroService.add(libro)
    .then(() => this.libroService.findAll())
    .catch(error => console.log(error.message))
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() libro: Libro) {
    libro.id = +id;
    return this.libroService.update(libro);
  }

  @Post(':id/delete')
  delete(@Param('id') id: string) {
    return this.libroService.delete(+id);
  }

  @Get()
  findAll() {
    return this.libroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.libroService.findOne(+id);
  }

}
