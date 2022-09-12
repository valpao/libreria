import { Injectable } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {}


  
  getHello(): string {
    //return 'Hello World!';
    let ciao = this.config.get<string>('saluti');
    return ciao.concat('pino');
  }

}
