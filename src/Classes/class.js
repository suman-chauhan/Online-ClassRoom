import { Select, Input, DatePicker, Button, Form } from "antd";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./class.css";
import Classlist from "./classlist";
const { Option } = Select;
const { TextArea } = Input;

const DashBoard = () => {
  const [showForm, setshowForm] = useState(false);
  const [addStudent, setaddStudent] = useState(false);
  var navigate = useNavigate();
  const handleClick = (e) => {
    setshowForm(true);
  };

  const createClassSuccess = (e) => {
    navigate("/class");
  };
  const cancelClassCreate = () => {
    setshowForm(false);
    setaddStudent(false);
  };
  return (
    // <Layout>
    <>
      <div style={{ margin: "30px 100px", textAlign: "right" }}>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClick}
        >
          create class
        </button>
      </div>

      {/* create claas form  */}
      {showForm ? (
        <>
          {" "}
          <div
            className="card sidebar"
            style={{
              width: "20rem",
              margin: "auto",
              marginTop: "10px",
              textAlign: "right",
            }}
          >
            <div className="card-body">
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={createClassSuccess}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div
                  onClick={cancelClassCreate}
                  style={{ textAlign: "right", padding: "10px,10px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-backspace-reverse-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 3a2 2 0 0 1 2-2h7.08a2 2 0 0 1 1.519.698l4.843 5.651a1 1 0 0 1 0 1.302L10.6 14.3a2 2 0 0 1-1.52.7H2a2 2 0 0 1-2-2V3zm9.854 2.854a.5.5 0 0 0-.708-.708L7 7.293 4.854 5.146a.5.5 0 1 0-.708.708L6.293 8l-2.147 2.146a.5.5 0 0 0 .708.708L7 8.707l2.146 2.147a.5.5 0 0 0 .708-.708L7.707 8l2.147-2.146z" />
                  </svg>
                </div>
                <p style={{ textAlign: "left" }}> Create a New Class</p>

                <div className="form-group">
                  <Input
                    maxLength={20}
                    className="form-control"
                    placeholder="Enter class Title"
                    required
                  />
                </div>

                <div className="form-group">
                  <DatePicker
                    className="form-control"
                    placeholder="Enter date of  class"
                    required
                  />
                </div>

                <div style={{ textAlign: "left" }}>
                  <Select
                    mode="multiple"
                    style={{ width: "100%" }}
                    placeholder="select student"
                    optionLabelProp="label"
                    required
                  >
                    <Option value="Ajeet " label="Ajeet ">
                      Ajeet
                    </Option>
                    <Option value="Amit " label="Amit ">
                      Amit
                    </Option>
                    <Option value="Amit " label="Amit ">
                      Rekha
                    </Option>
                  </Select>
                  ,
                </div>

                <TextArea
                  required
                  rows={6}
                  placeholder="Enter class Description"
                  maxLength={200}
                />
                <div style={{ textAlign: "left", margin: "5px 5px" }}>
                  <Button
                    block
                    style={{ backgroundColor: "#6c757d", color: "white" }}
                    className="btn-dark"
                  >
                    Create new class
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </>
      ) : null}

      {/* classes list  */}
      <Classlist />
    </>
  );
};

export default DashBoard;
