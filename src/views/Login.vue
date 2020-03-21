<template>
  <div id="Login">
      <div class="loginBox">
          <p class="title">vue-admin权限管理后台模板</p>
          <p class="title">前台: vue + element-ui</p>
          <div class="login-module">
              <el-card class="box-card">
                <div slot="header" class="clearfix formTitlt">
                  <span>登录密码</span>                  
                </div> 
                <el-form ref="form" :model="loginForm" label-width="0">
                  <el-form-item >
                    <el-input v-model="loginForm.username" 
                    auto-complete="off" placeholder="请输入登录账号"></el-input>
                  </el-form-item>
                  <el-form-item >
                    <el-input v-model="loginForm.password" placeholder="请输入登录密码"></el-input>
                  </el-form-item>
                
                <el-form-item>
                <el-button class="subBtn" type="primary" @click="submitForm">登录</el-button>
              </el-form-item>  
              </el-form>  
              <p class="smalltxt">
                <router-link class="a" to="#">忘记密码</router-link>
                <router-link class="a" to="#">忘记会员名</router-link>
                <router-link class="a" to="#">免费注册</router-link>
              </p>   
              </el-card>
          </div>
      </div>
  </div>
</template>
<script>
import store from "../vuex"
import Vue from "vue"
export default {
  data(){
    return {
      loginForm: {
        username: 'vue-admin',
        password: '123456'
      }
    }
  },
  mounted(){
    this.msgshow('账号密码可以随意填写，为了测试效果填写的账号将会被存储为临时假 token',6000)
  },
  methods:{   
    submitForm(){
      const that=this;
      if (that.loginForm.username === '' || that.loginForm.password === ''){
        that.msgerror('账号或密码不能为空');
        return false;
      }else{
        that.msgshow("正在提交信息",1000);
        store.dispatch("setToken",that.loginForm.username).then((res)=>{         
          setTimeout(()=>{
            that.msgshow("提交成功",500);
            setTimeout(()=>{
              that.$router.push({path: '/'})
            },800)
            
          },1000)
          
        })
      }
      
    },
    msgshow(obj,time) {
        this.$message({
          showClose: true,
          message: obj,
          duration:time
        });
      },
    msgerror(obj){
        this.$message({
          showClose: true,
          message:obj,
          type: 'error'
        })
    }
  }
}
</script>
<style lang="scss">
.right{float:right}
  #Login{
    width: 100%;
    height: 100%;
    background-color: #2d3a4b;
     display: flex;
      flex-direction: column;
      justify-content: space-around;
    .loginBox{
      width: 990px;
      margin: auto;
      position: relative;
      height: 388px;       
      .title{
        font-size: 36px;
        font-weight: 600;
        color: #ffffff;
        width: 500px;
        float: left;
        margin-top: 0px;
        &:first-child{
          font-size: 34px;
          margin-top: 50px;
          margin-bottom: 30px;
        }
      }
      .login-module {
        width: 380px;
        height: 325px;
        top:0;
        bottom:0;          
        border: none;
        position: absolute;
        right: 0;        
        .box-card{
          background: #fff;
          width:100%;
          height:100%;
          .formTitlt{
            font-size: 18px;
            font-weight: 400;          
          }
          .subBtn{
            width: 100%;
          }
          .smalltxt{
            font-size:12px;            
            margin: 0;
          }
        }        
      }
    }
  }
</style>