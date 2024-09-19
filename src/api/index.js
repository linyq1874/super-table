import { http_get } from './http';
import URLS from './urls';

export const getMenu = (params) => http_get(URLS.MENU, params);
export const getTableData = (params) => http_get(URLS.TABLE_DATA, { tableName: params });
export const getTableHeader = (params) => http_get(URLS.TABLE_HEADER, { tableName: params });
