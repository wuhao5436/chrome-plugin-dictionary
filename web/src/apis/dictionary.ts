import { request } from '../utils/request';


/** 获取单词列表 */
export async function getWordsList(params: Record<string, any>) {
    const res = await request('/api/dictionary/words/get')
    return res
}

/** 新增单词 */