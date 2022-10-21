import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex3 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div2 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image as Image3 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox3 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button3 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useVideos_BodyCb, useFlex442Cb, useFlex439Cb, useFlex437Cb, useFlex438Cb, useFlex440Cb, useFlex441Cb, useFlex299Cb, useFlex298Cb, useDiv200Cb, useDiv201Cb, useDiv202Cb, useDiv203Cb, useFlex430Cb, useImage313Cb, useImage309Cb, useImage310Cb, useImage311Cb, useImage312Cb, useTextBox768Cb, useTextBox769Cb, useTextBox770Cb, useTextBox771Cb, useTextBox772Cb, useTextBox773Cb, useTextBox774Cb, useTextBox775Cb, useTextBox506Cb, useTextBox507Cb, useTextBox502Cb, useImage198Cb, useTextBox503Cb, useImage199Cb, useTextBox504Cb, useImage200Cb, useTextBox505Cb, useImage201Cb, useButton42Cb, useTextBox756Cb, useTextBox757Cb, useTextBox758Cb, useTextBox759Cb, useImage303Cb } from "../page-cbs/videos";
import "../page-css/videos.css"

export default function Videos() {
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

  const Videos_BodyProps = useStore((state)=>state["videos"]["Videos_Body"]);
const Videos_BodyIoProps = useIoStore((state)=>state["videos"]["Videos_Body"]);
const Videos_BodyCb = useVideos_BodyCb()
const Flex442Props = useStore((state)=>state["videos"]["Flex442"]);
const Flex442IoProps = useIoStore((state)=>state["videos"]["Flex442"]);
const Flex442Cb = useFlex442Cb()
const Flex439Props = useStore((state)=>state["videos"]["Flex439"]);
const Flex439IoProps = useIoStore((state)=>state["videos"]["Flex439"]);
const Flex439Cb = useFlex439Cb()
const Flex437Props = useStore((state)=>state["videos"]["Flex437"]);
const Flex437IoProps = useIoStore((state)=>state["videos"]["Flex437"]);
const Flex437Cb = useFlex437Cb()
const Flex438Props = useStore((state)=>state["videos"]["Flex438"]);
const Flex438IoProps = useIoStore((state)=>state["videos"]["Flex438"]);
const Flex438Cb = useFlex438Cb()
const Flex440Props = useStore((state)=>state["videos"]["Flex440"]);
const Flex440IoProps = useIoStore((state)=>state["videos"]["Flex440"]);
const Flex440Cb = useFlex440Cb()
const Flex441Props = useStore((state)=>state["videos"]["Flex441"]);
const Flex441IoProps = useIoStore((state)=>state["videos"]["Flex441"]);
const Flex441Cb = useFlex441Cb()
const Flex299Props = useStore((state)=>state["videos"]["Flex299"]);
const Flex299IoProps = useIoStore((state)=>state["videos"]["Flex299"]);
const Flex299Cb = useFlex299Cb()
const Flex298Props = useStore((state)=>state["videos"]["Flex298"]);
const Flex298IoProps = useIoStore((state)=>state["videos"]["Flex298"]);
const Flex298Cb = useFlex298Cb()
const Div200Props = useStore((state)=>state["videos"]["Div200"]);
const Div200IoProps = useIoStore((state)=>state["videos"]["Div200"]);
const Div200Cb = useDiv200Cb()
const Div201Props = useStore((state)=>state["videos"]["Div201"]);
const Div201IoProps = useIoStore((state)=>state["videos"]["Div201"]);
const Div201Cb = useDiv201Cb()
const Div202Props = useStore((state)=>state["videos"]["Div202"]);
const Div202IoProps = useIoStore((state)=>state["videos"]["Div202"]);
const Div202Cb = useDiv202Cb()
const Div203Props = useStore((state)=>state["videos"]["Div203"]);
const Div203IoProps = useIoStore((state)=>state["videos"]["Div203"]);
const Div203Cb = useDiv203Cb()
const Flex430Props = useStore((state)=>state["videos"]["Flex430"]);
const Flex430IoProps = useIoStore((state)=>state["videos"]["Flex430"]);
const Flex430Cb = useFlex430Cb()
const Image313Props = useStore((state)=>state["videos"]["Image313"]);
const Image313IoProps = useIoStore((state)=>state["videos"]["Image313"]);
const Image313Cb = useImage313Cb()
const Image309Props = useStore((state)=>state["videos"]["Image309"]);
const Image309IoProps = useIoStore((state)=>state["videos"]["Image309"]);
const Image309Cb = useImage309Cb()
const Image310Props = useStore((state)=>state["videos"]["Image310"]);
const Image310IoProps = useIoStore((state)=>state["videos"]["Image310"]);
const Image310Cb = useImage310Cb()
const Image311Props = useStore((state)=>state["videos"]["Image311"]);
const Image311IoProps = useIoStore((state)=>state["videos"]["Image311"]);
const Image311Cb = useImage311Cb()
const Image312Props = useStore((state)=>state["videos"]["Image312"]);
const Image312IoProps = useIoStore((state)=>state["videos"]["Image312"]);
const Image312Cb = useImage312Cb()
const TextBox768Props = useStore((state)=>state["videos"]["TextBox768"]);
const TextBox768IoProps = useIoStore((state)=>state["videos"]["TextBox768"]);
const TextBox768Cb = useTextBox768Cb()
const TextBox769Props = useStore((state)=>state["videos"]["TextBox769"]);
const TextBox769IoProps = useIoStore((state)=>state["videos"]["TextBox769"]);
const TextBox769Cb = useTextBox769Cb()
const TextBox770Props = useStore((state)=>state["videos"]["TextBox770"]);
const TextBox770IoProps = useIoStore((state)=>state["videos"]["TextBox770"]);
const TextBox770Cb = useTextBox770Cb()
const TextBox771Props = useStore((state)=>state["videos"]["TextBox771"]);
const TextBox771IoProps = useIoStore((state)=>state["videos"]["TextBox771"]);
const TextBox771Cb = useTextBox771Cb()
const TextBox772Props = useStore((state)=>state["videos"]["TextBox772"]);
const TextBox772IoProps = useIoStore((state)=>state["videos"]["TextBox772"]);
const TextBox772Cb = useTextBox772Cb()
const TextBox773Props = useStore((state)=>state["videos"]["TextBox773"]);
const TextBox773IoProps = useIoStore((state)=>state["videos"]["TextBox773"]);
const TextBox773Cb = useTextBox773Cb()
const TextBox774Props = useStore((state)=>state["videos"]["TextBox774"]);
const TextBox774IoProps = useIoStore((state)=>state["videos"]["TextBox774"]);
const TextBox774Cb = useTextBox774Cb()
const TextBox775Props = useStore((state)=>state["videos"]["TextBox775"]);
const TextBox775IoProps = useIoStore((state)=>state["videos"]["TextBox775"]);
const TextBox775Cb = useTextBox775Cb()
const TextBox506Props = useStore((state)=>state["videos"]["TextBox506"]);
const TextBox506IoProps = useIoStore((state)=>state["videos"]["TextBox506"]);
const TextBox506Cb = useTextBox506Cb()
const TextBox507Props = useStore((state)=>state["videos"]["TextBox507"]);
const TextBox507IoProps = useIoStore((state)=>state["videos"]["TextBox507"]);
const TextBox507Cb = useTextBox507Cb()
const TextBox502Props = useStore((state)=>state["videos"]["TextBox502"]);
const TextBox502IoProps = useIoStore((state)=>state["videos"]["TextBox502"]);
const TextBox502Cb = useTextBox502Cb()
const Image198Props = useStore((state)=>state["videos"]["Image198"]);
const Image198IoProps = useIoStore((state)=>state["videos"]["Image198"]);
const Image198Cb = useImage198Cb()
const TextBox503Props = useStore((state)=>state["videos"]["TextBox503"]);
const TextBox503IoProps = useIoStore((state)=>state["videos"]["TextBox503"]);
const TextBox503Cb = useTextBox503Cb()
const Image199Props = useStore((state)=>state["videos"]["Image199"]);
const Image199IoProps = useIoStore((state)=>state["videos"]["Image199"]);
const Image199Cb = useImage199Cb()
const TextBox504Props = useStore((state)=>state["videos"]["TextBox504"]);
const TextBox504IoProps = useIoStore((state)=>state["videos"]["TextBox504"]);
const TextBox504Cb = useTextBox504Cb()
const Image200Props = useStore((state)=>state["videos"]["Image200"]);
const Image200IoProps = useIoStore((state)=>state["videos"]["Image200"]);
const Image200Cb = useImage200Cb()
const TextBox505Props = useStore((state)=>state["videos"]["TextBox505"]);
const TextBox505IoProps = useIoStore((state)=>state["videos"]["TextBox505"]);
const TextBox505Cb = useTextBox505Cb()
const Image201Props = useStore((state)=>state["videos"]["Image201"]);
const Image201IoProps = useIoStore((state)=>state["videos"]["Image201"]);
const Image201Cb = useImage201Cb()
const Button42Props = useStore((state)=>state["videos"]["Button42"]);
const Button42IoProps = useIoStore((state)=>state["videos"]["Button42"]);
const Button42Cb = useButton42Cb()
const TextBox756Props = useStore((state)=>state["videos"]["TextBox756"]);
const TextBox756IoProps = useIoStore((state)=>state["videos"]["TextBox756"]);
const TextBox756Cb = useTextBox756Cb()
const TextBox757Props = useStore((state)=>state["videos"]["TextBox757"]);
const TextBox757IoProps = useIoStore((state)=>state["videos"]["TextBox757"]);
const TextBox757Cb = useTextBox757Cb()
const TextBox758Props = useStore((state)=>state["videos"]["TextBox758"]);
const TextBox758IoProps = useIoStore((state)=>state["videos"]["TextBox758"]);
const TextBox758Cb = useTextBox758Cb()
const TextBox759Props = useStore((state)=>state["videos"]["TextBox759"]);
const TextBox759IoProps = useIoStore((state)=>state["videos"]["TextBox759"]);
const TextBox759Cb = useTextBox759Cb()
const Image303Props = useStore((state)=>state["videos"]["Image303"]);
const Image303IoProps = useIoStore((state)=>state["videos"]["Image303"]);
const Image303Cb = useImage303Cb()

  return (<>
  <Flex3 className="p-videos Flex299" {...Flex299Props} {...Flex299Cb} {...Flex299IoProps}>
<Flex3 className="p-videos Flex430" {...Flex430Props} {...Flex430Cb} {...Flex430IoProps}>
<Image3 className="p-videos Image303" {...Image303Props} {...Image303Cb} {...Image303IoProps}/>
<TextBox3 className="p-videos TextBox759" {...TextBox759Props} {...TextBox759Cb} {...TextBox759IoProps}/>
<TextBox3 className="p-videos TextBox758" {...TextBox758Props} {...TextBox758Cb} {...TextBox758IoProps}/>
<TextBox3 className="p-videos TextBox757" {...TextBox757Props} {...TextBox757Cb} {...TextBox757IoProps}/>
<TextBox3 className="p-videos TextBox756" {...TextBox756Props} {...TextBox756Cb} {...TextBox756IoProps}/>
<Button3 className="p-videos Button42" {...Button42Props} {...Button42Cb} {...Button42IoProps}/>
</Flex3>
<TextBox3 className="p-videos TextBox507" {...TextBox507Props} {...TextBox507Cb} {...TextBox507IoProps}/>
<TextBox3 className="p-videos TextBox506" {...TextBox506Props} {...TextBox506Cb} {...TextBox506IoProps}/>
<Flex3 className="p-videos Flex298" {...Flex298Props} {...Flex298Cb} {...Flex298IoProps}>
<Div2 className="p-videos Div203" {...Div203Props} {...Div203Cb} {...Div203IoProps}>
<Image3 className="p-videos Image201" {...Image201Props} {...Image201Cb} {...Image201IoProps}/>
<TextBox3 className="p-videos TextBox505" {...TextBox505Props} {...TextBox505Cb} {...TextBox505IoProps}/>
</Div2>
<Div2 className="p-videos Div200" {...Div200Props} {...Div200Cb} {...Div200IoProps}>
<Image3 className="p-videos Image198" {...Image198Props} {...Image198Cb} {...Image198IoProps}/>
<TextBox3 className="p-videos TextBox502" {...TextBox502Props} {...TextBox502Cb} {...TextBox502IoProps}/>
</Div2>
<Div2 className="p-videos Div201" {...Div201Props} {...Div201Cb} {...Div201IoProps}>
<Image3 className="p-videos Image199" {...Image199Props} {...Image199Cb} {...Image199IoProps}/>
<TextBox3 className="p-videos TextBox503" {...TextBox503Props} {...TextBox503Cb} {...TextBox503IoProps}/>
</Div2>
<Div2 className="p-videos Div202" {...Div202Props} {...Div202Cb} {...Div202IoProps}>
<Image3 className="p-videos Image200" {...Image200Props} {...Image200Cb} {...Image200IoProps}/>
<TextBox3 className="p-videos TextBox504" {...TextBox504Props} {...TextBox504Cb} {...TextBox504IoProps}/>
</Div2>
</Flex3>
</Flex3>
<Flex3 className="p-videos Videos_Body" {...Videos_BodyProps} {...Videos_BodyCb} {...Videos_BodyIoProps}>
<Flex3 className="p-videos Flex442" {...Flex442Props} {...Flex442Cb} {...Flex442IoProps}>
<Flex3 className="p-videos Flex439" {...Flex439Props} {...Flex439Cb} {...Flex439IoProps}>
<Flex3 className="p-videos Flex438" {...Flex438Props} {...Flex438Cb} {...Flex438IoProps}>
<Image3 className="p-videos Image312" {...Image312Props} {...Image312Cb} {...Image312IoProps}/>
</Flex3>
<Flex3 className="p-videos Flex437" {...Flex437Props} {...Flex437Cb} {...Flex437IoProps}>
<Image3 className="p-videos Image309" {...Image309Props} {...Image309Cb} {...Image309IoProps}/>
<Image3 className="p-videos Image310" {...Image310Props} {...Image310Cb} {...Image310IoProps}/>
<Image3 className="p-videos Image311" {...Image311Props} {...Image311Cb} {...Image311IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-videos Flex440" {...Flex440Props} {...Flex440Cb} {...Flex440IoProps}>
<TextBox3 className="p-videos TextBox769" {...TextBox769Props} {...TextBox769Cb} {...TextBox769IoProps}/>
<TextBox3 className="p-videos TextBox770" {...TextBox770Props} {...TextBox770Cb} {...TextBox770IoProps}/>
<TextBox3 className="p-videos TextBox771" {...TextBox771Props} {...TextBox771Cb} {...TextBox771IoProps}/>
<TextBox3 className="p-videos TextBox768" {...TextBox768Props} {...TextBox768Cb} {...TextBox768IoProps}/>
</Flex3>
<Flex3 className="p-videos Flex441" {...Flex441Props} {...Flex441Cb} {...Flex441IoProps}>
<TextBox3 className="p-videos TextBox773" {...TextBox773Props} {...TextBox773Cb} {...TextBox773IoProps}/>
<TextBox3 className="p-videos TextBox774" {...TextBox774Props} {...TextBox774Cb} {...TextBox774IoProps}/>
<TextBox3 className="p-videos TextBox775" {...TextBox775Props} {...TextBox775Cb} {...TextBox775IoProps}/>
<TextBox3 className="p-videos TextBox772" {...TextBox772Props} {...TextBox772Cb} {...TextBox772IoProps}/>
</Flex3>
<Image3 className="p-videos Image313" {...Image313Props} {...Image313Cb} {...Image313IoProps}/>
</Flex3>
</Flex3>
  </>);
}
