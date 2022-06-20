<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%--
/*********************************************************************
*---------------------------------------------------------------------
*	변경No			변경일자			    변경자		Description
*---------------------------------------------------------------------
*  Ver 1.0			2022. 6. 2.			전예원		최초 생성
*********************************************************************/
--%>
<div id="tabs-4">
	<div class="btnArea right mb5">
		<DbliTag:buttonAuth elementId="btnSave" buttonType="C" html="<a href='#' id='btnSave' class='btnM'><span>저장</span></a>" />
	</div>
	
	<!-- 민원,분쟁,상담이 많은 사항 -->
	<div class="tblType02">
		<table>
			<colgroup>
				<col style="width:15%;">
				<col style="width:*;">
			</colgroup>
			<tbody>
				<tr id="quest2">
					<th scope="row">유형2</th>
					<td>
						<div style="margin:5px auto;"><input type="text" class="input"></div>
						<div style="margin:5px auto;"><input type="text" class="input"></div>
						<textarea cols="" rows="" style="height:50px;" class="input"></textarea>
					</td>
				</tr>
				<tr id="quest3">
					<th scope="row">유형3</th>
					<td>
						<div style="margin:5px auto;"><input type="text" class="input"></div>
						<div style="margin:5px auto;"><input type="text" class="input"></div>
						<textarea cols="" rows="" style="height:50px;" class="input"></textarea>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	
	<!-- 발생 가능한 불이익에 관한 사항(주관식) -->
	<div class="tblType02">
		<table>
			<tbody>
				<!-- disAvt1 -->
				<tr>
					<th>중도해지시 유의사항</th>
				</tr>
				<tr id="disAvt1">
					<td>
						<div style="margin:5px auto;"><input type="text" class="input"></div>
						<textarea cols="" rows="" style="height:50px;" class="input"></textarea>
					</td>
				</tr>
				<!-- disAvt2 -->
				<tr>
					<th>
						<!--  해지환급금 <DbliTag:code groupCode="DISAVT2" elementName="dis_avt_2_10" defaultValue="선택" selectedCode="" style="width:100px"/> 상품 유의사항 -->
						해지환급금 <select class="dis_avt_2_10" style="width:100px;">
							<option></option>
						</select> 상품 주의사항
					</th>
				</tr>
				<tr>
					<td id="disAvt2" style="padding:20px;">
						<table>
							<tbody>
								<tr>
									<th rowspan="2">구분</th>
									<th rowspan="2">보험료(월)</th>
									<th colspan="3">해지환급금</th>
								</tr>
								<tr>
									<th>5년</th>
									<th>10년</th>
									<th>20년</th>
								</tr>
								<tr>
									<th>표준형</th>
									<td>
										<input type="text" class="input" style="width:90%"> 원
									</td>
									<td>
										<input type="text" class="input" style="width:90%"> 원
									</td>
									<td>
										<input type="text" class="input" style="width:90%"> 원
									</td>
									<td>
										<input type="text" class="input" style="width:90%"> 원
									</td>
								</tr>
								<tr>
									<th>
										해지환급금 <input type="text" class="dis_avt_2_10" style="width:120px" readonly>
									</th>
									<td>
										<input type="text" class="input" style="width:90%"> 원
									</td>
									<td>
										<input type="text" class="input" style="width:90%"> 원
									</td>
									<td>
										<input type="text" class="input" style="width:90%"> 원
									</td>
									<td>
										<input type="text" class="input" style="width:90%"> 원
									</td>
								</tr>
							</tbody>
						</table>
						<div>
							<textarea cols="" rows="" style="height:50px;" class="input"></textarea>
						</div>
					</td>
				</tr>
				<!-- disAvt3 -->
				<tr>
					<th>변액보험 유의사항</th>
				</tr>
				<tr>
					<td>
						<div><input type="text" id="disAvt3"></div>
					</td>
				</tr>
				<!-- disAvt12 -->
				<tr>
					<th>3대질병보험/GI보험 유의사항</th>
				</tr>
				<tr>
					<td>
						<div><input type="text" id="disAvt12"></div>
					</td>
				</tr>
				<!-- disAvt16 -->
				<tr>
					<th>보험금 지급한도가 설정된 담보에 관한 사항</th>
				</tr>
				<tr>
					<td>
						<div><input type="text" id="disAvt16"></div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	
	<!-- 발생 가능한 불이익에 관한 사항(체크박스) -->
	<div class="tblType02" id="disAvtCheckTbl">
		<table>
			<colgroup>
				<col style="width:28%;">
				<col style="width:5%;">
				<col style="width:28%;">
				<col style="width:5%;">
				<col style="width:28%;">
				<col style="width:5%;">
			</colgroup>
			<tbody>
				<tr>
					<!-- dis_avt4 -->
					<th>최저사망보증옵션 유의사항</th>
					<td>
						<div class="checkboxWrap">
							<span class="checkStyle"><input type="checkbox" class="inputCheckbox" id="disAvt4"></span>
						</div>
					</td>
					<!-- dis_avt5 -->
					<th>예금자보호법 미적용</th>
					<td>
						<div class="checkboxWrap">
							<span class="checkStyle"><input type="checkbox" class="inputCheckbox" id="disAvt5"></span>
						</div>
					</td>
					<!-- dis_avt6 -->
					<th>예금자보호법 적용</th>
					<td>
						<div class="checkboxWrap">
							<span class="checkStyle"><input type="checkbox" class="inputCheckbox" id="disAvt6"></span>
						</div>
					</td>
				</tr>
				<tr>
					<!-- dis_avt8 -->
					<th>유니버셜 기능 유의사항</th>
					<td>
						<div class="checkboxWrap">
							<span class="checkStyle"><input type="checkbox" class="inputCheckbox" id="disAvt8"></span>
						</div>
					</td>
					<!-- dis_avt9 -->
					<th>월대체보험료에 관한 사항</th>
					<td>
						<div class="checkboxWrap">
							<span class="checkStyle"><input type="checkbox" class="inputCheckbox" id="disAvt9"></span>
						</div>
					</td>
					<!-- dis_avt10 -->
					<th>보험료 감액제도 이용 시 유의사항</th>
					<td>
						<div class="checkboxWrap">
							<span class="checkStyle"><input type="checkbox" class="inputCheckbox" id="disAvt10"></span>
						</div>
					</td>
				</tr>
				<tr>
					<!-- dis_avt11 -->
					<th>체증형 종신보험 유의사항</th>
					<td>
						<div class="checkboxWrap">
							<span class="checkStyle"><input type="checkbox" class="inputCheckbox" id="disAvt11"></span>
						</div>
					</td>
					<!-- dis_avt13 -->
					<th>상해·재해사고에서 보장이 제외되는 사항</th>
					<td>
						<div class="checkboxWrap">
							<span class="checkStyle"><input type="checkbox" class="inputCheckbox" id="disAvt13"></span>
						</div>
					</td>
					<!-- dis_avt14 -->
					<th>치매보험금을 지급하지 않는 사항</th>
					<td>
						<div class="checkboxWrap">
							<span class="checkStyle"><input type="checkbox" class="inputCheckbox" id="disAvt14"></span>
						</div>
					</td>
				</tr>
				<tr>
					<!-- dis_avt15 -->
					<th>보험금 대리청구인 지정</th>
					<td>
						<div class="checkboxWrap">
							<span class="checkStyle"><input type="checkbox" class="inputCheckbox" id="disAvt15"></span>
						</div>
					</td>
					<!-- dis_avt17 -->
					<th>보험료 변동 관련 유의사항</th>
					<td>
						<div class="checkboxWrap">
							<span class="checkStyle"><input type="checkbox" class="inputCheckbox" id="disAvt17"></span>
						</div>
					</td>
					<!-- dis_avt18 -->
					<th>실제 손해를 보상하는 담보에 관한 사항</th>
					<td>
						<div class="checkboxWrap">
							<span class="checkStyle"><input type="checkbox" class="inputCheckbox" id="disAvt18"></span>
						</div>
					</td>
				</tr>
				<tr>
					<!-- dis_avt19 -->
					<th>보험금 감액 지급에 관한 사항</th>
					<td>
						<div class="checkboxWrap">
							<span class="checkStyle"><input type="checkbox" class="inputCheckbox" id="disAvt19"></span>
						</div>
					</td>
					<!-- dis_avt20 -->
					<th>면책기간(보장제외기간)에 관한 사항</th>
					<td>
						<div class="checkboxWrap">
							<span class="checkStyle"><input type="checkbox" class="inputCheckbox" id="disAvt20"></span>
						</div>
					</td>
					<th></th>
					<td></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
