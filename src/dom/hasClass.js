/**
 *
 * @desc 判断元素是否含有某个class
 * @param {HTMLElement} el
 * @param {String} className
 * @returns {Boolean}
 */
function hasClass(el, className) {
    return el.classList.contains(className)
}

module.exports = hasClass
