import { ref } from 'vue';
import { getTableData } from '@/api';

const tableCache = new Map();

export function useTableData() {
    const tableData = ref([]);

    const fetchTableData = async (moduleName) => {
        if (tableCache.has(moduleName)) {
            tableData.value = tableCache.get(moduleName);
        } else {
            try {
                const response = await getTableData(moduleName);
                tableData.value = response;
                tableCache.set(moduleName, response);
            } catch (error) {
                console.error('Failed to fetch table tableData:', error);
            }
        }
    };

    return {
        tableData,
        fetchTableData
    };
}
