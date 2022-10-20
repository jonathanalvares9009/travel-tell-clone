import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex7 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div7 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Button as Button7 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox7 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image7 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useBody_TnCCb, useFlex157Cb, useFlex155Cb, useFlex156Cb, useDiv138Cb, useDiv143Cb, useFlex163Cb, useDiv144Cb, useFlex162Cb, useFlex159Cb, useFlex160Cb, useFlex161Cb, useFlex158Cb, useButton12Cb, useTextBox227Cb, useTextBox228Cb, useTextBox229Cb, useTextBox230Cb, useImage119Cb, useTextBox279Cb, useTextBox280Cb, useTextBox281Cb, useTextBox282Cb, useTextBox283Cb, useTextBox284Cb, useTextBox285Cb, useTextBox286Cb, useTextBox287Cb, useTextBox288Cb, useTextBox289Cb, useTextBox290Cb, useImage124Cb, useTextBox291Cb, useTextBox292Cb, useTextBox293Cb, useTextBox294Cb, useTextBox295Cb, useTextBox296Cb, useTextBox297Cb, useTextBox298Cb, useImage123Cb, useImage120Cb, useImage121Cb, useImage122Cb } from "../page-cbs/terms";
import "../page-css/terms.css"

export default function Terms() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Body_TnCProps = useStore((state)=>state["terms"]["Body_TnC"]);
const Body_TnCIoProps = useIoStore((state)=>state["terms"]["Body_TnC"]);
const Body_TnCCb = useBody_TnCCb()
const Flex157Props = useStore((state)=>state["terms"]["Flex157"]);
const Flex157IoProps = useIoStore((state)=>state["terms"]["Flex157"]);
const Flex157Cb = useFlex157Cb()
const Flex155Props = useStore((state)=>state["terms"]["Flex155"]);
const Flex155IoProps = useIoStore((state)=>state["terms"]["Flex155"]);
const Flex155Cb = useFlex155Cb()
const Flex156Props = useStore((state)=>state["terms"]["Flex156"]);
const Flex156IoProps = useIoStore((state)=>state["terms"]["Flex156"]);
const Flex156Cb = useFlex156Cb()
const Div138Props = useStore((state)=>state["terms"]["Div138"]);
const Div138IoProps = useIoStore((state)=>state["terms"]["Div138"]);
const Div138Cb = useDiv138Cb()
const Div143Props = useStore((state)=>state["terms"]["Div143"]);
const Div143IoProps = useIoStore((state)=>state["terms"]["Div143"]);
const Div143Cb = useDiv143Cb()
const Flex163Props = useStore((state)=>state["terms"]["Flex163"]);
const Flex163IoProps = useIoStore((state)=>state["terms"]["Flex163"]);
const Flex163Cb = useFlex163Cb()
const Div144Props = useStore((state)=>state["terms"]["Div144"]);
const Div144IoProps = useIoStore((state)=>state["terms"]["Div144"]);
const Div144Cb = useDiv144Cb()
const Flex162Props = useStore((state)=>state["terms"]["Flex162"]);
const Flex162IoProps = useIoStore((state)=>state["terms"]["Flex162"]);
const Flex162Cb = useFlex162Cb()
const Flex159Props = useStore((state)=>state["terms"]["Flex159"]);
const Flex159IoProps = useIoStore((state)=>state["terms"]["Flex159"]);
const Flex159Cb = useFlex159Cb()
const Flex160Props = useStore((state)=>state["terms"]["Flex160"]);
const Flex160IoProps = useIoStore((state)=>state["terms"]["Flex160"]);
const Flex160Cb = useFlex160Cb()
const Flex161Props = useStore((state)=>state["terms"]["Flex161"]);
const Flex161IoProps = useIoStore((state)=>state["terms"]["Flex161"]);
const Flex161Cb = useFlex161Cb()
const Flex158Props = useStore((state)=>state["terms"]["Flex158"]);
const Flex158IoProps = useIoStore((state)=>state["terms"]["Flex158"]);
const Flex158Cb = useFlex158Cb()
const Button12Props = useStore((state)=>state["terms"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["terms"]["Button12"]);
const Button12Cb = useButton12Cb()
const TextBox227Props = useStore((state)=>state["terms"]["TextBox227"]);
const TextBox227IoProps = useIoStore((state)=>state["terms"]["TextBox227"]);
const TextBox227Cb = useTextBox227Cb()
const TextBox228Props = useStore((state)=>state["terms"]["TextBox228"]);
const TextBox228IoProps = useIoStore((state)=>state["terms"]["TextBox228"]);
const TextBox228Cb = useTextBox228Cb()
const TextBox229Props = useStore((state)=>state["terms"]["TextBox229"]);
const TextBox229IoProps = useIoStore((state)=>state["terms"]["TextBox229"]);
const TextBox229Cb = useTextBox229Cb()
const TextBox230Props = useStore((state)=>state["terms"]["TextBox230"]);
const TextBox230IoProps = useIoStore((state)=>state["terms"]["TextBox230"]);
const TextBox230Cb = useTextBox230Cb()
const Image119Props = useStore((state)=>state["terms"]["Image119"]);
const Image119IoProps = useIoStore((state)=>state["terms"]["Image119"]);
const Image119Cb = useImage119Cb()
const TextBox279Props = useStore((state)=>state["terms"]["TextBox279"]);
const TextBox279IoProps = useIoStore((state)=>state["terms"]["TextBox279"]);
const TextBox279Cb = useTextBox279Cb()
const TextBox280Props = useStore((state)=>state["terms"]["TextBox280"]);
const TextBox280IoProps = useIoStore((state)=>state["terms"]["TextBox280"]);
const TextBox280Cb = useTextBox280Cb()
const TextBox281Props = useStore((state)=>state["terms"]["TextBox281"]);
const TextBox281IoProps = useIoStore((state)=>state["terms"]["TextBox281"]);
const TextBox281Cb = useTextBox281Cb()
const TextBox282Props = useStore((state)=>state["terms"]["TextBox282"]);
const TextBox282IoProps = useIoStore((state)=>state["terms"]["TextBox282"]);
const TextBox282Cb = useTextBox282Cb()
const TextBox283Props = useStore((state)=>state["terms"]["TextBox283"]);
const TextBox283IoProps = useIoStore((state)=>state["terms"]["TextBox283"]);
const TextBox283Cb = useTextBox283Cb()
const TextBox284Props = useStore((state)=>state["terms"]["TextBox284"]);
const TextBox284IoProps = useIoStore((state)=>state["terms"]["TextBox284"]);
const TextBox284Cb = useTextBox284Cb()
const TextBox285Props = useStore((state)=>state["terms"]["TextBox285"]);
const TextBox285IoProps = useIoStore((state)=>state["terms"]["TextBox285"]);
const TextBox285Cb = useTextBox285Cb()
const TextBox286Props = useStore((state)=>state["terms"]["TextBox286"]);
const TextBox286IoProps = useIoStore((state)=>state["terms"]["TextBox286"]);
const TextBox286Cb = useTextBox286Cb()
const TextBox287Props = useStore((state)=>state["terms"]["TextBox287"]);
const TextBox287IoProps = useIoStore((state)=>state["terms"]["TextBox287"]);
const TextBox287Cb = useTextBox287Cb()
const TextBox288Props = useStore((state)=>state["terms"]["TextBox288"]);
const TextBox288IoProps = useIoStore((state)=>state["terms"]["TextBox288"]);
const TextBox288Cb = useTextBox288Cb()
const TextBox289Props = useStore((state)=>state["terms"]["TextBox289"]);
const TextBox289IoProps = useIoStore((state)=>state["terms"]["TextBox289"]);
const TextBox289Cb = useTextBox289Cb()
const TextBox290Props = useStore((state)=>state["terms"]["TextBox290"]);
const TextBox290IoProps = useIoStore((state)=>state["terms"]["TextBox290"]);
const TextBox290Cb = useTextBox290Cb()
const Image124Props = useStore((state)=>state["terms"]["Image124"]);
const Image124IoProps = useIoStore((state)=>state["terms"]["Image124"]);
const Image124Cb = useImage124Cb()
const TextBox291Props = useStore((state)=>state["terms"]["TextBox291"]);
const TextBox291IoProps = useIoStore((state)=>state["terms"]["TextBox291"]);
const TextBox291Cb = useTextBox291Cb()
const TextBox292Props = useStore((state)=>state["terms"]["TextBox292"]);
const TextBox292IoProps = useIoStore((state)=>state["terms"]["TextBox292"]);
const TextBox292Cb = useTextBox292Cb()
const TextBox293Props = useStore((state)=>state["terms"]["TextBox293"]);
const TextBox293IoProps = useIoStore((state)=>state["terms"]["TextBox293"]);
const TextBox293Cb = useTextBox293Cb()
const TextBox294Props = useStore((state)=>state["terms"]["TextBox294"]);
const TextBox294IoProps = useIoStore((state)=>state["terms"]["TextBox294"]);
const TextBox294Cb = useTextBox294Cb()
const TextBox295Props = useStore((state)=>state["terms"]["TextBox295"]);
const TextBox295IoProps = useIoStore((state)=>state["terms"]["TextBox295"]);
const TextBox295Cb = useTextBox295Cb()
const TextBox296Props = useStore((state)=>state["terms"]["TextBox296"]);
const TextBox296IoProps = useIoStore((state)=>state["terms"]["TextBox296"]);
const TextBox296Cb = useTextBox296Cb()
const TextBox297Props = useStore((state)=>state["terms"]["TextBox297"]);
const TextBox297IoProps = useIoStore((state)=>state["terms"]["TextBox297"]);
const TextBox297Cb = useTextBox297Cb()
const TextBox298Props = useStore((state)=>state["terms"]["TextBox298"]);
const TextBox298IoProps = useIoStore((state)=>state["terms"]["TextBox298"]);
const TextBox298Cb = useTextBox298Cb()
const Image123Props = useStore((state)=>state["terms"]["Image123"]);
const Image123IoProps = useIoStore((state)=>state["terms"]["Image123"]);
const Image123Cb = useImage123Cb()
const Image120Props = useStore((state)=>state["terms"]["Image120"]);
const Image120IoProps = useIoStore((state)=>state["terms"]["Image120"]);
const Image120Cb = useImage120Cb()
const Image121Props = useStore((state)=>state["terms"]["Image121"]);
const Image121IoProps = useIoStore((state)=>state["terms"]["Image121"]);
const Image121Cb = useImage121Cb()
const Image122Props = useStore((state)=>state["terms"]["Image122"]);
const Image122IoProps = useIoStore((state)=>state["terms"]["Image122"]);
const Image122Cb = useImage122Cb()

  return (<>
  <Flex7 className="p-terms Body_TnC" {...Body_TnCProps} {...Body_TnCCb} {...Body_TnCIoProps}>
<Flex7 className="p-terms Flex157" {...Flex157Props} {...Flex157Cb} {...Flex157IoProps}>
<Div7 className="p-terms Div138" {...Div138Props} {...Div138Cb} {...Div138IoProps}>
<Image7 className="p-terms Image119" {...Image119Props} {...Image119Cb} {...Image119IoProps}/>
</Div7>
<Flex7 className="p-terms Flex156" {...Flex156Props} {...Flex156Cb} {...Flex156IoProps}>
<TextBox7 className="p-terms TextBox230" {...TextBox230Props} {...TextBox230Cb} {...TextBox230IoProps}/>
<TextBox7 className="p-terms TextBox229" {...TextBox229Props} {...TextBox229Cb} {...TextBox229IoProps}/>
<TextBox7 className="p-terms TextBox228" {...TextBox228Props} {...TextBox228Cb} {...TextBox228IoProps}/>
</Flex7>
<Flex7 className="p-terms Flex155" {...Flex155Props} {...Flex155Cb} {...Flex155IoProps}>
<TextBox7 className="p-terms TextBox227" {...TextBox227Props} {...TextBox227Cb} {...TextBox227IoProps}/>
<Button7 className="p-terms Button12" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
</Flex7>
</Flex7>
<Div7 className="p-terms Div143" {...Div143Props} {...Div143Cb} {...Div143IoProps}>
<TextBox7 className="p-terms TextBox290" {...TextBox290Props} {...TextBox290Cb} {...TextBox290IoProps}/>
<TextBox7 className="p-terms TextBox289" {...TextBox289Props} {...TextBox289Cb} {...TextBox289IoProps}/>
<TextBox7 className="p-terms TextBox288" {...TextBox288Props} {...TextBox288Cb} {...TextBox288IoProps}/>
<TextBox7 className="p-terms TextBox287" {...TextBox287Props} {...TextBox287Cb} {...TextBox287IoProps}/>
<TextBox7 className="p-terms TextBox281" {...TextBox281Props} {...TextBox281Cb} {...TextBox281IoProps}/>
<TextBox7 className="p-terms TextBox286" {...TextBox286Props} {...TextBox286Cb} {...TextBox286IoProps}/>
<TextBox7 className="p-terms TextBox284" {...TextBox284Props} {...TextBox284Cb} {...TextBox284IoProps}/>
<TextBox7 className="p-terms TextBox282" {...TextBox282Props} {...TextBox282Cb} {...TextBox282IoProps}/>
<TextBox7 className="p-terms TextBox280" {...TextBox280Props} {...TextBox280Cb} {...TextBox280IoProps}/>
<TextBox7 className="p-terms TextBox283" {...TextBox283Props} {...TextBox283Cb} {...TextBox283IoProps}/>
<TextBox7 className="p-terms TextBox285" {...TextBox285Props} {...TextBox285Cb} {...TextBox285IoProps}/>
<TextBox7 className="p-terms TextBox279" {...TextBox279Props} {...TextBox279Cb} {...TextBox279IoProps}/>
</Div7>
<Flex7 className="p-terms Flex163" {...Flex163Props} {...Flex163Cb} {...Flex163IoProps}>
<Flex7 className="p-terms Flex162" {...Flex162Props} {...Flex162Cb} {...Flex162IoProps}>
<Flex7 className="p-terms Flex161" {...Flex161Props} {...Flex161Cb} {...Flex161IoProps}>
<Image7 className="p-terms Image123" {...Image123Props} {...Image123Cb} {...Image123IoProps}/>
<Flex7 className="p-terms Flex158" {...Flex158Props} {...Flex158Cb} {...Flex158IoProps}>
<Image7 className="p-terms Image122" {...Image122Props} {...Image122Cb} {...Image122IoProps}/>
<Image7 className="p-terms Image121" {...Image121Props} {...Image121Cb} {...Image121IoProps}/>
<Image7 className="p-terms Image120" {...Image120Props} {...Image120Cb} {...Image120IoProps}/>
</Flex7>
</Flex7>
<Flex7 className="p-terms Flex160" {...Flex160Props} {...Flex160Cb} {...Flex160IoProps}>
<TextBox7 className="p-terms TextBox298" {...TextBox298Props} {...TextBox298Cb} {...TextBox298IoProps}/>
<TextBox7 className="p-terms TextBox297" {...TextBox297Props} {...TextBox297Cb} {...TextBox297IoProps}/>
<TextBox7 className="p-terms TextBox296" {...TextBox296Props} {...TextBox296Cb} {...TextBox296IoProps}/>
<TextBox7 className="p-terms TextBox295" {...TextBox295Props} {...TextBox295Cb} {...TextBox295IoProps}/>
</Flex7>
<Flex7 className="p-terms Flex159" {...Flex159Props} {...Flex159Cb} {...Flex159IoProps}>
<TextBox7 className="p-terms TextBox294" {...TextBox294Props} {...TextBox294Cb} {...TextBox294IoProps}/>
<TextBox7 className="p-terms TextBox293" {...TextBox293Props} {...TextBox293Cb} {...TextBox293IoProps}/>
<TextBox7 className="p-terms TextBox292" {...TextBox292Props} {...TextBox292Cb} {...TextBox292IoProps}/>
<TextBox7 className="p-terms TextBox291" {...TextBox291Props} {...TextBox291Cb} {...TextBox291IoProps}/>
</Flex7>
</Flex7>
<Div7 className="p-terms Div144" {...Div144Props} {...Div144Cb} {...Div144IoProps}>
<Image7 className="p-terms Image124" {...Image124Props} {...Image124Cb} {...Image124IoProps}/>
</Div7>
</Flex7>
</Flex7>
  </>);
}
