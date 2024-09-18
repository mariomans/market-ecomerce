import {
  faBasketball,
  faBook,
  faBoxArchive,
  faCircleNodes,
  faFileLines,
  faPen,
  faPenFancy,
  faStar,
  faTape,
  faThumbTack,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const dashboardData = [
  { name: 'ออร์เดอร์ใหม่', value: '100' },
  { name: 'การตรวจสอบชำระเงิน', value: '100' },
  { name: 'รายรับ/วัน', value: '100,000' },
  { name: 'รายรับ/เดือน', value: '1,000,000' },
];

export const mockRecommendProductMenu = (t) => {
  return [
    {
      key: 'product',
      label: t('สินค้าขายดี'),
      children: [
        {
          key: 'product_management',
          label: t('product_management'),
        },
        {
          key: 'category_management',
          label: t('category_management'),
        },
      ],
    },
    {
      key: 'recommend',
      label: t('สินค้าขายแนะนำ'),
      open: true,
      children: [
        {
          key: 'member_management1',
          label: t('member_management'),
        },
        {
          key: 'check_store1',
          label: t('check_store'),
        },
      ],
    },
    {
      key: 'top',
      label: t('สินค้าขายยอดนิยม'),
      open: true,
      children: [
        {
          key: 'member_management2',
          label: t('member_management'),
        },
        {
          key: 'check_store2',
          label: t('check_store'),
        },
      ],
    },
    {
      key: 'sale',
      label: t('สินค้าลดราคา'),
      open: true,
      children: [
        {
          key: 'member_management3',
          label: t('member_management'),
        },
        {
          key: 'check_store3',
          label: t('check_store'),
        },
      ],
    },
  ];
};

export const mockCategoriesProductMenu = (t) => {
  return [
    {
      key: 'product',
      label: t('อุปกรณ์เครื่องเขียน'),
      children: [
        {
          key: 'product_management',
          label: t('product_management'),
        },
        {
          key: 'category_management',
          label: t('category_management'),
        },
      ],
    },
    {
      key: 'recommend',
      label: t('อุปรกร์สำนักงาน'),
      open: true,
      children: [
        {
          key: 'member_management1',
          label: t('member_management'),
        },
        {
          key: 'check_store1',
          label: t('check_store'),
        },
      ],
    },
    {
      key: 'top',
      label: t('ผลิตภัณฑ์กระดาษ'),
      open: true,
      children: [
        {
          key: 'member_management2',
          label: t('member_management'),
        },
        {
          key: 'check_store2',
          label: t('check_store'),
        },
      ],
    },
    {
      key: 'sale',
      label: t('อุปกรณ์ฝีมือ'),
      open: true,
      children: [
        {
          key: 'member_management3',
          label: t('member_management'),
        },
        {
          key: 'check_store3',
          label: t('check_store'),
        },
      ],
    },
  ];
};

export const productMenu = (t) => {
  return [
    {
      key: '1',
      label: t('อุปกรณ์เครื่องเขียน'),
      icon: <FontAwesomeIcon icon={faPen} />,
      children: [
        {
          key: 'product_management',
          label: t('product_management'),
        },
        {
          key: 'category_management',
          label: t('category_management'),
        },
      ],
    },
    {
      key: '2',
      label: t('สมุด บิล และหนังสือ'),
      open: true,
      icon: <FontAwesomeIcon icon={faBook} />,
      children: [
        {
          key: 'member_management1',
          label: t('member_management'),
        },
        {
          key: 'check_store1',
          label: t('check_store'),
        },
      ],
    },
    {
      key: '3',
      label: t('อุปกรณ์สำนักงาน'),
      open: true,
      icon: <FontAwesomeIcon icon={faThumbTack} />,
      children: [
        {
          key: 'member_management2',
          label: t('member_management'),
        },
        {
          key: 'check_store2',
          label: t('check_store'),
        },
      ],
    },
    {
      key: '4',
      label: t('กาว เทป และอุปกรณ์การบรรจุ'),
      open: true,
      icon: <FontAwesomeIcon icon={faTape} />,
      children: [
        {
          key: 'member_management3',
          label: t('member_management'),
        },
        {
          key: 'check_store3',
          label: t('check_store'),
        },
      ],
    },
    {
      key: '5',
      label: t('ผลิตภัณฑ์กระดาษ'),
      icon: <FontAwesomeIcon icon={faFileLines} />,
      open: true,
      children: [
        {
          key: 'member_management4',
          label: t('member_management'),
        },
        {
          key: 'check_store4',
          label: t('check_store'),
        },
      ],
    },
    {
      key: '5',
      label: t('แฟ้มและอุปกร์จัดเก็บเอกสาร'),
      icon: <FontAwesomeIcon icon={faBoxArchive} />,
      open: true,
      children: [
        {
          key: 'member_management5',
          label: t('member_management'),
        },
        {
          key: 'check_store5',
          label: t('check_store'),
        },
      ],
    },
    {
      key: '6',
      label: t('อุปกรณ์กีฬา ดนตรี สันทนาการ'),
      icon: <FontAwesomeIcon icon={faBasketball} />,
      open: true,
      children: [
        {
          key: 'member_management6',
          label: t('member_management'),
        },
        {
          key: 'check_store6',
          label: t('check_store'),
        },
      ],
    },
    {
      key: '7',
      label: t('อุปกรณ์ศิลปะ และงานฝีมือ'),
      icon: <FontAwesomeIcon icon={faPenFancy} />,
      open: true,
      children: [
        {
          key: 'member_management7',
          label: t('member_management'),
        },
        {
          key: 'check_store7',
          label: t('check_store'),
        },
      ],
    },
    {
      key: '8',
      label: t('อุปกรณ์ตกแต่ง ตามเทศกาล'),
      icon: <FontAwesomeIcon icon={faStar} />,
      open: true,
      children: [
        {
          key: 'member_management8',
          label: t('member_management'),
        },
        {
          key: 'check_store8',
          label: t('check_store'),
        },
      ],
    },
    {
      key: '9',
      label: t('เบ็ดเตล็ด'),
      icon: <FontAwesomeIcon icon={faCircleNodes} />,
      open: true,
      children: [
        {
          key: 'member_management9',
          label: t('member_management'),
        },
        {
          key: 'check_store9',
          label: t('check_store'),
        },
      ],
    },
  ];
};
