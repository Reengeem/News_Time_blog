import React from "react";
import { Button, Card } from "antd";
import { EditOutlined } from "@ant-design/icons";

const { Meta } = Card;

const NewsCard = ({ image, link, publi, sourceName, title, _id }) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={
      <img
        alt="example"
        src={
          image !== ""
            ? image
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
        }
        className="h-40 object-cover"
      />
    }
    actions={[
      <Button key={_id}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </Button>,
    ]}
  >
    <Meta title={title} description={sourceName} />
  </Card>
);
export default NewsCard;
