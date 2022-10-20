import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div2 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { usePlaces_BodyCb, useFlex275Cb, useFlex273Cb, useFlex274Cb, useDiv173Cb, useFlex277Cb, useFlex276Cb, useDiv174Cb, useDiv175Cb, useDiv176Cb, useDiv177Cb, useFlex283Cb, useDiv178Cb, useFlex282Cb, useFlex279Cb, useFlex280Cb, useFlex281Cb, useFlex278Cb, useButton24Cb, useTextBox450Cb, useTextBox451Cb, useTextBox452Cb, useTextBox453Cb, useImage167Cb, useTextBox458Cb, useTextBox459Cb, useTextBox454Cb, useImage168Cb, useTextBox455Cb, useImage169Cb, useTextBox456Cb, useImage170Cb, useTextBox457Cb, useImage171Cb, useImage176Cb, useTextBox460Cb, useTextBox461Cb, useTextBox462Cb, useTextBox463Cb, useTextBox464Cb, useTextBox465Cb, useTextBox466Cb, useTextBox467Cb, useImage175Cb, useImage172Cb, useImage173Cb, useImage174Cb } from "../page-cbs/places";
import "../page-css/places.css"

export default function Places() {
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

  const Places_BodyProps = useStore((state)=>state["places"]["Places_Body"]);
const Places_BodyIoProps = useIoStore((state)=>state["places"]["Places_Body"]);
const Places_BodyCb = usePlaces_BodyCb()
const Flex275Props = useStore((state)=>state["places"]["Flex275"]);
const Flex275IoProps = useIoStore((state)=>state["places"]["Flex275"]);
const Flex275Cb = useFlex275Cb()
const Flex273Props = useStore((state)=>state["places"]["Flex273"]);
const Flex273IoProps = useIoStore((state)=>state["places"]["Flex273"]);
const Flex273Cb = useFlex273Cb()
const Flex274Props = useStore((state)=>state["places"]["Flex274"]);
const Flex274IoProps = useIoStore((state)=>state["places"]["Flex274"]);
const Flex274Cb = useFlex274Cb()
const Div173Props = useStore((state)=>state["places"]["Div173"]);
const Div173IoProps = useIoStore((state)=>state["places"]["Div173"]);
const Div173Cb = useDiv173Cb()
const Flex277Props = useStore((state)=>state["places"]["Flex277"]);
const Flex277IoProps = useIoStore((state)=>state["places"]["Flex277"]);
const Flex277Cb = useFlex277Cb()
const Flex276Props = useStore((state)=>state["places"]["Flex276"]);
const Flex276IoProps = useIoStore((state)=>state["places"]["Flex276"]);
const Flex276Cb = useFlex276Cb()
const Div174Props = useStore((state)=>state["places"]["Div174"]);
const Div174IoProps = useIoStore((state)=>state["places"]["Div174"]);
const Div174Cb = useDiv174Cb()
const Div175Props = useStore((state)=>state["places"]["Div175"]);
const Div175IoProps = useIoStore((state)=>state["places"]["Div175"]);
const Div175Cb = useDiv175Cb()
const Div176Props = useStore((state)=>state["places"]["Div176"]);
const Div176IoProps = useIoStore((state)=>state["places"]["Div176"]);
const Div176Cb = useDiv176Cb()
const Div177Props = useStore((state)=>state["places"]["Div177"]);
const Div177IoProps = useIoStore((state)=>state["places"]["Div177"]);
const Div177Cb = useDiv177Cb()
const Flex283Props = useStore((state)=>state["places"]["Flex283"]);
const Flex283IoProps = useIoStore((state)=>state["places"]["Flex283"]);
const Flex283Cb = useFlex283Cb()
const Div178Props = useStore((state)=>state["places"]["Div178"]);
const Div178IoProps = useIoStore((state)=>state["places"]["Div178"]);
const Div178Cb = useDiv178Cb()
const Flex282Props = useStore((state)=>state["places"]["Flex282"]);
const Flex282IoProps = useIoStore((state)=>state["places"]["Flex282"]);
const Flex282Cb = useFlex282Cb()
const Flex279Props = useStore((state)=>state["places"]["Flex279"]);
const Flex279IoProps = useIoStore((state)=>state["places"]["Flex279"]);
const Flex279Cb = useFlex279Cb()
const Flex280Props = useStore((state)=>state["places"]["Flex280"]);
const Flex280IoProps = useIoStore((state)=>state["places"]["Flex280"]);
const Flex280Cb = useFlex280Cb()
const Flex281Props = useStore((state)=>state["places"]["Flex281"]);
const Flex281IoProps = useIoStore((state)=>state["places"]["Flex281"]);
const Flex281Cb = useFlex281Cb()
const Flex278Props = useStore((state)=>state["places"]["Flex278"]);
const Flex278IoProps = useIoStore((state)=>state["places"]["Flex278"]);
const Flex278Cb = useFlex278Cb()
const Button24Props = useStore((state)=>state["places"]["Button24"]);
const Button24IoProps = useIoStore((state)=>state["places"]["Button24"]);
const Button24Cb = useButton24Cb()
const TextBox450Props = useStore((state)=>state["places"]["TextBox450"]);
const TextBox450IoProps = useIoStore((state)=>state["places"]["TextBox450"]);
const TextBox450Cb = useTextBox450Cb()
const TextBox451Props = useStore((state)=>state["places"]["TextBox451"]);
const TextBox451IoProps = useIoStore((state)=>state["places"]["TextBox451"]);
const TextBox451Cb = useTextBox451Cb()
const TextBox452Props = useStore((state)=>state["places"]["TextBox452"]);
const TextBox452IoProps = useIoStore((state)=>state["places"]["TextBox452"]);
const TextBox452Cb = useTextBox452Cb()
const TextBox453Props = useStore((state)=>state["places"]["TextBox453"]);
const TextBox453IoProps = useIoStore((state)=>state["places"]["TextBox453"]);
const TextBox453Cb = useTextBox453Cb()
const Image167Props = useStore((state)=>state["places"]["Image167"]);
const Image167IoProps = useIoStore((state)=>state["places"]["Image167"]);
const Image167Cb = useImage167Cb()
const TextBox458Props = useStore((state)=>state["places"]["TextBox458"]);
const TextBox458IoProps = useIoStore((state)=>state["places"]["TextBox458"]);
const TextBox458Cb = useTextBox458Cb()
const TextBox459Props = useStore((state)=>state["places"]["TextBox459"]);
const TextBox459IoProps = useIoStore((state)=>state["places"]["TextBox459"]);
const TextBox459Cb = useTextBox459Cb()
const TextBox454Props = useStore((state)=>state["places"]["TextBox454"]);
const TextBox454IoProps = useIoStore((state)=>state["places"]["TextBox454"]);
const TextBox454Cb = useTextBox454Cb()
const Image168Props = useStore((state)=>state["places"]["Image168"]);
const Image168IoProps = useIoStore((state)=>state["places"]["Image168"]);
const Image168Cb = useImage168Cb()
const TextBox455Props = useStore((state)=>state["places"]["TextBox455"]);
const TextBox455IoProps = useIoStore((state)=>state["places"]["TextBox455"]);
const TextBox455Cb = useTextBox455Cb()
const Image169Props = useStore((state)=>state["places"]["Image169"]);
const Image169IoProps = useIoStore((state)=>state["places"]["Image169"]);
const Image169Cb = useImage169Cb()
const TextBox456Props = useStore((state)=>state["places"]["TextBox456"]);
const TextBox456IoProps = useIoStore((state)=>state["places"]["TextBox456"]);
const TextBox456Cb = useTextBox456Cb()
const Image170Props = useStore((state)=>state["places"]["Image170"]);
const Image170IoProps = useIoStore((state)=>state["places"]["Image170"]);
const Image170Cb = useImage170Cb()
const TextBox457Props = useStore((state)=>state["places"]["TextBox457"]);
const TextBox457IoProps = useIoStore((state)=>state["places"]["TextBox457"]);
const TextBox457Cb = useTextBox457Cb()
const Image171Props = useStore((state)=>state["places"]["Image171"]);
const Image171IoProps = useIoStore((state)=>state["places"]["Image171"]);
const Image171Cb = useImage171Cb()
const Image176Props = useStore((state)=>state["places"]["Image176"]);
const Image176IoProps = useIoStore((state)=>state["places"]["Image176"]);
const Image176Cb = useImage176Cb()
const TextBox460Props = useStore((state)=>state["places"]["TextBox460"]);
const TextBox460IoProps = useIoStore((state)=>state["places"]["TextBox460"]);
const TextBox460Cb = useTextBox460Cb()
const TextBox461Props = useStore((state)=>state["places"]["TextBox461"]);
const TextBox461IoProps = useIoStore((state)=>state["places"]["TextBox461"]);
const TextBox461Cb = useTextBox461Cb()
const TextBox462Props = useStore((state)=>state["places"]["TextBox462"]);
const TextBox462IoProps = useIoStore((state)=>state["places"]["TextBox462"]);
const TextBox462Cb = useTextBox462Cb()
const TextBox463Props = useStore((state)=>state["places"]["TextBox463"]);
const TextBox463IoProps = useIoStore((state)=>state["places"]["TextBox463"]);
const TextBox463Cb = useTextBox463Cb()
const TextBox464Props = useStore((state)=>state["places"]["TextBox464"]);
const TextBox464IoProps = useIoStore((state)=>state["places"]["TextBox464"]);
const TextBox464Cb = useTextBox464Cb()
const TextBox465Props = useStore((state)=>state["places"]["TextBox465"]);
const TextBox465IoProps = useIoStore((state)=>state["places"]["TextBox465"]);
const TextBox465Cb = useTextBox465Cb()
const TextBox466Props = useStore((state)=>state["places"]["TextBox466"]);
const TextBox466IoProps = useIoStore((state)=>state["places"]["TextBox466"]);
const TextBox466Cb = useTextBox466Cb()
const TextBox467Props = useStore((state)=>state["places"]["TextBox467"]);
const TextBox467IoProps = useIoStore((state)=>state["places"]["TextBox467"]);
const TextBox467Cb = useTextBox467Cb()
const Image175Props = useStore((state)=>state["places"]["Image175"]);
const Image175IoProps = useIoStore((state)=>state["places"]["Image175"]);
const Image175Cb = useImage175Cb()
const Image172Props = useStore((state)=>state["places"]["Image172"]);
const Image172IoProps = useIoStore((state)=>state["places"]["Image172"]);
const Image172Cb = useImage172Cb()
const Image173Props = useStore((state)=>state["places"]["Image173"]);
const Image173IoProps = useIoStore((state)=>state["places"]["Image173"]);
const Image173Cb = useImage173Cb()
const Image174Props = useStore((state)=>state["places"]["Image174"]);
const Image174IoProps = useIoStore((state)=>state["places"]["Image174"]);
const Image174Cb = useImage174Cb()

  return (<>
  <Flex2 className="p-places Places_Body" {...Places_BodyProps} {...Places_BodyCb} {...Places_BodyIoProps}>
<Flex2 className="p-places Flex275" {...Flex275Props} {...Flex275Cb} {...Flex275IoProps}>
<Div2 className="p-places Div173" {...Div173Props} {...Div173Cb} {...Div173IoProps}>
<Image2 className="p-places Image167" {...Image167Props} {...Image167Cb} {...Image167IoProps}/>
</Div2>
<Flex2 className="p-places Flex274" {...Flex274Props} {...Flex274Cb} {...Flex274IoProps}>
<TextBox2 className="p-places TextBox453" {...TextBox453Props} {...TextBox453Cb} {...TextBox453IoProps}/>
<TextBox2 className="p-places TextBox452" {...TextBox452Props} {...TextBox452Cb} {...TextBox452IoProps}/>
<TextBox2 className="p-places TextBox451" {...TextBox451Props} {...TextBox451Cb} {...TextBox451IoProps}/>
</Flex2>
<Flex2 className="p-places Flex273" {...Flex273Props} {...Flex273Cb} {...Flex273IoProps}>
<TextBox2 className="p-places TextBox450" {...TextBox450Props} {...TextBox450Cb} {...TextBox450IoProps}/>
<Button2 className="p-places Button24" {...Button24Props} {...Button24Cb} {...Button24IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-places Flex277" {...Flex277Props} {...Flex277Cb} {...Flex277IoProps}>
<TextBox2 className="p-places TextBox459" {...TextBox459Props} {...TextBox459Cb} {...TextBox459IoProps}/>
<TextBox2 className="p-places TextBox458" {...TextBox458Props} {...TextBox458Cb} {...TextBox458IoProps}/>
<Flex2 className="p-places Flex276" {...Flex276Props} {...Flex276Cb} {...Flex276IoProps}>
<Div2 className="p-places Div177" {...Div177Props} {...Div177Cb} {...Div177IoProps}>
<Image2 className="p-places Image171" {...Image171Props} {...Image171Cb} {...Image171IoProps}/>
<TextBox2 className="p-places TextBox457" {...TextBox457Props} {...TextBox457Cb} {...TextBox457IoProps}/>
</Div2>
<Div2 className="p-places Div174" {...Div174Props} {...Div174Cb} {...Div174IoProps}>
<Image2 className="p-places Image168" {...Image168Props} {...Image168Cb} {...Image168IoProps}/>
<TextBox2 className="p-places TextBox454" {...TextBox454Props} {...TextBox454Cb} {...TextBox454IoProps}/>
</Div2>
<Div2 className="p-places Div175" {...Div175Props} {...Div175Cb} {...Div175IoProps}>
<Image2 className="p-places Image169" {...Image169Props} {...Image169Cb} {...Image169IoProps}/>
<TextBox2 className="p-places TextBox455" {...TextBox455Props} {...TextBox455Cb} {...TextBox455IoProps}/>
</Div2>
<Div2 className="p-places Div176" {...Div176Props} {...Div176Cb} {...Div176IoProps}>
<Image2 className="p-places Image170" {...Image170Props} {...Image170Cb} {...Image170IoProps}/>
<TextBox2 className="p-places TextBox456" {...TextBox456Props} {...TextBox456Cb} {...TextBox456IoProps}/>
</Div2>
</Flex2>
</Flex2>
<Flex2 className="p-places Flex283" {...Flex283Props} {...Flex283Cb} {...Flex283IoProps}>
<Flex2 className="p-places Flex282" {...Flex282Props} {...Flex282Cb} {...Flex282IoProps}>
<Flex2 className="p-places Flex281" {...Flex281Props} {...Flex281Cb} {...Flex281IoProps}>
<Image2 className="p-places Image175" {...Image175Props} {...Image175Cb} {...Image175IoProps}/>
<Flex2 className="p-places Flex278" {...Flex278Props} {...Flex278Cb} {...Flex278IoProps}>
<Image2 className="p-places Image174" {...Image174Props} {...Image174Cb} {...Image174IoProps}/>
<Image2 className="p-places Image173" {...Image173Props} {...Image173Cb} {...Image173IoProps}/>
<Image2 className="p-places Image172" {...Image172Props} {...Image172Cb} {...Image172IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-places Flex280" {...Flex280Props} {...Flex280Cb} {...Flex280IoProps}>
<TextBox2 className="p-places TextBox467" {...TextBox467Props} {...TextBox467Cb} {...TextBox467IoProps}/>
<TextBox2 className="p-places TextBox466" {...TextBox466Props} {...TextBox466Cb} {...TextBox466IoProps}/>
<TextBox2 className="p-places TextBox465" {...TextBox465Props} {...TextBox465Cb} {...TextBox465IoProps}/>
<TextBox2 className="p-places TextBox464" {...TextBox464Props} {...TextBox464Cb} {...TextBox464IoProps}/>
</Flex2>
<Flex2 className="p-places Flex279" {...Flex279Props} {...Flex279Cb} {...Flex279IoProps}>
<TextBox2 className="p-places TextBox463" {...TextBox463Props} {...TextBox463Cb} {...TextBox463IoProps}/>
<TextBox2 className="p-places TextBox462" {...TextBox462Props} {...TextBox462Cb} {...TextBox462IoProps}/>
<TextBox2 className="p-places TextBox461" {...TextBox461Props} {...TextBox461Cb} {...TextBox461IoProps}/>
<TextBox2 className="p-places TextBox460" {...TextBox460Props} {...TextBox460Cb} {...TextBox460IoProps}/>
</Flex2>
</Flex2>
<Div2 className="p-places Div178" {...Div178Props} {...Div178Cb} {...Div178IoProps}>
<Image2 className="p-places Image176" {...Image176Props} {...Image176Cb} {...Image176IoProps}/>
</Div2>
</Flex2>
</Flex2>
  </>);
}
