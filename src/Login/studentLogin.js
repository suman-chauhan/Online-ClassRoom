import React from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";

const StudentLogin = () => {
  var navigate = useNavigate();

  const onFinish = (values) => {
    navigate("/class");
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div
        className="card"
        style={{
          width: "35rem",
          height: "100%",
          margin: "auto",
          marginTop: "180px",
          textAlign: "center",
        }}
      >
        <div
          style={{ textAlign: "left", marginLeft: "230px", fontSize: "1.5rem" }}
        >
          Login
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{ width: "100%", marginLeft: "100px" }}
        >
          <Form.Item
            name="Username"
            className="form-group"
            style={{ color: "red" }}
            rules={[
              {
                required: true,
                message: "Please input your username or email!",
              },
              {
                type: "email",
                message: "Enter a valid email address!",
              },
            ]}
          >
            <Input
              type="email"
              className="form-control"
              placeholder="Please Enter your username or  email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            style={{ color: "red" }}
            className="form-group"
            rules={[{ required: true, message: "Please input your password" }]}
          >
            <Input
              className="form-control"
              type="password"
              placeholder="Enter password!"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              block
              className="btn-primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default StudentLogin;
