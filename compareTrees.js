 function compareTrees(par1, par2) {       // в качестве параметров выступает рутовые узлы дерева
	if (par1 && par2) {              // если узел существует
	    compareTrees(par1.left, par2.left);       // синхронный обход левых поддеревьев
		if (par1.data !== par2.data) {
		    return false;
		}
		compareTrees(par1.right, par2.right);     // синхронный обход правых поддеревьев
	} else if (!par1 && !par2) {     // если узлы обоих деревьев были пройдены одновременно
	      return true;
	  }
	return false;       // одно из деревьев имеет больше узлов чем второе
 }
