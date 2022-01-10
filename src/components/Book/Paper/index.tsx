import { ReactNode } from "react";
import { IPageConfig } from "../../../config/pages";
import { Container } from "./style";

interface IPaper {
  data: IPageConfig;
}

export function Paper({data}:IPaper) {
  const { content, image } = data;
  return (
    <Container>
      <img src={image} alt="Book Image" />
      <p>{content}</p>
    </Container>
  );
}

