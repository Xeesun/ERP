CREATE DATABASE ERP;

CREATE TABLE users(
    pid SERIAL PRIMARY KEY;
    email VARCHAR(25) NOT NULL;
    password VARCHAR(200) NOT NULL;
);

INSERT INTO users(email, password) VALUES('harry@gmail.com', 'harry123');

SELECT * FROM users;
SELECT * FROM users WHERE email = 'user_email';





create table user_login(userid uuid primary key, password varchar(200) not null, role text not null);

create table grade_report(stud_id uuid primary key, sem1 jsonb, sem2 jsonb, sem3 jsonb, sem4 jsonb);

create table student_info(id uuid primary key, first_name varchar(20), last_name varchar(20), parent_name varchar(30), address varchar(100), dob date, doa date, sem int, branch int, class varchar(10), roll_no int, email_id varchar(40), phone varchar(15));

create table grade_info(stud_id uuid, sem int, course_id uuid, ia1 int, ia2 int, tw int, pr int, ese int, primary key(stud_id,course_id));

create table courses(id uuid primary key, title varchar(50) unique not null, sem int not null, code varchar(8), branch_id int not null, credits int, ia int, tw int, pr int, ese int);

create table branch_info(id int primary key, name string not null unique)

create table stud_exam_info(stud_id uuid primary key, exam_id uuid primary key, sem int, seat_no uuid primary key)

create table exams_details(exam_id uuid primary key, name string not null, held_on date not null, result_decl_on date)