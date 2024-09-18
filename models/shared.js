import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Space } from 'antd';
import { Trans } from 'react-i18next';

const itemRender = (_, type, originalElement) => {
  if (type === 'prev') {
    return (
      <Space>
        <FontAwesomeIcon icon={faChevronLeft} />
        <Trans>previous</Trans>
      </Space>
    );
  }
  if (type === 'next') {
    return (
      <Space>
        <Trans>next</Trans>
        <FontAwesomeIcon icon={faChevronRight} />
      </Space>
    );
  }
  return originalElement;
};

const initialPagination = (data) => {
  return {
    showSizeChanger: false,
    current: data.page,
    total: 30,
    pageSize: 10,
    pageSizeOptions: ['20', '50', '100', '200'],
    position: ['bottomRight'],
    itemRender: itemRender,
  };
};

export { initialPagination, itemRender };
