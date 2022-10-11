import React from "react";
import {Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { userLogin } from "../store/auth/authSlice";

const Login = () => {
    const [form] = Form.useForm();
    const username = Form.useWatch('username', form);
    const password = Form.useWatch('password', form);
    const data = {username, password}
    const dispatch = useDispatch();
    const onFinish = async () => {
      dispatch(userLogin(data));
    };

    const onFinishFailed = (e) => {
      console.log("Failed:", e);
    };

      return (
        <>
            <div className='container'>
              <div className='center'>
                <h2>Login</h2>
                    <Form
                    form={form}
                    name="basic"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item className="text-center">
                        <Button className='btn' type="primary" htmlType="submit">
                        Sign In
                        </Button>
                    </Form.Item>
                    </Form>
                </div>
            </div>
          </>
      );
    };

export default Login;