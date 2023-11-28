import router from '@system.router';

export default {
    data: {
        title: "",
        productName: "",
        price: "",
        logo: "EXCELLENT PICK"
    },
    onInit() {
        this.title = "Hello World";
        this.productName = "华为Watch4Pro心率检测运动健康ESIM功能手表";
        this.price = "$2090";
    },
    product() {
        router.push({
            "uri": "pages/product/product"
        })
    }
}
