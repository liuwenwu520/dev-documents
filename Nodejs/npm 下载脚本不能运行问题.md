### @vue/cli 脚本不能运行 (windows 10 中，windows 11)
1. 原因：原因是PowerShell的执行策略阻止了此次操作，需要设置执行策略
2. 搜索PowerShell，右键以管理员身份运行。
3. 输入以下命令，将执行策略更改为RemoteSigned：
```shell
set-ExecutionPolicy RemoteSigned
```
4. 选择全部
```shell
A
```