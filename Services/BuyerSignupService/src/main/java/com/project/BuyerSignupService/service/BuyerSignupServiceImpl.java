package com.project.BuyerSignupService.service;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.BuyerSignupService.dao.BuyerSignupDao;
import com.project.BuyerSignupService.dao.entity.BuyerSignupEntity;
import com.project.BuyerSignupService.model.BuyerSignupPojo;


@Service
public class BuyerSignupServiceImpl implements BuyerSignupService{
	
	static Logger LOG = Logger.getLogger(BuyerSignupServiceImpl.class.getClass());
	@Autowired
	BuyerSignupDao buyerDao;

	@Override
	@Transactional
	public BuyerSignupPojo addBuyer(BuyerSignupPojo buyerPojo) {
		LOG.info("entered addBuyer()");
		BuyerSignupEntity buyerSignupEntity = new BuyerSignupEntity(buyerPojo.getId(),
				buyerPojo.getFirstname(),
				buyerPojo.getMiddlename(),
				buyerPojo.getLastname(),
				buyerPojo.getAddress(),
				buyerPojo.getEmail(), 
				buyerPojo.getUsername(),
				buyerPojo.getPassword(), 
				buyerPojo.getCreditcardtype(),
				buyerPojo.getCardnumber(),
				buyerPojo.getExpiration(), 
				buyerPojo.getCvv(),
				buyerPojo.getMiles());
		
		buyerDao.save(buyerSignupEntity);
		LOG.info("Exited addBuyer()");
		return buyerPojo;
	}		

}
