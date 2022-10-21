import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex7 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div5 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Button as Button7 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox7 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image7 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex355Cb, useFlex356Cb, useDiv226Cb, useFlex376Cb, useFlex373Cb, useFlex371Cb, useFlex372Cb, useFlex374Cb, useFlex375Cb, useButton36Cb, useTextBox633Cb, useTextBox634Cb, useTextBox635Cb, useTextBox636Cb, useImage256Cb, useTextBox637Cb, useTextBox638Cb, useTextBox639Cb, useTextBox640Cb, useTextBox641Cb, useTextBox642Cb, useTextBox643Cb, useTextBox644Cb, useTextBox645Cb, useTextBox646Cb, useTextBox647Cb, useTextBox648Cb, useImage272Cb, useImage268Cb, useImage269Cb, useImage270Cb, useImage271Cb, useTextBox681Cb, useTextBox682Cb, useTextBox683Cb, useTextBox684Cb, useTextBox685Cb, useTextBox686Cb, useTextBox687Cb, useTextBox688Cb } from "../page-cbs/terms";
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

  const Flex355Props = useStore((state)=>state["terms"]["Flex355"]);
const Flex355IoProps = useIoStore((state)=>state["terms"]["Flex355"]);
const Flex355Cb = useFlex355Cb()
const Flex356Props = useStore((state)=>state["terms"]["Flex356"]);
const Flex356IoProps = useIoStore((state)=>state["terms"]["Flex356"]);
const Flex356Cb = useFlex356Cb()
const Div226Props = useStore((state)=>state["terms"]["Div226"]);
const Div226IoProps = useIoStore((state)=>state["terms"]["Div226"]);
const Div226Cb = useDiv226Cb()
const Flex376Props = useStore((state)=>state["terms"]["Flex376"]);
const Flex376IoProps = useIoStore((state)=>state["terms"]["Flex376"]);
const Flex376Cb = useFlex376Cb()
const Flex373Props = useStore((state)=>state["terms"]["Flex373"]);
const Flex373IoProps = useIoStore((state)=>state["terms"]["Flex373"]);
const Flex373Cb = useFlex373Cb()
const Flex371Props = useStore((state)=>state["terms"]["Flex371"]);
const Flex371IoProps = useIoStore((state)=>state["terms"]["Flex371"]);
const Flex371Cb = useFlex371Cb()
const Flex372Props = useStore((state)=>state["terms"]["Flex372"]);
const Flex372IoProps = useIoStore((state)=>state["terms"]["Flex372"]);
const Flex372Cb = useFlex372Cb()
const Flex374Props = useStore((state)=>state["terms"]["Flex374"]);
const Flex374IoProps = useIoStore((state)=>state["terms"]["Flex374"]);
const Flex374Cb = useFlex374Cb()
const Flex375Props = useStore((state)=>state["terms"]["Flex375"]);
const Flex375IoProps = useIoStore((state)=>state["terms"]["Flex375"]);
const Flex375Cb = useFlex375Cb()
const Button36Props = useStore((state)=>state["terms"]["Button36"]);
const Button36IoProps = useIoStore((state)=>state["terms"]["Button36"]);
const Button36Cb = useButton36Cb()
const TextBox633Props = useStore((state)=>state["terms"]["TextBox633"]);
const TextBox633IoProps = useIoStore((state)=>state["terms"]["TextBox633"]);
const TextBox633Cb = useTextBox633Cb()
const TextBox634Props = useStore((state)=>state["terms"]["TextBox634"]);
const TextBox634IoProps = useIoStore((state)=>state["terms"]["TextBox634"]);
const TextBox634Cb = useTextBox634Cb()
const TextBox635Props = useStore((state)=>state["terms"]["TextBox635"]);
const TextBox635IoProps = useIoStore((state)=>state["terms"]["TextBox635"]);
const TextBox635Cb = useTextBox635Cb()
const TextBox636Props = useStore((state)=>state["terms"]["TextBox636"]);
const TextBox636IoProps = useIoStore((state)=>state["terms"]["TextBox636"]);
const TextBox636Cb = useTextBox636Cb()
const Image256Props = useStore((state)=>state["terms"]["Image256"]);
const Image256IoProps = useIoStore((state)=>state["terms"]["Image256"]);
const Image256Cb = useImage256Cb()
const TextBox637Props = useStore((state)=>state["terms"]["TextBox637"]);
const TextBox637IoProps = useIoStore((state)=>state["terms"]["TextBox637"]);
const TextBox637Cb = useTextBox637Cb()
const TextBox638Props = useStore((state)=>state["terms"]["TextBox638"]);
const TextBox638IoProps = useIoStore((state)=>state["terms"]["TextBox638"]);
const TextBox638Cb = useTextBox638Cb()
const TextBox639Props = useStore((state)=>state["terms"]["TextBox639"]);
const TextBox639IoProps = useIoStore((state)=>state["terms"]["TextBox639"]);
const TextBox639Cb = useTextBox639Cb()
const TextBox640Props = useStore((state)=>state["terms"]["TextBox640"]);
const TextBox640IoProps = useIoStore((state)=>state["terms"]["TextBox640"]);
const TextBox640Cb = useTextBox640Cb()
const TextBox641Props = useStore((state)=>state["terms"]["TextBox641"]);
const TextBox641IoProps = useIoStore((state)=>state["terms"]["TextBox641"]);
const TextBox641Cb = useTextBox641Cb()
const TextBox642Props = useStore((state)=>state["terms"]["TextBox642"]);
const TextBox642IoProps = useIoStore((state)=>state["terms"]["TextBox642"]);
const TextBox642Cb = useTextBox642Cb()
const TextBox643Props = useStore((state)=>state["terms"]["TextBox643"]);
const TextBox643IoProps = useIoStore((state)=>state["terms"]["TextBox643"]);
const TextBox643Cb = useTextBox643Cb()
const TextBox644Props = useStore((state)=>state["terms"]["TextBox644"]);
const TextBox644IoProps = useIoStore((state)=>state["terms"]["TextBox644"]);
const TextBox644Cb = useTextBox644Cb()
const TextBox645Props = useStore((state)=>state["terms"]["TextBox645"]);
const TextBox645IoProps = useIoStore((state)=>state["terms"]["TextBox645"]);
const TextBox645Cb = useTextBox645Cb()
const TextBox646Props = useStore((state)=>state["terms"]["TextBox646"]);
const TextBox646IoProps = useIoStore((state)=>state["terms"]["TextBox646"]);
const TextBox646Cb = useTextBox646Cb()
const TextBox647Props = useStore((state)=>state["terms"]["TextBox647"]);
const TextBox647IoProps = useIoStore((state)=>state["terms"]["TextBox647"]);
const TextBox647Cb = useTextBox647Cb()
const TextBox648Props = useStore((state)=>state["terms"]["TextBox648"]);
const TextBox648IoProps = useIoStore((state)=>state["terms"]["TextBox648"]);
const TextBox648Cb = useTextBox648Cb()
const Image272Props = useStore((state)=>state["terms"]["Image272"]);
const Image272IoProps = useIoStore((state)=>state["terms"]["Image272"]);
const Image272Cb = useImage272Cb()
const Image268Props = useStore((state)=>state["terms"]["Image268"]);
const Image268IoProps = useIoStore((state)=>state["terms"]["Image268"]);
const Image268Cb = useImage268Cb()
const Image269Props = useStore((state)=>state["terms"]["Image269"]);
const Image269IoProps = useIoStore((state)=>state["terms"]["Image269"]);
const Image269Cb = useImage269Cb()
const Image270Props = useStore((state)=>state["terms"]["Image270"]);
const Image270IoProps = useIoStore((state)=>state["terms"]["Image270"]);
const Image270Cb = useImage270Cb()
const Image271Props = useStore((state)=>state["terms"]["Image271"]);
const Image271IoProps = useIoStore((state)=>state["terms"]["Image271"]);
const Image271Cb = useImage271Cb()
const TextBox681Props = useStore((state)=>state["terms"]["TextBox681"]);
const TextBox681IoProps = useIoStore((state)=>state["terms"]["TextBox681"]);
const TextBox681Cb = useTextBox681Cb()
const TextBox682Props = useStore((state)=>state["terms"]["TextBox682"]);
const TextBox682IoProps = useIoStore((state)=>state["terms"]["TextBox682"]);
const TextBox682Cb = useTextBox682Cb()
const TextBox683Props = useStore((state)=>state["terms"]["TextBox683"]);
const TextBox683IoProps = useIoStore((state)=>state["terms"]["TextBox683"]);
const TextBox683Cb = useTextBox683Cb()
const TextBox684Props = useStore((state)=>state["terms"]["TextBox684"]);
const TextBox684IoProps = useIoStore((state)=>state["terms"]["TextBox684"]);
const TextBox684Cb = useTextBox684Cb()
const TextBox685Props = useStore((state)=>state["terms"]["TextBox685"]);
const TextBox685IoProps = useIoStore((state)=>state["terms"]["TextBox685"]);
const TextBox685Cb = useTextBox685Cb()
const TextBox686Props = useStore((state)=>state["terms"]["TextBox686"]);
const TextBox686IoProps = useIoStore((state)=>state["terms"]["TextBox686"]);
const TextBox686Cb = useTextBox686Cb()
const TextBox687Props = useStore((state)=>state["terms"]["TextBox687"]);
const TextBox687IoProps = useIoStore((state)=>state["terms"]["TextBox687"]);
const TextBox687Cb = useTextBox687Cb()
const TextBox688Props = useStore((state)=>state["terms"]["TextBox688"]);
const TextBox688IoProps = useIoStore((state)=>state["terms"]["TextBox688"]);
const TextBox688Cb = useTextBox688Cb()

  return (<>
  <Flex7 className="p-terms Flex355" {...Flex355Props} {...Flex355Cb} {...Flex355IoProps}>
<Flex7 className="p-terms Flex356" {...Flex356Props} {...Flex356Cb} {...Flex356IoProps}>
<Image7 className="p-terms Image256" {...Image256Props} {...Image256Cb} {...Image256IoProps}/>
<TextBox7 className="p-terms TextBox636" {...TextBox636Props} {...TextBox636Cb} {...TextBox636IoProps}/>
<TextBox7 className="p-terms TextBox635" {...TextBox635Props} {...TextBox635Cb} {...TextBox635IoProps}/>
<TextBox7 className="p-terms TextBox634" {...TextBox634Props} {...TextBox634Cb} {...TextBox634IoProps}/>
<TextBox7 className="p-terms TextBox633" {...TextBox633Props} {...TextBox633Cb} {...TextBox633IoProps}/>
<Button7 className="p-terms Button36" {...Button36Props} {...Button36Cb} {...Button36IoProps}/>
</Flex7>
<Div5 className="p-terms Div226" {...Div226Props} {...Div226Cb} {...Div226IoProps}>
<TextBox7 className="p-terms TextBox648" {...TextBox648Props} {...TextBox648Cb} {...TextBox648IoProps}/>
<TextBox7 className="p-terms TextBox647" {...TextBox647Props} {...TextBox647Cb} {...TextBox647IoProps}/>
<TextBox7 className="p-terms TextBox646" {...TextBox646Props} {...TextBox646Cb} {...TextBox646IoProps}/>
<TextBox7 className="p-terms TextBox645" {...TextBox645Props} {...TextBox645Cb} {...TextBox645IoProps}/>
<TextBox7 className="p-terms TextBox639" {...TextBox639Props} {...TextBox639Cb} {...TextBox639IoProps}/>
<TextBox7 className="p-terms TextBox644" {...TextBox644Props} {...TextBox644Cb} {...TextBox644IoProps}/>
<TextBox7 className="p-terms TextBox642" {...TextBox642Props} {...TextBox642Cb} {...TextBox642IoProps}/>
<TextBox7 className="p-terms TextBox640" {...TextBox640Props} {...TextBox640Cb} {...TextBox640IoProps}/>
<TextBox7 className="p-terms TextBox638" {...TextBox638Props} {...TextBox638Cb} {...TextBox638IoProps}/>
<TextBox7 className="p-terms TextBox641" {...TextBox641Props} {...TextBox641Cb} {...TextBox641IoProps}/>
<TextBox7 className="p-terms TextBox643" {...TextBox643Props} {...TextBox643Cb} {...TextBox643IoProps}/>
<TextBox7 className="p-terms TextBox637" {...TextBox637Props} {...TextBox637Cb} {...TextBox637IoProps}/>
</Div5>
<Flex7 className="p-terms Flex376" {...Flex376Props} {...Flex376Cb} {...Flex376IoProps}>
<Flex7 className="p-terms Flex373" {...Flex373Props} {...Flex373Cb} {...Flex373IoProps}>
<Flex7 className="p-terms Flex372" {...Flex372Props} {...Flex372Cb} {...Flex372IoProps}>
<Image7 className="p-terms Image271" {...Image271Props} {...Image271Cb} {...Image271IoProps}/>
</Flex7>
<Flex7 className="p-terms Flex371" {...Flex371Props} {...Flex371Cb} {...Flex371IoProps}>
<Image7 className="p-terms Image268" {...Image268Props} {...Image268Cb} {...Image268IoProps}/>
<Image7 className="p-terms Image269" {...Image269Props} {...Image269Cb} {...Image269IoProps}/>
<Image7 className="p-terms Image270" {...Image270Props} {...Image270Cb} {...Image270IoProps}/>
</Flex7>
</Flex7>
<Flex7 className="p-terms Flex374" {...Flex374Props} {...Flex374Cb} {...Flex374IoProps}>
<TextBox7 className="p-terms TextBox682" {...TextBox682Props} {...TextBox682Cb} {...TextBox682IoProps}/>
<TextBox7 className="p-terms TextBox683" {...TextBox683Props} {...TextBox683Cb} {...TextBox683IoProps}/>
<TextBox7 className="p-terms TextBox684" {...TextBox684Props} {...TextBox684Cb} {...TextBox684IoProps}/>
<TextBox7 className="p-terms TextBox681" {...TextBox681Props} {...TextBox681Cb} {...TextBox681IoProps}/>
</Flex7>
<Flex7 className="p-terms Flex375" {...Flex375Props} {...Flex375Cb} {...Flex375IoProps}>
<TextBox7 className="p-terms TextBox686" {...TextBox686Props} {...TextBox686Cb} {...TextBox686IoProps}/>
<TextBox7 className="p-terms TextBox687" {...TextBox687Props} {...TextBox687Cb} {...TextBox687IoProps}/>
<TextBox7 className="p-terms TextBox688" {...TextBox688Props} {...TextBox688Cb} {...TextBox688IoProps}/>
<TextBox7 className="p-terms TextBox685" {...TextBox685Props} {...TextBox685Cb} {...TextBox685IoProps}/>
</Flex7>
<Image7 className="p-terms Image272" {...Image272Props} {...Image272Cb} {...Image272IoProps}/>
</Flex7>
</Flex7>
  </>);
}
