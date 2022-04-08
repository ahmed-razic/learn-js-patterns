//Basic structure of module pattern
// const moduleName = (function(){
//   //declare private vars and functions
//   return {
//     //declare public vars and functions
//   }
// })();

const UIControl = (function () {
  //private var and function expression
  let text = 'Hello World';

  const changeText = function () {
    const element = document.querySelector('h1');
    element.textContent = text;
  };
  //return public function which call private
  return {
    callChangeText: function () {
      changeText();
      console.log(text);
    },
  };
})();

UIControl.callChangeText();

//Revealing module pattern

const ItemControl = (function () {
  let data = [];
  function add(item) {
    data.push(item);
    console.log('Item Added...');
  }

  function get(id) {
    return data.find((item) => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get,
  };
})();

ItemControl.add({ id: 1, name: 'Ahmed' });
ItemControl.add({ id: 2, name: 'Ibraim' });
console.log(ItemControl.get(1));
console.log(ItemControl.get(2));
