
import Storage from '@system.storage';

export default {
    data: {
        title: "",
        productName: "",
        price: "",
        taobao: "",
        jingdong: "",
        pinduoduo: "",
        taobaoname: "淘宝价：",
        jingdongname : "京东价：",
        pinduoduoname : "拼多多价：",
        detail: "查看更多资料 >>",
        tuijianjia: "推荐价"
    },
    onInit() {
        this.title = "Hello World";
        this.productName = "华为Watch4Pro心率检测运动健康ESIM功能手表";
        this.price = "$2090";
        this.taobao = "$2080";
        this.jingdong = "$3090";
        this.pinduoduo = "$2070";
        
    },
}
