import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-comp',
  templateUrl: './testing-comp.component.html',
  styleUrls: ['./testing-comp.component.css'],
})
export class TestingCompComponent implements OnInit {
  mainMethod: string = 'Welcome to this Javascript Guide!';
  @Input() passValue: any;
  dupliacteArr = [];
  uiqueArr = [];
  constructor() {}

  ngOnInit(): void {
    console.log(this.passValue);
    // this.add(10, 12);
    /**
     * method to reverse string
     */
    var mainMethodwa = 'Welcome to this Javascript Guide!';
    var arr = [
      12, 49, 56, 65, 55, 103, 112, 43, 44, 42, 12, 56, 90, 112, 9, 86, 43,
    ];
    var string = 'a monkey is jumping on the tree';

    // Output becomes !ediuG tpircsavaJ siht ot emocleW
    var reverseEntireSentence = reverseBySeparator(mainMethodwa, ' ');
    console.log('reverseEntireSentence: ', reverseEntireSentence);

    // Output becomes emocleW ot siht tpircsavaJ !ediuG
    var reverseEachWord = reverseBySeparator(reverseEntireSentence, ' ');
    console.log('reverseEachWord: ', reverseEachWord);

    function reverseBySeparator(mainMethodwa: any, seprator: any) {
      return mainMethodwa.split(seprator).reverse().join(seprator);
    }
    /**
     * Push Method  " adds one or more elements to the end of array and returns the new length of array "
     */
    var newArr1 = arr.push(109);
    console.log('length of an array is expected in newArr1 : ', newArr1);
    console.log(arr);
    //output: [12, 43, 56, 65, 55, 43, 44, 42, 12, 56, 90, 9, 86, 43,109]

    /**
     * Pop Method  " Removes the last elements to the end of array and returns the last element"
     */
    var newArr2 = arr.pop();
    console.log(
      'which element has been removed from array expected in newArr2 : ',
      newArr2
    );
    console.log(arr);
    //output: [12, 43, 56, 65, 55, 43, 44, 42, 12, 56, 90, 9, 86,43];
    ///////////////////////////////////////////////////////////////////////////
    /**
     * Shift Method  " shift removes the first element of an array and returns that element "
     */
    var newArray = arr.shift();
    console.log(arr);
    //output:  [43, 56, 65, 55, 43, 44, 42, 12, 56, 90, 9, 86, 43]
    //////////////////////////////////////////////////////////////////////////
    /**
     * Unshift Method  " unshift add one or more element to the beginning of an array and returns the new length of array  "
     */
    var newArray3 = arr.unshift(14);
    console.log(
      'which element has been pushed Intialy in array,  expected in newArray3: ',
      newArray3
    );
    console.log(
      newArray3 +
        ' has been pushed as 1st element in the begining of an array => ' +
        arr
    );
    //output : [14, 12, 43, 56, 65, 55, 43, 44, 42, 12, 56, 90, 9, 8
    //////////////////////////////////////////////////////////////////////////
    /**
     * Map Method  " map used to modify existing array and creates a new array  "
     */
    var newArrayMap = arr.map((x) => x * 2);
    console.log('Existin array in map method: ', arr);
    console.log('Map method here', newArrayMap);
    // output : [24, 86, 112, 130, 110, 86, 88, 84, 24, 112, 180, 18
    //////////////////////////////////////////////////////////////////////////
    /**
     * for each Method  " forEach used to perform operation in loop , inside closure , it ll not creates a new array like map  "
     */
    var arrMap = [24, 86, 112, 130, 110, 86, 88, 84, 24, 112, 180, 18];
    var res1 = arrMap.map((x) => {
      return x * 2;
    });
    console.log(arr);
    console.log('using map we can modify existing array in a new array ', res1);

    var arrForEach = [24, 86, 112, 130, 110, 86, 88, 84, 24, 112, 180, 18];
    var res2 = arrForEach.forEach((xy) => {
      console.log(
        'using forEach operation ll happen inside local scope only',
        xy * 10
      );
    });
    console.log(
      'using for each we can see one by one loop output of array elements, means forEach ll apply on existing array',
      arrForEach
    );
    console.log(
      "using forEach we cann't create new array alike map method, thats y undefined is here",
      res2
    );
    //////////////////////////////////////////////////////////////////////////
    /**
     * Filter Method  " filter is an array with the values that passes a test(condition) to create a new array "
     */
    var newArrayFilter = arr.filter((x) => x > 44);
    console.log(
      'by using filter method we have seprated some elements basis on condtion/test greater than 44 ',
      newArrayFilter
    );
    // output : [56, 65, 55, 56, 90, 86];
    //////////////////////////////////////////////////////////////////////////
    /**
     * Reduce Method  " reduce method used to cut/short the existing array in a single value"
     */
    var newArrayReduce = arr.reduce((x, y) => Math.max(x, y));
    console.log(
      'by using reduce we have compared one by one elements in array and returned the greatest elements as per condtion',
      newArrayReduce
    );
    // output : 90
    var newArrayReduces = arr.reduce((x, y) => Math.max(x + y));
    console.log(
      'by using reduce we have compared one by one elements in array and returned the sum of elements as per condtion',
      newArrayReduces
    );
    // output : 656
    /**
     * Reverse Method  " reverse working as per name, simply it used to reverse the input"
     */
    var newArrayReverse = arr.reverse();
    console.log('this is the wase way to reverse an array', newArrayReverse);
    // output : [43, 86, 9, 90, 56, 12, 42, 44, 43, 55, 65, 56, 43,

    var newReversedString = string.split('').reverse().join('');
    console.log('simple method to reverse a string', newReversedString);
    //output : "eert eht no gnipmuj si yeknom a" ;

    var reverseEachWord: any = newReversedString.split(' ').reverse().join(' ');
    console.log(
      'using space between seprator ll reverse each word: ',
      reverseEachWord
    );
    // output becomes : "a yeknom si gnipmuj no eht eert"
    /**
     * for Each Method  " find duplicate"
     */
    arr.forEach((item: number, index, inputArray) => {
      if (inputArray.indexOf(item) !== index) {
        this.dupliacteArr.push(item as never);
      } else {
        this.uiqueArr.push(item as never);
      }
    });
    console.log('using for each find duplicate', this.dupliacteArr);
    console.log('using for each find unique', this.uiqueArr);
    /**
     * for filter method  " find duplicate"
     */
    var newDuplicateData = arr.filter((item, index, array) => {
      return array.indexOf(item) == index;
    });
    console.log(
      'using filter removed duplicates element in an array: ',
      newDuplicateData
    );
  }

  // add(x: any, y: any) {
  //   console.error(arguments);
  // }

  // add = (x: any, y: any) => {
  //   console.error(arguments);
  //   console.error(x);
  // };
}

// how to print pyramid pattern in javascript . ?
function generatePyramid() {
  var totalNumberofRows = 5;
  let n = 5;
  let string = '';
  // External loop
  for (let i = 0; i <= 5; i++) {
    // printing spaces
    for (let j = 0; j <= n - i; j++) {
      string += ' ';
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
      string += '*';
    }
    string += '\n';
  }
  console.log(string);
}

generatePyramid();

//Source: https://stackoverflow.com/questions/20738935

//Source: https://stackoverflow.com/questions/73680100
