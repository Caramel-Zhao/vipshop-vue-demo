
//引于连接成功的mongoose
const { mongoose } = require("./dbConfig")

const Schema = mongoose.Schema;
//生成一个nodejs中的数据库集合的代理
let usersSchema = new Schema({
  email: {type:String}
})
//把代理与collection绑定
let usersModel = mongoose.model("users",usersSchema)

//对productModel进行操作 CURD
module.exports = {

  async addItem(item){
    let user = new usersModel(item)
    return await user.save()
  },

  async queryItem(where){
    return await usersModel.find(where)
  }

}