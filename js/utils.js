//입력된 문자열에서 숫자만 남김
var onlyNumber = function(num){return num.replace(/[^0-9]/g,'');};

//////////////////////
//클립보드에 카피
var copyToCB = function(val){var dummy = document.createElement('textarea');document.body.appendChild(dummy);dummy.value = val;dummy.select();document.execCommand('copy');document.body.removeChild(dummy);};

///////////////////////////
//클립보드에서 가져오기
//TODO 기능구현안됨
var pasteboard = function(){
	var textRange = document.body.createTextRage();
	textRange.moveToElementText('resultText');
	textRange.execCommand('paste');
}

//빈 값 체크
var isEmpty = function(value){
 if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){ return true }else{ return false } };

//월,일 2자리수로 치환
var getDateStr = function(myDate){var year = myDate.getFullYear();var month = ("0"+(myDate.getMonth()+1)).slice(-2);var day = ("0"+myDate.getDate()).slice(-2);return ( year + '-' + month + '-' + day );};

//수개월 전 날짜 리턴
var prevMonth = function(month){var d = new Date();var monthOfYear = d.getMonth();d.setMonth(monthOfYear - month);return getDateStr(d);};

//콤마찍기
var comma = function(str){str = String(str);return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');};

//콤마풀기
var uncomma = function(str){str = String(str);	return str.replace(/[^\d]+/g, '');};

//값 입력시 콤마찍기
var inputNumberFormat = function(obj){obj.value = comma(uncomma(obj.value));};

//문자열 타입 검사
//숫자를 포함하고 있나?
var isNumber = function(str)
{
	var check = /[0-9]/;
	if(check.test(str)){
		console.log('숫자를 포함하고 있습니다.');
		return true;
	} else {
		console.log('숫자를 포함하고 있지 않습니다.');
		return false;
	}
	console.log('숫자 조건검색을 실패했습니다.');
	return false;
};
//한글을 포함하고 있나?
var isKO = function(str)
{
	var check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
	if(check.test(str)){
		console.log('한글을 포함하고 있습니다.');
		return true;
	} else {
		console.log('한글을 포함하고 있지 않습니다.');
		return false;
	}
	console.log('한글 조건검색을 실패했습니다.');
	return false;
};
//영어를 포함하고 있나?
var isEN = function(str)
{
	var check = /[A-z]]/;
	if(check.test(str)){
		console.log('영어를 포함하고 있습니다.');
		return true;
	} else {
		console.log('영어를 포함하고 있지 않습니다.');
		return false;
	}
	console.log('영어 조건검색을 실패했습니다.');
	return false;
};
//특수문자를 포함하고 있나?
var isSpecific = function(str)
{
	var check = /[!@#$%^&*`~]]/;
	if(check.test(str)){
		console.log('특수문자를 포함하고 있습니다.');
		return true;
	} else {
		console.log('특수문자를 포함하고 있지 않습니다.');
		return false;
	}
	console.log('특수문자 조건검색을 실패했습니다.');
	return false;
};


//라디오(radio) 그룹(name) 체크된(checked) 값(value) 가져오기
var setRadioGroup = function(_name)
{
	var obj = document.getElementsByName(_name);
	var checked_index = -1;
	var checked_value = '';
	for( i=0; i<obj.length; i++ ) {
		if(obj[i].checked) {
			checked_index = i;
			checked_value = obj[i].value;
		}
	}
	//alert( '선택된 항목 인덱스: '+checked_index+'\n선택된 항목 값: '+checked_value );

	this.checkedIndex = function(){return checked_index;}
	this.checkedValue = function(){return checked_value;}

}