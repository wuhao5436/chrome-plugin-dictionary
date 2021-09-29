import React, { ReactElement, useState, useEffect } from 'react'
import { RightOutlined, DownOutlined,  UpOutlined} from '@ant-design/icons';
import classnames from 'classnames';


interface Props {
    
}


interface IwordItem {
    id: string;
    words: string;
    explain: string;
    remark?: string;
    time: string;
    position: string;
}

export default function Content({}: Props): ReactElement {

    // 单词列表
    const [words, setWords] = useState<IwordItem[]>([])
    
    // 展开列表
    const [openList, setOpenList] = useState<string[]>([]);

    //初始化数据
    useEffect(() => {
    const init = async function () {
        const bgWindow = chrome?.extension?.getBackgroundPage();
        if (bgWindow) {
           const data = bgWindow.dataSource.getData();
           setWords(data);
        }
    }
    init();
    }, [])


    // 点击展开收起
    const toggleExpand = (id: string)  => {
        if (openList.includes(id)) {
           return  setOpenList(pre => pre.filter(item => item !== id))
        }
        return setOpenList([...openList, id]);
    }

    const explainClassnames = (id: string) => classnames({
        'content-explain': true,
        'content-explain-ellipsis': !openList.includes(id)
    })

    return (
        <div className={'content-container'}>
            {words.map(item => (<div className='content-item' key={item.id}  onClick={() => toggleExpand(item.id)}>
                <div className='content-words-line'>
                    <span className='content-words'>
                        {item.words}
                        <span  className='content-words-expand'>{openList.includes(item.id)? <UpOutlined />: <DownOutlined />}</span>
                    </span>
                    <a target="_blank" href={item.position} className='content-source'>溯源<RightOutlined /></a>
                </div>
                <div className={explainClassnames(item.id)}>{item.explain}</div>
            </div>))}
        </div>
    )
}
