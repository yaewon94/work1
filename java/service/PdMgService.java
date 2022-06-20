package dms.biz.qm.ad.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dongbulife.core.exception.BizException;
import com.dongbulife.core.util.StringUtils;

import dms.biz.qm.ad.dao.TbProdMainDescDao;

import dms.common.util.SessionUtils;

@Service
public class PdMgService {

	@Autowired
	private TbProdMainDescDao tbProdMainDescDao;

	/**
	 * <p> 핵심상품설명서 내용 조회 </p>
	 * <pre>
	 * 가입설계관리(IT)
	 * </pre>
	 * @param prodCode
	 * @return
	 * @throws BizException
	 */
	public List<Map<String,Object>> retrieveProdMainDescList(Map<String,Object> param) throws BizException {

		List<Map<String,Object>> prodMainDescList = tbProdMainDescDao.selectTbProdMainDesc(param);
		
		return prodMainDescList;
	}
	
	/**
	 * <p> 핵심상품설명서 내용 등록 </p>
	 * <pre>
	 * 가입설계관리(IT)
	 * </pre>
	 * @param param
	 * @return
	 * @throws BizException
	 */
	public int registerProdMainDesc(Map<String,Object> param) throws BizException {

		// 사번 등록
		param.put("entryUid", SessionUtils.getEplNo());
		
		// 기존 내용 삭제 후 재등록
		tbProdMainDescDao.deleteTbProdMainDesc(param);
		int count = tbProdMainDescDao.insertTbProdMainDesc(param);
		
		return count;
	}
}
