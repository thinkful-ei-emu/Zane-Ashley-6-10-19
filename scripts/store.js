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
    console.log('ID Finder Ran')
    return store.items.find(item => item.id === id);
  };
  const addItem = function(name){
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));      
    }
    catch(e){
      console.log('Cannot update name:' + e.message)
    }
  };
  const findAndToggleChecked = function(id){
   const itemId= this.findById(id)
    console.log('findToggle ran')
    return itemId.checked = !itemId.checked;  

  };
  const findAndUpdateName = function(id, newName){
    try {
      Item.validateName(newName);
     const itemId= this.findById(id);
      console.log(findById(id));
      return itemId.name = newName;    

    }
    catch(e){
      console.log('Cannot update name:' + e.message)
    }
  }
  const findAndDelete = function(id){
    const itemIndex = this.items.findIndex(item => item.id === id);    
    return this.items.splice(itemIndex, 1);   
  }

  const toggleCheckedFilter = function(){
    this.hideCheckedItem = !this.hideCheckedItem;
  }

  const setSearchTerm = function(val){
    this.searchTerm = val;    
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




