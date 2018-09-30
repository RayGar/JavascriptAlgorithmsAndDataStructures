var globalList = [29, 10, 14, 37, 13];

console.log("connected");
function SelectionList(numList) {
  console.log("this", this); //test

  this.numList = numList;

  //use for debugging
  this.showArray = function() {
    for (let i = 0; i < this.numList.length; i++) {
      console.log("numList[" + i + "]=" + numList[i]);
    }
  };

  //helper function for this.sort
  this.swap = function(firstIndex, secondIndex) {
    let temp = this.numList[firstIndex];
    this.numList[firstIndex] = this.numList[secondIndex];
    this.numList[secondIndex] = temp;
  };

  this.sort = function() {
    for (let i = 0; i < this.numList.length; i++) {
      let min = i;
      //check the rest of the array to see if the minimum comes after i
      for (let j = min + 1; j < this.numList.length; j++) {
        if (this.numList[j] < this.numList[min]) {
          min = j;
        }
      }
      //swap minimum with first unsorted position
      this.swap(min, i);
    }
  };
}

const l = new SelectionList(globalList);
l.sort();
l.showArray();
