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
}

export default Product
