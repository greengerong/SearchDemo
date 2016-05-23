'use strict';

import _ from 'lodash';
import students from '../../data/student.json';

export function search(name = '') {
  return Promise.resolve(students)
    .then(stus => {
      return {
        data: _.chain(stus)
          .filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1)
          .value(),
        total: stus.length,
        query: name || 'All'
      };
    });
}