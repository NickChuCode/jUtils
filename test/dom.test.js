describe('DOM API:', function () {
    describe('#addClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`jutils.addClass($ele, 'test') should return true`, function () {
            jutils.addClass($ele, 'test')
            assert(jutils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#hasClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_hasClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_hasClass')
            jutils.addClass($ele, 'test')
        })
        it(`jutils.hasClass($ele, 'test') should return true`, function () {
            assert(jutils.hasClass($ele, 'test'))
        });
        it(`jutils.hasClass($ele, 'test') should return false`, function () {
            assert(!jutils.hasClass($ele, 'test2'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });
});
