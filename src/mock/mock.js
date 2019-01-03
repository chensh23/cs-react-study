import Mock from "mockjs"

const Random = Mock.Random;

const productData = () => {
    let arr = [];
    for (let i = 0; i < 20; i++) {
        let obj = {
            vo: {
                name: Random.name(),
                age: Random.integer(15, 25),
                sex: Random.integer(0, 1),
                email: Random.email(),
                school: Random.ctitle()
            },
            summary: Random.integer(1, 100)
        }
        arr.push(obj);
    }
    return arr
}


Mock.mock("/api/getData", "post", productData());