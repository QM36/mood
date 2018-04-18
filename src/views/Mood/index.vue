<template>
	<div>
        <Row>
            <Table highlight-row :columns="columns3" :data="tableData" stripe></Table>
                <div style="margin: 10px;overflow: hidden">
                    <div style="float: right;">
                        <Page :total="data1.length" @on-change="changePage" :page-size="10"></Page>
                    </div>
                </div>
        </Row>
    </div>
</template>
<script>
    export default {
        name: 'Mood',
        data () {
            return {
                page: 1,
                tableData: [],
                columns3: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '时间',
                        key: 'time'
                    },
                    {
                        title: '情绪状况',
                        key: 'status'
                    }
                ],
                data1: [
                    {
                        time: '2018/4/5 17:00',
                        status: '高兴'
                    },
                    {
                        time: '2018/4/5 17:00',
                        status: '不高兴'
                    },
                    {
                        time: '2018/4/5 17:00',
                        status: '不开心'
                    },
                    {
                        time: '2018/4/5 17:00',
                        status: '开心'
                    },
                    {
                        time: '2018/4/5 17:00',
                        status: '高兴'
                    },
                    {
                        time: '2018/4/5 17:00',
                        status: '高兴'
                    },
                    {
                        time: '2018/4/5 17:00',
                        status: '高兴'
                    },
                    {
                        time: '2018/4/5 17:00',
                        status: '不高兴'
                    },
                    {
                        time: '2018/4/5 17:00',
                        status: '不开心'
                    },
                    {
                        time: '2018/4/5 17:00',
                        status: '开心'
                    },
                    {
                        time: '2018/4/5 17:00',
                        status: '高兴'
                    },
                    {
                        time: '2018/4/5 17:00',
                        status: '高兴'
                    },
                    {
                        time: '2018/4/5 17:00',
                        status: '高兴'
                    },
                    {
                        time: '2018/4/5 17:00',
                        status: '不高兴'
                    },
                    {
                        time: '2018/4/5 17:00',
                        status: '不开心'
                    },
                    {
                        time: '2018/4/5 17:00',
                        status: '开心'
                    },
                    {
                        time: '2018/4/5 17:00',
                        status: '高兴'
                    },
                    {
                        time: '2018/4/5 17:00',
                        status: '高兴'
                    },
                ]
            }
        },
        created() {
            this.tableData = this.data1.slice(0, 10);
        },
        methods: {
            changePage(page) {
                this.page = page;
                this.tableData = this.data1.slice((page - 1) * 10, page * 10);
            },
            show(index) {
                this.$router.push(`/detail/${this.data1[index].id}`);
            },
            remove(index) {
                // this.tableData.splice(index, 1);
                this.data1.splice(index, 1);
                this.tableData = this.data1.slice((this.page - 1) * 10, this.page * 10);
            }
        }
    }
</script>