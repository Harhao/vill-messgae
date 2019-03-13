# vill-message

> a vue plugins about notice or toast

## Build Setup

### install the plugin on bash and the sass module support

```
npm install vill-message --save-dev
npm install sass-loader node-sass vue-style-loader --save-dev
```

### register the plugins on the vue project in the entry file (main.js)

```
import message from 'vill-message'
Vue.use(message);
```

### on the vue template file ,you can use it by

```
this.$message.success("hello vill-message");
this.$message.error("hello vill-message");
this.$message.warning("hello vill-message");
this.$message.info("hello vill-message");
```

### on the vue template file ,you can also use it by

```
this.$message({
    duration:2000,
    type:'success',
    message:'hello vill-message'
});
this.$message({
    duration:2000,
    type:'error',
    message:'hello vill-message'
});

```

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| type | 可选值 success/error/info/warning| String | -
| meesage | must | String | -
| duration | canselect | String | -
## License
[MIT](http://opensource.org/licenses/MIT)
