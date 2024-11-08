/////////////////////////////////////
/* 자주사용하는 문구 template.html
///////////////////////////////////*/

////////////////////////
//상용구 선택
function templateSelect(cmt) {
  var returnCmt = "";
  returnCmt = cmt;
  document.getElementById("templeteTxt").value = returnCmt + "\n (copied)";
  copyToCB(returnCmt);
}

////////////////////////
//즐겨찾기 버튼 클릭
function clickFavoritTempBtn(index) {
  document.getElementById("templeteTxt").value = templateStrs[index];
  copyToCB(templateStrs[index]);
}

//////////////////////////
//템플릿 셋팅
//자주 사용하는 문구 버튼 설정->모든 문구 버튼형식으로 변경됨
var templateTags = new Array();
var templateStrs = new Array();
var templateKeys = new Array();
function setTemplate(_url) {
  console.log("setTemplate");
  var html =
    '<select id="templateList" onChange="templateSelect(templateList.value)">';
  var htmlBtnGroup1 = "";
  var htmlBtnGroup2 = "";
  var htmlBtnGroup3 = "";
  var htmlBtnGroup4 = "";
  var htmlBtnGroup5 = "";
  var htmlBtnGroup6 = "";
  var favoritBtnCnt = 0;

  $.getJSON(_url, function (_data) {
    //$.ajax({url:_url,dataType:'text'}, function(data) {
    console.log(_data);
    $.each(_data, function (entryIndex, entry) {
      html +=
        '<option value="' +
        entry.str +
        '">' +
        entryIndex +
        "." +
        entry.key +
        "</option>";
      console.log("-----" + entry.tag);
      templateTags[entryIndex] = entry.tag;
      templateStrs[entryIndex] = entry.str;
      templateKeys[entryIndex] = entry.key;

      /*
			//특정 문구 버튼 추가
			if (entryIndex == favoritTempIndex[favoritBtnCnt])
			{
				htmlBtn += '<button type="button" class="button button--moema button--inverted button--text-thick button--size-s" id="favoritBtn'+entryIndex+'" onClick="clickFavoritTempBtn('+entryIndex+')">'+entry.key+'</button> ';
				favoritBtnCnt++;
			}
			*/

      //모든 문구 버튼 추가
      //htmlBtn += '<button type="button" class="button button--moema button--inverted button--text-thick button--size-s" id="favoritBtn'+entryIndex+'" onClick="clickFavoritTempBtn('+entryIndex+')">'+entry.key+'</button> ';

      //버튼 태그별 선택적 추가
      switch (entry.tag) {
        case "상품":
          //htmlBtnGroup1
          htmlBtnGroup1 +=
            '<button type="button" class="button button--moema button--inverted button--text-thick button--size-s" id="favoritBtn' +
            entryIndex +
            '" onClick="clickFavoritTempBtn(' +
            entryIndex +
            ')">' +
            entry.key +
            "</button> ";
          break;
        case "반품":
          //htmlBtnGroup2
          htmlBtnGroup2 +=
            '<button type="button" class="button button--moema button--inverted button--text-thick button--size-s" id="favoritBtn' +
            entryIndex +
            '" onClick="clickFavoritTempBtn(' +
            entryIndex +
            ')">' +
            entry.key +
            "</button> ";
          break;
        case "교환":
          //htmlBtnGroup3
          htmlBtnGroup3 +=
            '<button type="button" class="button button--moema button--inverted button--text-thick button--size-s" id="favoritBtn' +
            entryIndex +
            '" onClick="clickFavoritTempBtn(' +
            entryIndex +
            ')">' +
            entry.key +
            "</button> ";
          break;
        case "링크":
          //htmlBtnGroup4
          htmlBtnGroup4 +=
            '<button type="button" class="button button--moema button--inverted button--text-thick button--size-s" id="favoritBtn' +
            entryIndex +
            '" onClick="clickFavoritTempBtn(' +
            entryIndex +
            ')">' +
            entry.key +
            "</button> ";
          break;
        case "주문":
          //htmlBtnGroup5
          htmlBtnGroup5 +=
            '<button type="button" class="button button--moema button--inverted button--text-thick button--size-s" id="favoritBtn' +
            entryIndex +
            '" onClick="clickFavoritTempBtn(' +
            entryIndex +
            ')">' +
            entry.key +
            "</button> ";
          break;
        case "배송":
          //htmlBtnGroup6
          htmlBtnGroup6 +=
            '<button type="button" class="button button--moema button--inverted button--text-thick button--size-s" id="favoritBtn' +
            entryIndex +
            '" onClick="clickFavoritTempBtn(' +
            entryIndex +
            ')">' +
            entry.key +
            "</button> ";
          break;
        default:
          break;
      }
      //console.log(entryIndex, entry.tag, entry.key);
    });
    html += "</select>";
    $("#templateSelect").html(html);

    //$('#favoritTemp').html(htmlBtn);
    $("#favoritTemp_1").html(htmlBtnGroup1);
    $("#favoritTemp_2").html(htmlBtnGroup2);
    $("#favoritTemp_3").html(htmlBtnGroup3);
    $("#favoritTemp_4").html(htmlBtnGroup4);
    $("#favoritTemp_5").html(htmlBtnGroup5);
    $("#favoritTemp_6").html(htmlBtnGroup6);

    return false;
  });
  return null;
}
