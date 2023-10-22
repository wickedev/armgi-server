import { Module } from '@nestjs/common';
import { DictionaryModule } from './dictionary/dictionary.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

@Module({
  imports: [DictionaryModule, InfrastructureModule, WinstonModule, WinstonModule.forRoot({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple(),
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })
    ),
    exitOnError: false,
    transports: [
      new winston.transports.Console({
        level: 'info'
      })
    ]
  })],
  providers: [],
})
export class AppModule { }
