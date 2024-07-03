import React, { useState, useEffect } from 'react';
import { Button } from "antd";


// 创建一个简单的 React 组件
export default function Stat() {
    const [val, setVal] = useState(0);
    const [a, setA] = useState(1);
    const [b, setB] = useState('b');


    useEffect(() => {
        // setVal(val + 1);
        // setVal(val + 1);
        // setVal(val => val + 1); 
        // console.log('current1', val); 1
        // setVal(val => val + 1);
        // console.log('current2', val); 2
       
        
    }, []);

    const handleClick = () => {
        Promise.resolve().then(() => {
            setA(a => a+1);
            setB("bb");

            // setVal2(val2+1);
        });
        setTimeout(() => {
            setB((x) => x + "ccc");
            console.log(b);
        }, 100);

        // setTimeout(() => {
        //     setVal(val + 1);
        // },0);
    };

    console.log(a,b);

    return <div>
            <Button onClick={() => {
                handleClick();
            }}>点击</Button>
        </div>;
}
