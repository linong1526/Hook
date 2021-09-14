import React,{useState,useEffect} from 'react'

function UseEffect(){
    console.log('start')
    const [qty,setQty]=useState(1);
    const [count,setCount]=useState(10);
    const [classList,setClassList]=useState([]);

    //用法一：等效于compoentDidMount+ componentDidUpdate的效果(不推荐)
    useEffect(()=>{
        //这里的代码在初始化组件刷新时执行
        console.log('用法一')
    })
    //用法二：指定依赖，等效于compoentDidMount + shouldComponentUpdate的效果
    useEffect(()=>{
        console.log('用法二：指定依赖')
        //ajax请求
        request('/class').then(data=>{
            setClassList(data.data.result)
        })
    },[qty])

    //用法三：空依赖，等效于componentDidMount的效果
    useEffect(()=>{
        console.log('用法三：空依赖')

    },[])

    //用法四:返回一个函数,等效于compoentWillUnmount的效果
    useEffect(()=>{
        return function(){
            console.log('用法四:返回一个函数')
        }
    },[])
    console.log('end',classList)
    return (
        <div>
            <h4>useEffect</h4>
            <button onClick={()=>{setQty(qty+1)}}>qty:{qty}</button>
            <button onClick={()=>{setCount(count+1)}}>count:{count}</button>
        </div>
    )
}
export default UseEffect;