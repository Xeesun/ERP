module.exports = (sequelize, DataTypes) => {
    const studExam = sequelize.define('stud_exam_info', {
            stud_id: {
                type: DataTypes.UUID,
                primaryKey: true
            },
            exam_id: {
                type: DataTypes.UUID,
                primaryKey: true
            },
            sem: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            seat_no: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true
            }
        },
        {
            freezeTableName:true,
            timestamps: false
        }
    )
    return studExam;
};