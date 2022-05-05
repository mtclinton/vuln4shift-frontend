import React from 'react';
import SkeletonTable from '@redhat-cloud-services/frontend-components/SkeletonTable/SkeletonTable';
import { TableVariant } from '@patternfly/react-table';

const CveDetailTable = () => {
  return (
    <SkeletonTable colSize={5} rowSize={20} variant={TableVariant.compact} />
  );
};

export default CveDetailTable;