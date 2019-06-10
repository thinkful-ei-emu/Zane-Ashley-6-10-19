'use strict';
// eslint-disable-next-line no-unused-vars
const Item= (function(){
  const validateName = function(name) {
    if(name === ''){      
      throw new TypeError('name does not exist');          
    }
    
  };
  
  const create = function(name){
    console.log('Create ran.')
    return {
      id: cuid(),
      name: name,
      checked: false,
    };
  };

  return {
    validateName,
    create,
  };
}());

