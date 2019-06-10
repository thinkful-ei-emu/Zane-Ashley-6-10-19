'use strict';
/* global , cuid  */
// eslint-disable-next-line no-unused-vars
const store=(function(){
  const foo='bar';
  const items=[{ id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideItemsChecked= false;
  const searchTerm='';

  return {
    items,
    hideItemsChecked,
    searchTerm,
  };


}());




