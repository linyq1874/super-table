<template>
    <div class="common-layout" v-if="menuName">
        <el-container>
            <el-aside width="400px"><Menu :menus="menus" @on-item-click="onItemClick" /></el-aside>
            <el-main><DynamicTable :module-name="menuName" /></el-main>
        </el-container>
    </div>
</template>

<script setup>
import DynamicTable from '@/components/DynamicTable.vue';
import Menu from '@/components/Menu.vue';

import { useMenu } from '@/hooks/useMenu';

const { menuName, menus } = useMenu();

const onItemClick = (name) => {
    menuName.value = name;
};
</script>
