/**
 * Created by sks on 2016/6/27.
 */

(function(){
   Promise.all([
      new Promise(function(resolve,reject){
         $.get("index1.txt").done(resolve).fail(reject);
      }),
       new Promise(function(resolve,reject){
          $.get("index2.txt").done(resolve).fail(reject);
       }),
      new Promise(function(resolve,reject){
         $.get("index3.txt").done(resolve).fail(reject);
      }),
   ]).then(function(result){
       console.log(result);
       
   }).catch(function(error){
       console.log(error);
       
   });
  
}());
