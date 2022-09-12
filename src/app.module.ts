import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from '../middleware/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibroModule } from './libro/libro.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from './login/login.module';

import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';

@Module({
  imports: [LibroModule,
    
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'remotemysql.com',
        port:  3306,
        username: '7PQMpAIKzU',
        password: 'imJ2sC5Lt3',
        database: '7PQMpAIKzU',
        synchronize: false,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],      
    }),
    
      LoginModule,

      ConfigModule.forRoot({
        load: [configuration],
      }),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('libro');
  }
}
