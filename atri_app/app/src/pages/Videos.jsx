import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex3 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div3 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Button as Button3 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox3 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image3 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useVideos_BodyCb, useFlex287Cb, useFlex285Cb, useFlex286Cb, useDiv179Cb, useFlex299Cb, useFlex298Cb, useDiv200Cb, useDiv201Cb, useDiv202Cb, useDiv203Cb, useFlex305Cb, useDiv204Cb, useFlex304Cb, useFlex301Cb, useFlex302Cb, useFlex303Cb, useFlex300Cb, useButton25Cb, useTextBox468Cb, useTextBox469Cb, useTextBox470Cb, useTextBox471Cb, useImage177Cb, useTextBox506Cb, useTextBox507Cb, useTextBox502Cb, useImage198Cb, useTextBox503Cb, useImage199Cb, useTextBox504Cb, useImage200Cb, useTextBox505Cb, useImage201Cb, useImage206Cb, useTextBox508Cb, useTextBox509Cb, useTextBox510Cb, useTextBox511Cb, useTextBox512Cb, useTextBox513Cb, useTextBox514Cb, useTextBox515Cb, useImage205Cb, useImage202Cb, useImage203Cb, useImage204Cb } from "../page-cbs/videos";
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
const Flex287Props = useStore((state)=>state["videos"]["Flex287"]);
const Flex287IoProps = useIoStore((state)=>state["videos"]["Flex287"]);
const Flex287Cb = useFlex287Cb()
const Flex285Props = useStore((state)=>state["videos"]["Flex285"]);
const Flex285IoProps = useIoStore((state)=>state["videos"]["Flex285"]);
const Flex285Cb = useFlex285Cb()
const Flex286Props = useStore((state)=>state["videos"]["Flex286"]);
const Flex286IoProps = useIoStore((state)=>state["videos"]["Flex286"]);
const Flex286Cb = useFlex286Cb()
const Div179Props = useStore((state)=>state["videos"]["Div179"]);
const Div179IoProps = useIoStore((state)=>state["videos"]["Div179"]);
const Div179Cb = useDiv179Cb()
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
const Flex305Props = useStore((state)=>state["videos"]["Flex305"]);
const Flex305IoProps = useIoStore((state)=>state["videos"]["Flex305"]);
const Flex305Cb = useFlex305Cb()
const Div204Props = useStore((state)=>state["videos"]["Div204"]);
const Div204IoProps = useIoStore((state)=>state["videos"]["Div204"]);
const Div204Cb = useDiv204Cb()
const Flex304Props = useStore((state)=>state["videos"]["Flex304"]);
const Flex304IoProps = useIoStore((state)=>state["videos"]["Flex304"]);
const Flex304Cb = useFlex304Cb()
const Flex301Props = useStore((state)=>state["videos"]["Flex301"]);
const Flex301IoProps = useIoStore((state)=>state["videos"]["Flex301"]);
const Flex301Cb = useFlex301Cb()
const Flex302Props = useStore((state)=>state["videos"]["Flex302"]);
const Flex302IoProps = useIoStore((state)=>state["videos"]["Flex302"]);
const Flex302Cb = useFlex302Cb()
const Flex303Props = useStore((state)=>state["videos"]["Flex303"]);
const Flex303IoProps = useIoStore((state)=>state["videos"]["Flex303"]);
const Flex303Cb = useFlex303Cb()
const Flex300Props = useStore((state)=>state["videos"]["Flex300"]);
const Flex300IoProps = useIoStore((state)=>state["videos"]["Flex300"]);
const Flex300Cb = useFlex300Cb()
const Button25Props = useStore((state)=>state["videos"]["Button25"]);
const Button25IoProps = useIoStore((state)=>state["videos"]["Button25"]);
const Button25Cb = useButton25Cb()
const TextBox468Props = useStore((state)=>state["videos"]["TextBox468"]);
const TextBox468IoProps = useIoStore((state)=>state["videos"]["TextBox468"]);
const TextBox468Cb = useTextBox468Cb()
const TextBox469Props = useStore((state)=>state["videos"]["TextBox469"]);
const TextBox469IoProps = useIoStore((state)=>state["videos"]["TextBox469"]);
const TextBox469Cb = useTextBox469Cb()
const TextBox470Props = useStore((state)=>state["videos"]["TextBox470"]);
const TextBox470IoProps = useIoStore((state)=>state["videos"]["TextBox470"]);
const TextBox470Cb = useTextBox470Cb()
const TextBox471Props = useStore((state)=>state["videos"]["TextBox471"]);
const TextBox471IoProps = useIoStore((state)=>state["videos"]["TextBox471"]);
const TextBox471Cb = useTextBox471Cb()
const Image177Props = useStore((state)=>state["videos"]["Image177"]);
const Image177IoProps = useIoStore((state)=>state["videos"]["Image177"]);
const Image177Cb = useImage177Cb()
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
const Image206Props = useStore((state)=>state["videos"]["Image206"]);
const Image206IoProps = useIoStore((state)=>state["videos"]["Image206"]);
const Image206Cb = useImage206Cb()
const TextBox508Props = useStore((state)=>state["videos"]["TextBox508"]);
const TextBox508IoProps = useIoStore((state)=>state["videos"]["TextBox508"]);
const TextBox508Cb = useTextBox508Cb()
const TextBox509Props = useStore((state)=>state["videos"]["TextBox509"]);
const TextBox509IoProps = useIoStore((state)=>state["videos"]["TextBox509"]);
const TextBox509Cb = useTextBox509Cb()
const TextBox510Props = useStore((state)=>state["videos"]["TextBox510"]);
const TextBox510IoProps = useIoStore((state)=>state["videos"]["TextBox510"]);
const TextBox510Cb = useTextBox510Cb()
const TextBox511Props = useStore((state)=>state["videos"]["TextBox511"]);
const TextBox511IoProps = useIoStore((state)=>state["videos"]["TextBox511"]);
const TextBox511Cb = useTextBox511Cb()
const TextBox512Props = useStore((state)=>state["videos"]["TextBox512"]);
const TextBox512IoProps = useIoStore((state)=>state["videos"]["TextBox512"]);
const TextBox512Cb = useTextBox512Cb()
const TextBox513Props = useStore((state)=>state["videos"]["TextBox513"]);
const TextBox513IoProps = useIoStore((state)=>state["videos"]["TextBox513"]);
const TextBox513Cb = useTextBox513Cb()
const TextBox514Props = useStore((state)=>state["videos"]["TextBox514"]);
const TextBox514IoProps = useIoStore((state)=>state["videos"]["TextBox514"]);
const TextBox514Cb = useTextBox514Cb()
const TextBox515Props = useStore((state)=>state["videos"]["TextBox515"]);
const TextBox515IoProps = useIoStore((state)=>state["videos"]["TextBox515"]);
const TextBox515Cb = useTextBox515Cb()
const Image205Props = useStore((state)=>state["videos"]["Image205"]);
const Image205IoProps = useIoStore((state)=>state["videos"]["Image205"]);
const Image205Cb = useImage205Cb()
const Image202Props = useStore((state)=>state["videos"]["Image202"]);
const Image202IoProps = useIoStore((state)=>state["videos"]["Image202"]);
const Image202Cb = useImage202Cb()
const Image203Props = useStore((state)=>state["videos"]["Image203"]);
const Image203IoProps = useIoStore((state)=>state["videos"]["Image203"]);
const Image203Cb = useImage203Cb()
const Image204Props = useStore((state)=>state["videos"]["Image204"]);
const Image204IoProps = useIoStore((state)=>state["videos"]["Image204"]);
const Image204Cb = useImage204Cb()

  return (<>
  <Flex3 className="p-videos Videos_Body" {...Videos_BodyProps} {...Videos_BodyCb} {...Videos_BodyIoProps}>
<Flex3 className="p-videos Flex287" {...Flex287Props} {...Flex287Cb} {...Flex287IoProps}>
<Div3 className="p-videos Div179" {...Div179Props} {...Div179Cb} {...Div179IoProps}>
<Image3 className="p-videos Image177" {...Image177Props} {...Image177Cb} {...Image177IoProps}/>
</Div3>
<Flex3 className="p-videos Flex286" {...Flex286Props} {...Flex286Cb} {...Flex286IoProps}>
<TextBox3 className="p-videos TextBox471" {...TextBox471Props} {...TextBox471Cb} {...TextBox471IoProps}/>
<TextBox3 className="p-videos TextBox470" {...TextBox470Props} {...TextBox470Cb} {...TextBox470IoProps}/>
<TextBox3 className="p-videos TextBox469" {...TextBox469Props} {...TextBox469Cb} {...TextBox469IoProps}/>
</Flex3>
<Flex3 className="p-videos Flex285" {...Flex285Props} {...Flex285Cb} {...Flex285IoProps}>
<TextBox3 className="p-videos TextBox468" {...TextBox468Props} {...TextBox468Cb} {...TextBox468IoProps}/>
<Button3 className="p-videos Button25" {...Button25Props} {...Button25Cb} {...Button25IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-videos Flex299" {...Flex299Props} {...Flex299Cb} {...Flex299IoProps}>
<TextBox3 className="p-videos TextBox507" {...TextBox507Props} {...TextBox507Cb} {...TextBox507IoProps}/>
<TextBox3 className="p-videos TextBox506" {...TextBox506Props} {...TextBox506Cb} {...TextBox506IoProps}/>
<Flex3 className="p-videos Flex298" {...Flex298Props} {...Flex298Cb} {...Flex298IoProps}>
<Div3 className="p-videos Div203" {...Div203Props} {...Div203Cb} {...Div203IoProps}>
<Image3 className="p-videos Image201" {...Image201Props} {...Image201Cb} {...Image201IoProps}/>
<TextBox3 className="p-videos TextBox505" {...TextBox505Props} {...TextBox505Cb} {...TextBox505IoProps}/>
</Div3>
<Div3 className="p-videos Div200" {...Div200Props} {...Div200Cb} {...Div200IoProps}>
<Image3 className="p-videos Image198" {...Image198Props} {...Image198Cb} {...Image198IoProps}/>
<TextBox3 className="p-videos TextBox502" {...TextBox502Props} {...TextBox502Cb} {...TextBox502IoProps}/>
</Div3>
<Div3 className="p-videos Div201" {...Div201Props} {...Div201Cb} {...Div201IoProps}>
<Image3 className="p-videos Image199" {...Image199Props} {...Image199Cb} {...Image199IoProps}/>
<TextBox3 className="p-videos TextBox503" {...TextBox503Props} {...TextBox503Cb} {...TextBox503IoProps}/>
</Div3>
<Div3 className="p-videos Div202" {...Div202Props} {...Div202Cb} {...Div202IoProps}>
<Image3 className="p-videos Image200" {...Image200Props} {...Image200Cb} {...Image200IoProps}/>
<TextBox3 className="p-videos TextBox504" {...TextBox504Props} {...TextBox504Cb} {...TextBox504IoProps}/>
</Div3>
</Flex3>
</Flex3>
<Flex3 className="p-videos Flex305" {...Flex305Props} {...Flex305Cb} {...Flex305IoProps}>
<Flex3 className="p-videos Flex304" {...Flex304Props} {...Flex304Cb} {...Flex304IoProps}>
<Flex3 className="p-videos Flex303" {...Flex303Props} {...Flex303Cb} {...Flex303IoProps}>
<Image3 className="p-videos Image205" {...Image205Props} {...Image205Cb} {...Image205IoProps}/>
<Flex3 className="p-videos Flex300" {...Flex300Props} {...Flex300Cb} {...Flex300IoProps}>
<Image3 className="p-videos Image204" {...Image204Props} {...Image204Cb} {...Image204IoProps}/>
<Image3 className="p-videos Image203" {...Image203Props} {...Image203Cb} {...Image203IoProps}/>
<Image3 className="p-videos Image202" {...Image202Props} {...Image202Cb} {...Image202IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-videos Flex302" {...Flex302Props} {...Flex302Cb} {...Flex302IoProps}>
<TextBox3 className="p-videos TextBox515" {...TextBox515Props} {...TextBox515Cb} {...TextBox515IoProps}/>
<TextBox3 className="p-videos TextBox514" {...TextBox514Props} {...TextBox514Cb} {...TextBox514IoProps}/>
<TextBox3 className="p-videos TextBox513" {...TextBox513Props} {...TextBox513Cb} {...TextBox513IoProps}/>
<TextBox3 className="p-videos TextBox512" {...TextBox512Props} {...TextBox512Cb} {...TextBox512IoProps}/>
</Flex3>
<Flex3 className="p-videos Flex301" {...Flex301Props} {...Flex301Cb} {...Flex301IoProps}>
<TextBox3 className="p-videos TextBox511" {...TextBox511Props} {...TextBox511Cb} {...TextBox511IoProps}/>
<TextBox3 className="p-videos TextBox510" {...TextBox510Props} {...TextBox510Cb} {...TextBox510IoProps}/>
<TextBox3 className="p-videos TextBox509" {...TextBox509Props} {...TextBox509Cb} {...TextBox509IoProps}/>
<TextBox3 className="p-videos TextBox508" {...TextBox508Props} {...TextBox508Cb} {...TextBox508IoProps}/>
</Flex3>
</Flex3>
<Div3 className="p-videos Div204" {...Div204Props} {...Div204Cb} {...Div204IoProps}>
<Image3 className="p-videos Image206" {...Image206Props} {...Image206Cb} {...Image206IoProps}/>
</Div3>
</Flex3>
</Flex3>
  </>);
}
