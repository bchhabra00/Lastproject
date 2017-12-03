

const firebase = require('firebase');

firebase.initializeApp({
  
databaseURL :"https://assignment1-1bd44.firebaseio.com/"

});




module.exports = [
  {
    method: 'GET',
    path: '/',
    handler:(request, reply) => {
      return reply('Welcome to landing page of Booking lending application')
    }
    
  },
  
  {
      method:'GET',
      path:'/Books',
      handler: (request,reply) =>{
         const dbref = firebase.database().ref('Books');
         
         dbref.orderByKey().limitToFirst(5).once("value", function(data){
           return reply(JSON.stringify(data.val()));  
         })
          
      }
  },
  
  {
      method:'GET',
      path:'/Books/{isbn}',
      handler: (request,reply) =>{
          const dbref = firebase.database().ref('Books')
          dbref.orderByChild(request.params.isbn).once("value", function(data){
              
              return reply(data.val());
          })
          
            
              
         
        
      }
       
           
       
           
          
      
  
  },
  
  {
      method:'POST',
      path:'/Books',
      handler: (request,reply) =>{
        const dbref = firebase.database().ref('Books');
           
    dbref.set(request.payload);
      return reply(request.payload);
          
      }
  
  
  
  },
  
   {
      method:'PUT',
      path:'/Books/{isbn}',
      handler: (request,reply) =>{
         const dbref = firebase.database().ref('Books');
           
        dbref.orderByChild(request.payload.isbn).update(request.payload);
        return reply(request.payload);
          
      }
  
  
  
   },
   
   {
      method:'DELETE',
      path:'/Books/{isbn}',
      handler: (request,reply) =>{
         const dbref = firebase.database().ref('Books');
           
        dbref.orderByChild(request.params.isbn).remove();
        return reply(request.payload);
          
      }
  
  
  
   },
     {
      method:'GET',
      path:'/Users',
      handler: (request,reply) =>{
         const dbref = firebase.database().ref('Users');
         
         dbref.orderByKey().limitToFirst(5).once("value", function(data){
           return reply(JSON.stringify(data.val()));  
         })
          
      }
  },
  
   {
      method:'GET',
      path:'/Users/{id}',
      handler: (request,reply) =>{
          const dbref = firebase.database().ref('Users')
         
          dbref.orderByChild(request.params.id).on("value",function(data){
              
              return reply(data.val());
          })
       
           
       
           
          
      
  }
  },
  {
      method:'POST',
      path:'/Users',
      handler: (request,reply) =>{
        const dbref = firebase.database().ref('Users');
           
    dbref.set(request.payload);
      return reply(request.payload);
      }
  
  
  
  },
  
  {
      method:'PUT',
      path:'/Users/{id}',
      handler: (request,reply) =>{
         const dbref = firebase.database().ref('Users');
           
        dbref.orderByChild(request.payload.id).update(request.payload);
        return reply(request.payload);
          
      }
  
  
  
   },
   
   {
      method:'DELETE',
      path:'/Users/{id}',
      handler: (request,reply) =>{
         const dbref = firebase.database().ref('Users');
           
        dbref.orderByChild(request.params.id).remove();
        return reply(request.payload);
          
      }
  
  
  
   },
   
    {
      method:'GET',
      path:'/Users/{p*}',
      handler: queryallbooks
  
  
  
   }
   
   
  
  
]


//  function for querybooks
function queryallbooks(request,reply){
    if(request.query.genre){
    let dbref = firebase.database().ref('books').orderByChild(request.query.genre).on("value",function(data){
        
        return reply(data.val());
    });
    return reply('query set is wrong')

    }


if(request.query.Title){
    let dbref = firebase.database().ref('books').orderByChild(request.query.Title).on("value",function(data){
        
        return reply(data.val());
    });
    return reply('query set is wrong')

    }
    
    
    if(request.query.Author){
    let dbref = firebase.database().ref('books').orderByChild(request.query.Author).on("value",function(data){
        
        return reply(data.val());
    });
    return reply('query set is wrong')

    }

}

