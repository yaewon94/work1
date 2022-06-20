package dms.biz.qm.ad.dao;

import java.util.Map;

import org.springframework.stereotype.Repository;
import com.dongbulife.web.baseLayer.BaseMybatisDao;

@Repository
public class TbProdMainDescDao extends BaseMybatisDao{

	/**
	 * New 핵심상품설명서 등록
	 * @param inParam
	 * @return
	 */
	public int insertTbProdMainDesc(Map<String,Object> inParam){
		return this.getSqlSession().insert("TB_PROD_MAIN_DESC.insertTbProdMainDesc", inParam);
	}
	
	/**
	 * New 핵심상품설명서 삭제
	 * @param inParam
	 * @return
	 */
	public int deleteTbProdMainDesc(Map<String,Object> inParam){
		return this.getSqlSession().delete("TB_PROD_MAIN_DESC.deleteTbProdMainDesc", inParam);
	}
}
