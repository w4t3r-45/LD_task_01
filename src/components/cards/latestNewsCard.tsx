import { FileIcon } from "../icons";
import { BaseCard } from "./baseCard";
import { CustomLink } from "../CustomLink/customLink";

export const LastestNewsCard = () => {
  return (
    <BaseCard
      HeaderIcon={FileIcon}
      headerLink={
        <CustomLink URL="#" content="Start inviting friends!" hasIcon />
      }
      title="Latest news"
      CardBody={<></>}
    />
  );
};
