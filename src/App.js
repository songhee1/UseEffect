import { useEffect, useState } from "react";

function App(){
    const [count,setCount]=useState(0);
    //1: value, 2:value를 modify하는 function
    const clickHandler=()=>setCount((prev)=>prev+1);
    console.log('i run all the time');

    const once=()=>console.log('i run only one')
    useEffect(once,[]);
    //1: 한번만 실행하고 다시는 사용안하고싶은거 2: 마법친구
    //state가 바뀔때마다 app함수 전체가 다시 실행됨
    //이럴때 필요한건 useEffect
     const[keyword,setKeyword]=useState("");
    const onClick=(e)=>setKeyword(e.target.value);

    //keyword가 변할때만 해당 코드가 실행되도록
    useEffect(()=> {
        if(keyword!=="" && keyword.length>5){
        console.log('i run when keyword changes');    
        console.log('serch for ',keyword)}
    },[keyword]);

    useEffect(()=>console.log('i run when counter changes'),[count]);
    
    //useEffect() , 1: 실행시킬 코드 2: 지켜볼 대상 , 변화시마다 코드 실행 
    return(
        <div>
        <input value={keyword} onChange={onClick} type="text" placeholder="search keyword..." />
        <h1>{count}</h1>
       <button onClick={clickHandler}>click me!</button>
       </div> 
    );
}
export default App;