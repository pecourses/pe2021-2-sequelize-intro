const {
  Student,
  Group,
  sequelize,
  Sequelize: { Op },
} = require('./models');

(async () => {
  try {
    // await sequelize.sync({ force: true });
    // console.log('Sync OK');
    // const group1 = { code: 'pe2021-1', enteredAt: '2021-03-21' };
    // const createdGroup1 = await Group.create(group1);
    // const group2 = { code: 'pe2021-2', enteredAt: '2021-11-21' };
    // const createdGroup2 = await Group.create(group2);
    // const student1 = {
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   email: 'test1@test.test',
    //   birthday: '2020-08-15',
    //   groupId: 1,
    //   isMale: false,
    //   activitiesCount: 2,
    // };
    // const student2 = {
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   email: 'test2@test.test',
    //   birthday: '2020-08-15',
    //   groupId: 2,
    //   isMale: false,
    //   activitiesCount: 2,
    // };
    // const createdStudent1 = await Student.create(student1);
    // const createdStudent2 = await Student.create(student2);

    // Association 1:n (group 1:n students)
    // Magic methods - Lazy loading
    const [group1] = await Group.findAll({ where: { id: 1 } });
    const studsOfGroup1 = await group1.getStudents({ raw: true });
    console.log('studsOfGroup1', studsOfGroup1);

    // получить группу по инстансу студента (id: 2)
    const [student2] = await Student.findAll({ where: { id: 2 } });
    const groupsOfStudent2 = await student2.getGroup({ raw: true });
    console.log('groupsOfStudent2', groupsOfStudent2);

    // Eager loading (include: JOIN)
    const groupWithStudents = await Group.findAll({
      raw: true,
      where: { id: 1 },
      include: Student,
    });
    console.log('groupWithStudents', groupWithStudents);

    // получить инфу о студенте + его группе
    const studentWithGroup = await Student.findAll({
      raw: true,
      where: { id: 2 },
      include: Group,
    });
    console.log('studentWithGroup', studentWithGroup);

    // Association m:n (subjects m:n students) - доп. таблица
  } catch (err) {
    console.log('err', err);
  }
})();
