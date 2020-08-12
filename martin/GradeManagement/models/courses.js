module.exports = (sequelize, DataTypes) => {
    const courses = sequelize.define('courses',{
            id : {
                type : DataTypes.UUID,
                primaryKey : true,
                defaultValue : DataTypes.UUIDV4
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            sem: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            code: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            branch_id: {
                type : DataTypes.INTEGER,
                allowNull: false
            },
            credits: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            ia : {
                type: DataTypes.INTEGER,
            },
            tw : {
                type: DataTypes.INTEGER,
            },
            pr : {
                type: DataTypes.INTEGER
            },
            ese : {
                type: DataTypes.INTEGER,
            },
        },
        {
            freezeTableName:true,
            timestamps: false
        }
    )
    return courses;
};