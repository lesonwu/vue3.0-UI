<template>
  <div>
    <!-- 按钮 -->
    <div class="row">
        <my-button type="default">默认按钮</my-button>
        <my-button type="primary">主要按钮</my-button>
        <my-button type="success">成功按钮</my-button>
        <my-button type="info">信息按钮</my-button>
        <my-button type="warning">警告按钮</my-button>
        <my-button type="danger">危险按钮</my-button>
    </div>
    <!-- 普通按钮 -->
    <div class="row">
        <my-button type="default" plain>默认按钮</my-button>
        <my-button type="primary" plain>主要按钮</my-button>
        <my-button type="success" plain>成功按钮</my-button>
        <my-button type="info" plain>信息按钮</my-button>
        <my-button type="warning" plain>警告按钮</my-button>
        <my-button type="danger" plain>危险按钮</my-button>
    </div>
    <!-- 带图标按钮 -->
    <div class="row">
        <my-button icon="el-icon-search" circle>默认按钮</my-button>
        <my-button type="primary" icon="el-icon-edit" circle>主要按钮</my-button>
        <my-button type="success" icon="el-icon-check" circle>成功按钮</my-button>
        <my-button type="info" icon="el-icon-message" circle>信息按钮</my-button>
        <my-button type="warning" icon="el-icon-star-off" circle>警告按钮</my-button>
        <my-button type="danger" icon="el-icon-delete" circle>危险按钮</my-button>
    </div>
    <!-- 圆弧按钮 -->
    <div class="row">
        <my-button icon="el-icon-search" round>默认按钮</my-button>
        <my-button type="primary" icon="el-icon-edit" round>主要按钮</my-button>
        <my-button type="success" icon="el-icon-check" round>成功按钮</my-button>
        <my-button type="info" icon="el-icon-message" round>信息按钮</my-button>
        <my-button type="warning" icon="el-icon-star-off" round>警告按钮</my-button>
        <my-button type="danger" icon="el-icon-delete" round>危险按钮</my-button>
    </div>
    <!-- 禁用按钮 -->
    <div class="row">
        <my-button icon="el-icon-search" disabled>默认按钮</my-button>
        <my-button type="primary" icon="el-icon-edit" disabled>主要按钮</my-button>
        <my-button type="success" icon="el-icon-check" disabled>成功按钮</my-button>
        <my-button type="info" icon="el-icon-message" disabled>信息按钮</my-button>
        <my-button type="warning" icon="el-icon-star-off" disabled>警告按钮</my-button>
        <my-button type="danger" icon="el-icon-delete" disabled>危险按钮</my-button>
    </div>
    <!-- 点击事件 -->
    <div class="row">
        <my-button type="success" @click="fn">点击事件</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from '../packages/button'
export default {
    name:'MyButtonGroup',
    methods:{
        fn(){
            alert('点击了')
        }
    },
    components:{
        MyButton
    }
}
</script>

<style lang="scss">
.row{
    margin-bottom:15px;
}
</style>
