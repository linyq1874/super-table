/* eslint-disable no-undef */
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// 假设的表头数据缓存
const headerCache = new Map();
const tableDataCache = new Map();

// 模拟的表头数据生成函数（这里只是简单返回一些静态数据）
function generateHeaders(tableName) {
    // 这里可以根据tableName动态生成不同的表头
    // 但为了示例，我们直接返回一些静态数据
    if (tableName === 'users') {
        return [
            { prop: 'id', label: 'ID' },
            { prop: 'name', label: 'Name' },
            { prop: 'email', label: 'Email' }
        ];
    } else if (tableName === 'products') {
        return [
            { prop: 'productId', label: 'Product ID' },
            { prop: 'name', label: 'Name' },
            { prop: 'price', label: 'Price' }
        ];
    }
    // 默认返回空数组或错误信息
    return [];
}

// 路由处理函数
router.get('/api/table/headers', async (ctx) => {
    const tableName = ctx.query.tableName;

    // 检查缓存中是否有数据
    if (headerCache.has(tableName)) {
        ctx.body = headerCache.get(tableName);
    } else {
        // 生成表头数据
        const headers = generateHeaders(tableName);

        // 将数据添加到缓存中
        headerCache.set(tableName, headers);

        // 发送响应
        ctx.body = headers;
    }
});

function generateRandomString() {
    return Math.random().toString(32).slice(2);
}

// 模拟的表头数据生成函数（这里只是简单返回一些静态数据）
function generateTableData(tableName) {
    // 这里可以根据tableName动态生成不同的表头
    // 但为了示例，我们直接返回一些静态数据
    const LEN = 10;

    if (tableName === 'users') {
        return Array.from({ length: LEN }, () => ({
            id: generateRandomString(),
            name: generateRandomString(),
            email: generateRandomString() + '@163.com'
        }));
    } else if (tableName === 'products') {
        return Array.from({ length: LEN }, () => ({
            productId: generateRandomString(),
            name: generateRandomString(),
            price: (Math.random() * 1000) >>> 0
        }));
    }
    // 默认返回空数组或错误信息
    return [];
}

// 路由处理函数
router.get('/api/table/data', async (ctx) => {
    const tableName = ctx.query.tableName;

    // 检查缓存中是否有数据
    if (tableDataCache.has(tableName)) {
        ctx.body = tableDataCache.get(tableName);
    } else {
        // 生成表头数据
        const headers = generateTableData(tableName);

        // 将数据添加到缓存中
        tableDataCache.set(tableName, headers);

        // 发送响应
        ctx.body = headers;
    }
});

// 路由处理函数
router.get('/api/menu', async (ctx) => {
    ctx.body = [
        {
            tableName: 'users',
            label: '用户',
            id: '1'
        },
        {
            tableName: 'products',
            label: '产品',
            id: '2'
        }
    ];
});

// 使用路由中间件
app.use(router.routes()).use(router.allowedMethods());

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
