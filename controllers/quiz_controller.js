// GET /quizes/question
exportss.question=function(req,res){
 res.render('quizes/question',{pregunta:'Capital de Italia'});
 }
};
//GET /quizes/answer
exports.answer=function(req,res){
	if(req.query.respusta==='Roma'){
		res.render('quizes/answer',{respuesta:'Correcto'});
	}else{
		res.render('quizes/answer',{respuesta:'Incorrecto'});
	}
};






