const {sequelize} = require('../config/dbconfig')
const ejs = require('ejs')
const fs = require('fs')
const csv=require('csvtojson')
let pdf = require("html-pdf");
let path = require("path");
const { gradeReport, gradeInfo, courses, student, exam, studExam, branch } = require('../models/db.js')
const helper = require('./helpers')

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



//GET GRADES CONTROLLERS

exports.userGrades = (req, res) => {
   
  gradeInfo.findAll({ where:{ stud_id : req.user.id } })
      .then(grades => {
          res.send(grades)
      })
      .catch(err => {
          res.send(err)
      })
}

exports.getSudentGrades = (req, res) => {
  gradeInfo.findAll({
      where: {
          stud_id: req.params.id,
      },
      include: courses
  })
      .then(grades => {
          if(grades.length>1)
              res.send(grades)
          else
              res.json({ messsage:"Student not found"})
      })
      .catch(err => {
          res.send(err)
      })
}

exports.getSudentCourseGrade = (req, res) => {
  gradeInfo.findAll({
      where: {
          stud_id: req.params.id,
          course_id: req.params.courseId
      },
      include: courses
  })
      .then(grades => {
          if(grades.length<1)
            res.json({ messsage:"Student not found"})
          else
            res.send(grades)
      })
      .catch(err => {
          res.send(err)
      })
}

exports.getGradesAll = (req, res) => {
  var where = {}
  if(req.query.sem) where.sem = req.query.sem
  if(req.query.courseId) where.course_id = req.query.courseId
  
  gradeInfo.findAll({ where: where })
      .then(grades => {
          res.send(grades)
      })
      .catch(err => {
          res.send(err)
      })
}

//GENERATE AND GET REPORT CONTROLLERS

exports.getGradeReport = (req, res) => {
  gradeReport.findOne({
    where: {stud_id: req.user.id},
    attributes: [[req.params.sem,"grade"]]
  })
  .then(report => {
    if(report){
      report = report.get({ plain: true })
      let grade = JSON.parse(report.grade)
      //res.render("../report_templates/report.ejs", {report: grade})
      res.json({report: grade})
    } else{
      res.send("No report found")
    } 
  })
  .catch(err => res.send("Error in getting report \n"+ err))
}


exports.downloadReport = (req, res) => {
  gradeReport.findOne({
    where: {stud_id: req.params.id},
    attributes: [[req.params.sem,"grade"]]
  })
  .then(report => {
    report = report.get({ plain: true })
    let grade = JSON.parse(report.grade)
    if(grade){
      ejs.renderFile(path.join(__dirname, '../report_templates/report.ejs'), {report: grade}, (err, data) => {
        if (err) {
              res.send(err);
        } else {
            let options = {
                "format": "A4",        
                "orientation": "landscape",
                "border": "0",     
            };
            pdf.create(data, options).toFile("report.pdf", function (err, data) {
                if (err) {
                  res.send(err);
                } else {
                  res.sendFile(data.filename, 'Report.pdf', function (err) {
                    if (err) {
                      console.log("Error in sending")
                    } else {
                          if(res.headersSent){
                            fs.unlink(data.filename,(err) => {
                              if(err){
                                console.log("Error deleting"+err)
                              }
                            }) 
                          }
                      }
                    })
                }
            });
          }
        });
      } else{
      res.send("No report found")
      } 
  })
  .catch(err => res.send("Error in getting report \n"+ err))
}







exports.getGradeInfo = (req, res) => {
  gradeInfo.findAll({
    //plain:true,
    where: {
      stud_id: req.params.id,
      sem: req.params.sem
    },
    include: courses
  })
    .then(grade => {
      //var result = []
      // grade.forEach(element => {
      //   element.dataValues.course = element.dataValues.course.dataValues;
      //   result.push(element.dataValues)
      // });
      res.send(grade)
    })
    .catch(err => {
      res.send("Error in fetching Sem grades")
    })
}


exports.getCourses = (req, res) => {
  courses.findAll({
    where: {
      branch_id: req.params.branch,
      sem: req.params.sem
    },
  })
    .then(course => {
      var result = []
      course.forEach(element =>{
        result.push(element.dataValues)
      })
      res.send(result)
    })
    .catch(err => res.send(err))
}


exports.addCourses = (req, res) => {
  let courseList = req.body
  courses.bulkCreate(courseList)
    .then(newCoures => {
      res.send("Courses created")
    })
    .catch(err => { 
      console.log(err)
      res.send("Error in adding courses")
    })
}


exports.addStudent = (req, res) => {
  let studentList = req.body
  student.bulkCreate(studentList)
    .then(newStudents => {
      res.send(`Students created  ${newStudents}`)
    })
    .catch(err => { 
      res.send(`Error in adding courses ${err}`)
    })
}

exports.addExam = (req, res) => {
  let ex = req.body
  student.create(ex)
    .then(newexam => {
      res.send(`Students created  ${newexam}`)
    })
    .catch(err => { 
      res.send(`Error in adding courses ${err}`)
    })
}


//UPDATE CONTROLLERS

exports.singleGradeUpdate = (req, res) => {
  const updateOps = {};
  for (let key in req.body) { 
      updateOps[key] = req.body[key]; 
  } 
  console.log(updateOps)
  gradeInfo.update(updateOps, { 
      where: {
          stud_id: req.params.id,
          course_id: req.params.courseId
      }
  })
      .then(grades => {
          res.send("UPDATED GRADES")
      })
      .catch(err => {
          res.send(err)
      })
}


exports.batchGradesUpdate = (req, res) => {
  const csvFilePath=path.join(__dirname,'../uploads/'+req.file.filename)
  
  csv({checkType:true})
  .fromFile(csvFilePath)
  .then(async (grades)=>{
      fs.unlink(csvFilePath,(err) => {
        if(err){
          console.log("Error deleting " + err)
        }
      })
      grades = grades.map(grade => {
          var gr = {}
          gr.where = { stud_id: grade.id, course_id: req.params.courseId }
          delete grade.id
          gr.updateOps = {};
          for (let key in grade) { 
            if(grade[key] == 0 || grade[key] != '')
              gr.updateOps[key] = grade[key]; 
          }
          return gr
      })

      errors = []
      for (const grade of grades) {
          try {
              await gradeInfo.update(grade.updateOps, { where: grade.where })
          } catch(err) {
              errors.push(err)
          }
      }

      // grades.forEach(grade => {
      //     gradeInfo.update(grade.updateOps, { where: grade.where })
      //         .then()
      //         .catch(err => {
      //             errors.push(err)
      //         })
      // })

      if(errors.length>1) res.json({ errors: errors })
      else res.json({ mess: "Grades Updated Successfully" })
  })
  .catch(err => {
    res.json({ error: err})
  })
}

exports.viewCsvGrades = (req, res) => {
  const csvFilePath=path.join(__dirname,'../uploads/'+req.file.filename)

  csv({checkType:true})
      .fromFile(csvFilePath)
      .then((grades)=>{
          grades = grades.map(grade => {
              var gr = {}
              gr.where = { stud_id: grade.id, course_id: req.params.courseId }
              delete grade.id
              gr.updateOps = {};
              for (let key in grade) { 
                  if(grade[key] == 0 || grade[key] != '')
                      gr.updateOps[key] = grade[key]; 
              }
              return gr
          })
          res.json(grades)
      })
      .catch(err => {
          res.json({ error: err })
      })
      
}

//REPORT GENERATION CONTROLLERS

exports.makeReport = (req, res) => {
  studExam.findOne({
    where:{ 
      stud_id: req.params.id,
      sem: req.params.sem.slice(-1) 
    },
    include: [
      {
        model: exam,
        attributes: { exclude: ['id'] }
      },
      {
        model: student,
        attributes: ['first_name', 'last_name'],
        include: [
          {
            model: branch,
            attributes: ['name'],
          }
        ]
      },
      {
        model: gradeInfo,
        attributes: { exclude: ['course_id', 'stud_id', 'sem'] },
        include: [
          {
            model: courses,
            attributes: { exclude: ['id', 'sem', 'branch_id'] }
          }
        ]
      }
    ]
  })
    .then(record => {
      record = record.get({ plain: true })
      let report = helper.generateReport(record)
      report = JSON.stringify(report)
      up = {}
      if(req.params.sem == "sem1") up.sem1 = report
      if(req.params.sem == "sem2") up.sem2 = report
      if(req.params.sem == "sem3") up.sem3 = report
      if(req.params.sem == "sem4") up.sem4 = report
    
      gradeReport.update(up,{
        where:{
          stud_id: req.params.id
        }
      })
      .then(grade => {
        res.send(grade)
      })
      .catch(err => {
        res.send(err)
      })
      
    })
    .catch(err => {
      console.log(err)
    })
}

// CLEAR GRADES

exports.clearStudentGrades = (req, res) => {
  gradeInfo.update({
      ia1: null,
      ia2: null,
      tw: null,
      pr: null,
      ese: null
  }, {
      where: {
          stud_id: req.params.id,
          course_id: req.params.courseId
      }
  })
      .then(grades => {
          res.send("GRADES CLEARED")
      })
      .catch(err => {
          res.send(err)
      })
}















