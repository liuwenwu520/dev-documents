## Sqlite 的使用
### 创建 SQLite 数据库或 GeoPackage
> [CreateSQLiteDatabase](https://desktop.arcgis.com/zh-cn/arcmap/10.3/analyze/arcpy-functions/createsqlitedb.htm)
- grammar
```py
CreateSQLiteDatabase (sqlite_database_path, {spatial_type})
```
- example
```py
import arcpy
arcpy.gp.CreateSQLiteDatabase('e:/t.sqlite', "ST_GEOMETRY")
arcpy.gp.CreateSQLiteDatabase("e:/t.sqlite", 'SPATIALITE')
```

