import Editor from "@monaco-editor/react";
import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Input, Row } from "antd";
import { Toaster } from "react-hot-toast";
import { notifyError, notifySuccess } from "../Alerts";
import { getApi, postApi } from "../../services";
import { PhaseContext } from "../../hooks/PhaseContext";

const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const FormQuestionCode = ({ description, editorValue }) => {
  const { phaseOneGlobal, setPhaseOneGlobal } = useContext(PhaseContext);
  const [form] = Form.useForm();
  const [code, setCode] = useState(
    "function myFunction(params) {// write your code here}"
  );

  const onReset = () => {
    form.resetFields();
  };

  const onSubmit = (values) => {
    try {
      const newObject = {
        ...values,
        code,
        phase1: phaseOneGlobal.id,
      };
      console.log(newObject);
      postApi("api/phase1/questionWithCode", newObject).then((res) => {
        if (res.id) {
          notifySuccess("se ha creado satisfactoriamente la pregunta");
          onReset();
          setCode("function myFunction(params) {// write your code here}");
        } else {
          notifyError("No se pudo crear la pregunta");
        }
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onSubmit}
        style={{ maxWidth: 700 }}
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
        <div
          className="editor-container"
          style={{ width: "100%", height: "150px" }}
        >
          {/* <label htmlFor=""></label> */}
          <Editor
            className="editor"
            theme="vs-dark"
            defaultLanguage="javascript"
            value="function myFunction(params) {
              // write your code here
            }"
            onChange={(e) => setCode(e)}
          />
        </div>
        <strong>Formato de test: [value, boolean]</strong>
        <p>value: es el valor del parametro que requiere la función</p>
        <p>boolean: valor como resultado de la función.</p>
        <Form.Item
          name="test1"
          label="Test 1 "
          placeholder="Colocar un array [value, boolen]"
          rules={[{ required: true }]}
          style={{ width: "100%" }}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="test2"
          label="Test 2 "
          placeholder="Colocar un array [value, boolen]"
          rules={[{ required: true }]}
          style={{ width: "100%" }}
        >
          <Input size="large" />
        </Form.Item>{" "}
        <Form.Item
          name="test3"
          label="Test 3  "
          placeholder="Colocar un array [value, boolen]"
          rules={[{ required: true }]}
          style={{ width: "100%" }}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            crear
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormQuestionCode;
