const stats = (arr,init=false)=>{
    if(arr.length===0) return 0
    if (init)   return (arr[0].edad+stats(arr.slice(1)))/arr.length
    return (arr[0].edad+stats(arr.slice(1)))
}

console.log(stats([{edad:1},{edad:2},{edad:12}],true))