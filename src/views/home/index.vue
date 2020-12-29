<!--
 * @Author: your name
 * @Date: 2020-12-29 00:26:52
 * @LastEditTime: 2020-12-29 23:57:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ehr\src\home\index.vue
-->
<template>
    <div id="wrapper">
        <a-menu class="navBar" v-model:selectedKeys="current" mode="horizontal">
            <a-menu-item key="logo" class="logo">
                <img src="../../assets/logo.png" alt="">
                小微企业跨组织人才管理系统
            </a-menu-item>
            <a-sub-menu class="welcome">
                <template #title>
                    <span>
                        欢迎您，username
                    </span>
                </template>
                <a-menu-item key="setting:1">
                    个人信息
                </a-menu-item>
                <a-menu-item key="setting:3" @click="showModal">
                    安全退出
                </a-menu-item>
                <a-modal title="安全退出" ok-text="确认" cancel-text="取消" v-model:visible="visible"
                    :confirm-loading="confirmLoading" @ok="handleOk">
                    <p>{{ ModalText }}</p>
                </a-modal>
            </a-sub-menu>
        </a-menu>
        <div class="content">
            <a-menu class="menu" mode="inline" :openKeys="openKeys" v-model:selectedKeys="selectedKeys"
                @openChange="onOpenChange" @click="handleClick">
                <a-sub-menu key="sub1">
                    <template #title>
                        <span>
                            <span>Navigation One</span>
                        </span>
                    </template>
                    <a-menu-item key="1">Option 1</a-menu-item>
                    <a-menu-item key="2">Option 2</a-menu-item>
                    <a-menu-item key="3">Option 3</a-menu-item>
                    <a-menu-item key="4">Option 4</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <template #title>
                        <span>
                            <span>Navigation Two</span>
                        </span>
                    </template>
                    <a-menu-item key="5">Option 5</a-menu-item>
                    <a-menu-item key="6">Option 6</a-menu-item>
                    <a-sub-menu key="sub3" title="Submenu">
                        <a-menu-item key="7">
                            Option 7
                        </a-menu-item>
                        <a-menu-item key="8">
                            Option 8
                        </a-menu-item>
                    </a-sub-menu>
                </a-sub-menu>
                <a-sub-menu key="sub4">
                    <template #title>
                        <span>
                            <span>Navigation Three</span>
                        </span>
                    </template>
                    <a-menu-item key="9">Option 9</a-menu-item>
                    <a-menu-item key="10">Option 10</a-menu-item>
                    <a-menu-item key="11">Option 11</a-menu-item>
                    <a-menu-item key="12">Option 12</a-menu-item>
                </a-sub-menu>
            </a-menu>
            <router-view class="view"></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
                openKeys: ['sub1'],
                selectedKeys: ['1'],
                current: [],
                ModalText: '确定要退出吗？',
                visible: false,
                confirmLoading: false,
            };
        },
        watch: {
            openKeys(val) {
                console.log('openKeys', val);
            },
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.$router.push({ name: 'nav1' })
            },
            onOpenChange(openKeys) {
                const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
                if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                    this.openKeys = openKeys;
                } else {
                    this.openKeys = latestOpenKey ? [latestOpenKey] : [];
                }
            },
            handleClick(e) {
                console.log('click', e);
                if (e.key == "1") {
                    this.$router.push({ name: 'nav1' })
                }
                if (e.key == "2") {
                    this.$router.push({ name: 'nav2' })
                }
            },
            showModal() {
                this.visible = true;
            },
            handleOk(e) {
                this.ModalText = '正在安全退出,即将跳转登录页,请稍后...';
                this.confirmLoading = true;
                setTimeout(() => {
                    this.visible = false;
                    this.confirmLoading = false;
                }, 1000);
            },
        },
    };
</script>
<style scoped>
    #wrapper {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .navBar {
        height: 50px;
        width: 100%;
        position: fixed;
        z-index: 2;
    }

    .logo {
        font-weight: bold;
        font-size: 18px;
    }

    .logo img {
        height: 45px;
    }

    .navBar .welcome {
        position: absolute;
        right: 22px;
    }

    .content {
        width: 100%;
        height: 100%;
        padding-top: 50px;
        display: flex;
    }

    .menu {
        width: 15%;
        min-width: 210px;
        height: 100%;
    }

    .view {
        width: 85%;
        padding-left: 10px;
        overflow-y: scroll;
    }
</style>