import { useState } from "react";
import {
  Button,
  Frame,
  GroupBox,
  ScrollView,
  Tab,
  TabBody,
  Tabs,
  TextInput,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import styled from "styled-components";


interface PostProps {
  userName: string,
  userID: number,
  content: string
}

function Post({userName, userID, content}:PostProps) {

  const [state, setState] = useState({
    activeTab: 0,
  });

  const handleChange = (
    value: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setState({ activeTab: value });
  };
  const { activeTab } = state;

  return (
    <>
      <PostWindow
        resizable
        className="window"
        style={{
          marginBottom: 20,
          marginLeft: 20,
          width: "45%",
        }}
      >
        <WindowHeader className="window-title">
          <span>{(userName !== "") && userName}{(userName === " ") && "userID:" + userID}</span>
          <Button>&#10006;</Button>
        </WindowHeader>
        <Toolbar>
          <Button variant="menu" size="sm">
            File
          </Button>
          <Button variant="menu" size="sm">
            Edit
          </Button>
          <Button variant="menu" size="sm" disabled>
            Save
          </Button>
        </Toolbar>
        <WindowContent>
          <Tabs value={activeTab} onChange={handleChange}>
            <Tab value={0}>Post</Tab>
            <Tab value={1}>Comments</Tab>
          </Tabs>
          <TabBody>
            {activeTab === 0 && (
              <ScrollView style={{ height: "300px" }}>
                <p>{content}</p>
              </ScrollView>
            )}
            {activeTab === 1 && (
              <ScrollView style={{ height: "300px" }}>
                <GroupBox className="groupBox" label="User 1">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur totam voluptates delectus mollitia expedita modi
                    repudiandae ex deserunt voluptate, deleniti praesentium
                    aliquid, id odio quam nobis ea nulla soluta porro?
                  </p>
                </GroupBox>
              </ScrollView>
            )}
          </TabBody>
        </WindowContent>
      </PostWindow>
    </>
  );
}

export default Post;

const PostWindow = styled(Window)`
  .window-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
