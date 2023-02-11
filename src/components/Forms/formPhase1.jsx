import React from "react";

import { Button, Form, Input } from "antd";
import LayoutAdmin from "../Layout/adminLayout";
import { Toaster } from "react-hot-toast";
import { notifyError, notifySuccess } from "../Alerts";

const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const FormPhaseOne = () => {
  const [form] = Form.useForm();

  const onSubmit = (values) => {
    try {
      console.log({ values });
      sendData(values);
    } catch (e) {
      console.log(e.message);
    }
  };

  const sendData = async (data) => {
    const res = await fetch(
      `https://backend-bsale-production.up.railway.app/api/phase1`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          subtitle: data.subTitle,
          resume: data.resume,
        }),
      }
    );
    const status = await res.status;
    const dataRes = await res.json();
    console.log(dataRes);
    if (status === 400) {
      notifyError(dataRes.message);
    } else {
      notifySuccess(dataRes.message);
      onReset();
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ note: "Hello world!", gender: "male" });
  };

  return (
    <LayoutAdmin>
      <Toaster />

      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onSubmit}
        style={{
          maxWidth: 600,
          marginBlock: "2rem",
        }}
      >
        <Form.Item
          name="title"
          label="Título"
          rules={[{ required: true }]}
          style={{ width: "100%" }}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="subTitle"
          label="subtítulo"
          rules={[{ required: true }]}
          style={{ width: "100%" }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="resume"
          label="Resumen"
          rules={[{ required: true }]}
          style={{ width: "100%" }}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            crear
          </Button>
        </Form.Item>
      </Form>
    </LayoutAdmin>
  );
};

export default FormPhaseOne;
