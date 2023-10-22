export interface Meaning {
    order: string;
    value: string;
    subjectGroup: null;
    subjectGroupCode: null;
    languageGroup: null;
    languageGroupCode: null;
    example: null;
    uuid: null;
    groupName: null;
    groupId: null;
    sourceUpdate: string;
    handleValue: null;
    exampleOri: string;
    exampleTrans: string;
    hlType: string;
    vcode: string;
    encode: string;
}

interface PartOfSpeech {
    partOfSpeech: string;
    partOfSpeech2: string;
    partOfSpeechCode: string;
    means: Meaning[];
}

interface SymbolType {
    symbolType: string;
    symbolTypeCode: string;
    symbolValue: string | null;
    symbolFile: string;
    symbolAccentiaImg: string | null;
    symbolAccentiaAudioCnt: string | null;
}

interface ExpOnly {
    entryImageURL: string;
    imageFileCount: number;
    accentiaId: string;
}

interface AbstractContent {
    value: null;
    hlType: null;
}

interface SearchResultItem {
    rank: string;
    gdid: string;
    sourceCid: string;
    dictId: string;
    matchType: string;
    entryId: string;
    serviceCode: string;
    languageCode: string;
    expDictTypeForm: string;
    dictTypeForm: string;
    sourceDictnameKO: string;
    sourceDictnameOri: string;
    sourceDictnameLink: string;
    sourceUpdate: null;
    dictTypeWriter: null;
    dictTypeMulti: null;
    expEntry: string;
    expEntrySuperscript: null;
    destinationLink: string;
    destinationLinkKo: string;
    expAliasEntryAlways: null;
    expAliasEntryAlwaysOld: null;
    expAliasEntrySearch: null;
    expAliasEntrySearchKrKind: null;
    expAliasEntrySearchAllKind: null;
    expAliasGeneralAlways: null;
    expAliasGeneralSearch: null;
    expConjugationMoreURL: null;
    conjugate: null;
    expSynonym: string;
    expAntonym: null;
    pronunFileCount: number;
    priority: number;
    expKanji: null;
    expAudioRead: null;
    expMeaningRead: null;
    expKoreanPron: null;
    expKoreanHanja: null;
    exphanjaStroke: null;
    exphanjaRadical: null;
    exphanjaRadicalStroke: null;
    partGroupYn: string;
    newEntry: string;
    isHighDfTerm: number;
    isOpenDict: number;
    isPhoneticSymbol: number;
    hasConjugation: number;
    hasIdiom: number;
    hasExample: number;
    hasStudy: number;
    hasImage: number;
    hasSource: number;
    hasOrigin: number;
    meaningCount: number;
    entryImageURL: null;
    entryImageURLs: null;
    idiomOri: null;
    idiomOriUrl: null;
    phoneticSymbol: null;
    frequencyAdd: string;
    entryLikeNumber: null;
    entryCommentNumber: null;
    uuid: null;
    documentQuality: number;
    expHanjaRadicalKoreanName: null;
    etcExplain: null;
    expSourceBook: null;
    expEntryComposition: null;
    expStrokeAnimation: null;
    expAbstract: null;
    imageFileCount: null;
    audioThumnail: null;
    audioFileCount: null;
    videoThumnail: null;
    videoFileCount: null;
    expOnly: string | ExpOnly; // json string
    expThesaurus?: string // json string
    pageView: null;
    meansCollector: PartOfSpeech[];
    similarWordList: unknown[];
    antonymWordList: unknown[];
    expAliasEntryAlwaysList: unknown[];
    expAliasGeneralAlwaysList: unknown[];
    expAliasEntrySearchList: unknown[];
    searchPhoneticSymbolList: SymbolType[];
    searchVariantHanziList: unknown[];
    searchTraditionalChineseList: unknown[];
    abstractContent: AbstractContent;
    expEntryCustomContentList: unknown[];
    expMeaningCustomContentList: unknown[];
    openExactMatch: boolean;
    handleEntry: string;
    vcode: string;
    encode: string;
    exactMatch: boolean;
}

interface SearchPhoneticSymbolList {
    symbolType: string;
    symbolTypeCode: string;
    symbolValue: string;
    symbolFile: string;
    symbolAccentiaImg: null | string;
    symbolAccentiaAudioCnt: null | string;
}

interface SearchResults {
    WORD: {
        query: string;
        queryRevert: string;
        items: SearchResultItem[];
        total: number;
        sectionType: string;
        revert: null | string;
        orKEquery: null | string;
        forceQuery: null | string;
        errataQuery: null | string;
    };
    OPEN: {
        query: string;
        queryRevert: string;
        items: SearchResultItem[];
        total: number;
        sectionType: string;
        revert: null | string;
        orKEquery: null | string;
        forceQuery: null | string;
        errataQuery: null | string;
    };
    MEANING: {
        query: string;
        queryRevert: string;
        items: SearchResultItem[];
        total: number;
        sectionType: string;
        revert: null | string;
        orKEquery: null | string;
        forceQuery: null | string;
        errataQuery: null | string;
    };
    EXAMPLE: {
        query: string;
        queryRevert: string;
        items: SearchResultItem[];
        total: number;
        sectionType: string;
        revert: null | string;
        orKEquery: null | string;
        forceQuery: null | string;
        errataQuery: null | string;
    };
    VLIVE: {
        query: string;
        queryRevert: string;
        items: SearchResultItem[];
        total: number;
        sectionType: string;
        revert: null | string;
        orKEquery: null | string;
        forceQuery: null | string;
        errataQuery: null | string;
    };
    THESAURUS: {
        query: string;
        queryRevert: string;
        items: SearchResultItem[];
        total: number;
        sectionType: string;
        revert: null | string;
        orKEquery: null | string;
        forceQuery: null | string;
        errataQuery: null | string;
    };
}

interface SearchMaybek {
    query: string;
    revert: null | string;
    orKEquery: null | string;
    forceQuery: null | string;
    errataQuery: null | string;
    compatibilityJamo: boolean;
}

export interface SearchResponse {
    searchResultMap: {
        searchResultListMap: SearchResults;
    };
    mode: string;
    exactMatcheEntryUrl: boolean;
    collectionRanking: string[];
    LAIMLog: boolean;
    query: string;
    range: null | string;
    searchMaybek: SearchMaybek;
}
