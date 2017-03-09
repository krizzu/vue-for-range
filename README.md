# Vue for-range

Plugin that injects `range` method into components.

Returns an array of integers in given range.

It has a similar functionality to `range` function in Python;

## How to use
	
1. Install using npm

`npm i vue-for-range`

2. Import into project

```js
import VueRange from 'vue-for-range';
```

OR

```js
var VueRange = require('vue-for-range');
```

3. Install plugin with Vue

```js
Vue.use(VueRange);
```

4. You can now use `range`

```vue
<li v-for="i in range(start, end, step)"> {{i}} </li>
```

## Basic functionality

API:

```js
range(start, end, step)
```

Examples:

```js
range(10); //[0,1,2,3..9]

range(2,10); //[2,3,4..9]

range(6,0,2); //[0,2,4]
```


Returns empty array when:
- No arguments given
- `start` is not given
- `start`, `end` or `step` are not `number`

Keep in mind:
- If `start` > `end`, they will be swapped

- If `step` < 1, will be set to 1 (no error throw - there is no support for negatives)

## Example

```js
import VueRange from 'vue-for-range';

Vue.use(Vue.Range);
```

html file:

```vue
<ol>
	<li v-for='i in range(5,12,2)'>{{i}}</li>
</ol>
```
output:
```
1. 5
2. 7
3. 9
4. 11
```

## License

MIT.
