module.exports = (sequelize, DataTypes) => {
    const gradeInfo = sequelize.define('grade_info',{
            stud_id : {
                type : DataTypes.UUID,
                primaryKey : true,
                defaultValue : DataTypes.UUIDV4
            },
            sem: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            course_id: {
                type : DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4
            },
            ia1 : {
                type: DataTypes.INTEGER,
            },
            ia2 : {
                type: DataTypes.INTEGER,
            },
            tw : {
                type: DataTypes.INTEGER,
            },
            pr : {
                type: DataTypes.INTEGER,
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
    return gradeInfo;
};