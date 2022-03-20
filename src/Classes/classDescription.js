import React, { useState } from "react";
import {Form,Button,Input} from 'antd'
import { useNavigate } from "react-router-dom";
import reactImg from "./images/react.png";
import "./class.css";
const {TextArea} = Input;

const ClassDescription = () => {

  const [studentForm, setstudentForm] = useState(false)
  const [chapterForm, setchapterForm] = useState(false)

  const showAddStudentForm= ()=>
  {
    setstudentForm(true)
  }
  const showUploadChapterForm = ()=>
  {
    setchapterForm(true)
  }
  var navigate = useNavigate();
  const handleClick = () => {
    navigate("/class");
  };
const AddStudentSuccess = ()=>
{
  navigate("/classDescription");
}
  const cancelAddStudent = () => {
    setstudentForm(false);
    setchapterForm(false)
  };
  const handleSucess = ()=>
  {
    navigate("/classDescription");
    setstudentForm(false);
    setchapterForm(false)
  }
  const AddChapterSuccess = ()=>
  {
    navigate("/classDescription");
    setchapterForm(false);
  }
  return (
    //buttons
    <div>
        
      <div style={{ textAlign: "left", margin:"5px 5px" }}>
        <svg
          onClick={handleClick}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
           
        </svg>
       
      </div>
      <div style={{ textAlign: "right", margin: "5px" }}>
        <button
          type="button"
          className="btn btn-dark"
          style={{ margin: "5px 5px" }}
          onClick={showUploadChapterForm}
        >
          Upload Chapter
        </button>

        <button
          type="button"
          style={{ margin: "5px 5px" }}
          className="btn btn-dark"
           onClick={showAddStudentForm}
        >
          Add Students
        </button>
      </div>
  {/* --------------studentform */}

  {studentForm ? (
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
                onFinish={AddStudentSuccess}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div
                  onClick={cancelAddStudent}
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
                <p style={{ textAlign: "left" }}> Add new Student</p>

                <div className="form-group">
                  <Input
                    maxLength={20}
                    className="form-control"
                    placeholder="Enter First Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <Input
                    maxLength={20}
                    className="form-control"
                    placeholder="Enter Last Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <Input
                    maxLength={20}
                    type="email"
                    className="form-control"
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div style={{ textAlign: "left", margin: "5px 5px" }}>
                  <Button
                    block
                    onClick={handleSucess}
                    style={{ backgroundColor: "#6c757d", color: "white" }}
                    className="btn-dark"
                  >
                  Submit
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </>
      ) : null}

{/* ----------chatperForm */}

{chapterForm ? (
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
                onFinish={AddChapterSuccess}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div
                  onClick={cancelAddStudent}
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
                <p style={{ textAlign: "left" }}> Upload New Chapter</p>

                <div className="form-group">
                  <Input
                    maxLength={20}
                    className="form-control"
                    placeholder="Enter  Subject Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <Input
                    // maxLength={20}
                    type="number"
                    className="form-control"
                    placeholder="Enter chapter number"
                    required
                  />
                </div>

                <div className="form-group">
                  <Input
                    maxLength={20}
                    className="form-control"
                    placeholder="Enter topic Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Upload Document/Video of lecture"
                    required
                    onFocus={(e)=>e.target.type="file"}
                  />
                </div>
                <TextArea
                  required
                  rows={6}
                  placeholder="Enter Topic Description"
                  maxLength={200}
                />

                <div style={{ textAlign: "left", margin: "5px 5px" }}>
                  <Button
                    block
                    onClick={handleSucess}
                    style={{ backgroundColor: "#6c757d", color: "white" }}
                    className="btn-dark"
                  >
                  Submit
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </>
      ) : null}



        
      {/* class name  */}
      <h2
        style={{
          textAlign: "center",
          fontFamily: "Lucida Console",
          margin: "5px 5px",
        }}
      >
        Welcome to React class class
      </h2>
      <div>
        <div class="classRow">
          <div class="classColumn">
            <div class="classCard">
              <h3>React</h3>
              <hr />
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "Lucida Console",
                }}
              >
                Chapter 1 : what is React ?
              </p>
              <hr />
              <p>
                React is a free and open-source front-end JavaScript library for
                building user interfaces based on UI components. It is
                maintained by Meta and a community of individual developers and
                companies.
              </p>
              <hr />
              <div>
                <img
                  className="img-fluid"
                  style={{ marginTop: "7px", marginBottom: "10px" }}
                  src={reactImg}
                  width="300px"
                  height="300px"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="classRow">
          <div class="classColumn">
            <div class="classCard">
              <h3>React</h3>
              <hr />
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "Lucida Console",
                }}
              >
                Chapter 2 : why we use React ?
              </p>
              <hr />
              <p>
                React. js is an open-source JavaScript library that is used for
                building user interfaces specifically for single-page
                applications. It's used for handling the view layer for web and
                mobile apps. React also allows us to create reusable UI
                components.
              </p>
              <hr />
              <div>
                <img
                  className="img-fluid"
                  style={{ marginTop: "7px", marginBottom: "10px" }}
                  src={reactImg}
                  width="300px"
                  height="300px"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDescription;
