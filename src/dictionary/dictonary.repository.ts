import { Inject, Injectable, InternalServerErrorException, Logger } from '@nestjs/common'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'
import { NaverDictionaryService } from 'src/infrastructure/naver-dictionary.service'
import { Meaning } from '../infrastructure/interfaces'

export interface DictionaryRepository {
  search(query: string): Promise<Meaning[]>
}

export const IDictionaryRepository = Symbol("IDictionaryRepository");

@Injectable()
export class RemoteDictionaryRepository implements DictionaryRepository {

  constructor(private readonly naverDictionaryInfraService: NaverDictionaryService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) { }

  async search(query: string): Promise<Meaning[]> {
    this.logger.log('info', `query=${query}`);
    try {
      const res = await this.naverDictionaryInfraService.search(query)
      return res.data.searchResultMap.searchResultListMap.WORD.items
        .flatMap((item => item.meansCollector))
        .flatMap(collector => collector.means);
    } catch (e) {
      this.logger.error(e.message);
      throw new InternalServerErrorException(e.message);
    }
  }
}