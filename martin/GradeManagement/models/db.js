const {sequelize, Sequelize}  = require('../config/dbconfig')

const db = {};


//Models/tables
db.student = require('./student.js')(sequelize, Sequelize);
db.exam = require('./exam.js')(sequelize, Sequelize);
db.studExam = require('./studExam.js')(sequelize, Sequelize);
db.courses = require('./courses.js')(sequelize, Sequelize);
db.gradeInfo = require('./gradeinfo.js')(sequelize, Sequelize);
db.gradeReport = require('./gradereport.js')(sequelize, Sequelize);
db.branch = require('./branch.js')(sequelize, Sequelize);
db.userLogin = require('./userlogin.js')(sequelize, Sequelize);

db.student.sync()
db.branch.sync()
db.exam.sync()
db.studExam.sync()
db.userLogin.sync()

//Relations
db.courses.hasMany(db.gradeInfo, { foreignKey: 'course_id' });
db.gradeInfo.belongsTo(db.courses, { foreignKey: 'course_id' });

db.exam.hasMany(db.studExam, { foreignKey: 'exam_id' })
db.studExam.belongsTo(db.exam, { foreignKey: 'exam_id' })

db.student.hasMany(db.studExam, { foreignKey: 'stud_id' })
db.studExam.belongsTo(db.student, { foreignKey: 'stud_id' })

db.studExam.hasMany(db.gradeInfo, { foreignKey: 'stud_id' })
db.gradeInfo.belongsTo(db.studExam, { foreignKey: 'stud_id' })

db.branch.hasMany(db.student, {  foreignKey: 'branch'})
db.student.belongsTo(db.branch, { foreignKey: 'branch' })

module.exports = db;