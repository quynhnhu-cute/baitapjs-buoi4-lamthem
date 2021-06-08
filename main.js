const getEle = function (id) {
    return document.getElementById(id);
};

//BÀI SỐ 1
/**
 * B1: Nhập vào ngày , tháng năm
 * B2: Khai báo biến lưu trữ ngày , tháng , năm:
 * txtInputDay , txtInputMonth, txtInputYear
 * + Viết hàm check năm nhuận 1 param là year
 * => checkGapYear(year)
 * + Viết hàm trả về ngày của tháng có 2 params là month,year
 * => countDayOfMonth(month, year)
 * + if(txtInputDay == 31 && txtMonth == 12){
 *     txtInputDay == 1 ;
 *     txtInputMonth ==1;
 *     txtInputYear += 1;
 * }
 *  else{
 * if(txtInputDay < countDayOfMonth(month, year)){
 *     txtInputDay += 1; }
 * else if(txtInputDay == countDayOfMonth(month, year)){
 *     txtInputDay = 1;
 *     txtMonth += 1;
 * }else{
 *     alert("Not valid Day")
 * }}
 * B3: in ra màn hình kết quả thu được
 */

var btnCalculateNextDay = getEle("btnCalculateNextDay");
console.log(btnCalculateNextDay);
var txtResult = getEle("txtResult");
const validateDate = function (day, month, year) {
    if (day <= 0 || day > 31) {
        return false;
    }
    if (month <= 0 || month > 12) {
        return false;
    }
    if (year <= 0) {
        return false;
    }
    return true;
};

const checkGapYear = function (year) {
    if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)){
        return true;
    }
    return false;
    
};
console.log("check gap year");
console.log(checkGapYear(parseInt(2015)));
const calcualateDayOfMonth = function (month, year) {
    if (month === 2) {
        return checkGapYear(year) ? 29 : 28;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    } else {
        return 31;
    }
};
console.log(calcualateDayOfMonth(2, 2015));
btnCalculateNextDay.onclick = function () {
    txtInputDay = parseInt(getEle("txtInputDay").value);
    txtInputMonth = parseInt(getEle("txtInputMonth").value);
    txtInputYear = parseInt(getEle("txtInputYear").value);
    var day, month, year;
    //   debugger
    if (!validateDate(txtInputDay, txtInputMonth, txtInputYear)) {
        txtResult.innerHTML = "Ngày tháng năm ko hợp lệ";
    } else {
        if (txtInputDay === 31 && txtInputMonth === 12) {
            day = 1;
            month = 1;
            year = txtInputYear + 1;
        } else {
            if (txtInputDay === calcualateDayOfMonth(txtInputMonth, txtInputYear)) {
                day = 1;
                month = txtInputMonth + 1;
                year = txtInputYear;
            } else if (
                txtInputDay < calcualateDayOfMonth(txtInputMonth, txtInputYear)
            ) {
                day = txtInputDay + 1;
                month = txtInputMonth;
                year = txtInputYear;
            } else {
                txtResult.innerHTML = "Ngày không hợp lệ";
                return;
            }
        }
        txtResult.innerHTML = "Ngày kế tiếp là : " + day + "/" + month + "/" + year;
    }
};

// BÀI SỐ 2 

/**
 * B1: INput vào tháng, năm
 * B2: Khai báo biến chứa tháng năm và biến kết quả
 * month, year, result
 * + Gọi lại hàm tính ngày trong tháng
 * b3: trả về kết quả lưu trữ
 */

var btnCalculateNumOfDay = getEle("btnCalculateNumOfDay");
var txtNumberOfDay = getEle("txtNumberOfDay");
btnCalculateNumOfDay.onclick = function () {
    month = parseInt(getEle("txtMonth").value);
    year = parseInt(getEle("txtYear").value);
    if(validateDate(2,month,year)){
        var result = calcualateDayOfMonth(month, year);
       
        txtNumberOfDay.innerHTML = "Tháng " + month + "/" + year + " có:" + result + " ngày";
    }else{
        txtNumberOfDay.innerHTML = "Tháng năm chưa hợp lệ";
    }
   
}

// BÀI TẬP 3

/**
 * B1: Input vào số nguyên có 3 chữ số
 * B2: Khai báo biến chưa số có 3 chữ số
 *  + Viết hàm đọc số readHundred(number) trả về chuỗi 
 * + Viết hàm readDozenNumber trả về chuối
 * + viết hàm readUnitNum trả về chuỗi
 * + Cộng các chuỗi lại là ra KQ
 * b3: In ra màn hình KQ 
 */

const readHundredNum = function (number) {
    if (number == 0) {
        return ' ';
    }
    if (number == 1) {
        return "một";
    }
    if (number == 2) {
        return "hai";
    }
    if (number == 3) {
        return "ba";
    }
    if (number == 4) {
        return "bốn";
    }
    if (number == 5) {
        return "năm";
    }
    if (number == 6) {
        return "sáu";
    }
    if (number == 7) {
        return "bảy";
    }
    if (number == 8) {
        return "tám";
    }
    if (number == 9) {
        return "chín";
    }
}

const readDozenNum = function (number) {
    if (number == 0) {
        return 'lẻ ';
    }
    if (number == 1) {
        return "mười ";
    }

    return readHundredNum(number) + " mươi ";
}

const readUnitNum = function (number, dozenNum) {
    if(dozenNum == 1){
        if(number == 1){
            return "một";
        }
    }
    if (dozenNum != 0 ) {
        if(number == 1){
            return "mốt";
        }
        if (number == 5) {

            return "lăm";
        }
    }
    
    return readHundredNum(number);
    
}

var btnReadNum = getEle("btnReadNum");
var txtReadResult = getEle("txtReadResult");
btnReadNum.onclick = function () {
    var inputNum = parseInt(getEle('txtNum').value);
    if(inputNum.toString().length !== 3){
        txtReadResult.innerHTML = " Số không hợp lệ";
        return;
    }
    if (inputNum > 0) {
        unitNum = inputNum % 10;
        inputNum = parseInt(inputNum / 10);
        dozenNum = inputNum % 10;
        inputNum = parseInt(inputNum / 10);
        leftNum = inputNum % 10;
        var result;
     
        if (unitNum == 0 && dozenNum == 0) {
            result = readHundredNum(leftNum) + " trăm ";
        }
        else {
            result = readHundredNum(leftNum) + " trăm " + readDozenNum(dozenNum)
                + readUnitNum(unitNum, dozenNum);
        }
        
        txtReadResult.innerHTML = result;
    }
}

// BÀI TẬP 4 

/**
 * B1: Nhập vào tên 3 sinh viên và tọa độ của 3 sinh viên đó
 * B2: Khai báo biến chứa tên 3 sinh viên và tọa độ
 * + Tính bình phương khoảng cách 3 sinh viên tới trường bằng x^2 + y^2
 * + So Sánh cái nào lớn nhát => sinh viên đó xa trường nhất
 * B3: In ra tên sinh viên xa trường nhất
 */

var btnFind = getEle("btnFind");
var txtCompareResult = getEle("txtCompareResult");
btnFind.onclick = function(){
    var nameFirst = getEle("txtNameFirst").value;
    var coordinatesX1 = parseFloat(getEle("x1").value);
    var coordinatesY1 = parseFloat(getEle("y1").value);
    var nameSecond = getEle("txtNameSecond").value;
    var coordinatesX2 = parseFloat(getEle("x2").value);
    var coordinatesY2 = parseFloat(getEle("y2").value);
    var nameThird = getEle("txtNameThird").value;
    var coordinatesX3 = parseFloat(getEle("x3").value);
    var coordinatesY3 = parseFloat(getEle("y3").value);
    var distanceFirst = Math.pow(coordinatesX1,2) + Math.pow(coordinatesY1,2);
    var distanceSecond = Math.pow(coordinatesX2,2) + Math.pow(coordinatesY2,2);
    var distanceThird = Math.pow(coordinatesX3,2) + Math.pow(coordinatesY3,2);
    if(nameFirst.length == 0 || nameSecond.length == 0 || nameThird.length == 0){
        txtCompareResult.innerHTML = "Tên không hợp lệ";
        return; 
    }
    var maxDistance = distanceFirst;
    var maxName = nameFirst;
    if(maxDistance < distanceSecond){
        maxDistance = distanceSecond;
        maxName = nameSecond;
    }
    if(maxDistance < distanceThird){
        maxDistance = distanceThird;
        maxName = nameThird;
    }
    
    txtCompareResult.innerHTML = "Học sinh xa trường nhất là: " + maxName;
} 