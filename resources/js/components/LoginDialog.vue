<template>
    <div>
        <v-dialog 
            v-model="LoginDialog" 
            width="600px"
            persistent
        >
            <v-card width="600px" class="cardFormat" >
                <v-icon class="float-right" @click="CloseDialog()">mdi-close-thick</v-icon>
 
                <h2>Login</h2>

                <a-form
                    id="components-form-demo-normal-login"
                    :form="form"
                    class="login-form"
                    @submit="handleSubmit"
                >
                    <a-form-item> 
                        <a-input 
                            v-decorator="[
                            'userName',
                            { rules: [{ required: true, message: 'Please input your username!' }] },
                            ]"
                            placeholder="Username"
                        >
                        </a-input>
                    </a-form-item>

                    <a-form-item>
                        <a-input
                            v-decorator="[
                            'password',
                            { rules: [{ required: true, message: 'Please input your Password!' }] },
                            ]"
                            type="password"
                            placeholder="Password"
                        >
                            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                    </a-form-item>
                    <a-form-item>
                        <a-button type="primary" html-type="submit" class="login-form-button">
                            Log in
                        </a-button>
                    </a-form-item>
                </a-form>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default { 
    props:['OpenDialog'],
    data() {
        return {
            LoginDialog : false,
            JapApprover : []
        };
    },

    watch: {
        OpenDialog(val){
            if (val) {
                this.LoginDialog = val
            }
        }
    },

    beforeCreate() {
        this.form = this.$form.createForm(this, { name: 'normal_login' });
    },
    methods: {
        ...mapActions(['getJapAccount']),

        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    axios.post(`${this.baseURL}Login` , values)
                    .then((result) => { 
                        if (result.data.length != 0) {
                            this.getJapAccount(result.data[0])
                            this.LoginDialog = false
                        }else{
                            this.$message.error('Incorrect password');
                        }
                    }).catch((err) => {
                        console.log(err)
                    });
                }
            });
        },

        filterOption(input, option) {
            return (
                option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
        },

        CloseDialog(){
            this.$emit('CloseDialog', false);
            this.LoginDialog = !this.LoginDialog
        }
    },
};
</script>

<style scoped>
.cardFormat{
    padding: 20px;
}
h2{
    text-align: center;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>