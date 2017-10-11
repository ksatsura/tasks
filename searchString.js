function searchString(array) {
    var hash = {};          // ассоциативный массив
    for (var i = 0; i < array.length; i++) {
	    if (!hash[array[i]]) {       //если ключа нет в ассоциативном массиве
		 hash[array[i]] = true;
	    } else if(hash[array[i]]) {   //если ключ уже существует
		  return array[i];
	      } 
    }
    return null;
}
