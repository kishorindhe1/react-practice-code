import { Button, DatePicker, Form, Input, message, Switch, Upload } from "antd";
import React, { useState } from "react";
import { useUserUpdate } from "../Context";
import { isStrongPassword, isMobilePhone } from "validator";
import "./child.css";

const DateStyle = {
  width: "100%",
};

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
const Child1 = () => {
  const setUser = useUserUpdate();
  const onClickButton = () => {
    setUser({ name: "rosham" });
  };
  const [state, setState] = useState({
    loading: false,
  });

  const { loading, imageUrl } = useState("");
  const uploadButton = (
    <div>
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const handleChange = (info) => {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, (imageUrl) =>
      setState({
        // imageUrl,
      })
    );
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="grid">
      <div className="card ">
        <div className="card-body">
          <Form onFinish={onSubmit}>
            <Form.Item
            name="file"
            
              hasFeedback
            >
              <Input type="file" />
            </Form.Item>
            <Form.Item
              name="mobile"
              rules={[
                {
                  validator: (_, value) => {
                    if (isMobilePhone(value, ["en-IN"]))
                      return Promise.resolve();
                    else return Promise.reject(new Error("Enter Valid number"));
                  },
                },
              ]}
              hasFeedback
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              name="email"
              placeholder="Email"
              rules={[
                {
                  required: true,
                  message: "Email id requied",
                },
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
              ]}
              hasFeedback
            >
              <Input type="email" placeholder="email" name="email" />
            </Form.Item>
            <Form.Item
              name="password"
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
                      return Promise.reject(new Error("Enter valid password!"));
                    }
                  },
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="password" />
            </Form.Item>
            <Form.Item
              name="date"
              rules={[
                {
                  required: true,
                  message: "Date is required",
                },
              ]}
              hasFeedback
            >
              <DatePicker name="date" size="large" style={DateStyle} />
            </Form.Item>
            <Form.Item
              name="about"
              rules={[
                {
                  required: true,
                  message: "Enter About you",
                },
              ]}
              hasFeedback
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              name="term"
              label="Switc"
              rules={[
                {
                  validator: (_, value) => {
                    if (value) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject(new Error("Required"));
                    }
                  },
                },
              ]}
              valuePropName="checked"
              hasFeedback
            >
              <Switch />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit " style={DateStyle}>
                Login{" "}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Child1;
