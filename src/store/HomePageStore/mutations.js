export const mutations = {
    saveData(state, data) {
        // state:state
        // data: 载荷，数据 obj类型
        // data.dataType: 要修改的数据名称
        // data.dataValue: 数据
        state[data.dataType] = data.dataValue;

    },
    // // 保存商品数据
    saveProData(state, data) {
        // state:state
        // data: 载荷，数据 obj类型
        // data.dataType: 要修改的数据名称(侧边栏名字)
        // data.dataValue: 数据
        state.productsData[data.dataType] = data.dataValue;

    }
}