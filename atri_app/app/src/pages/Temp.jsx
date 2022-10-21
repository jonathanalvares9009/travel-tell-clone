import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex9 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div7 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image as Image9 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox9 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Input as Input3 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useFlex723Cb, useDiv261Cb, useFlex724Cb, useFlex725Cb, useDiv262Cb, useDiv263Cb, useDiv264Cb, useDiv265Cb, useDiv266Cb, useImage508Cb, useTextBox1080Cb, useInput87Cb, useTextBox1081Cb, useTextBox1082Cb, useImage514Cb, useTextBox1084Cb, useImage518Cb, useImage511Cb, useTextBox1083Cb, useImage515Cb, useImage512Cb, useImage516Cb, useTextBox1086Cb, useImage519Cb, useTextBox1087Cb, useImage520Cb, useTextBox1088Cb, useImage521Cb, useTextBox1089Cb, useImage522Cb, useTextBox1090Cb } from "../page-cbs/temp";
import "../page-css/temp.css"

export default function Temp() {
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

  const Flex723Props = useStore((state)=>state["temp"]["Flex723"]);
const Flex723IoProps = useIoStore((state)=>state["temp"]["Flex723"]);
const Flex723Cb = useFlex723Cb()
const Div261Props = useStore((state)=>state["temp"]["Div261"]);
const Div261IoProps = useIoStore((state)=>state["temp"]["Div261"]);
const Div261Cb = useDiv261Cb()
const Flex724Props = useStore((state)=>state["temp"]["Flex724"]);
const Flex724IoProps = useIoStore((state)=>state["temp"]["Flex724"]);
const Flex724Cb = useFlex724Cb()
const Flex725Props = useStore((state)=>state["temp"]["Flex725"]);
const Flex725IoProps = useIoStore((state)=>state["temp"]["Flex725"]);
const Flex725Cb = useFlex725Cb()
const Div262Props = useStore((state)=>state["temp"]["Div262"]);
const Div262IoProps = useIoStore((state)=>state["temp"]["Div262"]);
const Div262Cb = useDiv262Cb()
const Div263Props = useStore((state)=>state["temp"]["Div263"]);
const Div263IoProps = useIoStore((state)=>state["temp"]["Div263"]);
const Div263Cb = useDiv263Cb()
const Div264Props = useStore((state)=>state["temp"]["Div264"]);
const Div264IoProps = useIoStore((state)=>state["temp"]["Div264"]);
const Div264Cb = useDiv264Cb()
const Div265Props = useStore((state)=>state["temp"]["Div265"]);
const Div265IoProps = useIoStore((state)=>state["temp"]["Div265"]);
const Div265Cb = useDiv265Cb()
const Div266Props = useStore((state)=>state["temp"]["Div266"]);
const Div266IoProps = useIoStore((state)=>state["temp"]["Div266"]);
const Div266Cb = useDiv266Cb()
const Image508Props = useStore((state)=>state["temp"]["Image508"]);
const Image508IoProps = useIoStore((state)=>state["temp"]["Image508"]);
const Image508Cb = useImage508Cb()
const TextBox1080Props = useStore((state)=>state["temp"]["TextBox1080"]);
const TextBox1080IoProps = useIoStore((state)=>state["temp"]["TextBox1080"]);
const TextBox1080Cb = useTextBox1080Cb()
const Input87Props = useStore((state)=>state["temp"]["Input87"]);
const Input87IoProps = useIoStore((state)=>state["temp"]["Input87"]);
const Input87Cb = useInput87Cb()
const TextBox1081Props = useStore((state)=>state["temp"]["TextBox1081"]);
const TextBox1081IoProps = useIoStore((state)=>state["temp"]["TextBox1081"]);
const TextBox1081Cb = useTextBox1081Cb()
const TextBox1082Props = useStore((state)=>state["temp"]["TextBox1082"]);
const TextBox1082IoProps = useIoStore((state)=>state["temp"]["TextBox1082"]);
const TextBox1082Cb = useTextBox1082Cb()
const Image514Props = useStore((state)=>state["temp"]["Image514"]);
const Image514IoProps = useIoStore((state)=>state["temp"]["Image514"]);
const Image514Cb = useImage514Cb()
const TextBox1084Props = useStore((state)=>state["temp"]["TextBox1084"]);
const TextBox1084IoProps = useIoStore((state)=>state["temp"]["TextBox1084"]);
const TextBox1084Cb = useTextBox1084Cb()
const Image518Props = useStore((state)=>state["temp"]["Image518"]);
const Image518IoProps = useIoStore((state)=>state["temp"]["Image518"]);
const Image518Cb = useImage518Cb()
const Image511Props = useStore((state)=>state["temp"]["Image511"]);
const Image511IoProps = useIoStore((state)=>state["temp"]["Image511"]);
const Image511Cb = useImage511Cb()
const TextBox1083Props = useStore((state)=>state["temp"]["TextBox1083"]);
const TextBox1083IoProps = useIoStore((state)=>state["temp"]["TextBox1083"]);
const TextBox1083Cb = useTextBox1083Cb()
const Image515Props = useStore((state)=>state["temp"]["Image515"]);
const Image515IoProps = useIoStore((state)=>state["temp"]["Image515"]);
const Image515Cb = useImage515Cb()
const Image512Props = useStore((state)=>state["temp"]["Image512"]);
const Image512IoProps = useIoStore((state)=>state["temp"]["Image512"]);
const Image512Cb = useImage512Cb()
const Image516Props = useStore((state)=>state["temp"]["Image516"]);
const Image516IoProps = useIoStore((state)=>state["temp"]["Image516"]);
const Image516Cb = useImage516Cb()
const TextBox1086Props = useStore((state)=>state["temp"]["TextBox1086"]);
const TextBox1086IoProps = useIoStore((state)=>state["temp"]["TextBox1086"]);
const TextBox1086Cb = useTextBox1086Cb()
const Image519Props = useStore((state)=>state["temp"]["Image519"]);
const Image519IoProps = useIoStore((state)=>state["temp"]["Image519"]);
const Image519Cb = useImage519Cb()
const TextBox1087Props = useStore((state)=>state["temp"]["TextBox1087"]);
const TextBox1087IoProps = useIoStore((state)=>state["temp"]["TextBox1087"]);
const TextBox1087Cb = useTextBox1087Cb()
const Image520Props = useStore((state)=>state["temp"]["Image520"]);
const Image520IoProps = useIoStore((state)=>state["temp"]["Image520"]);
const Image520Cb = useImage520Cb()
const TextBox1088Props = useStore((state)=>state["temp"]["TextBox1088"]);
const TextBox1088IoProps = useIoStore((state)=>state["temp"]["TextBox1088"]);
const TextBox1088Cb = useTextBox1088Cb()
const Image521Props = useStore((state)=>state["temp"]["Image521"]);
const Image521IoProps = useIoStore((state)=>state["temp"]["Image521"]);
const Image521Cb = useImage521Cb()
const TextBox1089Props = useStore((state)=>state["temp"]["TextBox1089"]);
const TextBox1089IoProps = useIoStore((state)=>state["temp"]["TextBox1089"]);
const TextBox1089Cb = useTextBox1089Cb()
const Image522Props = useStore((state)=>state["temp"]["Image522"]);
const Image522IoProps = useIoStore((state)=>state["temp"]["Image522"]);
const Image522Cb = useImage522Cb()
const TextBox1090Props = useStore((state)=>state["temp"]["TextBox1090"]);
const TextBox1090IoProps = useIoStore((state)=>state["temp"]["TextBox1090"]);
const TextBox1090Cb = useTextBox1090Cb()

  return (<>
  <Flex9 className="p-temp Flex723" {...Flex723Props} {...Flex723Cb} {...Flex723IoProps}>
<Div7 className="p-temp Div261" {...Div261Props} {...Div261Cb} {...Div261IoProps}>
<Image9 className="p-temp Image508" {...Image508Props} {...Image508Cb} {...Image508IoProps}/>
</Div7>
<Flex9 className="p-temp Flex724" {...Flex724Props} {...Flex724Cb} {...Flex724IoProps}>
<TextBox9 className="p-temp TextBox1080" {...TextBox1080Props} {...TextBox1080Cb} {...TextBox1080IoProps}/>
<Input3 className="p-temp Input87" {...Input87Props} {...Input87Cb} {...Input87IoProps}/>
<TextBox9 className="p-temp TextBox1081" {...TextBox1081Props} {...TextBox1081Cb} {...TextBox1081IoProps}/>
<Flex9 className="p-temp Flex725" {...Flex725Props} {...Flex725Cb} {...Flex725IoProps}>
<Div7 className="p-temp Div265" {...Div265Props} {...Div265Cb} {...Div265IoProps}>
<TextBox9 className="p-temp TextBox1087" {...TextBox1087Props} {...TextBox1087Cb} {...TextBox1087IoProps}/>
<Image9 className="p-temp Image519" {...Image519Props} {...Image519Cb} {...Image519IoProps}/>
<Image9 className="p-temp Image520" {...Image520Props} {...Image520Cb} {...Image520IoProps}/>
<TextBox9 className="p-temp TextBox1088" {...TextBox1088Props} {...TextBox1088Cb} {...TextBox1088IoProps}/>
</Div7>
<Div7 className="p-temp Div266" {...Div266Props} {...Div266Cb} {...Div266IoProps}>
<TextBox9 className="p-temp TextBox1089" {...TextBox1089Props} {...TextBox1089Cb} {...TextBox1089IoProps}/>
<Image9 className="p-temp Image521" {...Image521Props} {...Image521Cb} {...Image521IoProps}/>
<Image9 className="p-temp Image522" {...Image522Props} {...Image522Cb} {...Image522IoProps}/>
<TextBox9 className="p-temp TextBox1090" {...TextBox1090Props} {...TextBox1090Cb} {...TextBox1090IoProps}/>
</Div7>
<Div7 className="p-temp Div262" {...Div262Props} {...Div262Cb} {...Div262IoProps}>
<TextBox9 className="p-temp TextBox1084" {...TextBox1084Props} {...TextBox1084Cb} {...TextBox1084IoProps}/>
<Image9 className="p-temp Image518" {...Image518Props} {...Image518Cb} {...Image518IoProps}/>
<Image9 className="p-temp Image514" {...Image514Props} {...Image514Cb} {...Image514IoProps}/>
<TextBox9 className="p-temp TextBox1082" {...TextBox1082Props} {...TextBox1082Cb} {...TextBox1082IoProps}/>
</Div7>
<Div7 className="p-temp Div263" {...Div263Props} {...Div263Cb} {...Div263IoProps}>
<Image9 className="p-temp Image511" {...Image511Props} {...Image511Cb} {...Image511IoProps}/>
<Image9 className="p-temp Image515" {...Image515Props} {...Image515Cb} {...Image515IoProps}/>
<TextBox9 className="p-temp TextBox1083" {...TextBox1083Props} {...TextBox1083Cb} {...TextBox1083IoProps}/>
</Div7>
<Div7 className="p-temp Div264" {...Div264Props} {...Div264Cb} {...Div264IoProps}>
<Image9 className="p-temp Image512" {...Image512Props} {...Image512Cb} {...Image512IoProps}/>
<TextBox9 className="p-temp TextBox1086" {...TextBox1086Props} {...TextBox1086Cb} {...TextBox1086IoProps}/>
<Image9 className="p-temp Image516" {...Image516Props} {...Image516Cb} {...Image516IoProps}/>
</Div7>
</Flex9>
</Flex9>
</Flex9>
  </>);
}
