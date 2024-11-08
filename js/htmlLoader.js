//<script src="http://code.jquery.com/jquery-latest.js"></script>

//<script type="text/javascript">

function download_get(_url) {
  // �̹� ���õ� ���̹� ������� �ּҸ� ������

  //var str_url = $('#input_url').val();

  // ���̹� ������� �ҽ��� ������ textArea�� ����

  var jqxhr = $.get(_url, function (data) {
    this.data = data;
  });

  return jqxhr.data;
}

function download_post() {
  // �̹� ���õ� ���̹� ������� �ּҸ� ������
  //var str_url = $('#input_url').val();
  // ���̹� ������� �ҽ��� ������ textArea�� ����
  //var jqxhr = $.post(str_url, function(data) {
  //$('#textvw').val(data);
  //});
}

/**

$(document).ready(function() {

	$('button').click(function() {

		// �̸��� ���� �ʾұ� ������ index������ ���ؼ� ���� ������ 

		switch($('button').index(this)) {

		case 0:

			download_get();

			break;

		case 1:

			download_post();

			break;

		}

	});

});
**/

//</script>
/**
</head>

<body>



<input id='input_url' value='http://m.naver.com'>

<button>download get</button>

<button>download post</button><br><br>

<textarea id='textvw' rows="" cols="" style='height:200px; width:320px;'></textarea>

**/

function loadHTML(elementId, url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;

      // 현재 페이지 메뉴 활성화
      const currentPage = window.location.pathname.split("/").pop();
      document.querySelectorAll(".codrops-demos a").forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("current-demo");
        }
      });
    })
    .catch((error) => console.error("Navigation load error:", error));
}
