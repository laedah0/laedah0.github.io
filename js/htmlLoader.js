//<script src="http://code.jquery.com/jquery-latest.js"></script>

//<script type="text/javascript">

function download_get(_url) {

	// 이미 세팅된 네이버 모바일의 주소를 가져옴 

	//var str_url = $('#input_url').val();

	

	// 네이버 모바일의 소스를 가져와 textArea에 삽입 

	var jqxhr = $.get(_url, function(data) {

		this.data = data;

	});

	return jqxhr.data;

}



function download_post() {

	// 이미 세팅된 네이버 모바일의 주소를 가져옴 

	//var str_url = $('#input_url').val();

	

	// 네이버 모바일의 소스를 가져와 textArea에 삽입 

	//var jqxhr = $.post(str_url, function(data) {

		//$('#textvw').val(data);

	//});

}

/**

$(document).ready(function() {

	$('button').click(function() {

		// 이름을 주지 않았기 때문에 index순서에 의해서 값을 가져옴 

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