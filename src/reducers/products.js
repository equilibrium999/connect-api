var initialState = [{
    "id": 1,
    "name": "iPhone XS Max 64GB",
    "price": 1799,
    "status": true
},{
    "id": 2,
    "name": "Samsung Galaxy S10",
    "price": 1146,
    "status": false
},{
    "id": 3,
    "name": "HUAWEI P30 Pro",
    "price": 1599,
    "status": true
}];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
};

export default products;