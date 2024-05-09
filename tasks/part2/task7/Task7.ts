class Student {
  private name: string;
  private courses: Course[];

  constructor(name: string) {
    this.name = name;
    this.courses = [];
  }

  public enrollCourse(course: Course): void {
    this.courses.push(course);
  }
}

class Course {
  private title: string;

  constructor(title: string) {
    this.title = title;
  }
}
