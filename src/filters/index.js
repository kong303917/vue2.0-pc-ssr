import address from '../../config/address.config'

export const dateTransform = (val) => {
    var _date=new Date(val)
    var _year=_date.getFullYear(),
    _month=_date.getMonth()+1,
    _day=_date.getDate(),
    _hour=_date.getHours(),
    _minute=_date.getMinutes()
    function addZero(target){
        if (target<10){
            target='0'+target
        }
        return target
    }
    return _year+'年'+addZero(_month)+'月'+addZero(_day)+'日  '+addZero(_hour)+':'+addZero(_minute)
}

export const localeDate = (val, type, spe) => {
    var _date=new Date(val)
    if (type=='date'){
        return _date.toLocaleDateString()
    }else{
        return _date.toLocaleTimeString()
    }
}

export const subStr = (val, length, addEllipsis) => {
    var endStr,
        addEllipsis = addEllipsis || true,
        strLength,
        notChineseStrLength,
        excludeStrLength
    if (val){
        // 计算非中文字符长度
        notChineseStrLength=val.split(/[\x00-\xff]/).length-1
        // 排除@%<>等显示宽度和中文差不多的字符
        excludeStrLength=val.split(/[@%<>]/).length-1
        strLength=val.length-notChineseStrLength+Math.round((notChineseStrLength-excludeStrLength)/2);

        addEllipsis && strLength>length ? endStr='...' : endStr=''                
        return val.substr(0,length)+endStr
    }else{
        return ''
    }
}

export const imgCdn = (val) => {
    return address.IMG_ADDRESS + val
}

/*export default {
    dateTransform: (val) => {
        var _date=new Date(val)
        var _year=_date.getFullYear(),
        _month=_date.getMonth()+1,
        _day=_date.getDate(),
        _hour=_date.getHours(),
        _minute=_date.getMinutes()
        function addZero(target){
            if (target<10){
                target='0'+target
            }
            return target
        }
        return _year+'年'+addZero(_month)+'月'+addZero(_day)+'日  '+addZero(_hour)+':'+addZero(_minute)
    },
    localeDate: (val, type, spe) => {
        var _date=new Date(val)
        if (type=='date'){
            return _date.toLocaleDateString()
        }else{
            return _date.toLocaleTimeString()
        }
    },
    subStr: (val, length, addEllipsis) => {
        var endStr,
            addEllipsis = addEllipsis || true,
            strLength,
            notChineseStrLength,
            excludeStrLength
        if (val){
            // 计算非中文字符长度
            notChineseStrLength=val.split(/[\x00-\xff]/).length-1
            // 排除@%<>等显示宽度和中文差不多的字符
            excludeStrLength=val.split(/[@%<>]/).length-1
            strLength=val.length-notChineseStrLength+Math.round((notChineseStrLength-excludeStrLength)/2);

            addEllipsis && strLength>length ? endStr='...' : endStr=''                
            return val.substr(0,length)+endStr
        }else{
            return ''
        }
    },
    imgCdn: (val) => {
        return address.IMG_ADDRESS + val
    }
}*/