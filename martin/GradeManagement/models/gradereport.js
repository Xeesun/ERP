
module.exports = (sequelize, DataTypes) => {
    const reports = sequelize.define('grade_report',{
            stud_id : {
                type : DataTypes.UUID,
                primaryKey : true,
                defaultValue : DataTypes.UUIDV4
            },

            sem1 : {
                type : DataTypes.JSONB
            },

            sem2 : {
                type : DataTypes.JSONB
            },

            sem3 : {
                type : DataTypes.JSONB
            },

            sem4 : {
                type : DataTypes.JSONB
            }
        },
        {
            freezeTableName:true,
            timestamps: false
        }
    )
    return reports;
};