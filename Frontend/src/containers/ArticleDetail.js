import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card } from "antd";
import { useParams,useHistory } from "react-router";
import CustomForm from "../components/Form";

const ArticleDetail = props => {
  const { articleID } = useParams();
  const history = useHistory()
  // console.log(history)
  // state stuff
  const [data, setData] = useState([]);

  useEffect(() => {
    // effect
    axios.get(`http://127.0.0.1:8000/api/${articleID}/`).then(response => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  const handleDelete = () => {
    axios.delete(`http://127.0.0.1:8000/api/${articleID}/`)
    history.replace('/')
  }
  return (
    <>
      <Card title={data.title} bordered={false} s>
        <p>{data.content} </p>
      </Card>
      <CustomForm requestType="put" articleID={articleID} btnText="Update" />
      <form onSubmit={handleDelete}>
        <Button type='danger' htmlType="submit">Delete</Button>
      </form>
    </>
  );
};

export default ArticleDetail;
