
const BREAKPOINTS = {
    mobile: 425,
    tablet: 768,
    tablet_landscape: 1024,
    desktop: 1200,
    desktop_large: 1440,
    hd: 1920,
}

const plugin = {
    install(Vue, options) {
        const _breakpoints = options || BREAKPOINTS
        const eventBus$ = new Vue();
        window.addEventListener('resize', () => {
            eventBus$.$emit('$vueNotVisible', window.innerWidth)
        })
        Vue.directive('not-visible', {
            bind(el, binding) {
                let removeChild = document.createComment(' ');
                if (!_breakpoints[binding.value]) {
                    throw new Error(`Missing breakpoint for ${binding.value}`)
                }
                eventBus$.$on('$vueNotVisible', value => {
                    if (_breakpoints[binding.value] > value) {
                        if (el.parentNode) {
                            el.parentNode.replaceChild(removeChild, el)
                        }
                    } else {
                        if (removeChild.parentNode) {
                            removeChild.parentNode.replaceChild(el, removeChild)
                        }
                    }
                })
            },
            inserted() {
                window.dispatchEvent(new Event('resize'));
            }
        })
    }
}

export default plugin