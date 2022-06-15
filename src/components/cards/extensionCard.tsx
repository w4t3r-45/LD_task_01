import { useEffect } from "react";
import { NewAppIcon } from "../icons";
import { BaseCard } from "./baseCard";
import { CustomLink } from "../CustomLink/customLink";
import { Slider } from "../Slider/slider";
import { SLIDER_DATA_MOCK } from "../../mock/SLIDER_DATA_MOCK";
import { ExtensionsContextProvider, useExtensionContext } from "../../CONTEXT";
import { useExtensionAction } from "../../CONTEXT/ExtensionsContext/actions";

export const ExtensionCard = () => {
  const { INIT_STATE, dispatch } = useExtensionContext();
  const { Exts__data_fetch } = useExtensionAction();
  useEffect(() => {
    console.log("OUUUUUUUUUUUUUUUUUUUUUTSIDE", dispatch, INIT_STATE);
    Exts__data_fetch();
  }, []);
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
          <Slider data={INIT_STATE.ext__data as any} />
        </div>
      }
      CardFooter={
        <CustomLink URL="#" content="Discover all extensions" hasIcon />
      }
    />
  );
};
