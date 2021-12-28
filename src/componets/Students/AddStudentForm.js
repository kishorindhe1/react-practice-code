import { Breadcrumb, Form, Input, Select, Radio } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import { HomeOutlined, MessageOutlined } from "@ant-design/icons";
import React from "react";
import { Button } from "antd/lib/radio";
import { isMobilePhone } from "validator";
import { useDispatch } from "react-redux";
import { AddStudentAction } from "../../redux/actions/actions";
const AddStudentForm = () => {
   const dispatch=useDispatch()
  const onSubmit = (values) => {
    console.log(values);
 dispatch(AddStudentAction(values))
  };
  return (
    <div className="container">
      <div className="container student-container  mt-3">
        

        <Form className="" onFinish={onSubmit}>
          <div className="row">
            <h4 className="m-3 text-center"> Add student </h4>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Form.Item
                name="firstname"
                rules={[
                  {
                    required: true,
                    message: "First  name is required ! ",
                  },
                ]}
                hasFeedback
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: "Last  name is required ! ",
                  },
                ]}
                hasFeedback
              >
                <Input placeholder="Last Name" />
              </Form.Item>
              <Form.Item
                name="email"
                type="email"
                rules={[
                  {
                    required: true,
                    message: "Email   is required ! ",
                  },
                  {
                    type: "email",
                    message: "Invalid email address",
                  },
                ]}
                hasFeedback
              >
                <Input placeholder="Email " />
              </Form.Item>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Form.Item
                name="mobile"
                rules={[
                  {
                    required: true,
                    message: "Mobile numbe is required ! ",
                  },
                  {
                    validator: (_, value) => {
                      if (isMobilePhone(value, ["en-IN"]))
                        return Promise.resolve();
                      else
                        return Promise.reject(
                          new Error("Invalid Mobile  Number")
                        );
                    },
                  },
                ]}
                hasFeedback
              >
                <Input type="number" placeholder="Mobile " />
              </Form.Item>
              <Form.Item
                name="branch"
                rules={[
                  {
                    required: true,
                    message: "Required",
                  },
                ]}
              >
                <Select
                  mode="tag"
                  placeholder="Branch"
                  //  maxTagCount="2"
                >
                  <Select.Option value="fymca">FYMCA</Select.Option>
                  <Select.Option value="symca">SYMCA</Select.Option>{" "}
                  <Select.Option value="tymca">TYMCA</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="gender"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Radio.Group style={{ width: "100%" }}>
                  <Radio.Button value="male">Male</Radio.Button>
                  <Radio.Button value="female">Female</Radio.Button>
                  <Radio.Button value="trans">Transgenger</Radio.Button>
                </Radio.Group>
              </Form.Item>

              <div className="m-3 text-end">
                <button
                  type="submit"
                  className="btn btn-outline btn-success  ml-3 "
                >
                  Add Student
                </button>
                <button
                  type="reset"
                  className="btn btn-outline btn-danger m-3"
                >
                 Reset
                </button>
              </div>

              {/* <button type="submit">ok</button> */}
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddStudentForm;
