<template>
	<div style="width:100%">
        <Alert type="success" show-icon v-show="isAlertShow" style="z-index: 1;position: fixed;right: 50px; top: 300px;">
            成功{{ alertText }}
            <span slot="desc">我们已经成功{{ alertText }}</span>
        </Alert>
        <div style="background:#eee;padding: 20px" >
            <Card :bordered="false">
                <p slot="title">详细异常状况</p>
                <p>位置异常</p>
                <p>心率异常</p>   
            </Card>
            <div class="wrap">
                 <cool-hover-button type="swipe" @click="notify(`通知老师`)">通知老师</cool-hover-button>
                 <cool-hover-button type="swipe" shap="out" @click="notify(`通知家长`)">通知家长</cool-hover-button>
                 <cool-hover-button type="swipe" shap="in" @click="notify(`手环报警`)">手环报警</cool-hover-button>
              </div>
        </div>
    </div>
</template>

<script>
import CoolHoverButton from '@/components/Button/CoolHoverButton';
    export default {
        name: 'Abnormal',
        components: {CoolHoverButton} ,
        data () {
            return {
                isAlertShow: false,
                alertText: '',
            }
        },
        

        methods: {
            notify(text) {
                this.alertText = text;
                this.isAlertShow = true;
                setTimeout(() => {
                    this.isAlertShow = false;
                }, 1000);
            },
        },
    }
</script>