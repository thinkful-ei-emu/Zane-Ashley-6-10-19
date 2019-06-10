'use strict';
/* global , cuid  */
// eslint-disable-next-line no-unused-vars
const store=(function(){
  
  const items=[{ id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideItemsChecked= false;
  const searchTerm='';
  const findById = function(id){
    store.items.find(itemId => itemId === id)
  }
  const addItem = function(name){
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));      
    }
    catch(e){
      console.log('Cannot update name:' + e.message)
    }
  }
  const findAndToggleChecked = function(id){
    this.findById(id)
    console.log('findToggle ran')
    this.checked = !this.checked  

  }
  const findAndUpdateName = function(id, newName){
    try {
      Item.validateName(newName);
      findById(id);
      this.name = newName;

    }
    catch(e){
      console.log('Cannot update name:' + e.message)
    }
  }
  const findAndDelete = function(id){
    const itemIndex = this.items.findIndex(item => item.id === id);    
    return this.items.splice(itemIndex, 1);   
  }

  
  

  return {
    items,
    hideItemsChecked,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
  };


}());




