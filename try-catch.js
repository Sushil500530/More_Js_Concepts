function checkAge(){
    const agaField = document.getElementById('age').value ;
    const errorTag = document.getElementById('error')
    try{      
        // console.log(amarjuj)
        const age = parseInt(agaField) ;
        if(isNaN(agaField)){
            // console.log('age not found', age, agaField)
            throw "Please Enter a Number!"
        }
        else if(age < 18){
            throw "Child is Not Allowed"
        }
        else if(age > 30 ){
            throw "Older Person is Aot Allowed"
        }
        errorTag.innerHTML = '' ;
    }
    catch(err){
        console.log('ERR', err)
        errorTag.innerText = 'ERR:' + err ;
    }
    finally{
        console.log('All done inside try catch!')
    }
    console.log(111111)
}