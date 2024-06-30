
// 动态引入自己的组件，不然splitChunk优先级最高
import('lodash').then(({default: _}) => {
    console.log(_.join(['a', 'b']));

});
export default function printMe() {
    console.log('I get called from 4433print.js!');
  }