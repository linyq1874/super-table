<template>
    <el-row class="tac">
        <el-col :span="12">
            <h5 class="mb-2">Dynamic table</h5>
            <el-menu default-active="1" class="el-menu-vertical-demo">
                <el-menu-item
                    @click="onItemClick(item.tableName)"
                    :index="item.id"
                    v-for="item in menus"
                    :key="item.id"
                >
                    <span>{{ item.label }}</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script setup>
/* eslint-disable no-unused-vars */
const props = defineProps(['menus']);
const emit = defineEmits(['onItemClick']);
const onItemClick = (name) => {
    emit('onItemClick', name);
};
</script>
