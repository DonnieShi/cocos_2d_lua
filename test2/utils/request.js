import Promise from 'es6-promise.min'
module.exports = (options) =>{
	return new Promise((resolve,reject) =>{
		options = Object.assin(options,{
			success(result){
				if (result.statusCode == 200) {
					resolve(result.data);
				}else{
					reject(result);
				}
			},
			fail:reject,
		});
		wx.request(options);
	});
};