class Util {
    static CSS(selector, styles) {
        for (let key in styles) {
            selector.style[key] = styles[key];
        }
    }
}

export default Util;