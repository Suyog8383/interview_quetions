// let num=[1,2,5,6,1,6,6];

// function findDuplicate(num){
//     let obj={};
//     let count=0;
//     for(let i=0;i<num.length;i++){
        
//         if(obj.hasOwnProperty(num[i])){
            
//             count++;
            
//         }else{
//             obj[num[i]]=1;
//         }
//     }
//     return count;
// }
// function uniqueVal(num){
//     let obj={};
//     for(let i=0;i<num.length;i++){
//         if(obj.hasOwnProperty(num[i])){
            
//         }else{
//             obj[num[i]]=1;
//         }
//     }
//     let result=[];
//     for(let item in obj){
//         result.push(parseInt(item))
//     }
    
//     return result;
// }
// console.log(findDuplicate(num))
// console.log(uniqueVal(num));




let obj1={
    a:[1,2,4],
    b:[5,6,7]
}

let obj2={
    a:[5,6,7],
    b:[10,5,8],
    c:[11,12]
}

function mergeObj(obj1,obj2){
    let result={};
    for(let item in obj1){
        if(result.hasOwnProperty(item)){
            
        }else{
            result[item]=obj1[item]
        }
    }
    for(let item in obj2){
        if(result.hasOwnProperty(item)){
            result[item].push(...obj2[item]);
        }else{
            result[item]=obj2[item]
        }
    }
    
    return result;
}

console.log(mergeObj(obj1,obj2))
// let obj={
//     a:[1,2,4,5,6,7],
//     b:[5,6,7,10,5,8],
//     c:[11,12]
// }

useEffect(()=>{
    
},[])

// useEffect(( )=>{
    
//     return
// },[name])

// const [name,setName]=useState("");


// <Child name={name}/>



localStorage.set("obj",obj1);


