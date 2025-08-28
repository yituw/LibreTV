// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    "dyttzy": {
      "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
      "name": "电影天堂资源",
      "detail": "http://caiji.dyttzyapi.com"
    },
    "heimuer": {
      "api": "https://json.heimuer.xyz/api.php/provide/vod",
      "name": "黑木耳",
      "detail": "https://heimuer.tv"
    },
    "ruyi": {
      "api": "http://cj.rycjapi.com/api.php/provide/vod",
      "name": "如意资源"
    },
    "bfzy": {
      "api": "https://bfzyapi.com/api.php/provide/vod",
      "name": "暴风资源"
    },
    "tyyszy": {
      "api": "https://tyyszy.com/api.php/provide/vod",
      "name": "天涯资源"
    },
    "ffzy": {
      "api": "http://ffzy5.tv/api.php/provide/vod",
      "name": "非凡影视",
      "detail": "http://ffzy5.tv"
    },
    "zy360": {
      "api": "https://360zy.com/api.php/provide/vod",
      "name": "360资源"
    },
    "maotaizy": {
      "api": "https://caiji.maotaizy.cc/api.php/provide/vod",
      "name": "茅台资源"
    },
    "wolong": {
      "api": "https://wolongzyw.com/api.php/provide/vod",
      "name": "卧龙资源"
    },
    "jisu": {
      "api": "https://jszyapi.com/api.php/provide/vod",
      "name": "极速资源",
      "detail": "https://jszyapi.com"
    },
    "dbzy": {
      "api": "https://dbzy.tv/api.php/provide/vod",
      "name": "豆瓣资源"
    },
    "mozhua": {
      "api": "https://mozhuazy.com/api.php/provide/vod",
      "name": "魔爪资源"
    },
    "mdzy": {
      "api": "https://www.mdzyapi.com/api.php/provide/vod",
      "name": "魔都资源"
    },
    "zuid": {
      "api": "https://api.zuidapi.com/api.php/provide/vod",
      "name": "最大资源"
    },
    "yinghua": {
      "api": "https://m3u8.apiyhzy.com/api.php/provide/vod",
      "name": "樱花资源"
    },
    "wujin": {
      "api": "https://api.wujinapi.me/api.php/provide/vod",
      "name": "无尽资源"
    },
    "wwzy": {
      "api": "https://wwzy.tv/api.php/provide/vod",
      "name": "旺旺短剧"
    },
    "ikun": {
      "api": "https://ikunzyapi.com/api.php/provide/vod",
      "name": "iKun资源"
    },
    "lzi": {
      "api": "https://cj.lziapi.com/api.php/provide/vod",
      "name": "量子资源站"
    },
    "xiaomaomi": {
      "api": "https://zy.xmm.hk/api.php/provide/vod",
      "name": "小猫咪资源"
    },
    "liangzi": {
      "api": "https://cj.lziapi.com/api.php/provide/vod/",
      "name": "量子资源"
    },
    "feifan": {
      "api": "http://www.ffzy.tv/api.php/provide/vod/",
      "name": "非凡资源"
    },
    "haiyang": {
      "api": "https://haiyangzy.com/api.php/provide/vod/",
      "name": "海洋资源"
    },
    "hongniu": {
      "api": "https://www.hongniuzy.com/api.php/provide/vod/",
      "name": "红牛资源"
    },
    "jinniu": {
      "api": "http://api.jinniuyun.com/api.php/provide/vod/",
      "name": "金牛资源"
    },
    "kuyun": {
      "api": "https://kuyunzy.co/api.php/provide/vod/",
      "name": "酷云资源"
    },
    "leiying": {
      "api": "https://leiyingzy.com/api.php/provide/vod/",
      "name": "雷鹰资源"
    },
    "shandian": {
      "api": "https://sdzyapi.com/api.php/provide/vod/",
      "name": "闪电资源"
    },
    "shenma": {
      "api": "https://smzy.com/api.php/provide/vod/",
      "name": "神马资源"
    },
    "taopian": {
      "api": "https://taopianapi.com/home/cjapi/as/vod/key/taopian",
      "name": "淘片资源"
    },
    "tiankong": {
      "api": "https://api.tiankongapi.com/api.php/provide/vod/",
      "name": "天空资源"
    },
    "wukong": {
      "api": "https://wukongzy.com/api.php/provide/vod/",
      "name": "悟空资源"
    },
    "xiangjiao": {
      "api": "https://xjzy.com/api.php/provide/vod/",
      "name": "香蕉资源"
    },
    "xinlang": {
      "api": "https://api.xinlangapi.com/api.php/provide/vod/",
      "name": "新浪资源"
    },
    "yatu": {
      "api": "https://yatuzy.com/api.php/provide/vod/",
      "name": "雅图资源"
    },
    "yjys": {
      "api": "https://api.yjys.me/api.php/provide/vod/",
      "name": "影剧影视"
    },
    "yongjiu": {
      "api": "https://yongjiuzy.com/api.php/provide/vod/",
      "name": "永久资源"
    },
    "zhiling": {
      "api": "https://zhilingzy.com/api.php/provide/vod/",
      "name": "指凌资源"
    },
    "ziyuan": {
      "api": "http://www.zyz.com/api.php/provide/vod/",
      "name": "资源站"
    },
    "zuida": {
      "api": "https://zuidazy.com/api.php/provide/vod/",
      "name": "最大资源"
    },
    "agzy": {
      "api": "https://agzy.com/api.php/provide/vod",
      "name": "爱看资源"
    },
    "bajie": {
      "api": "http://zy.bajieziyuan.com/api.php/provide/vod",
      "name": "八戒资源"
    },
    "baozou": {
      "api": "http://www.baozouzy.com/api.php/provide/vod",
      "name": "暴走资源"
    },
    "chaofan": {
      "api": "https://cfzy.com/api.php/provide/vod",
      "name": "超凡资源"
    },
    "dianbo": {
      "api": "http://api.dbzyz.com/api.php/provide/vod",
      "name": "点播资源"
    },
    "feisu": {
      "api": "https://www.feisuzy.com/api.php/provide/vod",
      "name": "飞速资源"
    },
    "fuhuo": {
      "api": "http://fuhuoyun.com/api.php/provide/vod",
      "name": "复活云"
    },
    "gaoqing": {
      "api": "https://gaoqingzy.com/api.php/provide/vod",
      "name": "高清资源"
    },
    "huangjin": {
      "api": "http://hjzy.com/api.php/provide/vod",
      "name": "黄金资源"
    },
    "huohua": {
      "api": "https://huohuazy.com/api.php/provide/vod",
      "name": "火花资源"
    },
    "juhai": {
      "api": "http://juhai.com/api.php/provide/vod",
      "name": "聚海资源"
    },
    "kankan": {
      "api": "http://kankanzy.com/api.php/provide/vod",
      "name": "看看资源"
    },
    "laoya": {
      "api": "http://laoyazy.com/api.php/provide/vod",
      "name": "老鸭资源"
    },
    "longma": {
      "api": "http://longmazy.com/api.php/provide/vod",
      "name": "龙马资源"
    },
    "niuren": {
      "api": "http://www.niurenzy.com/api.php/provide/vod",
      "name": "牛人资源"
    },
    "ouye": {
      "api": "http://ouye.com/api.php/provide/vod",
      "name": "欧耶资源"
    },
    "piaohua": {
      "api": "http://www.piaohuazy.com/api.php/provide/vod",
      "name": "飘花资源"
    },
    "qiezi": {
      "api": "http://qiezi.com/api.php/provide/vod",
      "name": "茄子资源"
    },
    "quanmin": {
      "api": "http://quanmin.com/api.php/provide/vod",
      "name": "全民资源"
    },
    "sanjiu": {
      "api": "http://39zy.com/api.php/provide/vod",
      "name": "39资源"
    },
    "shayu": {
      "api": "http://shayu.com/api.php/provide/vod",
      "name": "鲨鱼资源"
    },
    "shenlan": {
      "api": "http://shenlan.com/api.php/provide/vod",
      "name": "深蓝资源"
    },
    "shier": {
      "api": "http://123.com/api.php/provide/vod",
      "name": "123资源"
    },
    "tianyi": {
      "api": "http://tianyi.com/api.php/provide/vod",
      "name": "天翼资源"
    },
    "tudou": {
      "api": "http://tudou.com/api.php/provide/vod",
      "name": "土豆资源"
    },
    "wanbo": {
      "api": "http://wanbo.com/api.php/provide/vod",
      "name": "万播资源"
    },
    "xianggang": {
      "api": "http://xianggang.com/api.php/provide/vod",
      "name": "香港资源"
    },
    "xiaoyao": {
      "api": "http://xiaoyao.com/api.php/provide/vod",
      "name": "逍遥资源"
    },
    "xingfu": {
      "api": "http://xingfu.com/api.php/provide/vod",
      "name": "幸福资源"
    },
    "xingyun": {
      "api": "http://xingyun.com/api.php/provide/vod",
      "name": "星云资源"
    },
    "xunlei": {
      "api": "http://xunlei.com/api.php/provide/vod",
      "name": "迅雷资源"
    },
    "yingshi": {
      "api": "http://yingshi.com/api.php/provide/vod",
      "name": "影视资源"
    },
    "yingxiong": {
      "api": "http://yingxiong.com/api.php/provide/vod",
      "name": "英雄资源"
    },
    "yizhou": {
      "api": "http://yizhou.com/api.php/provide/vod",
      "name": "一舟资源"
    },
    "youku": {
      "api": "http://youku.com/api.php/provide/vod",
      "name": "优酷资源"
    },
    "youlong": {
      "api": "http://youlong.com/api.php/provide/vod",
      "name": "游龙资源"
    },
    "baiwan": {
      "api": "https://www.baiwanzy.com/api.php/provide/vod",
      "name": "百万资源"
    },
    "guangsu": {
      "api": "http://guangsu.com/api.php/provide/vod",
      "name": "光速资源"
    },
    "huoyan": {
      "api": "https://huoyan.com/api.php/provide/vod",
      "name": "火焰资源"
    },
    "jiguang": {
      "api": "https://jiguang.com/api.php/provide/vod",
      "name": "极光资源"
    },
    "jinpai": {
      "api": "http://jinpai.com/api.php/provide/vod",
      "name": "金牌资源"
    },
    "jisuda": {
      "api": "http://jisuda.com/api.php/provide/vod",
      "name": "极速达资源"
    },
    "jiujiuliu": {
      "api": "http://996.com/api.php/provide/vod",
      "name": "996资源"
    },
    "lanbo": {
      "api": "http://lanbo.com/api.php/provide/vod",
      "name": "蓝波资源"
    },
    "lanniao": {
      "api": "http://lanniao.com/api.php/provide/vod",
      "name": "蓝鸟资源"
    },
    "mantian": {
      "api": "http://mantian.com/api.php/provide/vod",
      "name": "满天星资源"
    },
    "miaobo": {
      "api": "https://miaobo.com/api.php/provide/vod",
      "name": "秒播资源"
    },
    "qimao": {
      "api": "http://qimao.com/api.php/provide/vod",
      "name": "奇猫资源"
    },
    "qiyiguang": {
      "api": "https://qiyiguang.com/api.php/provide/vod",
      "name": "奇艺光资源"
    },
    "rihan": {
      "api": "http://rihan.com/api.php/provide/vod",
      "name": "日韩资源"
    },
    "ronghua": {
      "api": "https://ronghua.com/api.php/provide/vod",
      "name": "荣华资源"
    },
    "sijiu": {
      "api": "http://49zy.com/api.php/provide/vod",
      "name": "49资源"
    },
    "suku": {
      "api": "http://suku.com/api.php/provide/vod",
      "name": "速酷资源"
    },
    "wawa": {
      "api": "http://wawa.com/api.php/provide/vod",
      "name": "哇哇资源"
    },
    "weidu": {
      "api": "https://weidu.com/api.php/provide/vod",
      "name": "维度资源"
    },
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    }
    //ARCHIVE https://telegra.ph/APIs-08-12
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
