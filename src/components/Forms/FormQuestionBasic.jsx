import React, { useState, useEffect, useRef } from "react";

import { Button, Form, Input, Row } from "antd";
import { Toaster } from "react-hot-toast";
import { notifyError, notifySuccess } from "../Alerts";

import axios from "axios";
import { getApi, postApi } from "../../services";

const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const FormQuestionBasic = () => {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState("");
  const [phaseInfo, setPhaseInfo] = useState(null);

  useEffect(() => {
    getApi("api/phase1").then((res) => {
      console.log(res[0].id);
      setPhaseInfo(res[0]);
    });
  }, []);

  useEffect(() => {
    saveImage();
  }, [image]);

  const saveImage = () => {
    try {
      // sendData(values);
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "tizzttbp");
      axios
        .post(
          `https://api.cloudinary.com/v1_1/da0d2neas/image/upload`,
          formData
        )
        .then((res) => {
          setImageUrl(res.data.secure_url);
          console.log(res);
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  const onSubmit = (values) => {
    try {
      postApi("api/phase1/question", {
        ...values,
        type: "select",
        idPhase: phaseInfo.id,
        image: imageUrl || "",
      })
        .then((res) => {
          console.log(res);
          notifySuccess("La pregunta fue creada satisfactoriamente...");
        })
        .catch((err) => {
          notifyError("Hubo un error: " + err.message);
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  const sendData = async (data) => {
    axios
      .post(`https://api.cloudinary.com/v1_1/dzgbz8lvg/image/upload`, data)
      .then((res) => {
        console.log(res);
      });
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ note: "Hello world!", gender: "male" });
  };

  return (
    <>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onSubmit}
        style={{
          width: "80%",
          marginBlock: "2rem",
        }}
      >
        <Toaster />
        <Form.Item
          name="description"
          label="Descripción"
          rules={[{ required: true }]}
          style={{ width: "100%" }}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="answer"
          label="Respuesta"
          placeholder="Respuesta correcta"
          rules={[{ required: true }]}
          style={{ width: "100%" }}
        >
          <Input size="large" />
        </Form.Item>
        <Row>
          <h4>Subir una imagen</h4>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </Row>
        <Row>
          <h4>Alternativas</h4>
          <Form.Item
            name="option1"
            label="Opción 1"
            rules={[{ required: true }]}
            style={{ width: "100%" }}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            name="option2"
            label="Opción 2"
            rules={[{ required: true }]}
            style={{ width: "100%" }}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="option3"
            label="Opción 3"
            rules={[{ required: true }]}
            style={{ width: "100%" }}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            name="option4"
            label="Opción 4"
            rules={[{ required: true }]}
            style={{ width: "100%" }}
          >
            <Input size="large" />
          </Form.Item>
        </Row>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            crear
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormQuestionBasic;
