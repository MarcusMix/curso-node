import { Sequelize } from "sequelize"

const sequelize = new Sequelize("mvc", "root", "admin", {
    host: "localhost",
    dialect: "mysql",
})

try {
    sequelize.authenticate()
    console.log("Conectamos com o MySQL!")
} catch (error) {
    console.log("Não foi possível conectar: " + error)
}

export default sequelize
