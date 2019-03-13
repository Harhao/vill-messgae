# vill-message

> a vue plugins about notice or toast

## Build Setup


### install the plugin on bash
``` bash
npm install vill-message --save-dev
```
### register the plugins on the vue project in the entry file (main.js)
```
import message from 'vill-message'
Vue.use(message);
```

### on the vue template file ,you can use it by
```
this.$message.success("hello world");
this.$message.error("hello world");
this.$message.warning("hello world");
this.$message.info("hello world");
```
