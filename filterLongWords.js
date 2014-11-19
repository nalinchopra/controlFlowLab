var wordList = ["dog", "cat", "horse", "dolphin", "panda"];
var newList = [];
var maxLength = 7;
for (i=0; i<wordList.length; i++) {
	if (wordList[i].length<maxLength) {
		newList.push(wordList[i])
	} 
}
console.log(newList)