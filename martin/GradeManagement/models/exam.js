module.exports = (sequelize, DataTypes) => {
    const exam = sequelize.define('exam_details', {
        id : {
            type : DataTypes.UUID,
            primaryKey : true,
            defaultValue : DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        held_on: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        result_decl_on: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
    },
    {
        freezeTableName:true,
        timestamps: false
    }
)
    return exam;
};