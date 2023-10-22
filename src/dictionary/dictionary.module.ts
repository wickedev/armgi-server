import { Module } from '@nestjs/common';
import { DictionaryController } from './dictionary.controller';
import { IDictionaryRepository, RemoteDictionaryRepository } from './dictonary.repository';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  providers: [{
    provide: IDictionaryRepository,
    useClass: RemoteDictionaryRepository
  }],
  controllers: [DictionaryController],
})
export class DictionaryModule {}
