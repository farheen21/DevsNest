// Question no 1

function is_array(num) {
    let arr = [];
    if(typeof(num) === typeof(arr))
      return true;
    else 
    return false
}
console.log('QUESTION NO: 1')
console.log(is_array('W3resource'));
console.log(is_array([1, 2, 4, 0]));
console.log('------------------------------------------------------------');

// Question no 2

function array_clone(num) {
    return (num.slice());
}
console.log('QUESTION NO: 2')
console.log(array_clone([1, 2, 4, 0]));
console.log(array_clone([1, 2, [4, 0]]));
console.log('------------------------------------------------------------');

// Question no 3

const first = (arr , n =1) => {
    return arr.slice(0 , n);
}
console.log('QUESTION NO: 3')
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
console.log('------------------------------------------------------------');

//Question 4
myColor = ["Red", "Green", "White", "Black"];
console.log('QUESTION NO: 4');
console.log((myColor.toString()));
console.log(myColor.join('+'));
console.log('------------------------------------------------------------');

//  Question 5
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function frequency(num) {
   let Map = {};
   for(a of num) {
       if( a in Map) Map[a]++;
       else Map[a] = 1;
   }
    var freq = 0 ;
    for(char in Map) 
    if(Map[char] > freq) {
        freq = Map[char];
        maxOccured = char;
    }
 
    console.log(`${maxOccured} (${freq} times)`);
   }
   console.log('QUESTION NO: 5');
   frequency([3, "a", "a", "a", 2, 3, 3, 3, "a", "a"]);
