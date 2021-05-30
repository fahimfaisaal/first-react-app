class Util {
    static $(el) {
        return document.querySelector(el);
    }

    static $$(el) {
        return [...document.querySelectorAll(el)];
    }

    static CSS(selector, styles) {
        for (let key in styles) {
            selector.style[key] = styles[key];
        }
    }

    static addGlobalEventListener(event, selector, callBack) {
        document.addEventListener(event, e => {
            if (e.target.matches(selector)) {
                callBack(e)
            }
        })
    }

    static trueFalse(expression) {
        if (expression === '0') {
            expression = 1
        }

        if (expression) {
            return true;
        }

        return false;
    }

    static splitString(str) {
        return {
            length: str.length,
            uppercase: str.replace(/[^A-Z]/g, ''),
            lowercase: str.replace(/[^a-z]/g, ''),
            digit: str.replace(/[\D]/g, ''),
            specialChar: str.replace(/[^\W_]/g, '')
        }
    }
}

export default Util;