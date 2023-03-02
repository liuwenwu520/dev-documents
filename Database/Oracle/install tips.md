## 安装技巧
### 1.配置远程连接
1. 修改 listener.ora 配置文件中 LISTENER 中的 TCP 协议配置中的 IP 为本机 IP 即可
> 配置文件位置 .\app\Administrator\product\11.2.0\dbhome_1\NETWORK\ADMIN\listener.ora
```
SID_LIST_LISTENER =
  (SID_LIST =
    (SID_DESC =
      (SID_NAME = CLRExtProc)
      (ORACLE_HOME = C:\app\Administrator\product\11.2.0\dbhome_1)
      (PROGRAM = extproc)
      (ENVS = "EXTPROC_DLLS=ONLY:C:\app\Administrator\product\11.2.0\dbhome_1\bin\oraclr11.dll")
    )
  )

LISTENER =
  (DESCRIPTION_LIST =
    (DESCRIPTION =
      (ADDRESS = (PROTOCOL = IPC)(KEY = EXTPROC1521))
      (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.162.129)(PORT = 1521))
    )
  )

ADR_BASE_LISTENER = C:\app\Administrator
```
2. 重新启动监听
> 使用命令重新加载监听
```bash
lsnrctl reload
```
