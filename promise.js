const getData = new Promise((resolve,reject) =>{
    resolve(56665) ;
})
getData.then(data => console.log(data + 5))