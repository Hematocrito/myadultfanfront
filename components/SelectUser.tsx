import React from 'react';

import Select from 'react-select';
import { usersOptions } from './docs/users';

export default () => (
    <div className='w-80 md:w-96 mb-7 mt-2'>
    <Select  
     /* defaultValue={[usersOptions[2]]}*/
      name="colors"
      options={usersOptions}
      className="basic-multi-select"
      classNamePrefix="select"
    />
    </div>
  );