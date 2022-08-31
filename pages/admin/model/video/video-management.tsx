import { VideoManagement } from 'components/VideoManagement';
import { GetStaticProps } from 'next';
import React, { useState, useEffect } from 'react';

export default VideoManagement;

export const getStaticProps: GetStaticProps = () => {
  
  return {
    props: { admin: 'fans' },
  };
};
