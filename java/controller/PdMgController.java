package dms.biz.qm.ad.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.dongbulife.core.exception.BizException;
import com.dongbulife.web.baseLayer.BaseController;

import dms.biz.qm.ad.service.PdMgService;

@Controller
public class PdMgController extends BaseController {

@Autowired
private PdMgService pdMgService;

	/**
	 * <p> 핵심상품설명서 내용 조회 </p>
	 * <pre>
	 * 가입설계관리(IT)
	 * </pre>
	 * @param request
	 * @param response
	 * @throws BizException
	 */
	@RequestMapping(method= {RequestMethod.POST}, value="/TSSQM07057")
	public void retrieveProdMainDescList(HttpServletRequest request, HttpServletResponse response) throws BizException{

		Map<String,Object> inParam = super.getParamData(request, Map.class);
		List<Map<String,Object>> returnList = pdMgService.retrieveProdMainDescList(inParam);
		super.outJson(response, returnList);
	}
	
	/**
	 * <p> 핵심상품설명서 내용 등록 </p>
	 * <pre>
	 * 가입설계관리(IT)
	 * </pre>
	 * @param request
	 * @param response
	 * @throws BizException
	 */
	@RequestMapping(method= {RequestMethod.POST}, value="/TSSQM07074")
	public void registerProdMainDesc(HttpServletRequest request, HttpServletResponse response) throws BizException{

		Map<String,Object> inParam = super.getParamData(request, Map.class);
		Map<String,Object> returnMap = new HashMap<String,Object>();

		returnMap.put("returnCnt", pdMgService.registerProdMainDesc(inParam));

		super.outJson(response, returnMap);
	}
}
