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
        pwd:str.passworda,
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
  //地址---省份
 address_list() {
   return _http.request({
     type: 'post',
     url: 'user/m/login?deviceId=007&deviceName=monkey',
    
   })
  }
  ////添加地址接口
   addressa_list_user(str) {
     return _http.request({
       type: 'post',
       url: 'user/shipping-address/add',
       data: {
         address: str.addressab.address_det,
         cityId: str.addressab.ida,
         code: str.addressab.number_add,
         linkMan: str.addressab.user,
         mobile: str.addressab.phone,
         provinceId: str.addressab.id,
         token: str.token,
         checked:str.checked,
       }
     })
  }
   ////显示地址列表接口
   addressa_list_list(str) {
     return _http.request({
       type: 'post',
       url: 'user/shipping-address/list',
       data: {
        token:str
       }
     })
  }
    ////删除地址列表接口
    det_addressa_list(str,num) {
      return _http.request({
        type: 'post',
        url: 'user/shipping-address/delete',
        data: {
          token: str,
          id:num,
        }
      })
  }
  //修改地址列表接口
   up_addressa_list(str, num) {
     return _http.request({
       type: 'post',
       url: 'user/shipping-address/update',
       data: {
         token: str,
         id: num,
       }
     })
  }
  //添加订单页面数据 
   list_order(str,num) {
     return _http.request({
       type: 'post',
       url: 'order/create',
       data: {
         token: str,
         goodsJsonStr: num,
       }
     })
   }
   //  点击尺寸时 需要请求的数据接口
   change_sizea(obj) {
     return _http.request({
       type: 'post',
       url: 'shop/goods/price',
       data: {
        goodsId: obj.goodsId,
        propertyChildIds: obj.propertyChildIds,
       }
     })
  }
  
   //  点击颜色时 需要请求的数据接口
   change_colora(obj) {
     return _http.request({
       type: 'post',
       url: 'shop/goods/price',
       data: {
         goodsId: obj.goodsId,
         propertyChildIds: obj.propertyChildIds+","+obj.id,
       }
     })
  }
  //  订单列表数据接口
  list_order_list(obj) {
    return _http.request({
      type: 'post',
      url: 'order/list',
      data: {
       token: obj,
       }
    })
  }
  //默认收货地址
  order_aaa(obj) {
    return _http.request({
      type: 'post',
      url: 'user/shipping-address/default',
      data: {
        token: obj
      }
    })
  }
  //订单的详情数据
order_deta(obj,str) {
  return _http.request({
    type: 'post',
    url: 'order/detail',
    data: {
      token: obj,
      id:str
    }
  })
}
}

export default Product
