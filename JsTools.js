/**
 * 判断参数是否是数组
 * @param  {[type]}  value 需要被判断的参数
 * @return {String}  如果是数组返回'array'，如果不是返回undefined
 */
function isArray(value) {
    if (value instanceof Array ||
        (!(value instanceof Object) &&
            (Object.prototype.toString.call((value)) == '[object Array]') ||
            typeof value.length == 'number' &&
            typeof value.splice != 'undefined' &&
            typeof value.propertyIsEnumerable != 'undefined' &&
            !value.propertyIsEnumerable('splice'))) {
        return 'array';
    }
}
