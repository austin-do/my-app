/* eslint-disable no-trailing-spaces */

'use client';

import React from 'react';
import { Button, Card, Form, Input, Typography } from 'antd';
import { Box } from '@mui/material';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import Link from 'next/link';
import toast from 'react-hot-toast';

import { PRIMARY_COLOUR } from '@/constants/constants';

const sendEmail = async (data: any) => {
  const response = await fetch('/api/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.status === 200) {
    toast.success('Hey! Your message was sent, we will get back to you as soon as possible!');
  }
};

const onFinishFailed = (errorInfo: any) => {
  toast.success('Oops! Something went wrong on our end... Please call or email us!');
  console.log(errorInfo);
};

const onFinish = (values: any) => {
  sendEmail(values);
};

type FieldType = {
  email?: string;
  subject?: string;
  message?: string;
};

const App: React.FC = () => (
  <>
    <Box>
      <Typography>
        <Title>Contact Us</Title>
        <Paragraph>
          We are more than happy to receive feedback and questions at any time!
          Want to see more of your favourite brand, want to make suggestions for
          improvements, or have any questions? Please drop us a message here or
          on our social media!
        </Paragraph>
        <Paragraph>
          Interested in being a part of this lovely team? Please forward your
          resume to
          <Link href="dendendori@gmail.com" passHref>
            {' '}
            dendendori@gmail.com
          </Link>
        </Paragraph>
      </Typography>
    </Box>
    <Card>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: 'Please input your email' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item<FieldType>
          name="subject"
          rules={[{ required: true, message: 'Please input a subject' }]}
        >
          <Input placeholder="Subject" />
        </Form.Item>
        <Form.Item<FieldType>
          name="message"
          rules={[{ required: true, message: 'Please input your message' }]}
        >
          <Input.TextArea placeholder="Enter your message" autoSize={{ minRows: 6 }} />
        </Form.Item>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                color: 'white',
                backgroundColor: PRIMARY_COLOUR,
              }}
            >
              Send
            </Button>
          </Form.Item>
        </Box>
      </Form>
    </Card>
  </>
);

export default App;
