<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column
            v-for="header in headers"
            :key="header.prop"
            :label="header.label"
            :prop="header.prop"
            width="300"
        ></el-table-column>
    </el-table>
</template>

<script setup>
import { watchEffect } from 'vue';
import { useTableHeader } from '@/hooks/useTableHeader';
import { useTableData } from '@/hooks/useTableData';

const props = defineProps(['moduleName']);

const { tableData, fetchTableData } = useTableData();
const { headers, fetchTableHeaders } = useTableHeader();

watchEffect(() => {
    fetchTableHeaders(props.moduleName);
    fetchTableData(props.moduleName);
});
</script>
