const {
  Student,
  sequelize,
  Sequelize: { Op },
} = require('./models');
// const {Op} = require('sequelize');

// sequelize
//   .sync({ force: true })
//   .then(() => console.log('Sync OK'))
//   .catch(err => console.log('err', err));

(async () => {
  const student = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'test6@test.test',
    birthday: '2020-08-15',
    isMale: false,
    activitiesCount: 2,
  };

  // C - INSERT - create
  /*
  INSERT INTO "Students" ("id","firstName","lastName","email","birthday","isMale","activitiesCount","createdAt","updatedAt") 
  VALUES (DEFAULT,$1,$2,$3,$4,$5,$6,$7,$8)
  RETURNING "id","firstName","lastName","email","birthday","isMale","activitiesCount","createdAt","updatedAt";
  */

  const createdStudent = await Student.create(student);
  console.log('createdStudent', createdStudent.get());

  // R - SELECT - findAll

  // const foundStudents = await Student.findAll({ raw: true });
  // console.log('foundStudents', foundStudents);

  // Пагинация + сортировка

  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   limit: 2,
  //   offset: 0,
  //   order: [['id', 'DESC']],
  // });
  // console.log('foundStudents', foundStudents);

  // Добавить данные в таблицу и получить вторую страницу при просмотре
  // по 3 строки, упорядочить по дате рождения

  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   limit: 3,
  //   offset: 3,
  //   order: [['birthday', 'DESC'],'firstName'],
  // });
  // console.log('foundStudents', foundStudents);

  // Фильтрация
  // =
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   where: { birthday: '2011-08-15' },
  // });

  // AND
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   where: { birthday: '2010-08-15', firstName: 'Kate' },
  // });

  // OR
  // activitiesCount 5 or 3
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   where: { [Op.or]: [{ activitiesCount: 1 }, { activitiesCount: 3 }] },
  // });

  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   where: {
  //     activitiesCount: {
  //       [Op.or]: [1, 3],
  //     },
  //   },
  // });

  // Получить студентов, которые зовут не Kate
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   where: { firstName: { [Op.ne]: 'Kate' } },
  // });

  // Проекция
  // какие вывести из имеющихся
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   attributes: ['firstName'],
  // });

  // какие не выводить
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   attributes: { exclude: ['createdAt', 'updatedAt'] },
  // });

  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   attributes: {
  //     include: [[sequelize.fn('age', sequelize.col('birthday')), 'age']],
  //   },
  // });

  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   attributes: {
  //     include: [
  //       [sequelize.literal('EXTRACT (YEAR FROM age(birthday))'), 'age'],
  //     ],
  //   },
  // });

  // Grouping

  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   attributes: ['activitiesCount', sequelize.fn('count', sequelize.col('id'))],
  //   group: 'activitiesCount',
  //   having: sequelize.literal('count(id)>1'),
  // });

  // console.log('foundStudents', foundStudents);

  // U - UPDATE - update

  // const [, [updatedStudent]] = await Student.update(
  //   {
  //     activitiesCount: 6,
  //   },
  //   {
  //     where: { id: 15 },
  //     returning: true,
  //     raw: true,
  //   }
  // );
  // console.log('updatedStudent', updatedStudent);

  // D - DELETE - destroy
  // const deletedStudentsCount = await Student.destroy({ where: { id: 15 } });
  // console.log('deletedStudentsCount', deletedStudentsCount);
})();
