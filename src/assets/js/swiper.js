/*
swiper({
    wrap: 父级元素,
    dir: 拖动方向(x/y),
    start(){
        // 手指按下回调函数
    },
    move(){
        //缓冲时对调函数
    }
    end(){
        // 手指抬起回调
    },
    over(){
        // 滚动结束回调
    },
    toTop(){
        // 滚动到页面头部回调函数
    },
    toBottom(){
        // 滚动到页面底部回调函数
    },
    backOut: 'none'/'back',
    scrollBar: 是否显示滚动条
})
*/


const swiper = ({ wrap, dir = "y", start, end, move, over, toTop, toBottom, backOut = 'none', scrollBar = true, isBuffer=true }) => {

    const scroll = wrap.children[0]; //要滚动的元素

    let startPoint = {}, //手指按下的坐标
        startEle = {}, //元素的位置
        distance = {}, //手指移动的距离
        targetEle = {}, //元素拖动时的位置

        // 缓冲相关
        curPoint = {}, //当前坐标
        lastPoint = {}, //上次坐标
        lastTime = 0, //上次时间
        nowTime = 0, //本次时间
        speed = 0,  //速度

        //拖动限制相关
        minRange = { //记录可以拖动的最小位置
            x: 0,
            y: 0
        },
        overRangeFlag = false, //当最后一次touchmove到touchend事件过长，拉力回弹不再进行缓冲，回不到相应位置

        //滚动条相关
        ratio = 1, // 容器元素高/滚动元素高
        bar = null; //滚动条

    //计算ratio和滚动条长度，
    const computedBar = () => {
        if (dir == 'x') { //横向滚动条
            ratio = wrap.clientWidth / scroll.offsetWidth;
            bar.style.width = ratio * wrap.clientWidth + 'px';
            bar.style.cssText += `left: 0; bottom: 0; height: 4px;`;
        } else { //纵向滚动条
            ratio = wrap.clientHeight / scroll.offsetHeight;
            bar.style.height = ratio * wrap.clientHeight + 'px';
            bar.style.cssText += `right: 0; top: 0; width: 4px;`;
        }
    }
    //添加滚动条
    if (scrollBar) {
        bar = document.createElement('div');
        bar.className = "scrollBar"; //预留类名
        bar.style.cssText = `position: absolute;
                             background: rgba(0, 0, 0, 0.4);
                             border-radius: 8px;
                             opacity: 0;`;
        computedBar();
        wrap.style.position = 'relative';
        wrap.appendChild(bar);
    }


    wrap.addEventListener('touchstart', event => {
        // 判断执行回调函数
        typeof start == 'function' && start.call(wrap, event);
        //速度归0，解决缓冲后再次只点击，仍会缓冲一段距离
        speed = 0;
        //
        overRangeFlag = false;
        //重新计算ratio和滚动条长度，并显示滚动条
        if(scrollBar){
            computedBar();
            css(bar, { opacity: 1 })
        }
        //清除缓冲的timer
        // cancelAnimationFrame(scroll.timer)
        // console.log('cancle')

        startPoint = {
            x: event.changedTouches[0].pageX,
            y: event.changedTouches[0].pageY
        };

        startEle = {
            x: css(scroll, 'translateX'),
            y: css(scroll, 'translateY')
        };

        lastPoint = startPoint;
        lastTime = Date.now();

        //给可以拖动的最小值赋值
        minRange = {
            x: wrap.offsetWidth - scroll.offsetWidth,
            y: wrap.offsetHeight - scroll.offsetHeight,
        }

        wrap.startPoint = startPoint;
    })

    wrap.addEventListener('touchmove', event => {
        //当前坐标
        curPoint = {
            x: event.changedTouches[0].pageX,
            y: event.changedTouches[0].pageY
        };
        nowTime = Date.now();

        // 手指移动距离
        distance = {
            x: event.changedTouches[0].pageX - startPoint.x,
            y: event.changedTouches[0].pageY - startPoint.y,
        }

        // 元素要移动到的位置
        targetEle = {
            x: startEle.x + distance.x,
            y: startEle.y + distance.y
        }


        //滑动范围显示/回弹
        if (backOut == 'none') { //超过范围，不再拖动
            targetEle[dir] = targetEle[dir] > 0 ? 0 : targetEle[dir]; //上拉到顶
            targetEle[dir] = targetEle[dir] < minRange[dir] ? minRange[dir] : targetEle[dir]; //下拉到底
        } else if (backOut == 'back') {
            if (targetEle[dir] > 0) { //上拉到顶
                targetEle[dir] *= 0.4;
                overRangeFlag = true;
            } else if (targetEle[dir] < minRange[dir]) {
                targetEle[dir] = minRange[dir] - (minRange[dir] - targetEle[dir]) * 0.4;
                overRangeFlag = true;
            }
        }

        // console.log(distance[dir], targetEle[dir])
        //给元素赋值
        css(scroll, { ['translate' + dir.toUpperCase()]: targetEle[dir] });

        if(scrollBar){
            css(bar, { ['translate' + dir.toUpperCase()]: -targetEle[dir] * ratio })
        }


        //记录速度距离/时间
        speed = (curPoint[dir] - lastPoint[dir]) / (nowTime - lastTime);
        //重新赋值
        lastTime = nowTime;
        lastPoint = curPoint;

        typeof move == 'function' && move.call(wrap, event);
        event.preventDefault();
    })

    wrap.addEventListener('touchend', event => {
        wrap.direction = targetEle[dir] ==  startEle[dir] ? 'no': (targetEle[dir] < startEle[dir] ? 'right' : 'left')


        // 速度 => 实现缓冲
        console.log(speed);

        //当手指滑动到最后一点到抬起时间大于100ms时，则不执行缓冲，默认用户想看当前内容
        if (isBuffer && (Date.now() - nowTime < 100 || overRangeFlag)) {
            let bufferDistance = speed * 300; //缓冲距离
            let target = Math.round(bufferDistance + css(scroll, 'translate' + dir.toUpperCase())); //目标值=当前+距离

            //当缓冲时缓冲到达的位置超过上拉下拉的范围，直接赋值范围
            if (target > 0) {
                if (target > 80) {
                    typeof toTop == 'function' && toTop.call(wrap, event);
                }
                target = 0;
            } else if (target < minRange[dir]) {
                target = minRange[dir];
            }

            tweenMove({
                el: scroll,
                type: 'easeOutStrong',
                target: {
                    ['translate' + dir.toUpperCase()]: target
                },
                time: 800,
                callIn() {
                    typeof move == 'function' && move.call(wrap, event);
                },
                callBack() {
                    if (target == minRange[dir]) {
                        typeof toBottom == 'function' && toBottom.call(wrap, event);
                    }
                    typeof move == 'function' && move.call(wrap, event);
                }
            })

            if(scrollBar){
                tweenMove({
                    el: bar,
                    type: 'easeOutStrong',
                    target: {
                        ['translate' + dir.toUpperCase()]: - target * ratio
                    },
                    time: 800,
                    callBack() {
                        css(bar, { opacity: 0 })
                    }
                })
            }
        }
        typeof end == 'function' && end.call(wrap, event);

    })
}


// tweenMove({
// 	el: 运动元素,
// 	type: 运动函数,
// 	target: {
// 		运动目标
// 	},
// 	time: 运动时间,
// 	callBack(){
// 		//动画结束回调
// 	},
// 	callIn(){
// 		//动画中回调
// 	}
// })


const tweenMove = ({ el, type, target, time, callBack, callIn }) => {
    let t = 0,
        b = {}, //初始值
        c = {}, //差值 = 目标值 - 初始值
        d = Math.round(time / 16.7), //向上取整
        nowAttr = {}, //存当前时间元素所处的位置
        flag = true; //判断是否全部属性都到达目标值


    cancelAnimationFrame(el.timer); //取消requestAnimationFrame

    //取初始值并赋值给b,计算差值赋给c
    for (let v in target) {
        b[v] = css(el, v);
        c[v] = target[v] - b[v];
    }

    requestAnimationFrame(move);

    function move() {
        t++;
        for (let v in target) {
            nowAttr[v] = Tween[type](t, b[v], c[v], d);

            if (target[v] != Math.round(nowAttr[v])) {	//如果用户给的值与目标值是一样，那就代表现在已经走到头了，运动需要结束了
                flag = false
            }
        }
        if (t > d || flag) { //若是时间到达或所有的属性均到达目标值时
            cancelAnimationFrame(el.timer);
            typeof callBack == 'function' && callBack.call(el);
            return;
        }

        css(el, nowAttr);
        typeof callIn == 'function' && callIn.call(el);
        el.timer = requestAnimationFrame(move);
    }

}







// tween
// Tween[linear](t, b, c, d)
//  t 当前时间
//  b 初始值
//  c  差值
//  d 总共时间
var Tween = {
    linear: function (t, b, c, d) {  //匀速
        return c * t / d + b;
    },
    easeIn: function (t, b, c, d) {  //加速曲线
        return c * (t /= d) * t + b;
    },
    easeOut: function (t, b, c, d) {  //减速曲线
        return -c * (t /= d) * (t - 2) + b;
    },
    easeBoth: function (t, b, c, d) {  //加速减速曲线
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInStrong: function (t, b, c, d) {  //加加速曲线
        return c * (t /= d) * t * t * t + b;
    },
    easeOutStrong: function (t, b, c, d) {  //减减速曲线
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeBothStrong: function (t, b, c, d) {  //加加速减减速曲线
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b;
        }
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    elasticIn: function (t, b, c, d, a, p) {  //正弦衰减曲线（弹动渐入）
        if (t === 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (!p) {
            p = d * 0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else {
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    elasticOut: function (t, b, c, d, a, p) {    //正弦增强曲线（弹动渐出）
        if (t === 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (!p) {
            p = d * 0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else {
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    elasticBoth: function (t, b, c, d, a, p) {
        if (t === 0) {
            return b;
        }
        if ((t /= d / 2) == 2) {
            return b + c;
        }
        if (!p) {
            p = d * (0.3 * 1.5);
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        }
        else {
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) {
            return - 0.5 * (a * Math.pow(2, 10 * (t -= 1)) *
                Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }
        return a * Math.pow(2, -10 * (t -= 1)) *
            Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    },
    backIn: function (t, b, c, d, s) {     //回退加速（回退渐入）
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    backOut: function (t, b, c, d, s) {
        if (typeof s == 'undefined') {
            s = 3.70158;  //回缩的距离
        }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    backBoth: function (t, b, c, d, s) {
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        }
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    bounceIn: function (t, b, c, d) {    //弹球减振（弹球渐出）
        return c - Tween['bounceOut'](d - t, 0, c, d) + b;
    },
    bounceOut: function (t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
        }
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
    },
    bounceBoth: function (t, b, c, d) {
        if (t < d / 2) {
            return Tween['bounceIn'](t * 2, 0, c, d) * 0.5 + b;
        }
        return Tween['bounceOut'](t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    }
}

// css(dom, String/Object)
const css = (ele, attr) => {
    // ele: dom元素, attr: 字符串 / 对象

    // 存储transform
    let transformArr = ['rotate', 'rotateX', 'rotateY', 'rotateZ',
        'translate', 'translateX', 'translateY', 'translateZ',
        'scale', 'scaleX', 'scaleY',
        'skew', 'skewX', 'skewY']

    // 1.判断attr是否为对象 => 获取属性值还是设置属性
    const getOrSet = (a) => {
        if (Object.prototype.toString.call(a) == '[object Object]') {
            return true;
        }
        return false;
    }

    const transform = (transArr) => {
        //ele.transform = {}  存储调用该方法设置过的transform相关属性

        if (!ele.transform) {
            ele.transform = {}; //第一次
        }

        if (!getOrSet(attr)) { //获取transform相关属性
            if (!Object.keys(ele.transform).includes(attr)) {//从未调用该方法设置过，返回默认值
                if (['scale', 'scaleX', 'scaleY'].includes(attr)) {
                    return 1;
                } else {
                    return 0;
                }
            }
            return ele.transform[attr];
        } else { //设置transform相关属性

            // 保存属性
            for (let v of transArr) {
                ele.transform[v] = attr[v];
            }

            //拼接属性值及单位  rotate/skew: deg   translate: px   scale: 无
            let str = '';
            for (let v in ele.transform) {
                switch (v) {
                    case 'rotate':
                    case 'rotateX':
                    case 'rotateY':
                    case 'rotateZ':
                    case 'skew':
                    case 'skewX':
                    case 'skewY':
                        str += v + `(${ele.transform[v]}deg) `;
                        break;
                    case 'translate':
                    case 'translateX':
                    case 'translateY':
                    case 'translateZ':
                        str += v + `(${ele.transform[v]}px) `;
                        break;
                    case 'scale':
                    case 'scaleX':
                    case 'scaleY':
                        str += v + `(${ele.transform[v]}) `;
                        break;
                }
            }
            ele.style.transform = str;
        }
    }

    if (!getOrSet(attr)) {  //获取
        // 判断是否为transform里的属性
        if (transformArr.includes(attr)) {  //返回true/false，判断该值是否存在该数组中
            return transform();
        } else {
            return parseFloat(getComputedStyle(ele)[attr])
        }
    } else {
        // 设置
        const attrKeys = Object.keys(attr);
        // console.log(attr, attrKeys);

        //transform以外的属性赋值
        for (let v of attrKeys) {
            if (!transformArr.includes(v)) {
                ele.style[v] = v == 'opacity' ? attr[v] : attr[v] + 'px';
            }
        }

        let arr = attrKeys.filter((item) => {
            return transformArr.includes(item)
        })
        transform(arr)
    }
}




//手势事件

/*gestureFunc({
    el: dom元素,
    start(){
        //对应gesturestart，多手指摁下事件
    },
    change(){
        //对应gesturechange，多手指移动事件
    },
    end(){
        //对应gestureend,手指抬起事件
    }
})*/
const gestureFunc = ({ el, start, change, end }) => {
    let isGesture = false,  //表示是否是多手指
        startPointDis = 0,  //touchstart时两指之间距离
        movePointDis = 0, //touchmove时两指之间距离
        startPointAngle = 0,
        movePointAngle = 0,
        domScale = 1, //存放元素scale值，用于缩放以后，再次缩放时是在上次的基础上
        domRotate = 0, //存放元素rotate值，用于旋转以后，再次旋转时是在上次的基础上

        // 单手指操作相关变量
        startPoint = {},
        moveDistance = {},
        startEle = {},
        targetEle = {},
        isSingle = false;

        el.scale = 1;
        el.rotation = 0;


    el.addEventListener('touchstart', event => {
        if (event.touches.length >= 2) {  //触屏手指多于两个
            isGesture = true;
            let touches = event.touches;
            typeof start == 'function' && start.call(el, event);

            startPointDis = getDistance(touches[0], touches[1], 'distance');
            startPointAngle = getDistance(touches[0], touches[1], 'angle');

            domScale = css(el, 'scale');
            domRotate = css(el, 'rotate');
        }else{
            isSingle = true;
            let touches = event.touches;
            startPoint = {
                x: touches[0].pageX,
                y: touches[0].pageY,
            };
            startEle = {
                x: css(el, 'translateX') * el.scale,
                y: css(el, 'translateY') * el.scale
            }
        }
    })
    el.addEventListener('touchmove', event => {
        if (isGesture && event.touches.length >= 2) { //就算isGesture，也可能只有一根手指移动的情况
            let touches = event.touches;

            movePointDis = getDistance(touches[0], touches[1], 'distance');
            el.scale = movePointDis / startPointDis * domScale;   //两指移动时距离 / 开始距离 * 元素的缩放值

            movePointAngle = getDistance(touches[0], touches[1], 'angle');
            el.rotation = movePointAngle - startPointAngle + domRotate; //移动的角度 - 开始的角度 + 元素的旋转角度

            typeof change == 'function' && change.call(el, event)
        }else if(event.touches.length < 2 && isSingle){
            let touches = event.touches;

            moveDistance = {
                x: touches[0].pageX - startPoint.x,
                y: touches[0].pageY - startPoint.y
            };
            targetEle= {
                x:( moveDistance.x + startEle.x) / el.scale,
                y: (moveDistance.y + startEle.y) /el.scale
            };
            css(el, {translateX: targetEle.x, translateY: targetEle.y});
        }
    })
    el.addEventListener('touchend', event => {

        if(el.scale > 2){    //手指离开时，若scale大于2，缓冲运动变回scale = 2
            el.scale = 2;
            tweenMove({
                el: el,
                type: 'easeOutStrong',
                target: {
                    scale: 2
                },
                time: 800
            })
        }else if(el.scale <= 0.75){ //手指离开时，若scale小于2，缓冲运动变回scale = 0.75
            el.scale = 0.75;
            tweenMove({
                el: el,
                type: 'easeOutStrong',
                target: {
                    scale: 0.75
                },
                time: 800
            })
        }

        // if(movePointAngle - startPointAngle > 0){  //顺时针旋转
        //     let num = Math.ceil(el.rotation / 90);
        //     el.rotation = num * 90;
        //     tweenMove({
        //         el: el,
        //         type: 'easeOutStrong',
        //         target: {
        //             rotate: el.rotation
        //         },
        //         time: 800
        //     })
        // }else {  //逆时针旋转
        //     let num = Math.ceil(-el.rotation  / 90);
        //     el.rotation = - num * 90;
        //     tweenMove({
        //         el: el,
        //         type: 'easeOutStrong',
        //         target: {
        //             rotate: el.rotation
        //         },
        //         time: 800
        //     })
        // }

        if (isGesture) {
            typeof end == 'function' && end.call(el, event)
        }
        isGesture = false;
        isSingle = false;
    })
}

function getDistance(point1, point2, type) {
    let x = point2.pageX - point1.pageX,
        y = point2.pageY - point1.pageY;

    if (type == 'distance') {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    } else if (type == 'angle') {
        return Math.atan2(y, x) * 180 / Math.PI;
    }
}
export default swiper;
