<template>
  
  <div class="login_container">
      <router-view></router-view>
      <div class="login_box">
          <div class="logo">
              <img src="../assets/logo.png" alt="">
          </div>
          <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="label">
              <!-- 用户名 -->
            <el-form-item prop="username">
            <el-input v-model="loginForm.username" prefix-icon="el-icon-s-custom" ></el-input>
            </el-form-item>
            <!-- 密码 -->
             <el-form-item prop="password">
            <el-input v-model="loginForm.password"  prefix-icon="el-icon-lock" type="password"></el-input>
            </el-form-item>
             <el-form-item class="btn">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetLoginForm">重置</el-button>
            </el-form-item>
          </el-form>
      </div>
     
  </div>
</template>

<script>
// import login from '../network/login'
export default {
    data() {
        return {
            loginForm: {
                username: 'admin',
                password: '123456',
            },
            // 表单验证规则
            loginFormRules: {
                username: [
                    { required: true, message: '请输入登录名称', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                password: [
                     { required: true, message: '请输入登录密码', trigger: 'blur' },
                     { min: 3, max: 10, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ]
            },
        }
    },
    methods: {
        // 重置表单
        resetLoginForm() {
            // console.log(this) ref是element ul 里面自己规定的
            this.$refs.loginFormRef.resetFields()
        },
        login() {
            this.$refs.loginFormRef.validate(async valid => {
                // console.log(valid)
                if (!valid) return;
                const {data: res} =await this.$http.post('login', this.loginForm);
                if (res.meta.status !== 200) return this.$message.error('登录失败');
                this.$message.success('登录成功');
                // console.log(Window.sessionStorage)
                window.sessionStorage.setItem('token', res.data.token);
                this.$router.replace('/home')
            })
        },
    }
}
</script>

<style lang="less" scoped>
.login_container {
    background-color: orange;
    height: 100%;
}
.login_box {
    position: absolute;
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 130px;
    height: 130px;
    padding: 10px;
    border-radius: 50%;
    border: 1px solid #eee;
    img {
        width: 100%;
        background-color: #eee;
        border-radius: 50%;
    }
}
.label {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    .btn {
        display: flex;
        justify-content: flex-end;
    }
}

</style>