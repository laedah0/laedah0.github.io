var testMode = true;
//var testMode = false;

var alertt = function (str) {
  if (testMode) alert(str);
  return null;
};

///////////////////////////
//인풋텍스트 키보드 이벤트
var inputOnKeyDown = function (_id, _data) {
  if (event.keyCode == 13) {
    //console.log('id:'+_id+',data:'+_data);
    switch (_id) {
      case "orderDetail1":
        //주문내역-상품주문번호
        searchOrderDetail(_data.type, _data.keyword);
        break;
      case "orderDetail2":
        //주문내역-구매자연락처
        searchOrderDetail(_data.type, _data.keyword);
        break;
      case "orderDetail3":
        //주문내역-수취인명
        searchOrderDetail(_data.type, _data.keyword);
        break;
      case "orderDetail4":
        //주문내역-운송장번호
        searchOrderDetail(_data.type, _data.keyword);
        break;
      case "gDriveSearchTxt":
        //CCTV
        gDriveSearch(_data.keyword);
        break;
      case "lotteDelTxt":
        //송장조회
        tracking(_data.keyword);
        break;
      case "orderDetail":
        //라디오버튼 있는 주문조회 입력칸에서 엔터
        searchOrderDetail(_data.type, _data.keyword);
        break;
      default:
        break;
    }
  }

  return null;
};

//클립보드 가져와서 자동으로 onlyNumber
function deleteSpecificTxtAuto(e) {
  alert("deleteSpecificTxtAuto");
  pasteboard();
}

/*
////////////////////////
//editableDiv에 paste이벤트 발생시키려 했는데 해당 이벤트는 Event그룹 내에 없음
//paste이벤트는 ClipboardEvent에 있는데 해당 이벤트는 createEvent로 생성할 수 없음.
//- 4/22(수) 15:00 2020
function handlePasteTrg()
{
	alert('!');

j	var event = document.createEvent('Event');
	event.initEvent('paste');

	document.getElementById('editableDiv').dispatchEvent(event);
}

function handlePaste (e) {
	alert('!!');
    var clipboardData, pastedData;
 
    // Stop data actually being pasted into div
    e.stopPropagation();
    e.preventDefault();
 
    // Get pasted data via clipboard API
    clipboardData = e.clipboardData || window.clipboardData;
    pastedData = onlyNumber(clipboardData.getData('Text'));

    
    // Do whatever with pasteddata
    alert(pastedData);
    copyToCB(pastedData);
}
//*/

function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

//////////////////////
//checkBoxList
function checkBoxList(_data) {
  alert(checkBoxListId.value);
}

//////////////////////////
//CSV파일 로드해서 템플릿 셋팅
//TODO :  기능구현
function setTemplateCSV(_url) {
  console.log("setTemplateCSV");
  var html =
    '<select id="templateList" onChange="templateSelect(templateList.value)">';
  var htmlBtnGroup1 = "";
  var htmlBtnGroup2 = "";
  var htmlBtnGroup3 = "";
  var htmlBtnGroup4 = "";
  var favoritBtnCnt = 0;

  $.ajax({
    type: "GET",
    url: _url,
    dataType: "text",
    success: function (_data) {
      // alert(_data);
      //TODO!!!
    },
    error: function (xhr, ajaxOptions, thrownError) {
      alert("Status: " + xhr.status + "     Error: " + thrownError);
    },
  });

  /**
	$.getJSON(_url, function(_data) {
	//$.ajax({url:_url,dataType:'text'}, function(data) {
		console.log(_data);
		$.each(_data, function(entryIndex, entry) {
			
			html += '<option value="'+entry.str+'">'+entryIndex+'.'+entry.key+'</option>';

			templateStrs[entryIndex] = entry.tag;
			templateStrs[entryIndex] = entry.str;
			templateKeys[entryIndex] = entry.key;

			/*
			//특정 문구 버튼 추가
			if (entryIndex == favoritTempIndex[favoritBtnCnt])
			{
				htmlBtn += '<button type="button" class="button button--moema button--inverted button--text-thick button--size-s" id="favoritBtn'+entryIndex+'" onClick="clickFavoritTempBtn('+entryIndex+')">'+entry.key+'</button> ';
				favoritBtnCnt++;
			}
			*

			//모든 문구 버튼 추가
			//htmlBtn += '<button type="button" class="button button--moema button--inverted button--text-thick button--size-s" id="favoritBtn'+entryIndex+'" onClick="clickFavoritTempBtn('+entryIndex+')">'+entry.key+'</button> ';

			//버튼 태그별 선택적 추가
			switch(entry.tag)
			{
				case '문의' :
					//htmlBtnGroup1
					htmlBtnGroup1 += '<button type="button" class="button button--moema button--inverted button--text-thick button--size-s" id="favoritBtn'+entryIndex+'" onClick="clickFavoritTempBtn('+entryIndex+')">'+entry.key+'</button> ';
					break;
				case '안내' :
					//htmlBtnGroup2
					htmlBtnGroup2 += '<button type="button" class="button button--moema button--inverted button--text-thick button--size-s" id="favoritBtn'+entryIndex+'" onClick="clickFavoritTempBtn('+entryIndex+')">'+entry.key+'</button> ';
					break;
				case '반품' :
				case '교환' :
					//htmlBtnGroup3
					htmlBtnGroup3 += '<button type="button" class="button button--moema button--inverted button--text-thick button--size-s" id="favoritBtn'+entryIndex+'" onClick="clickFavoritTempBtn('+entryIndex+')">'+entry.key+'</button> ';
					break;
				case '상품추천' :
					htmlBtnGroup4 += '<button type="button" class="button button--moema button--inverted button--text-thick button--size-s" id="favoritBtn'+entryIndex+'" onClick="clickFavoritTempBtn('+entryIndex+')">'+entry.key+'</button> ';
					break;
				default :
					break;
			}
			//console.log(entryIndex, entry.tag, entry.key);

			
		});
		html += '</select>';
		$('#templateSelect').html(html);
		
		
		//$('#favoritTemp').html(htmlBtn);
		$('#favoritTemp_1').html(htmlBtnGroup1);
		$('#favoritTemp_2').html(htmlBtnGroup2);
		$('#favoritTemp_3').html(htmlBtnGroup3);
		$('#favoritTemp_4').html(htmlBtnGroup4); //상품추천

		return false;
	});
	return null;
	**/
}

var clickFavoritTempBtn = function (_no) {
  templateSelect(templateStrs[_no]);
  return null;
};

////////////////////////////////////
//주문 금액 로드-사용안함
/*//
function setorderCalc(url)
{
	$.getJSON(url, function(data) {
			console.log(data[0]);
		$.each(data, function(entryIndex, entry) {
			console.log(entry.optionName1, 960+entry.price);
		});
		return false;
	});
	return null;
}
//*/

///////////////////////////////////
//주문서 리스트 추가/삭제
var orderListHtml = "";
var itemLength = 0;
var orderTxtAry = [];
function addOrderList() {
  orderListHtml = $("#orderListCon").html();

  var id = 0;

  id = itemLength;
  itemLength += 1;

  //수량 인풋텍스트 타입
  orderListHtml +=
    '<input style="width:200px" type="text" id="orderTxt' +
    id +
    '_1" placeholder="옵션명" onfocus="this.select()"/>&nbsp;';
  orderListHtml +=
    '<input style="width:75px" placeholder="단가" type="text" id="orderTxt' +
    id +
    '_2" onfocus="this.select()"/>&nbsp;';
  orderListHtml +=
    '<input style="width:75px" placeholder="할인율(%)" type="text" id="orderTxt' +
    id +
    '_4" onfocus="this.select()"/>&nbsp;X&nbsp;';
  orderListHtml +=
    '<input type="text" style="width:40px" placeholder="수량" id="orderTxt' +
    id +
    '_3" value="1" onfocus="this.select()"/>개</br>';

  /**
	var id = 0;
	if(_key)
	{
		//추가
		itemLength += 1;
		id = itemLength;


		///*
		수량 셀렉트박스 타입
		orderListHtml +='<input style="width:200px" type="text" id="orderTxt'+id+'_1" placeholder="옵션명"/>&nbsp;<input style="width:75px" placeholder="단가" type="text" id="orderTxt'+id+'_2"/>&nbsp;<input style="width:75px" placeholder="할인율(%)" type="text" id="orderTxt'+id+'_4"/>&nbsp;<select id="orderTxt'+id+'_3">';
		for(var i=1;i<100;i++)
		{
			orderListHtml += '<option value='+i+'>'+i+'</option>';
		}
		orderListHtml +=  '</select>&nbsp;<br/>';
		//console.log('id="orderTxt'+id+'_1"');
		//*

		//수량 인풋텍스트 타입
		orderListHtml +='<input style="width:200px" type="text" id="orderTxt'+id+'_1" placeholder="옵션명" onfocus="this.select()"/>&nbsp;<input style="width:75px" placeholder="단가" type="text" id="orderTxt'+id+'_2" onfocus="this.select()"/>&nbsp;<input style="width:75px" placeholder="할인율(%)" type="text" id="orderTxt'+id+'_4" onfocus="this.select()"/>&nbsp;X&nbsp;<input type="text" style="width:40px" placeholder="수량" id="orderTxt'+id+'_3" value="1" onfocus="this.select()"/>개</br>';

	}
	else
	{ 
		//삭제
	}

	*/

  $("#orderListCon").html(orderListHtml);

  return null;
}

////////////////////////////////////
//주문서 제작 계산 결과
var orderShareTxt = "_"; //공유용 텍스트

function resultorderCalc() {
  /*
	[미건철물장식] 상품 수량, 배송비(2,500원) 및 설치용 피스 포함, 총 금액 원입니다.
입금계좌는 기업 010-2794-9795 박상은 입니다.
확인해보시고 입금하신 후 받으실 분 성함/주소/연락처 부탁드립니다^^ 감사합니다!
*/
  var deleveryType = document.getElementById("deleveryType");
  var totalPrice = 0;
  var totalPriceTxt = "";
  var deleveryPrice = 0;
  var deleveryPriceTxt = "";

  var returnTxt = "";
  var orderListTxt = "";

  for (var i = 0; i < itemLength; i++) {
    var orderTxt1 = document.getElementById("orderTxt" + i + "_1"); //제품명
    var orderTxt2 = document.getElementById("orderTxt" + i + "_2"); //단가
    var orderTxt3 = document.getElementById("orderTxt" + i + "_3"); //수량
    var orderTxt4 = document.getElementById("orderTxt" + i + "_4"); //할인율
    console.log("orderTxt" + i + "_1" + orderTxt1);

    if (isEmpty(orderTxt1.value)) {
      inputValueAlert();
      return null;
    } else {
      if (isEmpty(orderTxt4.value)) {
        //할인율 미적용
        orderListTxt +=
          orderTxt1.value +
          "(단가 " +
          comma(orderTxt2.value) +
          "원) " +
          orderTxt3.value +
          "개, ";
        totalPrice += parseInt(orderTxt2.value) * parseInt(orderTxt3.value);
        totalPriceTxt +=
          "(" +
          parseInt(orderTxt2.value) +
          "x" +
          parseInt(orderTxt3.value) +
          ")+";
      } else {
        //할인율 적용
        var salePrice =
          parseInt(orderTxt2.value) * 0.01 * parseInt(orderTxt4.value);
        orderListTxt +=
          orderTxt1.value +
          "(단가 " +
          comma(orderTxt2.value) +
          "->" +
          salePrice +
          orderTxt4.value +
          "%할인가" +
          "원) " +
          orderTxt3.value +
          "개, ";
        totalPrice += salePrice * parseInt(orderTxt3.value);
        totalPriceTxt +=
          "(" +
          orderTxt2.value +
          "x -" +
          orderTxt4.value +
          "% x" +
          parseInt(orderTxt3.value) +
          ")+";
      }
    }
  }

  //5만원 이하일 경우 배송비 포함
  //단 제주 혹은 도서지역일 경우 -2500원만 제공 <- 아직 미구현
  deleveryPrice = parseInt(
    deleveryType.options[deleveryType.selectedIndex].value
  );
  if (totalPrice < 50000) {
    totalPrice += deleveryPrice;
    deleveryPriceTxt = deleveryType.options[deleveryType.selectedIndex].text;
  } else {
    deleveryPriceTxt = "무료";
  }

  totalPriceTxt += deleveryPrice;

  returnTxt =
    "[미건철물장식] " +
    orderListTxt +
    "배송비(" +
    deleveryPriceTxt +
    ") 및 설치용 피스 포함, 총 " +
    comma(totalPrice);
  returnTxt +=
    "원입니다.\n입금계좌는 기업 010-2794-9795 박상은 입니다.\n확인해보시고 입금하신 후 받으실 분 성함/주소/연락처 부탁드립니다^^ 감사합니다!";

  //공유용 텍스트 저장
  orderShareTxt =
    orderListTxt +
    "배송비(" +
    deleveryPriceTxt +
    ") 및 설치용 피스 포함, 총 " +
    comma(totalPrice) +
    "원\n입금완료\n ";
  //console.log(orderTxt2);

  orderTxtCalc.text = "calc : " + totalPriceTxt;
  orderTxt.text = returnTxt + " (copied)";

  copyToCB(returnTxt);
  return null;
}

//////////////////////////
//주문서 제작 결과 공유용 클립보드 생성
var orderTxt2CopyToClipboard = function () {
  copyToCB(orderShareTxt);
  alert("클립보드 복사 완료");
  return null;
};

////////////////////////////////////
//발송택배송장안내
//_num : 입력된 송장번호
//_com : 택배사 0:대한통운, 1:대신택배
//_detail : 택배 발송 내용물 내역
var orderSendInfoTemplate = function (_num, _cop, _detail) {
  if (isEmpty(_num)) {
    inputValueAlert();
    return null;
  }
  var replaceNum = onlyNumber(_num);
  var returnTxt = "";

  //라디오그룹 선택된 값 가져오기 설정
  var sendType = new setRadioGroup("orderSendType");

  //택배사
  var copName = "";
  switch (_cop) {
    case "0":
      copName = "CJ대한통운";
      break;
    case "1":
      copName = "대신택배";
      break;
  }

  //발송 상세 내역
  var detail = _detail;

  //택배 송장 안내 타입에 따른 문구 분류
  switch (sendType.checkedValue()) {
    case "normal":
      //일반 택배 송장 안내
      returnTxt = "[미건철물장식] 주문하신 상품이 다음과 같이 발송 됩니다.\n\n";
      returnTxt += copName + " " + replaceNum + "\n내역 - " + detail;
      returnTxt +=
        "\n\n배송정보는 발송당일 늦은 저녁때 부터 아래 링크에서 확인하실 수 있습니다.\n감사합니다^^\n\n■ 배송조회 바로가기\n";
      break;
    case "long":
      //오배송으로 인한 택배 송장 안내
      returnTxt =
        "[미건철물장식] 오배송 문제로 불편을 드려 죄송합니다.\n주문하신 상품이 다음과 같이 재발송 됩니다. 꼼꼼히 검수하여 발송하도록 하겠습니다.\n\n";
      returnTxt += copName + " " + replaceNum + "\n내역 - " + detail;
      returnTxt +=
        "\n\n배송정보는 발송당일 늦은 저녁때 부터 아래 링크에서 확인하실 수 있습니다.\n아울러 기존 오배송된 제품은 수거 접수 되었습니다. 1~2일 이내 기사님 방문 드리며 피스 등 누락 없이 받으신 포장지로 재포장 후 안전하게 전달해 주시면 감사드리겠습니다.\n감사합니다^^\n\n■ 배송조회 바로가기\n";
      break;
    case "long-noreturn":
      //오배송 수거없음 송장안내
      returnTxt =
        "[미건철물장식]제품문제로 불편을 드려 죄송합니다. 해당 상품은 새 상품으로 다음과 같이 재발송됩니다.\n아울러 기존 파손품은 배송비 문제로 수거택배가 없습니다. 번거로우시더라도 별도 파기 부탁드리오니 너른 양해 부탁드립니다.\n\n";
      returnTxt += copName + " " + replaceNum + "\n내역 - " + detail;
      returnTxt +=
        "\n\n배송정보는 발송당일 늦은 저녁때 부터 아래 링크에서 확인하실 수 있습니다.\n다시 한번 상품 문제로 불편을 드린 점에 대해 양해 말씀 드리며 관련 궁금하신점이 있으시면 언제든지 문의 주시기 바랍니다. 감사합니다.\n\n■ 배송조회 바로가기\n";
  }

  if (_cop == 0) {
    var d = new doortodoor();
  } else if (_cop == 1) {
    var d = new ds3211();
  }
  d.deleveryNo(replaceNum);

  returnTxt += d.getURL();

  copyToCB(returnTxt);
  orderSendInfoText.text = returnTxt;
  returnTxt = "";

  return null;
};

//////////////////////////////////
//스마트택배 스마트트래커 배송조회 api 연결
var sweettracker = function () {
  var key = "EsJWk3IuQxPxIKjRAkvMzw";
  var code = "04";
  var url = "http://info.sweettracker.co.kr/tracking/4";
  var invoice = "";

  this.getURL = function () {
    return (href =
      this.url +
      "?t_key=" +
      this.key +
      "&t_code=" +
      this.code +
      "&t_invoice=" +
      this.invoice);
  };

  this.call = function () {
    document.location.href = this.getURL();
    return null;
  };
};

////////////////////////////////////
//대한통운 배송조회
//구)http://nplus.doortodoor.co.kr/web/detail.jsp?slipno=
//신)https://www.cjlogistics.com/ko/tool/parcel/tracking?gnbInvcNo=
var doortodoor = function () {
  var url = "https://www.cjlogistics.com/ko/tool/parcel/tracking";
  var deleveryNo = "";

  this.deleveryNo = function (_no) {
    deleveryNo = _no;
  };

  this.getURL = function () {
    return url + "?gnbInvcNo=" + deleveryNo;
  };

  this.call = function () {
    document.location.href = this.getURL();
    return null;
  };
};

////////////////////////////////////
//대신택배 배송조회 링크
var ds3211 = function () {
  var url = "https://m.search.naver.com/search.naver?query=";
  var deleveryNo = "";

  this.deleveryNo = function (_no) {
    deleveryNo = _no;
  };

  this.getURL = function () {
    return url + "%EB%8C%80%EC%8B%A0%ED%83%9D%EB%B0%B0" + deleveryNo;
  };

  this.call = function () {
    document.location.href = this.getURL();
    return null;
  };
};

///////////////////////////////////
//반품누락 청구서 아이템 추가/삭제
var missingReturnListHtml = "";
var missingReturnitemLength = 0;
var clickmissingReturnListBtn = function (_key) {
  missingReturnListHtml = $("#missingReturnListCon").html();

  var id = 0;
  if (_key) {
    //추가
    missingReturnitemLength += 1;
    id = missingReturnitemLength;

    /**
		수량 셀렉트박스
		missingReturnListHtml +='<input style="width:200px" type="text" id="missingReturnTxt'+id+'_1" placeholder="옵션명"/>&nbsp;<input style="width:50px" placeholder="단가" type="text" id="missingReturnTxt'+id+'_2"/>&nbsp;<select id="missingReturnTxt'+id+'_3">';
		for(var i=1;i<100;i++)
		{
			missingReturnListHtml += '<option value='+i+'>'+i+'</option>';
		}
		**/

    //수량 인풋텍스트박스
    missingReturnListHtml +=
      '<input style="width:200px" type="text" id="missingReturnTxt' +
      id +
      '_1" placeholder="옵션명" onfocus="this.select()"/>&nbsp;';
    missingReturnListHtml +=
      '<input style="width:50px" placeholder="단가" type="text" id="missingReturnTxt' +
      id +
      '_2" onfocus="this.select()"/>&nbsp;X&nbsp;';
    missingReturnListHtml +=
      '<input type="text" style="width:40px" id="missingReturnTxt' +
      id +
      '_3" placeholder="수량" onfocus="this.select()" value="1"/>개';

    missingReturnListHtml += "</select>&nbsp;<br/>";
    //console.log('id="missingReturnTxt'+id+'_1"');
  } else {
    //삭제
  }

  $("#missingReturnListCon").html(missingReturnListHtml);

  return null;
};

////////////////////////////////////
//반품누락 계산 결과
var missingReturnShareTxt = "_"; //공유용 텍스트

var resultmissingReturnCalc = function () {
  var returnDeleveryType = document.getElementById("returnDeleveryType");
  var totalPrice = 0;
  var totalPriceTxt = "";
  var deleveryPrice = 0;
  var deleveryPriceTxt = "";

  var returnTxt = "";
  var missingReturnListTxt = "";

  for (var i = 1; i <= missingReturnitemLength; i++) {
    var missingReturnTxt1 = document.getElementById(
      "missingReturnTxt" + i + "_1"
    );
    var missingReturnTxt2 = document.getElementById(
      "missingReturnTxt" + i + "_2"
    );
    var missingReturnTxt3 = document.getElementById(
      "missingReturnTxt" + i + "_3"
    );
    if (isEmpty(missingReturnTxt1.value)) {
      inputValueAlert();
      return null;
    } else {
      missingReturnListTxt +=
        missingReturnTxt1.value +
        "(단가 " +
        comma(missingReturnTxt2.value) +
        "원) " +
        missingReturnTxt3.value +
        "개, ";
      totalPrice +=
        parseInt(missingReturnTxt2.value) * parseInt(missingReturnTxt3.value);
      totalPriceTxt +=
        "(" +
        parseInt(missingReturnTxt2.value) +
        "x" +
        parseInt(missingReturnTxt3.value) +
        ")+";
    }
  }

  var deleveryPrice = parseInt(
    returnDeleveryType.options[returnDeleveryType.selectedIndex].value
  );
  totalPrice += deleveryPrice;
  totalPriceTxt += deleveryPrice;
  deleveryPriceTxt =
    returnDeleveryType.options[returnDeleveryType.selectedIndex].text;

  returnTxt +=
    "[미건철물장식] 저희 제품을 이용해 주심에 대단히 감사드리며 요청하신 반품에 대한 안내드립니다.\n\n";
  returnTxt += "반품 시 누락된 상품이 있으며 아래 내역 확인 부탁드립니다.\n";

  if (deleveryPrice == 0) {
    //반품배송비 제외 제품가만 청구
    returnTxt += "내역 : " + missingReturnListTxt;
    returnTxt +=
      "\n입금계좌 : 기업 010-2794-9795 박상은, 금액 총" +
      comma(totalPrice) +
      "원\n\n";
    returnTxt += "반품배송비는 요청에 따라 환불금에서 자동 차감 예정입니다. ";
  } else {
    //발송편도배송비만 청구
    returnTxt +=
      "네이버 환불정책에 의해 전액 환불 기준으로 반품접수시 환불금에서 차감요청이 없는 경우 별도 합산청구됩니다.\n";
    returnTxt +=
      "내역 : " + missingReturnListTxt + "반품배송비(" + deleveryPriceTxt + ")";
    returnTxt +=
      "\n입금계좌 : 기업 010-2794-9795 박상은, 금액 총" +
      comma(totalPrice) +
      "원\n\n";
    returnTxt +=
      "환불금은 주문시 지불하신 배송비 포함 결제금액 전액 환불 예정입니다. ";
  }

  returnTxt +=
    "실제 환불일은 네이버쇼핑 결제방식에 따라 달라질 수 있으며 관련 궁금하신 점은 네이버쇼핑 고객센터로 문의주세요.\n\n";
  returnTxt +=
    "확인해 보시고 관련 의문사항이 있으시면 문의 남겨 주세요. 감사합니다!";

  /*/ 210204 수정. 미사용 시 삭제 요망
	var deleveryTypeTxt = '';
	//if(deleveryPrice == 0) deleveryTypeTxt += '배송비를 제외한 ';

	returnTxt = '[미건철물장식] 저희 제품을 이용해 주심에 대단히 감사드리며 요청하신 반품에 대한 안내 드립니다.';
	returnTxt += '\n\n네이버쇼핑 환불 정책에 의해 전액 환불 기준으로, 반품 접수 시 별도 차감 접수 가능합니다.';

	if(deleveryPrice == 0) returnTxt += '배송비를 제외한';
	returnTxt += '배송비 포함 전액환불 기준이며, 만 가능하기에 반품시 누락(손상)된 상품에 대한 금액을 아래 계좌로 입금해 주시면 확인 즉시 ';
	returnTxt += deleveryTypeTxt;
	returnTxt += '전액 환불요청 하도록 하겠습니다.\n\n';
	
	returnTxt += '내역 : '+missingReturnListTxt;
	if(deleveryPrice != 0) returnTxt += '반품배송비(' + deleveryPriceTxt + ')';
	returnTxt += '\n입금계좌 : 기업 010-2794-9795 박상은, 금액 총'+comma(totalPrice)+'원\n\n';
	returnTxt += '환불금은 주문시 지불하신 배송비 포함 결제금액 전액 환불 예정입니다. 실제 환불일은 네이버쇼핑 결제방식에 따라 달라질 수 있으며 관련 궁금하신 점은 네이버쇼핑 고객센터로 문의 주세요.\n\n';
	returnTxt += '확인해 보시고 관련 의문사항이 있으시면 문의 남겨 주세요^^ 감사합니다!';
//*/

  missingReturnTxtCalc.text = "calc : " + totalPriceTxt;
  missingReturnTxt.text = returnTxt + " (copied)";

  copyToCB(returnTxt);

  return null;
};

///////////////////////////////////////////////////////////////
//주문 아이템 추가 - 주문아이템 추가 버튼을 클릭하면 입력된 아이템을 주문내역에 추가한다.
//_option : 주문내역옵션명, _price : 단가, _ea : 수량
function addOrderItem(_option, _price, _ea) {}

//////////////////////////////////////////////////////////////
//주문 아이템 삭제 - 주문아이템 삭제 버튼을 클릭하면 해당 아이템의 주문내역을 삭제한다.
//_no : 삭제할 아이템 id
function deleteOrderItem(_id) {}

////////////////////////////
//구글드라이브 검색 검색어로 바코드 기록 검색
var gDrive_search_url = "https://drive.google.com/drive/u/0/search?q=";
var search_option = "";
search_option += ", after:" + prevMonth(3); //3개월 전 조건

var gDriveSearch = function (_txt) {
  if (isEmpty(_txt)) {
    inputValueAlert();
    return null;
  }
  //window.open( gDrive_search_url+txt+search_option, 'gDriveWindow');
  document.location.href = gDrive_search_url + _txt + search_option;
  return null;
};

/////////////////////////////////
//cctv 뷰어 바로가기
var cctvLink = function () {
  if (broswer.isMobile()) {
    alert("모바일에서는 지원하지 않습니다.");
  } else {
    var win = window.open("http://mk250cctv.ddns.net:8080/", "_blank");
    win.focus();
  }
  return null;
};

//////////////////////////////////
//롯데택배배송조회->cj대한통운으로 변경 - 2/29(토) 15:18
var tracking = function (_num) {
  if (isEmpty(_num)) {
    inputValueAlert();
    return null;
  }
  //' '
  //window.open('https://www.lotteglogis.com/home/reservation/tracking/linkView?InvNo='+onlyNumber(num), 'lotteDelWindow');
  //window.open('http://ftr.alps.llogis.com:8260/ftr/tracking.html?'+onlyNumber(num), 'lotteDelWindow');
  //document.location.href='http://ftr.alps.llogis.com:8260/ftr/tracking.html?'+onlyNumber(num);

  //대한통운 기본 제공 페이지
  //document.location.href='http://nplus.doortodoor.co.kr/web/detail.jsp?slipno='+onlyNumber(_num);
  var d = new doortodoor();

  d.deleveryNo(onlyNumber(_num));
  d.call();

  //스마트택배 배송조회 api 연동
  //sweettracker.invoice = onlyNumber(_num);
  //sweettracker.call();

  return null;
};

//값_data이 없을 경우 _function 강제 리턴
var inputValueAlert = function () {
  alert("값을 입력해 주세요.");
  return null;
};

/////////////////////////////////
//고객센터 전화걸기
var callHelpCenter = function (_num) {
  if (isEmpty(_num)) {
    inputValueAlert();
    return null;
  }
  var number = onlyNumber(_num);
  if (confirm("CJ대한통운 고객센터 연결(" + number + ")") == true) {
    //확인
    //롯데택배
    //document.location.href='tel:1588-2121,2,5,'+number+'*;1';
    //CJ대한통운
    document.location.href = "tel:1588-1255";
  } else {
    //취소
    return null;
  }
};

///////////////////////////
//네이버 스마트스토어 주문검색
//https://sell.smartstore.naver.com/#/naverpay/manage/order?detailSearch.type=COLLECTOR_NAME&detailSearch.keyword=%EC%9E%A5%EC%9C%A4%EC%A0%95
//type = 수취인명 : 'COLLECTOR_NAME' , 구매자명 : 'PURCHASER_NAME', 구매자연락처 : 'PURCHASER_TEL_NO' , 운송장번호 : 'INVOICE_NO'
//판매관리 바로가기
var orderSearchNaver = function (_type, _keyword) {
  //var _url = 'https://sell.smartstore.naver.com/#/naverpay/manage/order?';
  //document.location.href=_url+'detailSearch.type='+_type+'&detailSearch.keyword='+_keyword;
  var _url = "";
  if (broswer.isMobile())
    _url = "https://sell.smartstore.naver.com/#/naverpay/mobile/sales";
  //else _url='https://sell.smartstore.naver.com/o/claim/return';
  else _url = "https://sell.smartstore.naver.com/o/v3/iframe/manage/order";

  document.location.href = _url;
  //document.location.href='https://sell.smartstore.naver.com/o/claim/return/json?summaryInfoType=RETURN_COLLECTING';
};

///////////////////////////////////////////////
//링크 바로가기
//_key is 'order'. 'return', 'exchange', 'chatbot', tracking, comment//문의 관리, qnas//고객문의 관리
var goDirectAsKey = function (_key) {
  var _url = "";
  switch (_key) {
    case "store":
      _url = "https://smartstore.naver.com/migundiy";
      break;
    case "dashboard":
      _url = "https://sell.smartstore.naver.com/#/home/dashboard";
      break;
    case "order":
      //주문조회 바로가기
      //if(broswer.isMobile()) _url='https://sell.smartstore.naver.com/#/naverpay/mobile/sales';
      //else _url = 'https://sell.smartstore.naver.com/o/v3/iframe/manage/order';
      _url = "https://sell.smartstore.naver.com/o/v3/iframe/manage/order";
      break;

    case "return":
      //반품관리 바로가기
      _url = "https://sell.smartstore.naver.com/o/v3/iframe/claim/return";
      break;

    case "exchange":
      //교환관리 바로가기
      _url = "https://sell.smartstore.naver.com/o/v3/iframe/claim/exchange";
      break;

    case "chatbot":
      //쳇봇상담 바로가기
      _url =
        "https://chatbot.cjlogistics.com:8443/chatbot/?sessionKey=qbmkel9gcd0t1d6bi7hzz4q9p&company=0000000000&media=COM&agent=Chrome";
      break;

    case "tracking":
      //송장조회 바로가기

      break;

    case "comment":
      //문의 관리
      _url = "https://sell.smartstore.naver.com/#/comment/";
      break;

    case "qnas":
      //고객문의 관리
      _url = "https://sell.smartstore.naver.com/#/naverpay/qnas";
      break;
  }

  document.location.href = _url;

  return null;
};

///////////////////////
//주문내역 상세 검색 조회
//https://sell.smartstore.naver.com/o/orderDetail/productOrder/2020010970885211/popup
//https://sell.smartstore.naver.com/o/m/orderDetail/2020011590692231/detail
//'PRODUCT_ORDER_NO' , 'PURCHASER_TEL_NO' , 'COLLECTOR_NAME', 'INVOICE_NO'
var searchOrderDetail = function (_type, _keyword) {
  console.log("searchOrderDetail(" + _type + "," + _keyword + ")");

  if (isEmpty(_keyword)) {
    inputValueAlert();
    return null;
  }

  var keyword = _keyword;
  var type = _type;

  if (type == "ODER_DETAIL") {
    //type = $('input[name="searchType"]:checked').val();
    type = $('select[name="searchType"]').val();
  }

  switch (type) {
    case "PRODUCT_ORDER_NO":
      keyword = onlyNumber(keyword);
      //alert('https://sell.smartstore.naver.com/o/orderDetail/productOrder/'+keyword+'/popup');
      //location.href='https://sell.smartstore.naver.com/o/orderDetail/productOrder/'+keyword+'/popup';
      //구버전
      //location.href='https://sell.smartstore.naver.com/o/manage/order?detailSearch.type=PRODUCT_ORDER_NO&detailSearch.keyword='+keyword;
      //신버전
      //location.href='?detailSearch.type='+type+'&detailSearch.keyword='+keyword;
      break;
    case "PURCHASER_TEL_NO":
      keyword = onlyNumber(keyword.replace("+82", "0")); //+82로 시작하는 첫 숫자(대한민국국가번호)를 0으로 치환
      //location.href='https://sell.smartstore.naver.com/o/manage/order?detailSearch.type=PURCHASER_TEL_NO&detailSearch.keyword='+keyword;
      break;
    case "COLLECTOR_NAME":
      //location.href='https://sell.smartstore.naver.com/o/manage/order?detailSearch.type=COLLECTOR_NAME&detailSearch.keyword='+keyword;
      //신버전 210201
      //location.href='https://sell.smartstore.naver.com/#/naverpay/manage/order?detailSearch.type=COLLECTOR_NAME&detailSearch.keyword='+keyword;
      break;
    case "INVOICE_NO":
      keyword = onlyNumber(keyword);
      //location.href='https://sell.smartstore.naver.com/o/manage/order?detailSearch.type=INVOICE_NO&detailSearch.keyword='+keyword;
      break;
  }

  location.href =
    "https://sell.smartstore.naver.com/o/v3/iframe/manage/order?detailSearch.type=" +
    type +
    "&detailSearch.keyword=" +
    keyword;

  return null;
};

//상품상세보기팝업
//상품주문번호로 주문내역 팝업창 바로보기
var viewOrderDetailViewPopup = function (_num) {
  if (isEmpty(_num)) {
    inputValueAlert();
    return null;
  }

  if (isKO(_num) || isEN(_num) || isSpecific(_num) || _num.length != 16) {
    alert("16자리 숫자만 입력 가능합니다.");
    return null;
  } else {
    location.href =
      "https://sell.smartstore.naver.com/o/orderDetail/productOrder/" +
      _num +
      "/popup";
  }
  return null;
};

//////////////////////////////////////////
//숫자만 남기기
var originTxtoldVal = "";
var originTxtcurrentVal = "";

var deleteSpecificTxt = function (_num) {
  originTxtcurrentVal = _num;
  if (originTxtcurrentVal == originTxtoldVal) {
    return;
  }
  originTxtoldVal = originTxtcurrentVal;

  var returnNum = onlyNumber(originTxtcurrentVal);
  resultText.text = returnNum + " (copied)";
  copyToCB(returnNum);
  returnNum = null;

  return null;
};

//////////////////////////////////////////////////////
//Document Ready!!
$(document).ready(function () {
  //주문서 1아이템 셋팅
  addOrderList();

  //반품누락 1아이템 셋팅
  clickmissingReturnListBtn(1);

  //템플릿 셋팅
  setTemplate("data/templateList_230501.json");
  //setTemplateCSV('data/templateList.csv');

  //가격표 셋팅
  //setOderCalc('data/railCombinationOption.json');

  //숫자만 정렬 폼에 입력 완료 시 변경 버튼 누르지 않고 자동으로 아래 함수 실행되게
  //붙여넣기 키 업 이벤트 캐치

  //console.log($('#originTxt'));
  $("#originTxt").on("propertychange change keyup paste", function () {
    deleteSpecificTxt($(this).val());
  });

  //발송택배송장안내 입력 완료 시 바로 변경
  //붙여넣기 키 업 이벤트 캐치
  var orderSendInfooldVal = "";
  var orderSendInfocurrentVal = "";
  $("#orderSendInfo").on("propertychange change keyup paste", function () {
    var orderSendInfocurrentVal = $(this).val();
    if (orderSendInfocurrentVal == orderSendInfooldVal) {
      return;
    }
    orderSendInfooldVal = orderSendInfocurrentVal;
    orderSendInfoTemplate(orderSendInfocurrentVal);
  });

  //console.log( download_get('https://sell.smartstore.naver.com/o/orderDetail/productOrder/2020011471917061/popup') );

  //document.getElementById('editableBtn').addEventListener('onclick', handlePasteTrg);

  //document.getElementById('editableDiv').addEventListener('paste', handlePaste);

  return false;
});
/////////////////////////////////////////////////////
