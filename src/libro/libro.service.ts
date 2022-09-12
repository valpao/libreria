import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(Libro)
    private libroRepository: Repository<Libro>
  ) {}

  
  async add(libro: Libro): Promise<Libro> {
    return await this.libroRepository.save(libro);
  }

  

  findAll(): Promise<Libro[]> {
    return this.libroRepository.find();
  }

  findOne(id: number): Promise<Libro> {
    return this.libroRepository.findOneBy({id});
  }

  async update(libro: Libro): Promise<UpdateResult> {
   return await this.libroRepository.update(libro.id, libro);
  }

  async delete(id: number): Promise<DeleteResult> {
   return await this.libroRepository.delete(id);
  }
}
