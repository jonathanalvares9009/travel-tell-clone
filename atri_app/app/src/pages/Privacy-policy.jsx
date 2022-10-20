import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex6 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div6 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Button as Button6 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox6 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image6 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { usePrivacy_BodyCb, useFlex167Cb, useFlex165Cb, useFlex166Cb, useDiv145Cb, useDiv149Cb, useFlex173Cb, useDiv150Cb, useFlex172Cb, useFlex169Cb, useFlex170Cb, useFlex171Cb, useFlex168Cb, useButton13Cb, useTextBox299Cb, useTextBox300Cb, useTextBox301Cb, useTextBox302Cb, useImage125Cb, useTextBox339Cb, useTextBox340Cb, useTextBox341Cb, useTextBox342Cb, useTextBox343Cb, useTextBox344Cb, useTextBox345Cb, useTextBox346Cb, useTextBox347Cb, useTextBox348Cb, useTextBox349Cb, useTextBox350Cb, useImage130Cb, useTextBox351Cb, useTextBox352Cb, useTextBox353Cb, useTextBox354Cb, useTextBox355Cb, useTextBox356Cb, useTextBox357Cb, useTextBox358Cb, useImage129Cb, useImage126Cb, useImage127Cb, useImage128Cb } from "../page-cbs/privacy-policy";
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

  const Privacy_BodyProps = useStore((state)=>state["privacy-policy"]["Privacy_Body"]);
const Privacy_BodyIoProps = useIoStore((state)=>state["privacy-policy"]["Privacy_Body"]);
const Privacy_BodyCb = usePrivacy_BodyCb()
const Flex167Props = useStore((state)=>state["privacy-policy"]["Flex167"]);
const Flex167IoProps = useIoStore((state)=>state["privacy-policy"]["Flex167"]);
const Flex167Cb = useFlex167Cb()
const Flex165Props = useStore((state)=>state["privacy-policy"]["Flex165"]);
const Flex165IoProps = useIoStore((state)=>state["privacy-policy"]["Flex165"]);
const Flex165Cb = useFlex165Cb()
const Flex166Props = useStore((state)=>state["privacy-policy"]["Flex166"]);
const Flex166IoProps = useIoStore((state)=>state["privacy-policy"]["Flex166"]);
const Flex166Cb = useFlex166Cb()
const Div145Props = useStore((state)=>state["privacy-policy"]["Div145"]);
const Div145IoProps = useIoStore((state)=>state["privacy-policy"]["Div145"]);
const Div145Cb = useDiv145Cb()
const Div149Props = useStore((state)=>state["privacy-policy"]["Div149"]);
const Div149IoProps = useIoStore((state)=>state["privacy-policy"]["Div149"]);
const Div149Cb = useDiv149Cb()
const Flex173Props = useStore((state)=>state["privacy-policy"]["Flex173"]);
const Flex173IoProps = useIoStore((state)=>state["privacy-policy"]["Flex173"]);
const Flex173Cb = useFlex173Cb()
const Div150Props = useStore((state)=>state["privacy-policy"]["Div150"]);
const Div150IoProps = useIoStore((state)=>state["privacy-policy"]["Div150"]);
const Div150Cb = useDiv150Cb()
const Flex172Props = useStore((state)=>state["privacy-policy"]["Flex172"]);
const Flex172IoProps = useIoStore((state)=>state["privacy-policy"]["Flex172"]);
const Flex172Cb = useFlex172Cb()
const Flex169Props = useStore((state)=>state["privacy-policy"]["Flex169"]);
const Flex169IoProps = useIoStore((state)=>state["privacy-policy"]["Flex169"]);
const Flex169Cb = useFlex169Cb()
const Flex170Props = useStore((state)=>state["privacy-policy"]["Flex170"]);
const Flex170IoProps = useIoStore((state)=>state["privacy-policy"]["Flex170"]);
const Flex170Cb = useFlex170Cb()
const Flex171Props = useStore((state)=>state["privacy-policy"]["Flex171"]);
const Flex171IoProps = useIoStore((state)=>state["privacy-policy"]["Flex171"]);
const Flex171Cb = useFlex171Cb()
const Flex168Props = useStore((state)=>state["privacy-policy"]["Flex168"]);
const Flex168IoProps = useIoStore((state)=>state["privacy-policy"]["Flex168"]);
const Flex168Cb = useFlex168Cb()
const Button13Props = useStore((state)=>state["privacy-policy"]["Button13"]);
const Button13IoProps = useIoStore((state)=>state["privacy-policy"]["Button13"]);
const Button13Cb = useButton13Cb()
const TextBox299Props = useStore((state)=>state["privacy-policy"]["TextBox299"]);
const TextBox299IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox299"]);
const TextBox299Cb = useTextBox299Cb()
const TextBox300Props = useStore((state)=>state["privacy-policy"]["TextBox300"]);
const TextBox300IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox300"]);
const TextBox300Cb = useTextBox300Cb()
const TextBox301Props = useStore((state)=>state["privacy-policy"]["TextBox301"]);
const TextBox301IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox301"]);
const TextBox301Cb = useTextBox301Cb()
const TextBox302Props = useStore((state)=>state["privacy-policy"]["TextBox302"]);
const TextBox302IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox302"]);
const TextBox302Cb = useTextBox302Cb()
const Image125Props = useStore((state)=>state["privacy-policy"]["Image125"]);
const Image125IoProps = useIoStore((state)=>state["privacy-policy"]["Image125"]);
const Image125Cb = useImage125Cb()
const TextBox339Props = useStore((state)=>state["privacy-policy"]["TextBox339"]);
const TextBox339IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox339"]);
const TextBox339Cb = useTextBox339Cb()
const TextBox340Props = useStore((state)=>state["privacy-policy"]["TextBox340"]);
const TextBox340IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox340"]);
const TextBox340Cb = useTextBox340Cb()
const TextBox341Props = useStore((state)=>state["privacy-policy"]["TextBox341"]);
const TextBox341IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox341"]);
const TextBox341Cb = useTextBox341Cb()
const TextBox342Props = useStore((state)=>state["privacy-policy"]["TextBox342"]);
const TextBox342IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox342"]);
const TextBox342Cb = useTextBox342Cb()
const TextBox343Props = useStore((state)=>state["privacy-policy"]["TextBox343"]);
const TextBox343IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox343"]);
const TextBox343Cb = useTextBox343Cb()
const TextBox344Props = useStore((state)=>state["privacy-policy"]["TextBox344"]);
const TextBox344IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox344"]);
const TextBox344Cb = useTextBox344Cb()
const TextBox345Props = useStore((state)=>state["privacy-policy"]["TextBox345"]);
const TextBox345IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox345"]);
const TextBox345Cb = useTextBox345Cb()
const TextBox346Props = useStore((state)=>state["privacy-policy"]["TextBox346"]);
const TextBox346IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox346"]);
const TextBox346Cb = useTextBox346Cb()
const TextBox347Props = useStore((state)=>state["privacy-policy"]["TextBox347"]);
const TextBox347IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox347"]);
const TextBox347Cb = useTextBox347Cb()
const TextBox348Props = useStore((state)=>state["privacy-policy"]["TextBox348"]);
const TextBox348IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox348"]);
const TextBox348Cb = useTextBox348Cb()
const TextBox349Props = useStore((state)=>state["privacy-policy"]["TextBox349"]);
const TextBox349IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox349"]);
const TextBox349Cb = useTextBox349Cb()
const TextBox350Props = useStore((state)=>state["privacy-policy"]["TextBox350"]);
const TextBox350IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox350"]);
const TextBox350Cb = useTextBox350Cb()
const Image130Props = useStore((state)=>state["privacy-policy"]["Image130"]);
const Image130IoProps = useIoStore((state)=>state["privacy-policy"]["Image130"]);
const Image130Cb = useImage130Cb()
const TextBox351Props = useStore((state)=>state["privacy-policy"]["TextBox351"]);
const TextBox351IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox351"]);
const TextBox351Cb = useTextBox351Cb()
const TextBox352Props = useStore((state)=>state["privacy-policy"]["TextBox352"]);
const TextBox352IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox352"]);
const TextBox352Cb = useTextBox352Cb()
const TextBox353Props = useStore((state)=>state["privacy-policy"]["TextBox353"]);
const TextBox353IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox353"]);
const TextBox353Cb = useTextBox353Cb()
const TextBox354Props = useStore((state)=>state["privacy-policy"]["TextBox354"]);
const TextBox354IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox354"]);
const TextBox354Cb = useTextBox354Cb()
const TextBox355Props = useStore((state)=>state["privacy-policy"]["TextBox355"]);
const TextBox355IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox355"]);
const TextBox355Cb = useTextBox355Cb()
const TextBox356Props = useStore((state)=>state["privacy-policy"]["TextBox356"]);
const TextBox356IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox356"]);
const TextBox356Cb = useTextBox356Cb()
const TextBox357Props = useStore((state)=>state["privacy-policy"]["TextBox357"]);
const TextBox357IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox357"]);
const TextBox357Cb = useTextBox357Cb()
const TextBox358Props = useStore((state)=>state["privacy-policy"]["TextBox358"]);
const TextBox358IoProps = useIoStore((state)=>state["privacy-policy"]["TextBox358"]);
const TextBox358Cb = useTextBox358Cb()
const Image129Props = useStore((state)=>state["privacy-policy"]["Image129"]);
const Image129IoProps = useIoStore((state)=>state["privacy-policy"]["Image129"]);
const Image129Cb = useImage129Cb()
const Image126Props = useStore((state)=>state["privacy-policy"]["Image126"]);
const Image126IoProps = useIoStore((state)=>state["privacy-policy"]["Image126"]);
const Image126Cb = useImage126Cb()
const Image127Props = useStore((state)=>state["privacy-policy"]["Image127"]);
const Image127IoProps = useIoStore((state)=>state["privacy-policy"]["Image127"]);
const Image127Cb = useImage127Cb()
const Image128Props = useStore((state)=>state["privacy-policy"]["Image128"]);
const Image128IoProps = useIoStore((state)=>state["privacy-policy"]["Image128"]);
const Image128Cb = useImage128Cb()

  return (<>
  <Flex6 className="p-privacy-policy Privacy_Body" {...Privacy_BodyProps} {...Privacy_BodyCb} {...Privacy_BodyIoProps}>
<Flex6 className="p-privacy-policy Flex167" {...Flex167Props} {...Flex167Cb} {...Flex167IoProps}>
<Div6 className="p-privacy-policy Div145" {...Div145Props} {...Div145Cb} {...Div145IoProps}>
<Image6 className="p-privacy-policy Image125" {...Image125Props} {...Image125Cb} {...Image125IoProps}/>
</Div6>
<Flex6 className="p-privacy-policy Flex166" {...Flex166Props} {...Flex166Cb} {...Flex166IoProps}>
<TextBox6 className="p-privacy-policy TextBox302" {...TextBox302Props} {...TextBox302Cb} {...TextBox302IoProps}/>
<TextBox6 className="p-privacy-policy TextBox301" {...TextBox301Props} {...TextBox301Cb} {...TextBox301IoProps}/>
<TextBox6 className="p-privacy-policy TextBox300" {...TextBox300Props} {...TextBox300Cb} {...TextBox300IoProps}/>
</Flex6>
<Flex6 className="p-privacy-policy Flex165" {...Flex165Props} {...Flex165Cb} {...Flex165IoProps}>
<TextBox6 className="p-privacy-policy TextBox299" {...TextBox299Props} {...TextBox299Cb} {...TextBox299IoProps}/>
<Button6 className="p-privacy-policy Button13" {...Button13Props} {...Button13Cb} {...Button13IoProps}/>
</Flex6>
</Flex6>
<Div6 className="p-privacy-policy Div149" {...Div149Props} {...Div149Cb} {...Div149IoProps}>
<TextBox6 className="p-privacy-policy TextBox350" {...TextBox350Props} {...TextBox350Cb} {...TextBox350IoProps}/>
<TextBox6 className="p-privacy-policy TextBox349" {...TextBox349Props} {...TextBox349Cb} {...TextBox349IoProps}/>
<TextBox6 className="p-privacy-policy TextBox348" {...TextBox348Props} {...TextBox348Cb} {...TextBox348IoProps}/>
<TextBox6 className="p-privacy-policy TextBox347" {...TextBox347Props} {...TextBox347Cb} {...TextBox347IoProps}/>
<TextBox6 className="p-privacy-policy TextBox341" {...TextBox341Props} {...TextBox341Cb} {...TextBox341IoProps}/>
<TextBox6 className="p-privacy-policy TextBox346" {...TextBox346Props} {...TextBox346Cb} {...TextBox346IoProps}/>
<TextBox6 className="p-privacy-policy TextBox344" {...TextBox344Props} {...TextBox344Cb} {...TextBox344IoProps}/>
<TextBox6 className="p-privacy-policy TextBox342" {...TextBox342Props} {...TextBox342Cb} {...TextBox342IoProps}/>
<TextBox6 className="p-privacy-policy TextBox340" {...TextBox340Props} {...TextBox340Cb} {...TextBox340IoProps}/>
<TextBox6 className="p-privacy-policy TextBox343" {...TextBox343Props} {...TextBox343Cb} {...TextBox343IoProps}/>
<TextBox6 className="p-privacy-policy TextBox345" {...TextBox345Props} {...TextBox345Cb} {...TextBox345IoProps}/>
<TextBox6 className="p-privacy-policy TextBox339" {...TextBox339Props} {...TextBox339Cb} {...TextBox339IoProps}/>
</Div6>
<Flex6 className="p-privacy-policy Flex173" {...Flex173Props} {...Flex173Cb} {...Flex173IoProps}>
<Flex6 className="p-privacy-policy Flex172" {...Flex172Props} {...Flex172Cb} {...Flex172IoProps}>
<Flex6 className="p-privacy-policy Flex171" {...Flex171Props} {...Flex171Cb} {...Flex171IoProps}>
<Image6 className="p-privacy-policy Image129" {...Image129Props} {...Image129Cb} {...Image129IoProps}/>
<Flex6 className="p-privacy-policy Flex168" {...Flex168Props} {...Flex168Cb} {...Flex168IoProps}>
<Image6 className="p-privacy-policy Image128" {...Image128Props} {...Image128Cb} {...Image128IoProps}/>
<Image6 className="p-privacy-policy Image127" {...Image127Props} {...Image127Cb} {...Image127IoProps}/>
<Image6 className="p-privacy-policy Image126" {...Image126Props} {...Image126Cb} {...Image126IoProps}/>
</Flex6>
</Flex6>
<Flex6 className="p-privacy-policy Flex170" {...Flex170Props} {...Flex170Cb} {...Flex170IoProps}>
<TextBox6 className="p-privacy-policy TextBox358" {...TextBox358Props} {...TextBox358Cb} {...TextBox358IoProps}/>
<TextBox6 className="p-privacy-policy TextBox357" {...TextBox357Props} {...TextBox357Cb} {...TextBox357IoProps}/>
<TextBox6 className="p-privacy-policy TextBox356" {...TextBox356Props} {...TextBox356Cb} {...TextBox356IoProps}/>
<TextBox6 className="p-privacy-policy TextBox355" {...TextBox355Props} {...TextBox355Cb} {...TextBox355IoProps}/>
</Flex6>
<Flex6 className="p-privacy-policy Flex169" {...Flex169Props} {...Flex169Cb} {...Flex169IoProps}>
<TextBox6 className="p-privacy-policy TextBox354" {...TextBox354Props} {...TextBox354Cb} {...TextBox354IoProps}/>
<TextBox6 className="p-privacy-policy TextBox353" {...TextBox353Props} {...TextBox353Cb} {...TextBox353IoProps}/>
<TextBox6 className="p-privacy-policy TextBox352" {...TextBox352Props} {...TextBox352Cb} {...TextBox352IoProps}/>
<TextBox6 className="p-privacy-policy TextBox351" {...TextBox351Props} {...TextBox351Cb} {...TextBox351IoProps}/>
</Flex6>
</Flex6>
<Div6 className="p-privacy-policy Div150" {...Div150Props} {...Div150Cb} {...Div150IoProps}>
<Image6 className="p-privacy-policy Image130" {...Image130Props} {...Image130Cb} {...Image130IoProps}/>
</Div6>
</Flex6>
</Flex6>
  </>);
}
