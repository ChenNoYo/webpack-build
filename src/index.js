const style = require('./style.css')
import Icon from './icon.jpg' // 1. 引入图片
function component() {
  var element = document.createElement('div');
  element.innerHTML = "Hello Webpack";
  element.classList.add('color_red') // 2. 添加类名
  var img = new Image(200, 200); // 2. 使用图片
  img.src = Icon;
  element.appendChild(img);
  return element;
}

document.body.appendChild(component());