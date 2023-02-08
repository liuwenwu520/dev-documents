### 1.Maximum number of connections to instance exceeded.
```
SDE本身默认设置的最大连接数为48个，10.6版本为64个。
可以使用select * from SDE.server_config where prop_name='CONNECTIONS'查看实际值。
update sde.server_config set num_prop_value=64 where prop_name='CONNECTIONS'更改相应连接数最大值。
```