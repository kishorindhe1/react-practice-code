import React, { useEffect, useState } from "react";
import { Input, Modal, Table, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStudentByIdAction,
  getstudentsAction,
} from "../../redux/actions/actions";
import {
  DeleteFilled,
  ExclamationCircleOutlined,
  FilterOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import qs from "qs";
const AllStudentTable = () => {
  const [param, setParam] = useState({
    search: "",
    page: 1,
    pageSize: 5,
    filter: [],
  });

  const datasourse = [{ firstname: "kishor", lastname: "sd" }];
  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
      sorter: (a, b, sort, sorter) => console.log(sort, sorter),
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Branch",
      dataIndex: "branch",
      key: "branch",
    },
    {
      title: "action",
      key: "action",
      render: (record) => {
        return <DeleteFilled onClick={() => confirm(record)} />;
      },
    },
  ];
  function confirm(record) {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: record.firstname,
      okText: "Delete",
      cancelText: "Cancel",
      onOk: () => dispatch(deleteStudentByIdAction({ id: record.id })),
    });
  }
  const data = useSelector((state) => state.studentReducer);
  const dispatch = useDispatch();
  console.log(data);
  useEffect(() => {
    const payload = {
      search: param.search ? param.search : undefined,
      page: param.page ? param.page : undefined,
      size: param.pageSize ? param.pageSize : undefined,
      filter: param.filter.length ? param.filter : undefined,
    };
    dispatch(
      getstudentsAction(
        qs.stringify(payload, { indices: false, encode: false })
      )
    );
  }, [param]);
  return (
    <div className="container mt-3 bg-white  ">
      <div className="text-end ">
        <Select
          mode="multiple"
          placeholder="Branch"
          prefix={<FilterOutlined />}
          name="branchfilter"
          className="w-25 text-start"
          maxTagCount={2}
          onChange={(values) => setParam({ ...param, filter: values })}
        >
          <Select.OptGroup label="Branch">
            <Select.Option value="fymca">FYMCA</Select.Option>
            <Select.Option value="symca">SYMCA</Select.Option>
            <Select.Option value="tymca">TYMCA</Select.Option>
          </Select.OptGroup>
          <Select.OptGroup label="Gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="transgender">Transgender</Select.Option>
          </Select.OptGroup>
        </Select>
        <Input
          type="text"
          name="search"
          placeholder="Search"
          className="m-3 w-25 justify-content-end"
          value={param.search}
          prefix={<SearchOutlined />}
          onChange={(e) => setParam({ ...param, search: e.target.value })}
        />
      </div>
      <Table
        columns={columns}
        dataSource={data?.students?.rows}
        loading={data?.loader}
        pageSize={("5", "12")}
        pagination={{
          current: param.page,
          pageSize: param.pageSize,
          total: data?.students?.count,
          onChange: (page, pageSize) => {
            setParam({ ...param, page: page, pageSize: pageSize });
          },
        }}
      />
    </div>
  );
};

export default AllStudentTable;
