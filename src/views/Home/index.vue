<template>
	<div>
        <Row>
            <Col span="18">
		        <Input v-model="value" placeholder="请输入需要查询的信息" style="width: 300px; margin-bottom:30px;"></Input>
                <Table highlight-row :columns="columns3" :data="tableData" stripe></Table>
                    <div style="margin: 10px;overflow: hidden">
                    <div style="float: right;">
                        <Page :total="data1.length" @on-change="changePage" :page-size="10"></Page>
                    </div>
                    </div>
            </Col>
            <Col span="6">
                <div style="background:#eee;padding: 20px" v-for="item in abnormal">
                    <Card :bordered="false">
                        <p slot="title">异常</p>
                        <p style="text-align:center;">{{ item.name }}</p>
                        <p style="text-align:center;">{{ item.type }}</p>
                        <router-link :to="`/abnormal/${item.id}`"><Button type="error" long>处理异常</Button></router-link>   
                    </Card>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        name: 'Home',
        data () {
            return {
            	value: '',
                page: 1,
                abnormal:[{
                    id: 1,
                    name: '王小明',
                    type: '位置异常'
                },{
                    id: 2,
                    name: '张小刚',
                    type: '心率异常'
                },{
                    id: 3,
                    name: '李小红',
                    type: '情绪异常'
                },{
                    id: 4,
                    name: '周小伟',
                    type: '位置异常'	
                }],
                tableData: [],
                columns3: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'button',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        },
                    }
                ],
                data1: [
                    {
                        id: 1,
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        id: 2,
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        id: 3,
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        id: 4,
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    },
                    {
                        id: 5,
                        name: '王大明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        id: 6,
                        name: '张大刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        id: 7,
                        name: '李大红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        id: 8,
                        name: '周大伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    },
                    {
                        id: 9,
                        name: '王明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        id: 10,
                        name: '张刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        id: 11,
                        name: '李红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        id: 12,
                        name: '周伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
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