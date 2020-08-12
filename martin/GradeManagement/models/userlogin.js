module.exports = (sequelize, DataTypes) => {
    const userLogin = sequelize.define('user_login', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4
            },
            username: {
                type: DataTypes.TEXT,
                unique: true,
                allowNull: false,
            },
            password: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            role: {
                type: DataTypes.ENUM,
                values: ['student', 'admin', 'staff','disabled'],
                allowNull: false
            }
        },
        {
            freezeTableName:true,
            timestamps: false
        }
    )
    return userLogin;
};