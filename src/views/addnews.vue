<template>
    <div id="newsList">
        <div class="layout-breadcrumb">
            <Row type="flex" justify="space-between">
                <Col span="12">
                <h3>添加新闻</h3>
                </Col>
                <Col span="12">
                <Breadcrumb>
                    <Breadcrumb-item href="#">内容管理</Breadcrumb-item>
                    <Breadcrumb-item href="/newslist">新闻管理</Breadcrumb-item>
                    <Breadcrumb-item href="/addnews">添加新闻</Breadcrumb-item>
                </Breadcrumb>
                </Col>
            </Row>
        </div>
        <div class="search-box">
            <Form :model="formRight" label-position="right" :label-width="100">
                <Row type="flex">
                    <Col span="6">
                    <Form-item label="新闻标题:">
                        <Input v-model="formRight.input1" placeholder="新闻标题"></Input>
                    </Form-item>
                    </Col>
                    <Col span="6">
                    <Form-item label="发布人:">
                        <Input v-model="formRight.input2" placeholder="发布人"></Input>
                    </Form-item>
                    </Col>
                    <Col span="6">
                    <Form-item label="所属栏目:">
                        <Input v-model="formRight.input3" placeholder="所属栏目"></Input>
                    </Form-item>
                    </Col>
                    <Col span="6">
                    <Form-item label="推送状态:">
                        <Input v-model="formRight.input3" placeholder="推送状态"></Input>
                    </Form-item>
                    </Col>
                </Row>
                <Row type="flex">
                    <Col span="6">
                    <Form-item label="审核状态:">
                        <Input v-model="formRight.input1" placeholder="新闻标题"></Input>
                    </Form-item>
                    </Col>
                    <Col span="8">
                    <Form-item label="发布时间:">
                        <Date-picker type="daterange" :options="formRight.options2" placement="bottom-end" placeholder="选择日期" v-model="formRight.date" style="width: 200px"></Date-picker>
                    </Form-item>
                    </Col>
                    <Col span="5">
                    <Button type="primary" shape="circle" icon="ios-search" @click="query">搜索</Button>
                    </Col>
                    <Col span="5">
                    <router-link to="/addnews"><Button type="primary" shape="circle" icon="plus-round">添加新闻</Button></router-link>
                    </Col>
                </Row>
            </Form>
        </div>
    </div>
</template>
<style scoped lang="less">
    .ivu-breadcrumb>span:last-child {
        font-weight: normal;
    }
    #newsList {
        padding: 10px;
    }
</style>
<script>
    export default{
        data(){
            return{
                formRight: {
                    input1: '',
                    input2: '',
                    input3: '',
                    date: '',
                    options2: {
                        shortcuts: [
                            {
                                text: '最近一周',
                                value () {
                                    const end = new Date();
                                    const start = new Date();
                                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                    return [start, end];
                                }
                            },
                            {
                                text: '最近一个月',
                                value () {
                                    const end = new Date();
                                    const start = new Date();
                                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                    return [start, end];
                                }
                            },
                            {
                                text: '最近三个月',
                                value () {
                                    const end = new Date();
                                    const start = new Date();
                                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                    return [start, end];
                                }
                            }
                        ]
                    }
                }
            }
        },
        methods: {
            query() {
                this.$Message.info('这是一条普通的提醒');
            }
        }
    }
</script>
