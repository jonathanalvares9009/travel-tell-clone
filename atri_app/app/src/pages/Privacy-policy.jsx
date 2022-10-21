import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex6 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div4 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Button as Button6 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox6 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image6 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { usePrivacy_PolicyCb, useFlex364Cb, useDiv227Cb, useFlex370Cb, useFlex367Cb, useFlex368Cb, useFlex369Cb, useFlex365Cb, useFlex366Cb, useButton37Cb, useTextBox657Cb, useTextBox658Cb, useTextBox659Cb, useTextBox660Cb, useImage262Cb, useTextBox661Cb, useTextBox662Cb, useTextBox663Cb, useTextBox664Cb, useTextBox665Cb, useTextBox666Cb, useTextBox667Cb, useTextBox668Cb, useTextBox669Cb, useTextBox670Cb, useTextBox671Cb, useTextBox672Cb, useImage267Cb, useTextBox673Cb, useTextBox674Cb, useTextBox675Cb, useTextBox676Cb, useTextBox677Cb, useTextBox678Cb, useTextBox679Cb, useTextBox680Cb, useImage263Cb, useImage264Cb, useImage265Cb, useImage266Cb } from "../page-cbs/privacy-policy";
import "../page-css/privacy-policy.css"

export default function PrivacyPolicy() {
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

  const Privacy_PolicyProps = useStore((state)=>state["privacy-policy"]["Privacy_Policy"]);
const Privacy_PolicyIoProps = useIoStore((state)=>state["privacy-policy"]["Privacy_Policy"]);
const Privacy_PolicyCb = usePrivacy_PolicyCb()
const Flex364Props = useStore((state)=>state["privacy-policy"]["Flex364"]);
const Flex364IoProps = useIoStore((state)=>state["privacy-policy"]["Flex364"]);
const Flex364Cb = useFlex364Cb()
const Div227Props = useStore((state)=>state["privacy-policy"]["Div227"]);
const Div227IoProps = useIoStore((state)=>state["privacy-policy"]["Div227"]);
const Div227Cb = useDiv227Cb()
const Flex370Props = useStore((state)=>state["privacy-policy"]["Flex370"]);
const Flex370IoProps = useIoStore((state)=>state["privacy-policy"]["Flex370"]);
const Flex370Cb = useFlex370Cb()
const Flex367Props = useStore((state)=>state["privacy-policy"]["Flex367"]);
const Flex367IoProps = useIoStore((state)=>state["privacy-policy"]["Flex367"]);
const Flex367Cb = useFlex367Cb()
const Flex368Props = useStore((state)=>state["privacy-policy"]["Flex368"]);
const Flex368IoProps = useIoStore((state)=>state["privacy-policy"]["Flex368"]);
const Flex368Cb = useFlex368Cb()
const Flex369Props = useStore((state)=>state["privacy-policy"]["Flex369"]);
const Flex369IoProps = useIoStore((state)=>state["privacy-policy"]["Flex369"]);
const Flex369Cb = useFlex369Cb()
const Flex365Props = useStore((state)=>state["privacy-policy"]["Flex365"]);
const Flex365IoProps = useIoStore((state)=>state["privacy-policy"]["Flex365"]);
const Flex365Cb = useFlex365Cb()
const Flex366Props = useStore((state)=>state["privacy-policy"]["Flex366"]);
const Flex366IoProps = useIoStore((state)=>state["privacy-policy"]["Flex366"]);
const Flex366Cb = useFlex366Cb()
const Button37Props = useStore((state)=>state["privacy-policy"]["Button37"]);
const Button37IoProps = useIoStore((state)=>state["privacy-policy"]["Button37"]);
const Button37Cb = useButton37Cb()
const TextBox657Props = useStore((state)=>state["privacy-policy"]["TextBox657"]);
const TextBox657IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox657"]);
const TextBox657Cb = useTextBox657Cb()
const TextBox658Props = useStore((state)=>state["privacy-policy"]["TextBox658"]);
const TextBox658IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox658"]);
const TextBox658Cb = useTextBox658Cb()
const TextBox659Props = useStore((state)=>state["privacy-policy"]["TextBox659"]);
const TextBox659IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox659"]);
const TextBox659Cb = useTextBox659Cb()
const TextBox660Props = useStore((state)=>state["privacy-policy"]["TextBox660"]);
const TextBox660IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox660"]);
const TextBox660Cb = useTextBox660Cb()
const Image262Props = useStore((state)=>state["privacy-policy"]["Image262"]);
const Image262IoProps = useIoStore((state)=>state["privacy-policy"]["Image262"]);
const Image262Cb = useImage262Cb()
const TextBox661Props = useStore((state)=>state["privacy-policy"]["TextBox661"]);
const TextBox661IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox661"]);
const TextBox661Cb = useTextBox661Cb()
const TextBox662Props = useStore((state)=>state["privacy-policy"]["TextBox662"]);
const TextBox662IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox662"]);
const TextBox662Cb = useTextBox662Cb()
const TextBox663Props = useStore((state)=>state["privacy-policy"]["TextBox663"]);
const TextBox663IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox663"]);
const TextBox663Cb = useTextBox663Cb()
const TextBox664Props = useStore((state)=>state["privacy-policy"]["TextBox664"]);
const TextBox664IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox664"]);
const TextBox664Cb = useTextBox664Cb()
const TextBox665Props = useStore((state)=>state["privacy-policy"]["TextBox665"]);
const TextBox665IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox665"]);
const TextBox665Cb = useTextBox665Cb()
const TextBox666Props = useStore((state)=>state["privacy-policy"]["TextBox666"]);
const TextBox666IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox666"]);
const TextBox666Cb = useTextBox666Cb()
const TextBox667Props = useStore((state)=>state["privacy-policy"]["TextBox667"]);
const TextBox667IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox667"]);
const TextBox667Cb = useTextBox667Cb()
const TextBox668Props = useStore((state)=>state["privacy-policy"]["TextBox668"]);
const TextBox668IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox668"]);
const TextBox668Cb = useTextBox668Cb()
const TextBox669Props = useStore((state)=>state["privacy-policy"]["TextBox669"]);
const TextBox669IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox669"]);
const TextBox669Cb = useTextBox669Cb()
const TextBox670Props = useStore((state)=>state["privacy-policy"]["TextBox670"]);
const TextBox670IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox670"]);
const TextBox670Cb = useTextBox670Cb()
const TextBox671Props = useStore((state)=>state["privacy-policy"]["TextBox671"]);
const TextBox671IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox671"]);
const TextBox671Cb = useTextBox671Cb()
const TextBox672Props = useStore((state)=>state["privacy-policy"]["TextBox672"]);
const TextBox672IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox672"]);
const TextBox672Cb = useTextBox672Cb()
const Image267Props = useStore((state)=>state["privacy-policy"]["Image267"]);
const Image267IoProps = useIoStore((state)=>state["privacy-policy"]["Image267"]);
const Image267Cb = useImage267Cb()
const TextBox673Props = useStore((state)=>state["privacy-policy"]["TextBox673"]);
const TextBox673IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox673"]);
const TextBox673Cb = useTextBox673Cb()
const TextBox674Props = useStore((state)=>state["privacy-policy"]["TextBox674"]);
const TextBox674IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox674"]);
const TextBox674Cb = useTextBox674Cb()
const TextBox675Props = useStore((state)=>state["privacy-policy"]["TextBox675"]);
const TextBox675IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox675"]);
const TextBox675Cb = useTextBox675Cb()
const TextBox676Props = useStore((state)=>state["privacy-policy"]["TextBox676"]);
const TextBox676IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox676"]);
const TextBox676Cb = useTextBox676Cb()
const TextBox677Props = useStore((state)=>state["privacy-policy"]["TextBox677"]);
const TextBox677IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox677"]);
const TextBox677Cb = useTextBox677Cb()
const TextBox678Props = useStore((state)=>state["privacy-policy"]["TextBox678"]);
const TextBox678IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox678"]);
const TextBox678Cb = useTextBox678Cb()
const TextBox679Props = useStore((state)=>state["privacy-policy"]["TextBox679"]);
const TextBox679IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox679"]);
const TextBox679Cb = useTextBox679Cb()
const TextBox680Props = useStore((state)=>state["privacy-policy"]["TextBox680"]);
const TextBox680IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox680"]);
const TextBox680Cb = useTextBox680Cb()
const Image263Props = useStore((state)=>state["privacy-policy"]["Image263"]);
const Image263IoProps = useIoStore((state)=>state["privacy-policy"]["Image263"]);
const Image263Cb = useImage263Cb()
const Image264Props = useStore((state)=>state["privacy-policy"]["Image264"]);
const Image264IoProps = useIoStore((state)=>state["privacy-policy"]["Image264"]);
const Image264Cb = useImage264Cb()
const Image265Props = useStore((state)=>state["privacy-policy"]["Image265"]);
const Image265IoProps = useIoStore((state)=>state["privacy-policy"]["Image265"]);
const Image265Cb = useImage265Cb()
const Image266Props = useStore((state)=>state["privacy-policy"]["Image266"]);
const Image266IoProps = useIoStore((state)=>state["privacy-policy"]["Image266"]);
const Image266Cb = useImage266Cb()

  return (<>
  <Flex6 className="p-privacy-policy Privacy_Policy" {...Privacy_PolicyProps} {...Privacy_PolicyCb} {...Privacy_PolicyIoProps}>
<Flex6 className="p-privacy-policy Flex364" {...Flex364Props} {...Flex364Cb} {...Flex364IoProps}>
<Image6 className="p-privacy-policy Image262" {...Image262Props} {...Image262Cb} {...Image262IoProps}/>
<TextBox6 className="p-privacy-policy TextBox660" {...TextBox660Props} {...TextBox660Cb} {...TextBox660IoProps}/>
<TextBox6 className="p-privacy-policy TextBox659" {...TextBox659Props} {...TextBox659Cb} {...TextBox659IoProps}/>
<TextBox6 className="p-privacy-policy TextBox658" {...TextBox658Props} {...TextBox658Cb} {...TextBox658IoProps}/>
<TextBox6 className="p-privacy-policy TextBox657" {...TextBox657Props} {...TextBox657Cb} {...TextBox657IoProps}/>
<Button6 className="p-privacy-policy Button37" {...Button37Props} {...Button37Cb} {...Button37IoProps}/>
</Flex6>
<Div4 className="p-privacy-policy Div227" {...Div227Props} {...Div227Cb} {...Div227IoProps}>
<TextBox6 className="p-privacy-policy TextBox672" {...TextBox672Props} {...TextBox672Cb} {...TextBox672IoProps}/>
<TextBox6 className="p-privacy-policy TextBox671" {...TextBox671Props} {...TextBox671Cb} {...TextBox671IoProps}/>
<TextBox6 className="p-privacy-policy TextBox670" {...TextBox670Props} {...TextBox670Cb} {...TextBox670IoProps}/>
<TextBox6 className="p-privacy-policy TextBox669" {...TextBox669Props} {...TextBox669Cb} {...TextBox669IoProps}/>
<TextBox6 className="p-privacy-policy TextBox663" {...TextBox663Props} {...TextBox663Cb} {...TextBox663IoProps}/>
<TextBox6 className="p-privacy-policy TextBox668" {...TextBox668Props} {...TextBox668Cb} {...TextBox668IoProps}/>
<TextBox6 className="p-privacy-policy TextBox666" {...TextBox666Props} {...TextBox666Cb} {...TextBox666IoProps}/>
<TextBox6 className="p-privacy-policy TextBox664" {...TextBox664Props} {...TextBox664Cb} {...TextBox664IoProps}/>
<TextBox6 className="p-privacy-policy TextBox662" {...TextBox662Props} {...TextBox662Cb} {...TextBox662IoProps}/>
<TextBox6 className="p-privacy-policy TextBox665" {...TextBox665Props} {...TextBox665Cb} {...TextBox665IoProps}/>
<TextBox6 className="p-privacy-policy TextBox667" {...TextBox667Props} {...TextBox667Cb} {...TextBox667IoProps}/>
<TextBox6 className="p-privacy-policy TextBox661" {...TextBox661Props} {...TextBox661Cb} {...TextBox661IoProps}/>
</Div4>
<Flex6 className="p-privacy-policy Flex370" {...Flex370Props} {...Flex370Cb} {...Flex370IoProps}>
<Flex6 className="p-privacy-policy Flex369" {...Flex369Props} {...Flex369Cb} {...Flex369IoProps}>
<Flex6 className="p-privacy-policy Flex365" {...Flex365Props} {...Flex365Cb} {...Flex365IoProps}>
<Image6 className="p-privacy-policy Image263" {...Image263Props} {...Image263Cb} {...Image263IoProps}/>
</Flex6>
<Flex6 className="p-privacy-policy Flex366" {...Flex366Props} {...Flex366Cb} {...Flex366IoProps}>
<Image6 className="p-privacy-policy Image266" {...Image266Props} {...Image266Cb} {...Image266IoProps}/>
<Image6 className="p-privacy-policy Image265" {...Image265Props} {...Image265Cb} {...Image265IoProps}/>
<Image6 className="p-privacy-policy Image264" {...Image264Props} {...Image264Cb} {...Image264IoProps}/>
</Flex6>
</Flex6>
<Flex6 className="p-privacy-policy Flex368" {...Flex368Props} {...Flex368Cb} {...Flex368IoProps}>
<TextBox6 className="p-privacy-policy TextBox679" {...TextBox679Props} {...TextBox679Cb} {...TextBox679IoProps}/>
<TextBox6 className="p-privacy-policy TextBox678" {...TextBox678Props} {...TextBox678Cb} {...TextBox678IoProps}/>
<TextBox6 className="p-privacy-policy TextBox677" {...TextBox677Props} {...TextBox677Cb} {...TextBox677IoProps}/>
<TextBox6 className="p-privacy-policy TextBox680" {...TextBox680Props} {...TextBox680Cb} {...TextBox680IoProps}/>
</Flex6>
<Flex6 className="p-privacy-policy Flex367" {...Flex367Props} {...Flex367Cb} {...Flex367IoProps}>
<TextBox6 className="p-privacy-policy TextBox675" {...TextBox675Props} {...TextBox675Cb} {...TextBox675IoProps}/>
<TextBox6 className="p-privacy-policy TextBox674" {...TextBox674Props} {...TextBox674Cb} {...TextBox674IoProps}/>
<TextBox6 className="p-privacy-policy TextBox673" {...TextBox673Props} {...TextBox673Cb} {...TextBox673IoProps}/>
<TextBox6 className="p-privacy-policy TextBox676" {...TextBox676Props} {...TextBox676Cb} {...TextBox676IoProps}/>
</Flex6>
<Image6 className="p-privacy-policy Image267" {...Image267Props} {...Image267Cb} {...Image267IoProps}/>
</Flex6>
</Flex6>
  </>);
}
