/*
  两种全局注册组件的方法
  vue.component()
  vue.use() 前提你的组件里边必须有一个install方法
*/
<template>
    <button class="my-button" :class="[
        `my-button-${this.type}`,
        {'is-plain':plain},
        {'is-circle':circle},
        {'is-round':round},
        {'is-disabled':disabled}
      ]" @click="handleClick">
      <!-- 插槽 -->
      <i :class="icon"></i>
      <!-- 如果插槽没有进来，就不显示 -->
      <span v-if="$slots.default">
        <slot></slot>
      </span>
    </button>
</template>

<script>
export default {
    name:'MyButton',
    // props:['type'],
    props:{
      type:{
        type:String,
        default:'default'
      },
      icon:{
        type:String,
        default:''
      },
      plain:{
        type:Boolean,
        default:false
      },
      circle:{
        type:Boolean,
        default:false
      },
      round:{
        type:Boolean,
        default:false
      },
      disabled:{
        type:Boolean,
        default:false
      }

    },
    created(){
      console.log(this.type)
      //获取所有的插槽
      console.log(this.$slots)
    },
    methods:{
      handleClick(e){
        this.$emit('click',e)  //向父组件派发一个click事件,e表示参数
        console.log(e)
      }
    },
    components:{

    }
}
</script>

<style lang="scss">
.my-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    margin-right:10px;
}
.my-button-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
}
.my-button-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
}
.my-button-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
}
.my-button-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
}
.my-button-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
}
.is-circle{
  border-radius: 50%;
  padding:20px;
}
.is-round{
  border-radius: 20px;
  padding:12px 23px;
}
.is-disabled{
  color:#c0c4cc;
  cursor: not-allowed;
  border-color:#ebeef5;
}
.my-button-primary.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
}
.my-button-success.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
}
.my-button-info.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
}
.my-button-warning.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
}
.my-button-danger.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
}
</style>
