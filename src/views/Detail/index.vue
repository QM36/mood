<template>
	<div style="width:100%">
        <div style="background:#eee;padding: 20px">
            <Card :bordered="false">
                <p slot="title">异常</p>
                <p></p>
                <p></p>
            </Card>
        </div>
        <Row>
            <Col span="6">
                <router-link :to="`/physiology/${$route.params.id}`"><cool-hover-button type="swipe">生理数据</cool-hover-button></router-link>
            </Col>
            <Col span="6">
                <router-link :to="`/mood/${$route.params.id}`"><cool-hover-button type="swipe" shap="out">情绪记录</cool-hover-button></router-link>
            </Col>
            <Col span="6">
                <router-link :to="`/location/${$route.params.id}`"><cool-hover-button type="swipe" shap="in">位置记录</cool-hover-button></router-link>
            </Col>
            <Col span="6">
                <router-link :to="`/abnormal/${$route.params.id}`"><cool-hover-button type="close">异常状况</cool-hover-button></router-link>
            </Col>
        </Row>
    </div>
</template>
<script>
    import CoolHoverButton from '@/components/Button/CoolHoverButton';

    export default {
        name: 'Detail',
        components: { CoolHoverButton },
        data () {
            return {}
        },

        created() {
            console.log(`进入了Detail页面，用户Id是：${this.$route.params.id}`);
        },

        methods: {
            changePage(page) {
                this.$router.push(page);
            }
        }
    }
</script>