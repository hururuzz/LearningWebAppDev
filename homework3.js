//1. Average
var getAverageNums = function() {
    var sum = 0;
    var values = document.getElementById("averageSumTextField").value;
    var numArray = values.split(",");

    //Actual algorithm coding part
    var excercise1 = function(nums) {
        nums.forEach(function(value) {
            sum = sum + parseInt(value, 10);
        });

        return sum / nums.length;
    };

    var result = excercise1(numArray);

    document.getElementById("averageSum").innerHTML = "";

    if (isNaN(result))
        document.getElementById("averageSum").innerHTML = "Check Values";
    else
        document.getElementById("averageSum").innerHTML = result;
};

//2. Find larget number
var getLargestNum = function() {
    var values = document.getElementById("largestNumTextField").value;
    var numArray = values.split(",");
    var largestNum = parseInt(numArray[0], 10);

    //Actual algorithm coding part
    var excercise2 = function(nums) {
        for (var i = 1; i < nums.length; i++) {
            if (parseInt(nums[i], 10) > largestNum)
                largestNum = nums[i];
        }

        return largestNum;
    };

    var result = excercise2(numArray);

    document.getElementById("largestNum").innerHTML = "";

    if (isNaN(result))
        document.getElementById("largestNum").innerHTML = "Check Values";
    else
        document.getElementById("largestNum").innerHTML = result;
};

//3. Find even number
var findEvenNum = function() {
    var values = document.getElementById("findEvenNumTextField").value;
    var numArray = values.split(",");

    //Actual algorithm coding part
    var excercise3 = function(nums) {
        for (var i = 0; i < nums.length; i++) {
            if (parseInt(nums[i], 10) % 2 === 0)
                return true;
        }

        return false;
    };

    var result = excercise3(numArray);

    document.getElementById("evenNum").innerHTML = "";

    if (isNaN(result))
        document.getElementById("evenNum").innerHTML = "Check Values";
    else
        document.getElementById("evenNum").innerHTML = result;
};

//4. Check if all numbers are even
var validateEvenNums = function() {
    var values = document.getElementById("validateEvenNumTextField").value;
    var numArray = values.split(",");

    //Actual algorithm coding part
    var excercise4 = function(nums) {
        for (var i = 0; i < nums.length; i++) {
            if (parseInt(nums[i], 10) % 2 !== 0)
                return false;
        }

        return true;
    };

    var result = excercise4(numArray);

    document.getElementById("evenNums").innerHTML = "";

    if (isNaN(result))
        document.getElementById("evenNums").innerHTML = "Check Values";
    else
        document.getElementById("evenNums").innerHTML = result;
};

//5. Array contains a string?
var checkArrayContains = function() {
    var arrayValue = document.getElementById("arrayTextField").value;
    var stringValue = document.getElementById("stringTextField").value;

    arrayValue = arrayValue.split(",");

    var isArrayContainsString = function(array, string) {
        for (var i = 0; i < arrayValue.length; i++) {
            if (arrayValue[i].trim() === string.trim()) //trim whitespaces in parameters
                return true;
        }

        return false;
    };

    var result = isArrayContainsString(arrayValue, stringValue);

    document.getElementById("isArrayContains").innerHTML = "";

    if (isNaN(result))
        document.getElementById("isArrayContains").innerHTML = "Check Values";
    else
        document.getElementById("isArrayContains").innerHTML = result;
};

//6.1. Check if array contains a string at least twice
var checkArrayContainsAtLeatTwice = function() {
    var arrayValue = document.getElementById("arrayForTwiceTextField").value;
    var stringValue = document.getElementById("stringForTwiceTextField").value;

    arrayValue = arrayValue.split(",");

    var isArrayContainsString = function(array, string) {
        var frequency = 0;
        for (var i = 0; i < arrayValue.length; i++) {
            if (string.trim() === arrayValue[i].trim()) { //trim whitespaces in parameters
                frequency += 1;
                if (frequency === 2)
                    return true;
            }
        }

        return false;
    };

    var result = isArrayContainsString(arrayValue, stringValue);

    document.getElementById("isArrayContainsTwice").innerHTML = "";

    if (isNaN(result))
        document.getElementById("isArrayContainsTwice").innerHTML = "Check Values";
    else
        document.getElementById("isArrayContainsTwice").innerHTML = result;
};

//6.2. Check if array contains a string at least three times
var checkArrayContainsAtLeatThreeTimes = function() {
    var arrayValue = document.getElementById("arrayForThreeTimesTextField").value;
    var stringValue = document.getElementById("stringForThreeTimesTextField").value;

    arrayValue = arrayValue.split(",");

    var isArrayContainsString = function(array, string) {
        var frequency = 0;
        for (var i = 0; i < arrayValue.length; i++) {
            if (string.trim() === arrayValue[i].trim()) { //trim whitespaces in parameters
                frequency += 1;
                if (frequency === 3)
                    return true;
            }
        }

        return false;
    };

    var result = isArrayContainsString(arrayValue, stringValue);

    document.getElementById("isArrayContainsThreeTimes").innerHTML = "";

    if (isNaN(result))
        document.getElementById("isArrayContainsThreeTimes").innerHTML = "Check Values";
    else
        document.getElementById("isArrayContainsThreeTimes").innerHTML = result;
};

//6.3. Check if array contains a string at least n times
var checkArrayContainsAtLeatNTimes = function() {
    var arrayValue = document.getElementById("arrayForNTimesTextField").value;
    var stringValue = document.getElementById("stringForNTimesTextField").value;
    var nTimes = document.getElementById("nTimesTextField").value;

    arrayValue = arrayValue.split(",");
    nTimes = parseInt(nTimes, 10);

    var isArrayContainsString = function(array, string, n) {
        var frequency = 0;
        for (var i = 0; i < arrayValue.length; i++) {
            if (string.trim() === arrayValue[i].trim()) { //trim whitespaces in parameters
                frequency = frequency + 1;
                if (frequency === n)
                    return true;
            }
        }
        if (frequency === 0) //if n times is 0 and array does not contain a string
            return true;
        else
            return false;
    };

    var result = isArrayContainsString(arrayValue, stringValue, nTimes);

    document.getElementById("isArrayContainsNTimes").innerHTML = "";

    if (isNaN(result))
        document.getElementById("isArrayContainsNTimes").innerHTML = "Check Values";
    else
        document.getElementById("isArrayContainsNTimes").innerHTML = result;
};

//7. Find larget number using underscore.js
var getLargestNumUnderscore = function() {
    var values = document.getElementById("largestNumTextUnderScoreField").value;
    var numArray = values.split(",").map(Number);

    //Actual algorithm coding part using underscore.js
    var result = _.max(numArray);

    document.getElementById("largestNumUnderScore").innerHTML = "";

    if (isNaN(result))
        document.getElementById("largestNumUnderScore").innerHTML = "Check Values";
    else
        document.getElementById("largestNumUnderScore").innerHTML = result;
};

//8. Find even number using underscore.js
var findEvenNumUnderScore = function() {
    var values = document.getElementById("findEvenNumUnderScoreTextField").value;
    var numArray = values.split(",").map(Number);
    var result = true;

    //Actual algorithm coding part using underscore.js
    var getEvenCount = _.countBy(numArray, function(num) {
        return num % 2 === 0 ? 'even' : 'odd';
    });

    if (getEvenCount.even >= 1)
        result = true;
    else
        result = false;

    document.getElementById("evenNumUnderScore").innerHTML = "";

    if (isNaN(result))
        document.getElementById("evenNumUnderScore").innerHTML = "Check Values";
    else
        document.getElementById("evenNumUnderScore").innerHTML = result;
};

//9. Check if all numbers are even using underscore.js
var validateEvenNumsUnderScore = function() {
    var values = document.getElementById("validateEvenNumUnderScoreTextField").value;
    var numArray = values.split(",").map(Number);
    var result = true;

    //Actual algorithm coding part
    var getEvenNumCount = _.countBy(numArray, function(num) {
        return num % 2 === 0 ? 'even' : 'odd';
    });

    if (getEvenNumCount.even === numArray.length)
        result = true;
    else
        result = false;

    document.getElementById("evenNumsUnderScore").innerHTML = "";

    if (isNaN(result))
        document.getElementById("evenNumsUnderScore").innerHTML = "Check Values";
    else
        document.getElementById("evenNumsUnderScore").innerHTML = result;
};