// /packages/color-picker/index.js
// 导入组件，组件必须声明 name
import MyColorPicker from './src/color-picker.vue'

// 为组件提供 install 安装方法，供按需引入
MyColorPicker.install = function (Vue) {
      Vue.component(MyColorPicker.name, MyColorPicker)

}

// 默认导出组件
export default MyColorPicker