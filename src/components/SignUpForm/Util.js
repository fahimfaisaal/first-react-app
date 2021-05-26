class Util {
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
        if (expression) {
            return true;
        }

        return false;
    }
}

export default Util;