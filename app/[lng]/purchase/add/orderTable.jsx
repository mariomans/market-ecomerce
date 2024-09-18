/* eslint-disable react/prop-types */

import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Popconfirm,
  Row,
  Space,
  Table,
  Typography,
} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faX } from '@fortawesome/free-solid-svg-icons';
import AddProductModal from '@/components/modal/addProductModal';
const EditableContext = React.createContext(null);

// eslint-disable-next-line no-unused-vars
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        className="px-3"
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div className="px-3" onClick={toggleEdit}>
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

const OrderTable = ({ t }) => {
  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      name: 'Baiside ดินสอกดข้าง แฟนซี MP-8202',
      id: '6926853482029',
      price: '189 บาท',
      amount: '1',
      price_amount: '189 บาท',
    },
  ]);
  const [modal, setModal] = useState('');
  const [count, setCount] = useState(2);

  // Delete data each column function
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const defaultColumns = [
    {
      title: 'ชื่อสินค้า',
      dataIndex: 'name',
      width: '30%',
    },
    {
      title: 'รุ่น',
      dataIndex: 'id',
      width: '15%',
      align: 'center',
    },
    {
      title: 'ราคาต่อหน่วย',
      dataIndex: 'price',
      width: '15%',
      align: 'center',
    },
    {
      title: 'ปริมาณ',
      dataIndex: 'amount',
      editable: true,
      width: '15%',
      align: 'center',
      render: (value) => <Input value={value} />,
    },
    {
      title: 'รวม',
      dataIndex: 'price_amount',
      width: '15%',
      align: 'center',
    },
    {
      title: 'ลบสินค้า',
      dataIndex: 'operation',
      width: '10%',
      align: 'center',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <FontAwesomeIcon icon={faX} />
          </Popconfirm>
        ) : null,
    },
  ];

  // Add product in table function
  const handleAdd = () => {
    const newData = {
      key: Math.floor(Math.random() * 20),
      name: 'Baiside ดินสอกดข้าง แฟนซี MP-8202',
      id: '6926853482029',
      price: '189 บาท',
      amount: '1',
      price_amount: '189 บาท',
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  // Submit data in table function
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];

    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  // Column render function with edit input
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  return (
    <div>
      <Row justify="space-between">
        <Col>
          <Space>
            <Typography className="text-lg font-bold">
              {t('รายการสินค้า')}
            </Typography>
          </Space>
        </Col>
        <Col>
          <Space>
            <Input
              prefix={<FontAwesomeIcon icon={faBarcode} className="pr-2" />}
              placeholder="ค้นหาสินค้า..."
            />
            <Button
              type="primary"
              className="bg-[#00B247]"
              onClick={() => setModal('add')}
            >
              เพิ่มสินค้า
            </Button>
          </Space>
        </Col>
        <Divider dashed className="mt-2" />
      </Row>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
      <div className="flex justify-end mt-6">
        <Typography className="font-bold mr-6 text-lg">รวม:</Typography>
        <Typography style={{ color: 'red' }} className="font-bold mr-6 text-lg">
          189 บาท
        </Typography>
      </div>
      {modal === 'add' && (
        <AddProductModal
          open={modal === 'add'}
          setOpen={setModal}
          onSubmit={() => console.log('add submit')}
          onAddColumn={handleAdd}
          t={t}
        />
      )}
    </div>
  );
};
export default OrderTable;
