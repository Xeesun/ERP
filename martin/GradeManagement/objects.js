//grade input
gradein = {
    stud_id: 'b27ff46b-544b-47a4-b029-f562601a6ee1',
    sem: 3,
    course_id: '119a3a83-4f75-4927-86b4-76a08466bdff',
    ia1: 17,
    ia2: 14,
    tw: 23,
    pr: 23,
    ese: 68
  }


//report input
let sem3r = {
    name : "John Doe",
    examination : "SECOND YEAR SEMESTER1 (CBCGS) (CHOISE BASED CREDIT AND GRADING SYSTEM)",
    held_in: "5 May 2016",
    branch: 'Information Technology',
    seat_number: 6021745,
    regno: 161010,
    result:[
      {
        course_id: 'ITC301',
        course_title: 'APPLIED MATHEMATICS - III',
        course_credits: 5,
        grade: {
          ese_pr_or: 'O',
          ia_tw: 'O',
          overall: 'O'
        },
        credits_earned: 5,
        grade_points: 10,
        total_points: 50
      },
      {
        course_id: 'ITL302',
        course_title: 'LOGIC DESIGN',
        course_credits: 4,
        grade: {
          ese_pr_or: 'C',
          ia_tw: 'O',
          overall: 'A'
        },
        credits_earned: 4,
        grade_points: 9,
        total_points: 36
      },
      {
        course_id: 'ITL303',
        course_title: 'DATA STRUCTURES AND ANALYSIS',
        course_credits: 4,
        grade: {
          ese_pr_or: 'O',
          ia_tw: 'O',
          overall: 'O'
        },
        credits_earned: 4,
        grade_points: 10,
        total_points: 40
      },
      {
        course_id: 'ITL304',
        course_title: 'DATABASE MANAGEMENT SYSETEM',
        course_credits: 4,
        grade: {
          ese_pr_or: 'B',
          ia_tw: 'O',
          overall: 'A'
        },
        credits_earned: 4,
        grade_points: 9,
        total_points: 36
      },
      {
        course_id: 'ITL305',
        course_title: 'PRINCIPLE OF COMMUNICATION',
        course_credits: 4,
        grade: {
          ese_pr_or: 'O',
          ia_tw: 'O',
          overall: 'O'
        },
        credits_earned: 4,
        grade_points: 10,
        total_points: 40
      },
      {
        course_id: 'ITL301',
        course_title: 'DIGITAL DESIGN LAB',
        course_credits: 1,
        grade: {
          ese_pr_or: 'O',
          ia_tw: 'O',
          overall: 'O'
        },
        credits_earned: 1,
        grade_points: 10,
        total_points: 10
      },
      {
        course_id: 'ITL302',
        course_title: 'DATA STRUCTURES LAB',
        course_credits: 1,
        grade: {
          ese_pr_or: 'O',
          ia_tw: 'O',
          overall: 'O'
        },
        credits_earned: 1,
        grade_points: 10,
        total_points: 10
      },
      {
        course_id: 'ITL303',
        course_title: 'SQL LAB',
        course_credits: 1,
        grade: {
          ese_pr_or: 'O',
          ia_tw: 'O',
          overall: 'O'
        },
        credits_earned: 1,
        grade_points: 10,
        total_points: 10
      },
      {
        course_id: 'ITL304',
        course_title: 'JAVA PROGRAMMING LAB',
        course_credits: 1,
        grade: {
          ese_pr_or: 'O',
          ia_tw: 'O',
          overall: 'O'
        },
        credits_earned: 1,
        grade_points: 10,
        total_points: 10
      }
    ],
    total_credits: 26,
    total_credits_earned: 26,
    total_grade_points: 252,
    remark: 'Successful',
    sgpi: 9.69,
    cgpi: null,
    result_declared: '10 July 2016'
  }
  
  //course input
  courseList = [
    {
      code: 'FEC204',
      title:'APPLIED MATHEMATICS - II',
      branch_id: 200,
      credits: 5,
      sem: 2,
      ia: 20,
      tw: 25,
      ese: 80
    },
    {
      code: 'FEC205',
      title:'STRUCTURED PROGRAMMING APPROACH',
      branch_id: 200,
      credits: 4,
      sem: 2,
      ia: 20,
      tw: 25,
      pr: 25,
      ese: 80
    }
  ]

  //student

  student = {
    id: 'b27ff46b-544b-47a4-b029-f562601a6ee1',
    first_name: 'Harold',
    last_name: 'Shipman',
    parent_name: 'Benjamin Franklin',
    sem: 3,
    branch: 200,
  }

  //exam
  examin = {
    name: 'SECOND YEAR SEMESTER3 (CBCGS) (CHOISE BASED CREDIT AND GRADING SYSTEM)',
    held_on: '2019-5-20',
    result_decl_on: '2019-7-20'
  }

//stud_exam
stex = {
  stud_id : 'b27ff46b-544b-47a4-b029-f562601a6ee1',
  exam_id: 'c2f52e5c-6da5-4cc6-a90b-8e556733955f',
  sem: 3,
  seat_no: 20190720
}















grades = {
  stud_id: 'b27ff46b-544b-47a4-b029-f562601a6ee1',
  exam_id: 'c2f52e5c-6da5-4cc6-a90b-8e556733955f',
  sem: 3,
  seat_no: 20190720,
  exam_detail: {
    name: 'SECOND YEAR SEMESTER3 (CBCGS) (CHOISE BASED CREDIT AND GRADING SYSTEM)',
    held_on: '2019-05-20',
    result_decl_on: '2019-07-20'
  },
  student_info: {
    first_name: 'Harold',
    last_name: 'Shipman',
    branch_info: { name: 'Information Technology' }
  },
  grade_infos: [
    { ia1: 16, ia2: 15, tw: 23, pr: 25, ese: 65, 
      course: {
        title: 'APPLIED MATHEMATICS - III',
        code: 'ITC301',
        credits: 5,
        ia: 20,
        tw: 25,
        pr: null,
        ese: 80
      } },
      
    { ia1: 17, ia2: 14, tw: 23, pr: 23, ese: 68, course: [Object] },
    { ia1: 16, ia2: 15, tw: 23, pr: 25, ese: 65, course: [Object] },
    { ia1: 19, ia2: 15, tw: 24, pr: 25, ese: 68, course: [Object] },
    { ia1: 18, ia2: 20, tw: 24, pr: 25, ese: 75, course: [Object] }
  ]
}