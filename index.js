const {
  Student,
  Group,
  Subject,
  StudentSubjects,
  sequelize,
  Sequelize: { Op },
} = require('./models');
const studentSubjects = require('./models/studentSubjects');

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Sync OK');

    const group1 = { code: 'pe2021-1', enteredAt: '2021-03-21' };
    const createdGroup1 = await Group.create(group1);
    const group2 = { code: 'pe2021-2', enteredAt: '2021-11-21' };
    const createdGroup2 = await Group.create(group2);
    const student1 = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'test1@test.test',
      birthday: '2020-08-15',
      groupId: 1,
      isMale: false,
      activitiesCount: 2,
    };
    const student2 = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'test2@test.test',
      birthday: '2020-08-15',
      groupId: 2,
      isMale: false,
      activitiesCount: 2,
    };
    const createdStudent1 = await Student.create(student1);
    const createdStudent2 = await Student.create(student2);

    const subject1 = { title: 'it', hours: 100 };
    const subj1 = await Subject.create(subject1);

    const subject2 = { title: 'pe', hours: 100 };
    const subj2 = await Subject.create(subject2);

    await StudentSubjects.create({ studentId: 1, subjectId: 2, mark: 4 });
    await StudentSubjects.create({ studentId: 2, subjectId: 2, mark: 5 });

    const studWithSubj2 = await subj2.getStudents({ raw: true });
    console.log('studWithSubj2', studWithSubj2);

    // Association m:n (subjects m:n students) - доп. таблица
  } catch (err) {
    console.log('err', err);
  }
})();
