import React, { useState } from "react";
import { message, Tabs } from "antd";
import { Form, Input, Select, Radio } from "antd";
import { isMobilePhone, isStrongPassword } from "validator";

import { AppleOutlined, AndroidOutlined, EditFilled } from "@ant-design/icons";

const EditUserDetails = () => {
  const [state, setState] = useState();
  const onSubmit = (values) => {
    console.log(values);
    //  dispatch(AddStudentAction(values))
  };
  return (
    <div className="container">
      <h5 className="m-3 ml-4 "> Profile Edit </h5>

      <div className="container  bg-white m-3">
        <div className="row m-3">
          <div className="row col-12 justify-content-center m-3">
            <div className="profile-pic-container">
              <div className="profile-pic-container-input">
                <label for="profile_pic" className="profile-pic-label">
                  {" "}
                  <EditFilled />{" "}
                </label>
                <input
                  type="file"
                  className="profile-pic"
                  id="profile_pic"
                  onChange={(e) => setState(e.target.files[0])}
                  name="pic"
                />
              </div>
              <div className="profile-pic-container-image">
                {state ? (
                  <img
                    src={URL.createObjectURL(state)}
                    alt="avatar"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      padding: 10,
                    }}
                    className="profile-pic-img"
                  />
                ) : (
                  <img
                    src={
                      "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
                    }
                    alt="avatar"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    className="profile-pic-img"
                  />
                )}
              </div>
            </div>
          </div>
          <Tabs
            defaultActiveKey="1"
            centered={true}
            animated={{ inkBar: true, tabPane: false }}
          >
            <Tabs.TabPane
              tab={
                <span>
                  <AppleOutlined />
                  Profile Details
                </span>
              }
              key="1"
            >
              <div className="container student-container  mt-3">
                <Form
                  className=""
                  onFinish={onSubmit}
                  initialValues={{ firstname: "kishor", email: "r@asd.com" }}
                >
                  <div className="row">
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
                        <Input placeholder="Email " disabled />
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
                          <Select.Option value="symca">
                            SYMCA
                          </Select.Option>{" "}
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
                          Update
                        </button>
                      </div>

                      {/* <button type="submit">ok</button> */}
                    </div>
                  </div>
                </Form>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Change password
                </span>
              }
              key="2"
            >
              <div className="row justify-content-center ">
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                  <Form onFinish={(values) => console.log(values)}>
                    <Form.Item
                      name="currentpassword"
                      rules={[
                        {
                          required: true,
                          message: "Password is required",
                        },
                        {
                          validator: (_, value) => {
                            if (isStrongPassword(value)) {
                              return Promise.resolve();
                            } else {
                              return Promise.reject(
                                new Error("Enter valid password!")
                              );
                            }
                          },
                        },
                      ]}
                      hasFeedback
                    >
                      <Input.Password placeholder="Current password" />
                    </Form.Item>
                    <Form.Item
                      name="newpassword"
                      rules={[
                        {
                          required: true,
                          message: "Password is required",
                        },

                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (isStrongPassword(value)) {
                              if (
                                !value ||
                                getFieldValue("currentpassword") != value
                              )
                                return Promise.resolve();
                              else
                                return Promise.reject(
                                  new Error("Enter old password!")
                                );
                            } else {
                              return Promise.reject(
                                new Error("Enter valid password!")
                              );
                            }
                          },
                        }),
                      ]}
                      hasFeedback
                    >
                      <Input.Password placeholder=" New password" />
                    </Form.Item>

                    <Form.Item
                      name="confirmpassword"
                      rules={[
                        {
                          required: true,
                          message: "Password is required",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (
                              !value ||
                              getFieldValue("newpassword") === value
                            )
                              return Promise.resolve();
                            else {
                              return Promise.reject(
                                new Error("Enter password doesn't match!")
                              );
                            }
                          },
                        }),
                      ]}
                      hasFeedback
                    >
                      <Input.Password placeholder="Confirm password" />
                    </Form.Item>
                    <div className="m-3 text-end">
                      <button
                        type="submit"
                        className="btn btn-outline btn-success  ml-3 "
                      >
                        Change
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </Tabs.TabPane>
          </Tabs>
          ,
        </div>
      </div>
    </div>
  );
};

export default EditUserDetails;
