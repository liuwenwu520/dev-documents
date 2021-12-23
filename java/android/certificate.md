生成签名证书
## 1.安装 jdk，并配置环境变量
## 2.生成证书
1. 打开命令cmd到JDK的安装路径bin文件下，生成正常的证书    
```
keytool -genkey -alias wenwuapp -keyalg RSA -sigalg SHA1WithRSA -validity 40000 -keysize 1024 -keystore wenwuapp.keystore
# 说明:
# -alias wenwuapp --表示别名，自定义修改 在打包时 指的是证书名称
# -keyalg RSA --产生键的加密算法
# -validity 40000 --有效期限4000天，自定义修改
# -keystore wenwuapp.keystore --表示最后生成的证书文件名，自定义修改
# 密钥口令，不会显示，尽管输入就好，回车，后面根据自己的情况依次填写 （密钥口令指的是打包时的私钥密码 需要注意）
```
2. 根据提示输入证书需要的信息
- 名称 sczd
- 组织单位 sczd
- 组织 sczd
- 城市 Chendu
- 省份 Sichuan
- 国家代码 86
3. 以上会自动生成keystore文件  
此时在bin文件下会生成 wenwuapp.keystore 文件
```
说明
如果是用HBuilder打包app，命令行中的下面这两个地方比较关键
# sigalg SHA1WithRSA
# -keysize 1024
否则在打包时会提示证书不是有效的 keystore 文件，因为 HBuilder 解析不了默认的证书
```

## 3.查看keystore文件
- 查看命令
```
keytool -list -v -keystore wenwuapp.keystore
```
- 密码库要求说明
```
Keystore type: JKS
Keystore provider: SUN
```
- 更改密钥库类型命令
```
keytool -importkeystore -srckeystore wenwuapp.keystore -destkeystore wenwuapp.keystore -deststoretype JKS
```

## 4.生成完成