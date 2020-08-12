module.exports = (sequelize, DataTypes) => {
    const branch = sequelize.define('branch_info', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            }
        },
        {
            freezeTableName:true,
            timestamps: false
        }
    )
    return branch;
};