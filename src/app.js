import React from 'react';
import ReactDOM from 'react-dom/client';

// ����һ���򵥵� React ���
function App() {
    return <h1>Hello, React 18!</h1>;
}

// ��ȡ id Ϊ "example" �� DOM ������������һ�� React ���ڵ�
const root = ReactDOM.createRoot(document.getElementById("example"));

// ��Ⱦ React ����� DOM �еĸ��ڵ�
root.render(<App />);