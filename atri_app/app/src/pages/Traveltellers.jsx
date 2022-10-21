import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex4 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div3 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image as Image4 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox4 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Input as Input1 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Button as Button4 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useTravel_Teller_BodyCb, useFlex263Cb, useFlex262Cb, useFlex259Cb, useFlex260Cb, useFlex261Cb, useDiv162Cb, useFlex451Cb, useFlex457Cb, useFlex454Cb, useFlex452Cb, useFlex453Cb, useFlex455Cb, useFlex456Cb, useImage151Cb, useTextBox421Cb, useTextBox422Cb, useImage152Cb, useTextBox423Cb, useTextBox424Cb, useTextBox425Cb, useTextBox426Cb, useImage153Cb, useInput38Cb, useTextBox427Cb, useTextBox428Cb, useButton45Cb, useTextBox792Cb, useTextBox793Cb, useTextBox794Cb, useTextBox795Cb, useImage321Cb, useImage326Cb, useImage322Cb, useImage323Cb, useImage324Cb, useImage325Cb, useTextBox796Cb, useTextBox797Cb, useTextBox798Cb, useTextBox799Cb, useTextBox800Cb, useTextBox801Cb, useTextBox802Cb, useTextBox803Cb } from "../page-cbs/traveltellers";
import "../page-css/traveltellers.css"

export default function Traveltellers() {
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

  const Travel_Teller_BodyProps = useStore((state)=>state["traveltellers"]["Travel_Teller_Body"]);
const Travel_Teller_BodyIoProps = useIoStore((state)=>state["traveltellers"]["Travel_Teller_Body"]);
const Travel_Teller_BodyCb = useTravel_Teller_BodyCb()
const Flex263Props = useStore((state)=>state["traveltellers"]["Flex263"]);
const Flex263IoProps = useIoStore((state)=>state["traveltellers"]["Flex263"]);
const Flex263Cb = useFlex263Cb()
const Flex262Props = useStore((state)=>state["traveltellers"]["Flex262"]);
const Flex262IoProps = useIoStore((state)=>state["traveltellers"]["Flex262"]);
const Flex262Cb = useFlex262Cb()
const Flex259Props = useStore((state)=>state["traveltellers"]["Flex259"]);
const Flex259IoProps = useIoStore((state)=>state["traveltellers"]["Flex259"]);
const Flex259Cb = useFlex259Cb()
const Flex260Props = useStore((state)=>state["traveltellers"]["Flex260"]);
const Flex260IoProps = useIoStore((state)=>state["traveltellers"]["Flex260"]);
const Flex260Cb = useFlex260Cb()
const Flex261Props = useStore((state)=>state["traveltellers"]["Flex261"]);
const Flex261IoProps = useIoStore((state)=>state["traveltellers"]["Flex261"]);
const Flex261Cb = useFlex261Cb()
const Div162Props = useStore((state)=>state["traveltellers"]["Div162"]);
const Div162IoProps = useIoStore((state)=>state["traveltellers"]["Div162"]);
const Div162Cb = useDiv162Cb()
const Flex451Props = useStore((state)=>state["traveltellers"]["Flex451"]);
const Flex451IoProps = useIoStore((state)=>state["traveltellers"]["Flex451"]);
const Flex451Cb = useFlex451Cb()
const Flex457Props = useStore((state)=>state["traveltellers"]["Flex457"]);
const Flex457IoProps = useIoStore((state)=>state["traveltellers"]["Flex457"]);
const Flex457Cb = useFlex457Cb()
const Flex454Props = useStore((state)=>state["traveltellers"]["Flex454"]);
const Flex454IoProps = useIoStore((state)=>state["traveltellers"]["Flex454"]);
const Flex454Cb = useFlex454Cb()
const Flex452Props = useStore((state)=>state["traveltellers"]["Flex452"]);
const Flex452IoProps = useIoStore((state)=>state["traveltellers"]["Flex452"]);
const Flex452Cb = useFlex452Cb()
const Flex453Props = useStore((state)=>state["traveltellers"]["Flex453"]);
const Flex453IoProps = useIoStore((state)=>state["traveltellers"]["Flex453"]);
const Flex453Cb = useFlex453Cb()
const Flex455Props = useStore((state)=>state["traveltellers"]["Flex455"]);
const Flex455IoProps = useIoStore((state)=>state["traveltellers"]["Flex455"]);
const Flex455Cb = useFlex455Cb()
const Flex456Props = useStore((state)=>state["traveltellers"]["Flex456"]);
const Flex456IoProps = useIoStore((state)=>state["traveltellers"]["Flex456"]);
const Flex456Cb = useFlex456Cb()
const Image151Props = useStore((state)=>state["traveltellers"]["Image151"]);
const Image151IoProps = useIoStore((state)=>state["traveltellers"]["Image151"]);
const Image151Cb = useImage151Cb()
const TextBox421Props = useStore((state)=>state["traveltellers"]["TextBox421"]);
const TextBox421IoProps = useIoStore((state)=>state["traveltellers"]["TextBox421"]);
const TextBox421Cb = useTextBox421Cb()
const TextBox422Props = useStore((state)=>state["traveltellers"]["TextBox422"]);
const TextBox422IoProps = useIoStore((state)=>state["traveltellers"]["TextBox422"]);
const TextBox422Cb = useTextBox422Cb()
const Image152Props = useStore((state)=>state["traveltellers"]["Image152"]);
const Image152IoProps = useIoStore((state)=>state["traveltellers"]["Image152"]);
const Image152Cb = useImage152Cb()
const TextBox423Props = useStore((state)=>state["traveltellers"]["TextBox423"]);
const TextBox423IoProps = useIoStore((state)=>state["traveltellers"]["TextBox423"]);
const TextBox423Cb = useTextBox423Cb()
const TextBox424Props = useStore((state)=>state["traveltellers"]["TextBox424"]);
const TextBox424IoProps = useIoStore((state)=>state["traveltellers"]["TextBox424"]);
const TextBox424Cb = useTextBox424Cb()
const TextBox425Props = useStore((state)=>state["traveltellers"]["TextBox425"]);
const TextBox425IoProps = useIoStore((state)=>state["traveltellers"]["TextBox425"]);
const TextBox425Cb = useTextBox425Cb()
const TextBox426Props = useStore((state)=>state["traveltellers"]["TextBox426"]);
const TextBox426IoProps = useIoStore((state)=>state["traveltellers"]["TextBox426"]);
const TextBox426Cb = useTextBox426Cb()
const Image153Props = useStore((state)=>state["traveltellers"]["Image153"]);
const Image153IoProps = useIoStore((state)=>state["traveltellers"]["Image153"]);
const Image153Cb = useImage153Cb()
const Input38Props = useStore((state)=>state["traveltellers"]["Input38"]);
const Input38IoProps = useIoStore((state)=>state["traveltellers"]["Input38"]);
const Input38Cb = useInput38Cb()
const TextBox427Props = useStore((state)=>state["traveltellers"]["TextBox427"]);
const TextBox427IoProps = useIoStore((state)=>state["traveltellers"]["TextBox427"]);
const TextBox427Cb = useTextBox427Cb()
const TextBox428Props = useStore((state)=>state["traveltellers"]["TextBox428"]);
const TextBox428IoProps = useIoStore((state)=>state["traveltellers"]["TextBox428"]);
const TextBox428Cb = useTextBox428Cb()
const Button45Props = useStore((state)=>state["traveltellers"]["Button45"]);
const Button45IoProps = useIoStore((state)=>state["traveltellers"]["Button45"]);
const Button45Cb = useButton45Cb()
const TextBox792Props = useStore((state)=>state["traveltellers"]["TextBox792"]);
const TextBox792IoProps = useIoStore((state)=>state["traveltellers"]["TextBox792"]);
const TextBox792Cb = useTextBox792Cb()
const TextBox793Props = useStore((state)=>state["traveltellers"]["TextBox793"]);
const TextBox793IoProps = useIoStore((state)=>state["traveltellers"]["TextBox793"]);
const TextBox793Cb = useTextBox793Cb()
const TextBox794Props = useStore((state)=>state["traveltellers"]["TextBox794"]);
const TextBox794IoProps = useIoStore((state)=>state["traveltellers"]["TextBox794"]);
const TextBox794Cb = useTextBox794Cb()
const TextBox795Props = useStore((state)=>state["traveltellers"]["TextBox795"]);
const TextBox795IoProps = useIoStore((state)=>state["traveltellers"]["TextBox795"]);
const TextBox795Cb = useTextBox795Cb()
const Image321Props = useStore((state)=>state["traveltellers"]["Image321"]);
const Image321IoProps = useIoStore((state)=>state["traveltellers"]["Image321"]);
const Image321Cb = useImage321Cb()
const Image326Props = useStore((state)=>state["traveltellers"]["Image326"]);
const Image326IoProps = useIoStore((state)=>state["traveltellers"]["Image326"]);
const Image326Cb = useImage326Cb()
const Image322Props = useStore((state)=>state["traveltellers"]["Image322"]);
const Image322IoProps = useIoStore((state)=>state["traveltellers"]["Image322"]);
const Image322Cb = useImage322Cb()
const Image323Props = useStore((state)=>state["traveltellers"]["Image323"]);
const Image323IoProps = useIoStore((state)=>state["traveltellers"]["Image323"]);
const Image323Cb = useImage323Cb()
const Image324Props = useStore((state)=>state["traveltellers"]["Image324"]);
const Image324IoProps = useIoStore((state)=>state["traveltellers"]["Image324"]);
const Image324Cb = useImage324Cb()
const Image325Props = useStore((state)=>state["traveltellers"]["Image325"]);
const Image325IoProps = useIoStore((state)=>state["traveltellers"]["Image325"]);
const Image325Cb = useImage325Cb()
const TextBox796Props = useStore((state)=>state["traveltellers"]["TextBox796"]);
const TextBox796IoProps = useIoStore((state)=>state["traveltellers"]["TextBox796"]);
const TextBox796Cb = useTextBox796Cb()
const TextBox797Props = useStore((state)=>state["traveltellers"]["TextBox797"]);
const TextBox797IoProps = useIoStore((state)=>state["traveltellers"]["TextBox797"]);
const TextBox797Cb = useTextBox797Cb()
const TextBox798Props = useStore((state)=>state["traveltellers"]["TextBox798"]);
const TextBox798IoProps = useIoStore((state)=>state["traveltellers"]["TextBox798"]);
const TextBox798Cb = useTextBox798Cb()
const TextBox799Props = useStore((state)=>state["traveltellers"]["TextBox799"]);
const TextBox799IoProps = useIoStore((state)=>state["traveltellers"]["TextBox799"]);
const TextBox799Cb = useTextBox799Cb()
const TextBox800Props = useStore((state)=>state["traveltellers"]["TextBox800"]);
const TextBox800IoProps = useIoStore((state)=>state["traveltellers"]["TextBox800"]);
const TextBox800Cb = useTextBox800Cb()
const TextBox801Props = useStore((state)=>state["traveltellers"]["TextBox801"]);
const TextBox801IoProps = useIoStore((state)=>state["traveltellers"]["TextBox801"]);
const TextBox801Cb = useTextBox801Cb()
const TextBox802Props = useStore((state)=>state["traveltellers"]["TextBox802"]);
const TextBox802IoProps = useIoStore((state)=>state["traveltellers"]["TextBox802"]);
const TextBox802Cb = useTextBox802Cb()
const TextBox803Props = useStore((state)=>state["traveltellers"]["TextBox803"]);
const TextBox803IoProps = useIoStore((state)=>state["traveltellers"]["TextBox803"]);
const TextBox803Cb = useTextBox803Cb()

  return (<>
  <Flex4 className="p-traveltellers Travel_Teller_Body" {...Travel_Teller_BodyProps} {...Travel_Teller_BodyCb} {...Travel_Teller_BodyIoProps}>
<Flex4 className="p-traveltellers Flex451" {...Flex451Props} {...Flex451Cb} {...Flex451IoProps}>
<Image4 className="p-traveltellers Image321" {...Image321Props} {...Image321Cb} {...Image321IoProps}/>
<TextBox4 className="p-traveltellers TextBox795" {...TextBox795Props} {...TextBox795Cb} {...TextBox795IoProps}/>
<TextBox4 className="p-traveltellers TextBox794" {...TextBox794Props} {...TextBox794Cb} {...TextBox794IoProps}/>
<TextBox4 className="p-traveltellers TextBox793" {...TextBox793Props} {...TextBox793Cb} {...TextBox793IoProps}/>
<TextBox4 className="p-traveltellers TextBox792" {...TextBox792Props} {...TextBox792Cb} {...TextBox792IoProps}/>
<Button4 className="p-traveltellers Button45" {...Button45Props} {...Button45Cb} {...Button45IoProps}/>
</Flex4>
<Flex4 className="p-traveltellers Flex263" {...Flex263Props} {...Flex263Cb} {...Flex263IoProps}>
<Div3 className="p-traveltellers Div162" {...Div162Props} {...Div162Cb} {...Div162IoProps}>
<TextBox4 className="p-traveltellers TextBox427" {...TextBox427Props} {...TextBox427Cb} {...TextBox427IoProps}/>
<TextBox4 className="p-traveltellers TextBox428" {...TextBox428Props} {...TextBox428Cb} {...TextBox428IoProps}/>
<Input1 className="p-traveltellers Input38" {...Input38Props} {...Input38Cb} {...Input38IoProps}/>
</Div3>
<Flex4 className="p-traveltellers Flex262" {...Flex262Props} {...Flex262Cb} {...Flex262IoProps}>
<Flex4 className="p-traveltellers Flex261" {...Flex261Props} {...Flex261Cb} {...Flex261IoProps}>
<Image4 className="p-traveltellers Image153" {...Image153Props} {...Image153Cb} {...Image153IoProps}/>
<TextBox4 className="p-traveltellers TextBox426" {...TextBox426Props} {...TextBox426Cb} {...TextBox426IoProps}/>
<TextBox4 className="p-traveltellers TextBox425" {...TextBox425Props} {...TextBox425Cb} {...TextBox425IoProps}/>
</Flex4>
<Flex4 className="p-traveltellers Flex260" {...Flex260Props} {...Flex260Cb} {...Flex260IoProps}>
<Image4 className="p-traveltellers Image152" {...Image152Props} {...Image152Cb} {...Image152IoProps}/>
<TextBox4 className="p-traveltellers TextBox423" {...TextBox423Props} {...TextBox423Cb} {...TextBox423IoProps}/>
<TextBox4 className="p-traveltellers TextBox424" {...TextBox424Props} {...TextBox424Cb} {...TextBox424IoProps}/>
</Flex4>
<Flex4 className="p-traveltellers Flex259" {...Flex259Props} {...Flex259Cb} {...Flex259IoProps}>
<Image4 className="p-traveltellers Image151" {...Image151Props} {...Image151Cb} {...Image151IoProps}/>
<TextBox4 className="p-traveltellers TextBox421" {...TextBox421Props} {...TextBox421Cb} {...TextBox421IoProps}/>
<TextBox4 className="p-traveltellers TextBox422" {...TextBox422Props} {...TextBox422Cb} {...TextBox422IoProps}/>
</Flex4>
</Flex4>
</Flex4>
<Flex4 className="p-traveltellers Flex457" {...Flex457Props} {...Flex457Cb} {...Flex457IoProps}>
<Flex4 className="p-traveltellers Flex454" {...Flex454Props} {...Flex454Cb} {...Flex454IoProps}>
<Flex4 className="p-traveltellers Flex453" {...Flex453Props} {...Flex453Cb} {...Flex453IoProps}>
<Image4 className="p-traveltellers Image325" {...Image325Props} {...Image325Cb} {...Image325IoProps}/>
</Flex4>
<Flex4 className="p-traveltellers Flex452" {...Flex452Props} {...Flex452Cb} {...Flex452IoProps}>
<Image4 className="p-traveltellers Image322" {...Image322Props} {...Image322Cb} {...Image322IoProps}/>
<Image4 className="p-traveltellers Image323" {...Image323Props} {...Image323Cb} {...Image323IoProps}/>
<Image4 className="p-traveltellers Image324" {...Image324Props} {...Image324Cb} {...Image324IoProps}/>
</Flex4>
</Flex4>
<Flex4 className="p-traveltellers Flex455" {...Flex455Props} {...Flex455Cb} {...Flex455IoProps}>
<TextBox4 className="p-traveltellers TextBox797" {...TextBox797Props} {...TextBox797Cb} {...TextBox797IoProps}/>
<TextBox4 className="p-traveltellers TextBox798" {...TextBox798Props} {...TextBox798Cb} {...TextBox798IoProps}/>
<TextBox4 className="p-traveltellers TextBox799" {...TextBox799Props} {...TextBox799Cb} {...TextBox799IoProps}/>
<TextBox4 className="p-traveltellers TextBox796" {...TextBox796Props} {...TextBox796Cb} {...TextBox796IoProps}/>
</Flex4>
<Flex4 className="p-traveltellers Flex456" {...Flex456Props} {...Flex456Cb} {...Flex456IoProps}>
<TextBox4 className="p-traveltellers TextBox801" {...TextBox801Props} {...TextBox801Cb} {...TextBox801IoProps}/>
<TextBox4 className="p-traveltellers TextBox802" {...TextBox802Props} {...TextBox802Cb} {...TextBox802IoProps}/>
<TextBox4 className="p-traveltellers TextBox803" {...TextBox803Props} {...TextBox803Cb} {...TextBox803IoProps}/>
<TextBox4 className="p-traveltellers TextBox800" {...TextBox800Props} {...TextBox800Cb} {...TextBox800IoProps}/>
</Flex4>
<Image4 className="p-traveltellers Image326" {...Image326Props} {...Image326Cb} {...Image326IoProps}/>
</Flex4>
</Flex4>
  </>);
}
