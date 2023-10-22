import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { Meaning } from 'src/infrastructure/interfaces';
import { IDictionaryRepository, RemoteDictionaryRepository } from './dictonary.repository';

@Controller('/')
export class DictionaryController {

    constructor(@Inject(IDictionaryRepository) private dictionaryRepository: RemoteDictionaryRepository) { }

    @Get('/search')
    @ApiOkResponse({
        description: '문자열을 질의하여 해당하는 의미 목록을 반환', schema: {
            description: "단어의 뜻",
            properties: {
                value: {
                    type: 'string',
                    description: "의미"
                },
            }
        },
    })
    search(@Query('query') query: string): Promise<Meaning[]> {
        return this.dictionaryRepository.search(query)
    }
}
