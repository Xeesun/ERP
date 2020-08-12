module.exports = (sequelize, DataTypes) => {
    const facCour = sequelize.define('faculty_courses', {
        faculty_id : {
            type : DataTypes.UUID,
            primaryKey : true,
            defaultValue : DataTypes.UUIDV4
        },
        class_id: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        course_id: {
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
    return facCour;
};