import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex4 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div4 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Button as Button4 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox4 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image4 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useTravel_Teller_BodyCb, useFlex258Cb, useFlex256Cb, useFlex257Cb, useDiv161Cb, useFlex263Cb, useFlex262Cb, useFlex259Cb, useFlex260Cb, useFlex261Cb, useDiv162Cb, useFlex269Cb, useDiv163Cb, useFlex268Cb, useFlex265Cb, useFlex266Cb, useFlex267Cb, useFlex264Cb, useButton23Cb, useTextBox417Cb, useTextBox418Cb, useTextBox419Cb, useTextBox420Cb, useImage150Cb, useImage151Cb, useTextBox421Cb, useTextBox422Cb, useImage152Cb, useTextBox423Cb, useTextBox424Cb, useTextBox425Cb, useTextBox426Cb, useImage153Cb, useInput38Cb, useTextBox427Cb, useTextBox428Cb, useImage158Cb, useTextBox429Cb, useTextBox430Cb, useTextBox431Cb, useTextBox432Cb, useTextBox433Cb, useTextBox434Cb, useTextBox435Cb, useTextBox436Cb, useImage157Cb, useImage154Cb, useImage155Cb, useImage156Cb } from "../page-cbs/traveltellers";
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
const Flex258Props = useStore((state)=>state["traveltellers"]["Flex258"]);
const Flex258IoProps = useIoStore((state)=>state["traveltellers"]["Flex258"]);
const Flex258Cb = useFlex258Cb()
const Flex256Props = useStore((state)=>state["traveltellers"]["Flex256"]);
const Flex256IoProps = useIoStore((state)=>state["traveltellers"]["Flex256"]);
const Flex256Cb = useFlex256Cb()
const Flex257Props = useStore((state)=>state["traveltellers"]["Flex257"]);
const Flex257IoProps = useIoStore((state)=>state["traveltellers"]["Flex257"]);
const Flex257Cb = useFlex257Cb()
const Div161Props = useStore((state)=>state["traveltellers"]["Div161"]);
const Div161IoProps = useIoStore((state)=>state["traveltellers"]["Div161"]);
const Div161Cb = useDiv161Cb()
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
const Flex269Props = useStore((state)=>state["traveltellers"]["Flex269"]);
const Flex269IoProps = useIoStore((state)=>state["traveltellers"]["Flex269"]);
const Flex269Cb = useFlex269Cb()
const Div163Props = useStore((state)=>state["traveltellers"]["Div163"]);
const Div163IoProps = useIoStore((state)=>state["traveltellers"]["Div163"]);
const Div163Cb = useDiv163Cb()
const Flex268Props = useStore((state)=>state["traveltellers"]["Flex268"]);
const Flex268IoProps = useIoStore((state)=>state["traveltellers"]["Flex268"]);
const Flex268Cb = useFlex268Cb()
const Flex265Props = useStore((state)=>state["traveltellers"]["Flex265"]);
const Flex265IoProps = useIoStore((state)=>state["traveltellers"]["Flex265"]);
const Flex265Cb = useFlex265Cb()
const Flex266Props = useStore((state)=>state["traveltellers"]["Flex266"]);
const Flex266IoProps = useIoStore((state)=>state["traveltellers"]["Flex266"]);
const Flex266Cb = useFlex266Cb()
const Flex267Props = useStore((state)=>state["traveltellers"]["Flex267"]);
const Flex267IoProps = useIoStore((state)=>state["traveltellers"]["Flex267"]);
const Flex267Cb = useFlex267Cb()
const Flex264Props = useStore((state)=>state["traveltellers"]["Flex264"]);
const Flex264IoProps = useIoStore((state)=>state["traveltellers"]["Flex264"]);
const Flex264Cb = useFlex264Cb()
const Button23Props = useStore((state)=>state["traveltellers"]["Button23"]);
const Button23IoProps = useIoStore((state)=>state["traveltellers"]["Button23"]);
const Button23Cb = useButton23Cb()
const TextBox417Props = useStore((state)=>state["traveltellers"]["TextBox417"]);
const TextBox417IoProps = useIoStore((state)=>state["traveltellers"]["TextBox417"]);
const TextBox417Cb = useTextBox417Cb()
const TextBox418Props = useStore((state)=>state["traveltellers"]["TextBox418"]);
const TextBox418IoProps = useIoStore((state)=>state["traveltellers"]["TextBox418"]);
const TextBox418Cb = useTextBox418Cb()
const TextBox419Props = useStore((state)=>state["traveltellers"]["TextBox419"]);
const TextBox419IoProps = useIoStore((state)=>state["traveltellers"]["TextBox419"]);
const TextBox419Cb = useTextBox419Cb()
const TextBox420Props = useStore((state)=>state["traveltellers"]["TextBox420"]);
const TextBox420IoProps = useIoStore((state)=>state["traveltellers"]["TextBox420"]);
const TextBox420Cb = useTextBox420Cb()
const Image150Props = useStore((state)=>state["traveltellers"]["Image150"]);
const Image150IoProps = useIoStore((state)=>state["traveltellers"]["Image150"]);
const Image150Cb = useImage150Cb()
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
const Image158Props = useStore((state)=>state["traveltellers"]["Image158"]);
const Image158IoProps = useIoStore((state)=>state["traveltellers"]["Image158"]);
const Image158Cb = useImage158Cb()
const TextBox429Props = useStore((state)=>state["traveltellers"]["TextBox429"]);
const TextBox429IoProps = useIoStore((state)=>state["traveltellers"]["TextBox429"]);
const TextBox429Cb = useTextBox429Cb()
const TextBox430Props = useStore((state)=>state["traveltellers"]["TextBox430"]);
const TextBox430IoProps = useIoStore((state)=>state["traveltellers"]["TextBox430"]);
const TextBox430Cb = useTextBox430Cb()
const TextBox431Props = useStore((state)=>state["traveltellers"]["TextBox431"]);
const TextBox431IoProps = useIoStore((state)=>state["traveltellers"]["TextBox431"]);
const TextBox431Cb = useTextBox431Cb()
const TextBox432Props = useStore((state)=>state["traveltellers"]["TextBox432"]);
const TextBox432IoProps = useIoStore((state)=>state["traveltellers"]["TextBox432"]);
const TextBox432Cb = useTextBox432Cb()
const TextBox433Props = useStore((state)=>state["traveltellers"]["TextBox433"]);
const TextBox433IoProps = useIoStore((state)=>state["traveltellers"]["TextBox433"]);
const TextBox433Cb = useTextBox433Cb()
const TextBox434Props = useStore((state)=>state["traveltellers"]["TextBox434"]);
const TextBox434IoProps = useIoStore((state)=>state["traveltellers"]["TextBox434"]);
const TextBox434Cb = useTextBox434Cb()
const TextBox435Props = useStore((state)=>state["traveltellers"]["TextBox435"]);
const TextBox435IoProps = useIoStore((state)=>state["traveltellers"]["TextBox435"]);
const TextBox435Cb = useTextBox435Cb()
const TextBox436Props = useStore((state)=>state["traveltellers"]["TextBox436"]);
const TextBox436IoProps = useIoStore((state)=>state["traveltellers"]["TextBox436"]);
const TextBox436Cb = useTextBox436Cb()
const Image157Props = useStore((state)=>state["traveltellers"]["Image157"]);
const Image157IoProps = useIoStore((state)=>state["traveltellers"]["Image157"]);
const Image157Cb = useImage157Cb()
const Image154Props = useStore((state)=>state["traveltellers"]["Image154"]);
const Image154IoProps = useIoStore((state)=>state["traveltellers"]["Image154"]);
const Image154Cb = useImage154Cb()
const Image155Props = useStore((state)=>state["traveltellers"]["Image155"]);
const Image155IoProps = useIoStore((state)=>state["traveltellers"]["Image155"]);
const Image155Cb = useImage155Cb()
const Image156Props = useStore((state)=>state["traveltellers"]["Image156"]);
const Image156IoProps = useIoStore((state)=>state["traveltellers"]["Image156"]);
const Image156Cb = useImage156Cb()

  return (<>
  <Flex4 className="p-traveltellers Travel_Teller_Body" {...Travel_Teller_BodyProps} {...Travel_Teller_BodyCb} {...Travel_Teller_BodyIoProps}>
<Flex4 className="p-traveltellers Flex258" {...Flex258Props} {...Flex258Cb} {...Flex258IoProps}>
<Div4 className="p-traveltellers Div161" {...Div161Props} {...Div161Cb} {...Div161IoProps}>
<Image4 className="p-traveltellers Image150" {...Image150Props} {...Image150Cb} {...Image150IoProps}/>
</Div4>
<Flex4 className="p-traveltellers Flex257" {...Flex257Props} {...Flex257Cb} {...Flex257IoProps}>
<TextBox4 className="p-traveltellers TextBox420" {...TextBox420Props} {...TextBox420Cb} {...TextBox420IoProps}/>
<TextBox4 className="p-traveltellers TextBox419" {...TextBox419Props} {...TextBox419Cb} {...TextBox419IoProps}/>
<TextBox4 className="p-traveltellers TextBox418" {...TextBox418Props} {...TextBox418Cb} {...TextBox418IoProps}/>
</Flex4>
<Flex4 className="p-traveltellers Flex256" {...Flex256Props} {...Flex256Cb} {...Flex256IoProps}>
<TextBox4 className="p-traveltellers TextBox417" {...TextBox417Props} {...TextBox417Cb} {...TextBox417IoProps}/>
<Button4 className="p-traveltellers Button23" {...Button23Props} {...Button23Cb} {...Button23IoProps}/>
</Flex4>
</Flex4>
<Flex4 className="p-traveltellers Flex263" {...Flex263Props} {...Flex263Cb} {...Flex263IoProps}>
<Div4 className="p-traveltellers Div162" {...Div162Props} {...Div162Cb} {...Div162IoProps}>
<TextBox4 className="p-traveltellers TextBox427" {...TextBox427Props} {...TextBox427Cb} {...TextBox427IoProps}/>
<TextBox4 className="p-traveltellers TextBox428" {...TextBox428Props} {...TextBox428Cb} {...TextBox428IoProps}/>
<Input className="p-traveltellers Input38" {...Input38Props} {...Input38Cb} {...Input38IoProps}/>
</Div4>
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
<Flex4 className="p-traveltellers Flex269" {...Flex269Props} {...Flex269Cb} {...Flex269IoProps}>
<Flex4 className="p-traveltellers Flex268" {...Flex268Props} {...Flex268Cb} {...Flex268IoProps}>
<Flex4 className="p-traveltellers Flex267" {...Flex267Props} {...Flex267Cb} {...Flex267IoProps}>
<Image4 className="p-traveltellers Image157" {...Image157Props} {...Image157Cb} {...Image157IoProps}/>
<Flex4 className="p-traveltellers Flex264" {...Flex264Props} {...Flex264Cb} {...Flex264IoProps}>
<Image4 className="p-traveltellers Image156" {...Image156Props} {...Image156Cb} {...Image156IoProps}/>
<Image4 className="p-traveltellers Image155" {...Image155Props} {...Image155Cb} {...Image155IoProps}/>
<Image4 className="p-traveltellers Image154" {...Image154Props} {...Image154Cb} {...Image154IoProps}/>
</Flex4>
</Flex4>
<Flex4 className="p-traveltellers Flex266" {...Flex266Props} {...Flex266Cb} {...Flex266IoProps}>
<TextBox4 className="p-traveltellers TextBox436" {...TextBox436Props} {...TextBox436Cb} {...TextBox436IoProps}/>
<TextBox4 className="p-traveltellers TextBox435" {...TextBox435Props} {...TextBox435Cb} {...TextBox435IoProps}/>
<TextBox4 className="p-traveltellers TextBox434" {...TextBox434Props} {...TextBox434Cb} {...TextBox434IoProps}/>
<TextBox4 className="p-traveltellers TextBox433" {...TextBox433Props} {...TextBox433Cb} {...TextBox433IoProps}/>
</Flex4>
<Flex4 className="p-traveltellers Flex265" {...Flex265Props} {...Flex265Cb} {...Flex265IoProps}>
<TextBox4 className="p-traveltellers TextBox432" {...TextBox432Props} {...TextBox432Cb} {...TextBox432IoProps}/>
<TextBox4 className="p-traveltellers TextBox431" {...TextBox431Props} {...TextBox431Cb} {...TextBox431IoProps}/>
<TextBox4 className="p-traveltellers TextBox430" {...TextBox430Props} {...TextBox430Cb} {...TextBox430IoProps}/>
<TextBox4 className="p-traveltellers TextBox429" {...TextBox429Props} {...TextBox429Cb} {...TextBox429IoProps}/>
</Flex4>
</Flex4>
<Div4 className="p-traveltellers Div163" {...Div163Props} {...Div163Cb} {...Div163IoProps}>
<Image4 className="p-traveltellers Image158" {...Image158Props} {...Image158Cb} {...Image158IoProps}/>
</Div4>
</Flex4>
</Flex4>
  </>);
}
