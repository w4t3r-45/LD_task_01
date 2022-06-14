import { NewAppIcon } from "../icons";
import { BaseCard } from "./baseCard";
import { CustomLink } from "../CustomLink/customLink";
import { Slider } from "../Slider/slider";
import { SLIDER_DATA_MOCK } from "../../mock/SLIDER_DATA_MOCK";

export const ExtensionCard = () => {
  return (
    <BaseCard
      HeaderIcon={NewAppIcon}
      title="Extensions Marketplace"
      CardBody={
        <div
          style={{
            // width: "100%",
            // backgroundColor: "red",
            minHeight: 0,
            minWidth: 0,
          }}
        >
          <Slider data={SLIDER_DATA_MOCK} />
        </div>
      }
      CardFooter={
        <CustomLink URL="#" content="Discover all extensions" hasIcon />
      }
    />
  );
};
