import React from 'react';
import { Header } from 'semantic-ui-react';

function SectionHeader({ title, type = 'h3' }) {
  return <Header as={type}>{title}</Header>;
}

export default SectionHeader;
