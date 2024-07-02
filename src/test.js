import React from 'react';

function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

function debounce_immediate(fn, delay, immediate = false) {
    let timer = null;
    let flag = true;
    return function (...args) {
        timer && clearTimeout(timer);
        if (immediate) {
            if (flag) {
                fn.apply(this, args);
                flag = false;
            }
            timer = setTimeout(() => {
                flag = true;
            }, delay);

        } else {
            timer = setTimeout(() => {
                fn.apply(this, args);
            }, delay);
        }
    }
}

a
// 创建一个简单的 React 组件
export default function Test() {
    return <div>
        <Button onClick={
            debounce_immediate((e) => {
                console.log(e.target.value);
            }, 1000, true)
        }>防抖立即执行</Button>
        <span style={{ marginLeft: "10px", marginTop: "2px" }}>我是span,marginLeft生效，marginTop不生效。</span>
        <span>span不换行</span>
        图片：
        <img src={require("./icon.jpg")} style={{ width: "20px", marginTop: "12px" }} />inline-block各个方向的margin和padding都有效
        垂直居中：line-height。vertical-middle。calc动态计算。flex中的align-items。grid布局。
    </div>;
}
