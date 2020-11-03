const promise=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        // resolve({
        //     weather:'high'
        // })
        reject('errrorr')
    },1500)
    
})
console.log('before')
promise.then((data)=>{
    console.log(data)
}).catch((e)=>{
    console.log(e)
})
console.log('after')