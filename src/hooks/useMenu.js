import { ref, onMounted } from 'vue';
import { getMenu } from '@/api';

export function useMenu() {
    const menuName = ref('');
    const menus = ref([]);

    const fetchMenuName = async () => {
        try {
            const response = await getMenu();
            console.log('response', response);

            menus.value = response;
            menuName.value = response[0].tableName;
        } catch (error) {
            console.error('Failed to fetch menu name:', error);
        }
    };

    onMounted(() => {
        fetchMenuName();
    });

    return {
        menuName,
        menus,
        fetchMenuName
    };
}
