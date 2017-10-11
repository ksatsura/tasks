function searchElem(array) {
    var hash = {};         // ассоциативный массив
	for (var i = 0; i < array.length; i++) {
	    if (!hash[array[i]]) {        // если ключа нет в ассоциативном массиве
		    hash[array[i]] = true;    //присвоение значения ключу array[i]
		} else if(hash[array[i]]) {   //если ключ уже существует
		    delete hash[array[i]]; 
		}
	}
	for (var i in hash) {       //вывод ключа
        return i;
    }
}