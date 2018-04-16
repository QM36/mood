<template>
	<div style="width:100%">
        <div style="background:#eee;padding: 20px">
            <Card :bordered="false">
                <p slot="title">基础情况</p>
                <p>{{ $route.params.id }}</p>
                <p></p>
            </Card>
        </div>
        <Row>
            <Col span="6">
                <router-link :to="`/detail/physiology/${$route.params.id}`"><Button type="info">生理数据</Button></router-link>
            </Col>
            <Col span="6">
                <router-link :to="`/detail/mood/${$route.params.id}`"><Button type="success">情绪记录</Button></router-link>
            </Col>
            <Col span="6">
                <router-link :to="`/detail/location/${$route.params.id}`"><Button type="warning">位置记录</Button></router-link>
            </Col>
            <Col span="6">
                <router-link :to="`/detail/abnormal/${$route.params.id}`"><Button type="error">异常状况</Button></router-link>
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