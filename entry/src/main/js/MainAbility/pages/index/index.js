import router from '@system.router';
import Storage from '@system.storage';

export default {
    data: {
        title: "",
        app: ""
    },
    onInit() {
        this.title = "请注意，我们将基于第三方软件给用户提供服务。我们将不会收集个人信息，但是为了提升服务，将申请网络权限。若无法同意我们使用终端的网络权限，则请勿使用本软件并退出。感谢您的理解。";
        this.app = "优选";
        this.englishapp = "EXCELLENT PICK";
    },
    quit() {
        router.back();
    },
    goHome() {
        
        router.push({
            "uri": "pages/home/home"
        })
    }
}



