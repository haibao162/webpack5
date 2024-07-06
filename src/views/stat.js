import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "antd";

function Child(props) {

    const getCount = useCallback(() => {
        console.log("props", props);
    }, []);
    return <em>{props.val}<Button onClick={() => {
        getCount();
    }}>get props</Button></em>
}

// 创建丢�个简单的 React 组件
export default function Stat() {
    const [val, setVal] = useState(0);
    const [a, setA] = useState(1);
    const [b, setB] = useState('b');


    useEffect(() => {
        // setVal(val + 1);
        // setVal(val + 1);
        setVal(val => val + 1); 
        setVal(val => val + 1);

    }, []);

    const handleClick = () => {
        Promise.resolve().then(() => {
            setA(a => a + 1);
            setB("bb");

            // setVal2(val2+1);
        });
        setTimeout(() => {
            setVal(val+1);
        }, 2000);
        // setTimeout(() => {
        //     setB((x) => x + "ccc");
        //     console.log(b);
        // }, 100);

        // setTimeout(() => {
        //     setVal(val + 1);
        // },0);
    };

    console.log(val);

    return <div>
        <Button onClick={() => {
            handleClick();
        }}>click</Button>
        <Child val={val} />
    </div>;
}
