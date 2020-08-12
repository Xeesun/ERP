module.exports = (sequelize, DataTypes) => {
    const student = sequelize.define('student_info',{
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            parent_name: {
                type: DataTypes.STRING,
            },
            address: {
                type: DataTypes.STRING,
            },
            dob: {
                type: DataTypes.DATEONLY,
            },
            doa: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },
            sem: {
                type: DataTypes.INTEGER,
                defaultValue: 1
            },
            branch: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            class: {
                type: DataTypes.STRING,
            },
            roll_no: {
                type: DataTypes.INTEGER,
            },
            email_id: {
                type: DataTypes.STRING,
            },
            phone: {
                type: DataTypes.STRING,
            }
        },
        {
            freezeTableName:true,
            timestamps: false,
            
        }
    )
    return student;
};