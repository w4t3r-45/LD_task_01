import { useEffect } from "react";
import { NewAppIcon } from "../icons";
import { BaseCard } from "./baseCard";
import { CustomLink } from "../CustomLink/customLink";
import { Slider } from "../Slider/slider";
// import { SLIDER_DATA_MOCK } from "../../mock/SLIDER_DATA_MOCK";
import { useExtensionContext } from "../../CONTEXT";
import { useExtensionAction } from "../../CONTEXT/ExtensionsContext/actions";
import { toast } from "react-toastify";

export const ExtensionCard = () => {
  const { INIT_STATE } = useExtensionContext();
  const { Exts__data_fetch } = useExtensionAction();
  useEffect(() => {
    Exts__data_fetch();
  }, []);
  useEffect(() => {
    INIT_STATE.ext__fetch_failed &&
      toast.error(" Error Loading Extension Data", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }, [INIT_STATE.ext__fetch_failed]);
  return (
    <BaseCard
      HeaderIcon={NewAppIcon}
      title="Extensions Marketplace"
      style={{
        height: "349px",
      }}
      CardBody={
        <div
          style={{
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
