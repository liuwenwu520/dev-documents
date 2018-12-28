## 错误解决
### # eslint检测报错error
1. Expected linebreaks to be 'LF' but found 'CRLF' linebreak-style
> (使用 airbnb-base 规则)  
> 在.eslintrc文件 rules 里面 配置 "linebreak-style": [0 ,"error", "windows"], //允许windows开发环境
