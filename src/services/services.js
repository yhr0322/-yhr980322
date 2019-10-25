import HTTP from '../utils/http'
const _http = new HTTP()
class Product {
  // list方法
  list() {
    return _http.request({
      url: 'banner/list'
    })
  }
  Special_list() {
    return _http.request({
      url: 'cms/news/list'
    })
  }
   bbbb_list() {
     return _http.request({
        type: 'post',
       url: 'shop/goods/category/all'
     })
   }
  // detail方法
  kanjiadetail(productId) {
    return _http.request({
      type: 'post',
      url: 'shop/goods/kanjia/info',
      data: {
        id: productId
      }
    })
  }

   f_det_list(productId) {
     return _http.request({
       url: `shop/goods/list?id=${productId}`,
       
     })
  }
  
  f_det_det(productId) {
    return _http.request({
      url: `shop/goods/detail?id=${productId}`,

    })
  }

   special_all(id) {
     return _http.request({
       url: `cms/news/detail?id=${id}`,

     })
   }

  login_sub (str) {
    return _http.request({
      type: 'post',
      url: 'user/m/login?deviceId=007&deviceName=monkey',
      data: {
        mobile: str.phone,
        pwd:str.password,
      }
    })
  }


  reg_num(reg_num) {
    return _http.request({
      type: 'post',
      url: 'verification/pic/get',
      data: {
       key: reg_num,
       
      }
    })
  }


  update_img(obj_up) {
    return _http.request({
      type: 'post',
      url: 'verification/sms/get',
      data: {
        mobile: obj_up.phone,
          key: obj_up.time,
          picCode: obj_up.pic_up

      }
    })
  }


sub_img(obj) {
  return _http.request({
    type: 'post',
    url: 'verification/sms/get',
    data: {
      mobile: obj.phone,
      key: obj.time,
      picCode: obj.pic_str

    }
  })
}


  register_sub(obj_num) {
    return _http.request({
      type: 'post',
      url: 'user/m/register',
      data: {
        mobile: obj_num.phone,
       code:obj_num.code,
         pwd: obj_num.rpassword
      }
    })
  }
 update_sub(obj_update) {
   return _http.request({
     type: 'post',
     url: 'user/m/reset-pwd',
     data: {
       mobile: obj_update.phone,
       code: obj_update.code,
       pwd: obj_update.pwd
     }
   })
 }


}

export default Product
