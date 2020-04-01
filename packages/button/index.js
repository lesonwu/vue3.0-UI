// 导入组件，组件必须声明 name
import MyButton from './src/button.vue'

// 为组件提供 install 安装方法，供按需引入
MyButton.install = Vue=> {
      Vue.component(MyButton.name, MyButton)
}

// 默认导出组件
export default MyButton