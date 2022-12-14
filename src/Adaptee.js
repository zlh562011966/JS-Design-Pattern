/**
 * 适配器模式
 */
class Adaptee {
    specificRequest() {
        return '德国标准插头';
    }
}

class Target {
    constructor() {
        this.adaptee = new Adaptee();
    }
    request() {
        let info = this.adaptee.specificRequest();
        return `${info}-转换器-中国标准插头`
    }
}

let target = new Target();
let res = target.request();
console.log(res); // 德国标准插头-转换器-中国标准插头
