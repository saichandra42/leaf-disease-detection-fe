import { Layout, Upload, Button, Row, Col, Image, Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./App.css";
import { uploadImageURL } from "./api";
import { useState } from "react";

const { Header, Content } = Layout;
const { Title } = Typography;
const props = {
  action: uploadImageURL,
  listType: "picture",
  multiple: false,
};

function App() {
  const [fileList, setFileList] = useState([]);
  const [result, setResult] = useState("");
  const handleBeforeUpload = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const img = document.createElement("img");
      img.src = reader.result;
      setFileList([{ name: file.name, data: img.src }]);
    };
  };

  const onDeleteFile = () => {
    setFileList([]);
    setResult("");
  };

  const onSuccess = (message) => {
    setResult(message);
  };

  const imageUploaded = fileList.length > 0;
  return (
    <div className="App">
      <Layout className="layout">
        <Header style={{ display: "flex" }}>
          <div className="logo">Leaf disease detection</div>
        </Header>
        <Content className="appContent">
          {result && (
            <Row justify="center">
              <Title level={2}>Result : {result}</Title>
            </Row>
          )}
          <Row gutter={32} justify="center">
            <Col span={6}>
              <div className="uploadFiles">
                <p>Upload files to detect disease in a leaf</p>
                <Upload
                  {...props}
                  beforeUpload={handleBeforeUpload}
                  onRemove={onDeleteFile}
                  onSuccess={onSuccess}
                >
                  <Button icon={<UploadOutlined />} disabled={imageUploaded}>
                    Upload
                  </Button>
                </Upload>
              </div>
            </Col>
            <Col span={6}>
              <Image src={imageUploaded ? fileList[0].data : ""} />
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
