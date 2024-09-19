import { ref } from 'vue';
import { getTableHeader } from '@/api';

const tableHeaderCache = new Map();

export function useTableHeader() {
    const headers = ref([]);

    const fetchTableHeaders = async (moduleName) => {
        if (tableHeaderCache.has(moduleName)) {
            headers.value = tableHeaderCache.get(moduleName);
        } else {
            try {
                const response = await getTableHeader(moduleName);
                headers.value = response;
                tableHeaderCache.set(moduleName, response);
            } catch (error) {
                console.error('Failed to fetch table headers:', error);
            }
        }
    };

    return {
        headers,
        fetchTableHeaders
    };
}
