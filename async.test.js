/**
 * Testing Promise
 */

function promiseTestFunc(){
   return new Promise((resolve, reject) =>{
         resolve("Promise Tested");
   });
}

test("Testing Promise", ()=>{
   return promiseTestFunc().then((msg)=>{
       expect(msg).toBe("Promise Tested");
   })
});


/**
 * 
 * Testing a callback function  
 */
 test("Testing Callback Function", done=>{
   function callback(data) {
       try{
           expect(data).toBe("Called");
           done();
       }catch(error){
           done(error);
       }
   }

   fetchData(callback);
})


function fetchData(callback){
   setTimeout(()=>{
       callback("Called")
   },2000);
}