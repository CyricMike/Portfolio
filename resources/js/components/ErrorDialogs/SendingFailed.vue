<template>
    <div>
        <v-dialog 
            v-model="isResend" 
            width="300px"
            persistent
            no-click-animation
            overlay-opacity="0">
            <v-card class="Formdialog"> 
                <a-popconfirm placement="topLeft" ok-text="Yes" cancel-text="No" @confirm="CloseDialog">
                    <template slot="title">
                    <p>Cancel Request Sending ?</p> 
                    </template>
                    <v-icon class="float-right" >mdi-close-thick</v-icon>
                    </a-popconfirm>
                      
                <div v-if="sendingfailed === false"> 
                    <h2>Message Sending Failed</h2>
                        <span>Email sending has been interupted!</span><br>
                        <sub> Possible Cause</sub>
                        <li>Slow Internet Connections</li>
                        <li>The attach file exceed the maximum size</li> 
                        <li>Review Request Data</li> 

                    <a-button class="float-right"  @click="ResendRequest">Resend</a-button>
                </div>
                <div v-else class="ma-5">
                    <h2>Reach maximum attemp </h2>
                    <h4>Please contact the Developer </h4>
                    <h4>For trouble assistance</h4> 
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {  
    props:['isResend', 'attemp'],
    data() {
        return {
            Maxattemp : 3,
            sendingfailed : false
        };
    },

    watch: {
        attemp(val){ 
            if (val === this.Maxattemp) {
                this.sendingfailed = true
            }
        }
    },
 
    methods: {
        ResendRequest(){
            this.$emit('ResendRequest');
        },

        CloseDialog(){
            this.$emit('CloseResendDialog', false);
        }
    },
};
</script>

<style scoped>
.Formdialog{
    width: 300px;
    max-width: 300px;
    min-width: 300px;
    max-height: 200px;
    min-height: 200px;
    padding: 8px;
}

h2{
    font-weight: bold;
}

</style>