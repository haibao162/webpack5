import "./style.css";
import Icon from './icon.jpg';
import _ from "lodash";
import printMe from './print.js';

console.log('a', _.join(['c','d']));

function component() {
    const element = document.createElement('div');
  
    // 执行这一行需要引入 lodash（目前通过 script 脚本引入）
    element.innerHTML = '2vv444';
    element.classList.add('hello');
      // 将图像添加到已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

    return element;
  }
  
  document.body.appendChild(component());