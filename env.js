import pinyin from './pinyin';

export default {
    title: 'MikuTools',
    domain: 'tools.brusw.com',
    description: '一个轻量的工具集合',
    url:
        process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:8000'
            : 'https://tools.brusw.com',
    pinyin: pinyin,
    development: process.env.NODE_ENV === 'development',
    background: 'https://resource.brusw.com/background.jpg'
};
