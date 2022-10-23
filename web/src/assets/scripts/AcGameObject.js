import { UNREF } from "@vue/compiler-core";

const AC_GAME_BOJECTS = [];

export class AcGameObject {
    constructor() {
        AC_GAME_BOJECTS.push(this);
        this.timedelta = 0;
        this.has_called_start = false;
    }

    start() { // 只执行一次

    }

    update() { // 每一帧执行一次，除了第一帧之外

    }

    on_destroy() { // 删除之前操作
        
    }

    destroy() {
        this.on_destroy();

        for(let i in AC_GAME_BOJECTS){
            const obj = AC_GAME_BOJECTS[i];
            if(obj == this){
                AC_GAME_BOJECTS.splice(i);
                break;
            }
        }
    }
}

let last_timestamp; // 上一次执行的时刻
const step = timestamp => {
    // of 遍历的是值 in 遍历的是下标
    for(let obj of AC_GAME_BOJECTS){
        if(!obj.has_called_start){
            obj.has_called_start = true;
            obj.start();
        }else{
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(step);
} 

//在下一帧 的时候 执行 step函数
requestAnimationFrame(step);