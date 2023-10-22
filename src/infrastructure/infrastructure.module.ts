import { Module } from '@nestjs/common';
import { NaverDictionaryService } from './naver-dictionary.service';

@Module({
    providers: [NaverDictionaryService],
    exports: [NaverDictionaryService]
})
export class InfrastructureModule {}
