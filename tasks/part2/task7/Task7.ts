class Student {
  private name: string;
  private courses: Course[];

  constructor(name: string) {
    this.name = name;
    this.courses = [];
  }

  public enrollCourse(course: Course): void {
    this.courses.push(course);

    course.addStudent(this);
  }
}

class Course {
  private title: string;
  private students: Student[];

  constructor(title: string) {
    this.title = title;
    this.students = [];
  }

  public addStudent(student: Student): void {
    this.students.push(student);
  }
}
