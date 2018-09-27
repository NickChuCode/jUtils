/**
 *
 * @desc 打乱数据，随机重新排列
 * @param {Array} arr
 * @returns {Array}
 */
function shuffle(arr) {
    let _arr = arr.slice()
    for (let i = 0; i < _arr.length; i++) {
        let j = getRandomInt(0, i)
        let t = _arr[i]
        _arr[i] = _arr[j]
        _arr[j] = t
    }
    return _arr
}

module.exports = shuffle
