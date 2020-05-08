import { message } from 'antd';

message.config({
    duration: 2,
    maxCount: 1,
});

const uuid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    // return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    return s4() + s4() + '-' + s4();
};
const toast = (type, text) => {
    if(text){
        if(type === 'success'){
            message.success(text);
        } else if(type === 'warning'){
            message.warning(text);
        } else if(type === 'error') {
            message.error(text);
        }
    }
};
export {
    uuid,
    toast
}
