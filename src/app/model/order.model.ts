// 订单信息
export default {
  cartGoodsList: null,  // 购物车商品清单-orderCreatePage
  merchantList: null,   // 门店列表
  bookDateItems: null,  // 下单日期列表
  bookTimeItems: null,  // 下单时间列表
  fee: 0, // 蛋糕金额
  orderList: [],  // 订单列表
  orderId: null,  // 当前订单id
  orderDetail: null,  // 当前订单详情
  stateObj: { unpaid: 0, unshipped: 0, shipped: 0, completed: 0 }, // 记录订单状态的数量

  orderParams: {  // 当前params
    delivery_type: 1,  // 提货方式 1-门店自提，2-快递到家
    withcard: 0,  // 是否需要生日牌 默认0
    needinvoice: 0, // 是否需要发票 默认0
    withcoupon: 0,  //是否使用代金券 默认0
    merchantid: null, // 自提门店ID
    mobile: null,  // 自提联系方式
    pickupdate: null,  // 自提日期
    pickuptime: null, // 自提时间段
  },   
  initParams: { // 初始化params
    delivery_type: 1,  // 提货方式 1-门店自提，2-快递到家
    withcard: 0,  // 是否需要生日牌 默认0
    needinvoice: 0, // 是否需要发票 默认0
    withcoupon: 0,  //是否使用代金券 默认0
    merchantid: null, // 自提门店ID
    mobile: null,  // 自提联系方式
    pickupdate: null,  // 自提日期
    pickuptime: null, // 自提时间段
  }
}

