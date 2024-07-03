import React, { useEffect, useState } from 'react';
import { Button } from "antd";

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

function throttle(fn, delay) {
    let lastTime = 0;
    let timer = null;
    return function (...args) {
        const nowTime = Date.now();
        if (nowTime - lastTime > delay) {
            fn.apply(this, args);
            lastTime = nowTime;
        }
    }
}

function throttle_D(func, delayTime) {
    let delay = delayTime || 1000;
    let timer = null;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(function () {
                func.apply(this, args);
                timer = null;
            }, delay);
        }
    }
}

let Com = null;
// 创建一个简单的 React 组件
export default function Test() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = require('../icon.jpg');
        document.head.appendChild(link);
        
        import(/* webpackPrefetch: true */ './prefetch.js').then(res => {
            return res.default;
        }).then(com => {
            Com = com;
        });

    }, []);
    return <div>
        <Button onClick={() => {
            setVisible(true);
        }}>显示预加载的内容</Button>
        <Button onClick={
            debounce_immediate((e) => {
                console.log(e);
            }, 1000, true)
        }>防抖立即执行(感觉很鸡肋)</Button>
        <Button onClick={
            throttle_D(() => {
                console.log(111);
            }, 1000)
        }>节流非立即执行</Button>
        <span style={{ marginLeft: "10px", marginTop: "2px" }}>我是span,marginLeft生效，marginTop不生效。</span>
        <span>span不换行</span>
        图片：
        {visible && <>
            <Com />
        <img src="https://p1.yqbimg.net/h5/home/b8696d7514c2652b145a9e3cb9e850f8.png" />
            <img src={require("../icon.jpg")} style={{ width: "20px", marginTop: "12px" }} />
            
            </>
        }
        inline-block各个方向的margin和padding都有效
        垂直居中：line-height。vertical-middle。calc动态计算。flex中的align-items。grid布局。
    </div>;
}
