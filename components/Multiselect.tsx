import React from 'react';

import Select from 'react-select';
import { countryOptions } from './docs/data';

export default () => (
    <div style={{width: '600px'}}>
    <Select  
      defaultValue={[countryOptions[2], countryOptions[3]]}
      isMulti
      name="colors"
      options={countryOptions}
      className="basic-multi-select"
      classNamePrefix="select"
    />
    </div>
  );