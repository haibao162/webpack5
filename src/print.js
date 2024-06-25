
import('lodash').then(({default: _}) => {
    console.log(_.join(['a', 'b']));

});
export default function printMe() {
    console.log('I get called from print.js!', a);
  }