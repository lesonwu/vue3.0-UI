// 导入组件
import MyColorPicker from './color-picker'
import Button from './button'

// 存储组件列表
const components = [
    MyColorPicker,
    Button
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = (Vue)=> {
// 判断组件是否安装，如果安装了就不安装了
if (install.installed) return
    // 遍历注册全局组件，全局注册组件的两种方法
    // components.map(component => Vue.component(component.name, component))
    components.map(component => Vue.use(component))
}

// 判断是否是直接引入文件,检测到vue才去执行
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    // colorPicker,
    // button
    // 使用扩展运算符展开所有组件
    ...components
}