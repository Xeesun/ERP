
exports.getGradePoint = (score, outof) => {
    per = (score/outof)*100
    if(per>80) return { grade: 'O', point: 10}
    else if(per>75) return { grade: 'A', point: 9}
    else if(per>70) return { grade: 'B', point: 8}
    else if(per>60) return { grade: 'C', point: 7}
    else if(per>50) return { grade: 'D', point: 6}
    else if(per>45) return { grade: 'E', point: 5}
    else if(per>40) return { grade: 'P', point: 4}
    else return { grade: 'F', point: 0}
}
  
exports.generateReport = (grades) => {
    var tc = 0, tce = 0, tgp = 0;
    g = [];
  
    var report = {
      name : ( grades.student_info.first_name +" "+grades.student_info.last_name ) ,
      examination : grades.exam_detail.name,
      held_in: grades.exam_detail.held_on,
      branch: grades.student_info.branch_info.name,
      seat_number: grades.seat_no,
      regno: grades.stud_id,
      result: grades.grade_infos.map(ele => {
  
        var total_ia_tw = (ele.ia1 + ele.ia2)/2 + ele.course.tw
        var total_ese_pr = ele.ese + ele.pr
        var overall_grade = exports.getGradePoint( total_ese_pr + total_ia_tw, (ele.course.ese + ele.course.pr + ele.course.ia + ele.course.tw))
  
        temp = {
          course_id: ele.course.code,
          course_title: ele.course.title,
          course_credits: ele.course.credits,
          grade: {
            ese_pr_or: exports.getGradePoint(total_ese_pr, (ele.course.ese + ele.course.pr)).grade,
            ia_tw: exports.getGradePoint(total_ia_tw, (ele.course.ia + ele.course.tw)).grade,
            overall: overall_grade.grade
          },
          credits_earned: ele.course.credits,
          grade_points: overall_grade.point,
          total_points : overall_grade.point*ele.course.credits    
        }
        tc+=temp.credits_earned
        tce+=temp.course_credits
        tgp+=temp.total_points
        g.push(temp.grade.overall)
  
        return temp
      }),
  
      total_credits: tc,
      total_credits_earned: tce,
      total_grade_points: tgp,
      remark: g.includes('F')?'Unsuccessful':'Successful',
      sgpi: parseFloat((tgp/tc).toFixed(2)),
      cgpi: null,
      result_declared: grades.exam_detail.result_decl_on
    }
    return report
}
  
  
  
  
  
  