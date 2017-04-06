/*jshint esversion: 6*/
module.exports = () => {
    var current = 1;
    function insertionSort( arr ){
      if(Array.isArray(arr) !== true ){
        return false;
      }
      if(current === arr.length){
        return;
      }
      for(var i = current; i >=0; i-- ){
      if(typeof arr[i] !== 'number' ){
        return false;
      }
      if(arr[current] < arr[0]){
        arr.splice(0, 0, arr[current]);
        arr.splice(current +1, 1);
      }
        if (arr[current] < arr[ i - 1]  && arr[current] > arr[i - 2]){
          arr.splice(i-1, 0, arr[current]);
          arr.splice(current + 1, 1);
          }
        }
        current ++;
        insertionSort(arr);
        return arr;
      }
    return {
      insertionSort,
    };
};

