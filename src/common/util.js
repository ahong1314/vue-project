
// 服务端YYYY-MM-DD HH:mm:ss格式的字符串全浏览器兼容构造Date对象, 不传参数返回当前时间
export function mDate(str) {
    return str ? new Date(typeof str == 'string' ? (str.replace(' ', 'T') + '+08:00') : str) : new Date();
}

export function dateDiff(d1, d2) {
    let d = Math.abs(d1.valueOf() - d2.valueOf()) / 1000; // delta
    const r = {}; // result
    const s = { 
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };

    Object.keys(s).forEach(function(key) {
        r[key] = Math.floor(d / s[key]);
        d -= r[key] * s[key];
    });

    return r;
}

export function countdownFormat( countdown ) {
    const cd = countdown;
    let str = `${cd.day > 0 ? cd.day + '天' : ''}${cd.hour > 0 ? pad(cd.hour) + ':' : ''}`;
    return str += `${pad(cd.minute)}:${pad(cd.second < 0 ? 0 : cd.second)}`;

    function pad(str) {
        str += '';
        return str.padStart( 2, '0');
    }
}
