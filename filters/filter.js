/** 
 * 计算传入时间和当前时间差 
 * @param d 时间 格式：2010-04-10 10:22:36 
 * @return 
 */
export function getDateDiff(b) { //就算时间差

	var now = new Date().getTime();
	var diffValue = now - Date.parse(b.replace(/-/g, '/').replace(/：/g, ":"));
	if (diffValue < 0) {
		return "";
	}
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var monthC = diffValue / month;
	var weekC = diffValue / (7 * day);
	var dayC = diffValue / day;
	var hourC = diffValue / hour;
	var minC = diffValue / minute;
	var result;
	if (monthC >= 1) {
		result = parseInt(monthC) + "个月前";
	} else if (weekC >= 1) {
		result = parseInt(weekC) + "个星期前";
	} else if (dayC >= 1) {
		result = parseInt(dayC) + "天前";
	} else if (hourC >= 1) {
		result = parseInt(hourC) + "个小时前";
	} else if (minC >= 1) {
		result = parseInt(minC) + "分钟前";
	} else if (minC < 1) {
		result = "刚刚";
	} else {
		result = "";
	}

	return result;
}


Date.prototype.format = function(format) { //格式化时间  new Date().format("yyyy-MM-dd hh:mm:ss");
	/*
	 * eg:format="YYYY-MM-dd hh:mm:ss";
	 */
	var o = {
		"M+": this.getMonth() + 1, // month
		"d+": this.getDate(), // day
		"h+": this.getHours(), // hour
		"m+": this.getMinutes(), // minute
		"s+": this.getSeconds(), // second
		"q+": Math.floor((this.getMonth() + 3) / 3), // quarter
		"S": this.getMilliseconds()
		// millisecond
	}

	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "")
			.substr(4 - RegExp.$1.length));
	}

	for (var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] :
				("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
}


function add0(m) {
	return m < 10 ? '0' + m : m
}

function format(shijianchuo) {
	//shijianchuo是整数，否则要parseInt转换
	var time = new Date(shijianchuo);
	var y = time.getFullYear();
	var m = time.getMonth() + 1;
	var d = time.getDate() + 1;
	var h = time.getHours() + 1;
	var mm = time.getMinutes() + 1;
	var s = time.getSeconds() + 1;
	return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
}
export function timesa(value) {
	var time = new Date(value).format("yyyy-MM-dd");
	return time
}
export function XJstatus(value) {
	let status
	if (value == 0) {
		status = '待整改'
	} else if (value == 1) {
		status = '已整改'
	} else if (value == 2) {
		status = '待审核'
	}
	return status
}
