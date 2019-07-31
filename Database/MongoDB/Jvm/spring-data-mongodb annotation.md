## spring-data-mongodb annotation
### @Id
> 主键，不可重复，自带索引，可以在定义的列名上标注，需要自己生成并维护不重复的约束。如果自己不设置@Id主键，mongo会自动生成一个唯一主键，并且插入时效率远高于自己设置主键。原因可参考上一篇mongo和mysql的性能对比。 
> 在实际业务中不建议自己设置主键，应交给mongo自己生成，自己可以设置一个业务id，如int型字段，用自己设置的业务id来维护相关联的表。
### @Document
> 标注在实体类上，类似于hibernate的entity注解，标明由mongo来维护该表。
### @Indexed
> 声明该字段需要加索引，加索引后以该字段为条件检索将大大提高速度。
> 唯一索引的话是@Indexed(unique = true)。
> 也可以对数组进行索引，如果被索引的列是数组时，MongoDB会索引这个数组中的每一个元素。
> 也可以对整个Document进行索引，排序是预定义的按插入BSON数据的先后升序排列。
> 也可以对关联的对象的字段进行索引，譬如User对关联的address.city进行索引。
### @CompoundIndex
> 复合索引，加复合索引后通过复合索引字段查询将大大提高速度。
```kotlin
@Document(collection = "MapService")
@CompoundIndexes({
    @CompoundIndex(name = "age_idx", def = "{'lastName': 1, 'age': -1}")
})
data class MapService(@Id var id: String, var name: String) {
}
```