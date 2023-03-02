/*
const tfboys = ['易烊千玺','王元','王俊凯']
console.log(...tfboys)
*/

/**
 * 实现数组合并
 *
 */

const longquan = ['goudan','ganzi']
const master = ['gaozi','xiaojing']
const single = ['yangzi','guanghao']
//合并数组
const res  = [...master,...single,...longquan]
console.log(res)