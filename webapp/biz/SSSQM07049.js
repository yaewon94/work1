
/*********************************************************************
*---------------------------------------------------------------------
*	변경No			변경일자			    변경자		Description
*---------------------------------------------------------------------
*  Ver 1.0			2022. 6. 3.			전예원		Initialized
*********************************************************************/

var SSSQM07049S = dblife.addWorker({

	/**
	 * ScreenID
	 */
	SCREENID : "SSSQM07049S",
	ProdMainDesc : {},
	Util : {},
	UserVal : {}
});

/**
 * 화면 초기화 객체
 * 화면 로드후 최초로 실행 됩니다.
 */
SSSQM07049S.init = function(){

	/**
	 * 셀렉트박스 구성
	 */
	//QM_Common.makeSelectBox('DISAVT2', $('.dis_avt_2_10'));
	var option = {groupCd : 'DISAVT2'};
	dblife.Biz.makeSelectOption($('.dis_avt_2_10:input:not([readonly])'), option, null, function(){
		$('.dis_avt_2_10:input:not([readonly])').prepend('<option value="">선택</option>');
	});
	
	
	/**
	 * 이벤트 바인딩
	 */

	// '저장'
	$("#tabs-4").find("#btnSave").on("click", function(){
		SSSQM07049S.ProdMainDesc.saveProdMainDesc();
	});
	
	// 해지환급금 일부지급형/미지급형 '변경'
	$('.dis_avt_2_10:input:not([readonly])').on("change", function(){

		var value = $('.dis_avt_2_10:input:not([readonly])').val();
		$('.dis_avt_2_10').val(value);
		
		if("" == value){	// 해지환급금 해당 없는 경우, 금액 입력창도 비움
			$('#disAvt2 .input').val('');
		}
	});
};

/**
 * 최초 수행 로직
 * @memberOf SSSQM07049S.ProdMainDesc.init 
 */
SSSQM07049S.ProdMainDesc.init = function(param){

	/**
	 * parameter set
	 */
	SSSQM07049S.UserVal.chnlType = param.chnlType;
	SSSQM07049S.UserVal.prodCode = param.prodCode;
	
	/**
	 * 핵심상품설명서 내용 조회
	 */
	SSSQM07049S.ProdMainDesc.retrieveProdMainDesc();
};

/**
 * 핵심상품설명서 내용 조회
 * @memberOf SSSQM07049S.ProdMainDesc.retrieveProdMainDesc
 */
SSSQM07049S.ProdMainDesc.retrieveProdMainDesc = function(){
	
	// 파라미터 셋팅
	var param = {prodCode : SSSQM07049S.UserVal.prodCode};
	
	// ajax 호출
	dblife.Ajax.send({
		tradeId	: "TSSQM07057",
		jsonData : param,
		success : SSSQM07049S.ProdMainDesc.retrieveProdMainDescSuccessCallbackFunc,
	});
};

/**
 * 핵심상품설명서 내용 조회 success callback function
 * @memberOf SSSQM07049S.ProdMainDesc.retrieveProdMainDescSuccessCallbackFunc
 */
SSSQM07049S.ProdMainDesc.retrieveProdMainDescSuccessCallbackFunc = function(resObj){

	/**
	 * 조회 결과가 없을 경우, 입력창 초기화
	 */
	if(resObj.rows.length == 0) {
		$(':input').val('');
		$('input:checked').checked(false);
		return false;
	}
	
	/**
	 * 쿼리 결과 문자열 구분
	 */
	var arr = resObj.rows[0].RESULT.split("^");
	
	/**
	 * 결과 셋팅
	 */
	// 민원,분쟁,상담이 많은 사항
	var $objs = $('#quest2 .input');	// 유형 2
	$objs.eq(0).val(arr[1]);
	$objs.eq(1).val(arr[2]);
	$objs.eq(2).val(arr[3]);
	var $objs = $('#quest3 .input');	// 유형 3
	$objs.eq(0).val(arr[36]);
	$objs.eq(1).val(arr[37]);
	$objs.eq(2).val(arr[38]);
	
	// 발생 가능한 불이익에 관한 사항(주관식)
	$objs = $('#disAvt1 .input');	// 불이익 1
	$objs.eq(0).val(arr[4]);
	$objs.eq(1).val(arr[6]);
	$objs = $('#disAvt2 .input');	// 불이익 2
	$objs.eq(0).val(arr[7]);
	$objs.eq(1).val(arr[8]);
	$objs.eq(2).val(arr[9]);
	$objs.eq(3).val(arr[10]);
	$objs.eq(4).val(arr[11]);
	$objs.eq(5).val(arr[12]);
	$objs.eq(6).val(arr[13]);
	$objs.eq(7).val(arr[14]);
	$objs.eq(8).val(arr[15]);
	$('.dis_avt_2_10').val(arr[16]);
	$('#disAvt3').val(arr[17]);	// 불이익 3
	$('#disAvt12').val(arr[26]);	// 불이익 12
	$('#disAvt16').val(arr[31]);	// 불이익 16
	
	// 발생 가능한 불이익에 관한 사항(체크박스)
	$objs = $('#disAvtCheckTbl .inputCheckbox');
	// 불이익 4,5,6
	for(var i=0; i<=2; i++){
		if("" != arr[i+18]){
			$objs.eq(i).checked(true);
		}else{
			$objs.eq(i).checked(false);
		}
	}
	// 불이익 8,9,10,11
	for(var i=3; i<=6; i++){
		if("" != arr[i+19]){
			$objs.eq(i).checked(true);
		}else{
			$objs.eq(i).checked(false);
		}
	}
	// 불이익 13,14,15
	for(var i=7; i<=9; i++){
		if("" != arr[i+21]){
			$objs.eq(i).checked(true);
		}else{
			$objs.eq(i).checked(false);
		}
	}
	// 불이익 17,18,19,20
	for(var i=10; i<=13; i++){
		if("" != arr[i+22]){
			$objs.eq(i).checked(true);
		}else{
			$objs.eq(i).checked(false);
		}
	}
};

/**
 * 핵심상품설명서 내용 저장
 * @memberOf SSSQM07049S.ProdMainDesc.saveProdMainDesc
 */
SSSQM07049S.ProdMainDesc.saveProdMainDesc = function(){

	// 1. 상품 코드 확인
	if( dblife.utils.StringUtils.isEmpty(SSSQM07049S.UserVal.prodCode) ) {
		dblife.UI.alert("SSCOI10004", "상품");		// @ 을(를) 선택하여 주십시오.
		return false;
	}
	
	// 2. 파라미터 셋팅
	var param = {
			prodCode : SSSQM07049S.UserVal.prodCode,
			quest2 : SSSQM07049S.Util.MergeStrings($('#quest2 .input')),
			quest3 : SSSQM07049S.Util.MergeStrings($('#quest3 .input')),
			dis_avt_1 : $('#disAvt1 .input').eq(0).val() + "^^" + $('#disAvt1 .input').eq(1).val(),
			dis_avt_2 : SSSQM07049S.Util.MergeStrings($('#disAvt2 .input')) + "^" + $('.dis_avt_2_10 option:selected').val(),
			dis_avt_3 : $('#disAvt3').val(),
			dis_avt_4 : $('#disAvt4').is(':checked')? "C" : "",
			dis_avt_5 : $('#disAvt5').is(':checked')? "C" : "",
			dis_avt_6 : $('#disAvt6').is(':checked')? "C" : "",
			// dis_avt_7 사용안함
			dis_avt_8 : $('#disAvt8').is(':checked')? "C" : "",
			dis_avt_9 : $('#disAvt9').is(':checked')? "C" : "",
			dis_avt_10 : $('#disAvt10').is(':checked')? "C" : "",
			dis_avt_11 : $('#disAvt11').is(':checked')? "C" : "",
			dis_avt_12 : $('#disAvt12').val(),
			dis_avt_13 : $('#disAvt13').is(':checked')? "C" : "",
			dis_avt_14 : $('#disAvt14').is(':checked')? "C" : "",
			dis_avt_15 : $('#disAvt15').is(':checked')? "C" : "",
			dis_avt_16 : $('#disAvt16').val(),
			dis_avt_17 : $('#disAvt17').is(':checked')? "C" : "",
			dis_avt_18 : $('#disAvt18').is(':checked')? "C" : "",
			dis_avt_19 : $('#disAvt19').is(':checked')? "C" : "",
			dis_avt_20 : $('#disAvt20').is(':checked')? "C" : ""
	};
	
	// 3. ajax 호출
	dblife.Ajax.send({
		tradeId	: "TSSQM07074",
		jsonData : param,
		success : SSSQM07049S.ProdMainDesc.saveProdMainDescSuccessCallbackFunc
	});
};

/**
 * 핵심상품설명서 내용 저장 success Callback Function
 * @memberOf SSSQM07049S.ProdMainDesc.saveProdMainDescSuccessCallbackFunc
 */
SSSQM07049S.ProdMainDesc.saveProdMainDescSuccessCallbackFunc = function(){
	dblife.UI.alert("SSCOI00003");
}

/**
 * 입력창 여러개에 있는 문자열 합치기
 * @memberOf SSSQM07049S.Util.MergeStrings
 */
SSSQM07049S.Util.MergeStrings = function($targets){

	var LENGTH = $targets.length;
	var str = "";
	
	for(var i=0; i<LENGTH; i++){
		str += $targets.eq(i).val();
		str += "^";
	}
	
	return str.slice(0,-1);
};
