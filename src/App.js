import { Layout, Upload, Button, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./App.css";

const { Header, Content, Footer } = Layout;

const props = {
  action: "//jsonplaceholder.typicode.com/posts/",
  listType: "picture",
  previewFile(file) {
    console.log("Your upload file:", file);
    // Your process logic. Here we just mock to the same file
    return fetch("https://via.placeholder.com/150", {
      method: "POST",
      body: file,
    })
      .then((res) => {
        debugger;
        res.json();
      })
      .then(({ thumbnail }) => thumbnail);
  },
};

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header style={{ display: "flex" }}>
          <div className="logo">Leaf disease detection</div>
        </Header>
        <Content>
          <Row gutter={16} justify="center">
            <Col span={6}>
              <div className="uploadFiles">
                <p>Upload files to detect disease in a leaf</p>
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </div>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>Leaf disease detection</Footer>
      </Layout>
    </div>
  );
}

export default App;
