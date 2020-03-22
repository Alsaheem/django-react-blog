import React, { useEffect, useState } from "react";
import Article from "../components/Article";
import axios from "axios";
import CustomForm from "../components/Form";
import { connect } from "react-redux";

const Aritcles = (props) => {
  // state stuff
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization : props.token
    }
    // effect
    axios.get("http://127.0.0.1:8000/api/").then(response => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="">
      <Article data={data} />
      <h3>Create a new Article</h3>
      <CustomForm
        requestType="post"
        articleID={null}
        btnText="Create New Post"
      />
    </div>
  );
};


const mapStateToProps = state => {
  return {
    token: state.token

  };
};


export default connect(mapStateToProps)(Aritcles);
