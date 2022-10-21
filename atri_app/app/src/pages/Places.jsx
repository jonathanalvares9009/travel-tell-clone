import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { usePlaces_BodyCb, useFlex277Cb, useFlex276Cb, useDiv174Cb, useDiv175Cb, useDiv176Cb, useDiv177Cb, useFlex443Cb, useFlex449Cb, useFlex446Cb, useFlex444Cb, useFlex445Cb, useFlex447Cb, useFlex448Cb, useTextBox458Cb, useTextBox459Cb, useTextBox454Cb, useImage168Cb, useTextBox455Cb, useImage169Cb, useTextBox456Cb, useImage170Cb, useTextBox457Cb, useImage171Cb, useButton43Cb, useTextBox776Cb, useTextBox777Cb, useTextBox778Cb, useTextBox779Cb, useImage314Cb, useImage319Cb, useImage315Cb, useImage316Cb, useImage317Cb, useImage318Cb, useTextBox780Cb, useTextBox781Cb, useTextBox782Cb, useTextBox783Cb, useTextBox784Cb, useTextBox785Cb, useTextBox786Cb, useTextBox787Cb } from "../page-cbs/places";
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
const Flex443Props = useStore((state)=>state["places"]["Flex443"]);
const Flex443IoProps = useIoStore((state)=>state["places"]["Flex443"]);
const Flex443Cb = useFlex443Cb()
const Flex449Props = useStore((state)=>state["places"]["Flex449"]);
const Flex449IoProps = useIoStore((state)=>state["places"]["Flex449"]);
const Flex449Cb = useFlex449Cb()
const Flex446Props = useStore((state)=>state["places"]["Flex446"]);
const Flex446IoProps = useIoStore((state)=>state["places"]["Flex446"]);
const Flex446Cb = useFlex446Cb()
const Flex444Props = useStore((state)=>state["places"]["Flex444"]);
const Flex444IoProps = useIoStore((state)=>state["places"]["Flex444"]);
const Flex444Cb = useFlex444Cb()
const Flex445Props = useStore((state)=>state["places"]["Flex445"]);
const Flex445IoProps = useIoStore((state)=>state["places"]["Flex445"]);
const Flex445Cb = useFlex445Cb()
const Flex447Props = useStore((state)=>state["places"]["Flex447"]);
const Flex447IoProps = useIoStore((state)=>state["places"]["Flex447"]);
const Flex447Cb = useFlex447Cb()
const Flex448Props = useStore((state)=>state["places"]["Flex448"]);
const Flex448IoProps = useIoStore((state)=>state["places"]["Flex448"]);
const Flex448Cb = useFlex448Cb()
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
const Button43Props = useStore((state)=>state["places"]["Button43"]);
const Button43IoProps = useIoStore((state)=>state["places"]["Button43"]);
const Button43Cb = useButton43Cb()
const TextBox776Props = useStore((state)=>state["places"]["TextBox776"]);
const TextBox776IoProps = useIoStore((state)=>state["places"]["TextBox776"]);
const TextBox776Cb = useTextBox776Cb()
const TextBox777Props = useStore((state)=>state["places"]["TextBox777"]);
const TextBox777IoProps = useIoStore((state)=>state["places"]["TextBox777"]);
const TextBox777Cb = useTextBox777Cb()
const TextBox778Props = useStore((state)=>state["places"]["TextBox778"]);
const TextBox778IoProps = useIoStore((state)=>state["places"]["TextBox778"]);
const TextBox778Cb = useTextBox778Cb()
const TextBox779Props = useStore((state)=>state["places"]["TextBox779"]);
const TextBox779IoProps = useIoStore((state)=>state["places"]["TextBox779"]);
const TextBox779Cb = useTextBox779Cb()
const Image314Props = useStore((state)=>state["places"]["Image314"]);
const Image314IoProps = useIoStore((state)=>state["places"]["Image314"]);
const Image314Cb = useImage314Cb()
const Image319Props = useStore((state)=>state["places"]["Image319"]);
const Image319IoProps = useIoStore((state)=>state["places"]["Image319"]);
const Image319Cb = useImage319Cb()
const Image315Props = useStore((state)=>state["places"]["Image315"]);
const Image315IoProps = useIoStore((state)=>state["places"]["Image315"]);
const Image315Cb = useImage315Cb()
const Image316Props = useStore((state)=>state["places"]["Image316"]);
const Image316IoProps = useIoStore((state)=>state["places"]["Image316"]);
const Image316Cb = useImage316Cb()
const Image317Props = useStore((state)=>state["places"]["Image317"]);
const Image317IoProps = useIoStore((state)=>state["places"]["Image317"]);
const Image317Cb = useImage317Cb()
const Image318Props = useStore((state)=>state["places"]["Image318"]);
const Image318IoProps = useIoStore((state)=>state["places"]["Image318"]);
const Image318Cb = useImage318Cb()
const TextBox780Props = useStore((state)=>state["places"]["TextBox780"]);
const TextBox780IoProps = useIoStore((state)=>state["places"]["TextBox780"]);
const TextBox780Cb = useTextBox780Cb()
const TextBox781Props = useStore((state)=>state["places"]["TextBox781"]);
const TextBox781IoProps = useIoStore((state)=>state["places"]["TextBox781"]);
const TextBox781Cb = useTextBox781Cb()
const TextBox782Props = useStore((state)=>state["places"]["TextBox782"]);
const TextBox782IoProps = useIoStore((state)=>state["places"]["TextBox782"]);
const TextBox782Cb = useTextBox782Cb()
const TextBox783Props = useStore((state)=>state["places"]["TextBox783"]);
const TextBox783IoProps = useIoStore((state)=>state["places"]["TextBox783"]);
const TextBox783Cb = useTextBox783Cb()
const TextBox784Props = useStore((state)=>state["places"]["TextBox784"]);
const TextBox784IoProps = useIoStore((state)=>state["places"]["TextBox784"]);
const TextBox784Cb = useTextBox784Cb()
const TextBox785Props = useStore((state)=>state["places"]["TextBox785"]);
const TextBox785IoProps = useIoStore((state)=>state["places"]["TextBox785"]);
const TextBox785Cb = useTextBox785Cb()
const TextBox786Props = useStore((state)=>state["places"]["TextBox786"]);
const TextBox786IoProps = useIoStore((state)=>state["places"]["TextBox786"]);
const TextBox786Cb = useTextBox786Cb()
const TextBox787Props = useStore((state)=>state["places"]["TextBox787"]);
const TextBox787IoProps = useIoStore((state)=>state["places"]["TextBox787"]);
const TextBox787Cb = useTextBox787Cb()

  return (<>
  <Flex2 className="p-places Places_Body" {...Places_BodyProps} {...Places_BodyCb} {...Places_BodyIoProps}>
<Flex2 className="p-places Flex443" {...Flex443Props} {...Flex443Cb} {...Flex443IoProps}>
<Image2 className="p-places Image314" {...Image314Props} {...Image314Cb} {...Image314IoProps}/>
<TextBox2 className="p-places TextBox779" {...TextBox779Props} {...TextBox779Cb} {...TextBox779IoProps}/>
<TextBox2 className="p-places TextBox778" {...TextBox778Props} {...TextBox778Cb} {...TextBox778IoProps}/>
<TextBox2 className="p-places TextBox777" {...TextBox777Props} {...TextBox777Cb} {...TextBox777IoProps}/>
<TextBox2 className="p-places TextBox776" {...TextBox776Props} {...TextBox776Cb} {...TextBox776IoProps}/>
<Button2 className="p-places Button43" {...Button43Props} {...Button43Cb} {...Button43IoProps}/>
</Flex2>
<Flex2 className="p-places Flex277" {...Flex277Props} {...Flex277Cb} {...Flex277IoProps}>
<TextBox2 className="p-places TextBox459" {...TextBox459Props} {...TextBox459Cb} {...TextBox459IoProps}/>
<TextBox2 className="p-places TextBox458" {...TextBox458Props} {...TextBox458Cb} {...TextBox458IoProps}/>
<Flex2 className="p-places Flex276" {...Flex276Props} {...Flex276Cb} {...Flex276IoProps}>
<Div1 className="p-places Div177" {...Div177Props} {...Div177Cb} {...Div177IoProps}>
<Image2 className="p-places Image171" {...Image171Props} {...Image171Cb} {...Image171IoProps}/>
<TextBox2 className="p-places TextBox457" {...TextBox457Props} {...TextBox457Cb} {...TextBox457IoProps}/>
</Div1>
<Div1 className="p-places Div174" {...Div174Props} {...Div174Cb} {...Div174IoProps}>
<Image2 className="p-places Image168" {...Image168Props} {...Image168Cb} {...Image168IoProps}/>
<TextBox2 className="p-places TextBox454" {...TextBox454Props} {...TextBox454Cb} {...TextBox454IoProps}/>
</Div1>
<Div1 className="p-places Div175" {...Div175Props} {...Div175Cb} {...Div175IoProps}>
<Image2 className="p-places Image169" {...Image169Props} {...Image169Cb} {...Image169IoProps}/>
<TextBox2 className="p-places TextBox455" {...TextBox455Props} {...TextBox455Cb} {...TextBox455IoProps}/>
</Div1>
<Div1 className="p-places Div176" {...Div176Props} {...Div176Cb} {...Div176IoProps}>
<Image2 className="p-places Image170" {...Image170Props} {...Image170Cb} {...Image170IoProps}/>
<TextBox2 className="p-places TextBox456" {...TextBox456Props} {...TextBox456Cb} {...TextBox456IoProps}/>
</Div1>
</Flex2>
</Flex2>
<Flex2 className="p-places Flex449" {...Flex449Props} {...Flex449Cb} {...Flex449IoProps}>
<Flex2 className="p-places Flex446" {...Flex446Props} {...Flex446Cb} {...Flex446IoProps}>
<Flex2 className="p-places Flex445" {...Flex445Props} {...Flex445Cb} {...Flex445IoProps}>
<Image2 className="p-places Image318" {...Image318Props} {...Image318Cb} {...Image318IoProps}/>
</Flex2>
<Flex2 className="p-places Flex444" {...Flex444Props} {...Flex444Cb} {...Flex444IoProps}>
<Image2 className="p-places Image315" {...Image315Props} {...Image315Cb} {...Image315IoProps}/>
<Image2 className="p-places Image316" {...Image316Props} {...Image316Cb} {...Image316IoProps}/>
<Image2 className="p-places Image317" {...Image317Props} {...Image317Cb} {...Image317IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-places Flex447" {...Flex447Props} {...Flex447Cb} {...Flex447IoProps}>
<TextBox2 className="p-places TextBox781" {...TextBox781Props} {...TextBox781Cb} {...TextBox781IoProps}/>
<TextBox2 className="p-places TextBox782" {...TextBox782Props} {...TextBox782Cb} {...TextBox782IoProps}/>
<TextBox2 className="p-places TextBox783" {...TextBox783Props} {...TextBox783Cb} {...TextBox783IoProps}/>
<TextBox2 className="p-places TextBox780" {...TextBox780Props} {...TextBox780Cb} {...TextBox780IoProps}/>
</Flex2>
<Flex2 className="p-places Flex448" {...Flex448Props} {...Flex448Cb} {...Flex448IoProps}>
<TextBox2 className="p-places TextBox785" {...TextBox785Props} {...TextBox785Cb} {...TextBox785IoProps}/>
<TextBox2 className="p-places TextBox786" {...TextBox786Props} {...TextBox786Cb} {...TextBox786IoProps}/>
<TextBox2 className="p-places TextBox787" {...TextBox787Props} {...TextBox787Cb} {...TextBox787IoProps}/>
<TextBox2 className="p-places TextBox784" {...TextBox784Props} {...TextBox784Cb} {...TextBox784IoProps}/>
</Flex2>
<Image2 className="p-places Image319" {...Image319Props} {...Image319Cb} {...Image319IoProps}/>
</Flex2>
</Flex2>
  </>);
}
