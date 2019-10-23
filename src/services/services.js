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
}

export default Product
