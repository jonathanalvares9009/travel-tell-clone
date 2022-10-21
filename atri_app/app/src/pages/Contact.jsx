import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex5 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Button as Button5 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox5 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image5 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Input as Input2 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useFlex377Cb, useFlex378Cb, useFlex409Cb, useFlex407Cb, useFlex403Cb, useFlex404Cb, useFlex405Cb, useFlex406Cb, useFlex408Cb, useFlex421Cb, useFlex418Cb, useFlex416Cb, useFlex417Cb, useFlex419Cb, useFlex420Cb, useButton38Cb, useTextBox689Cb, useTextBox690Cb, useTextBox691Cb, useTextBox692Cb, useImage273Cb, useButton40Cb, useInput46Cb, useInput47Cb, useInput48Cb, useInput49Cb, useInput50Cb, useTextBox720Cb, useTextBox721Cb, useTextBox722Cb, useImage296Cb, useImage292Cb, useImage293Cb, useImage294Cb, useImage295Cb, useTextBox731Cb, useTextBox732Cb, useTextBox733Cb, useTextBox734Cb, useTextBox735Cb, useTextBox736Cb, useTextBox737Cb, useTextBox738Cb } from "../page-cbs/contact";
import "../page-css/contact.css"

export default function Contact() {
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

  const Flex377Props = useStore((state)=>state["contact"]["Flex377"]);
const Flex377IoProps = useIoStore((state)=>state["contact"]["Flex377"]);
const Flex377Cb = useFlex377Cb()
const Flex378Props = useStore((state)=>state["contact"]["Flex378"]);
const Flex378IoProps = useIoStore((state)=>state["contact"]["Flex378"]);
const Flex378Cb = useFlex378Cb()
const Flex409Props = useStore((state)=>state["contact"]["Flex409"]);
const Flex409IoProps = useIoStore((state)=>state["contact"]["Flex409"]);
const Flex409Cb = useFlex409Cb()
const Flex407Props = useStore((state)=>state["contact"]["Flex407"]);
const Flex407IoProps = useIoStore((state)=>state["contact"]["Flex407"]);
const Flex407Cb = useFlex407Cb()
const Flex403Props = useStore((state)=>state["contact"]["Flex403"]);
const Flex403IoProps = useIoStore((state)=>state["contact"]["Flex403"]);
const Flex403Cb = useFlex403Cb()
const Flex404Props = useStore((state)=>state["contact"]["Flex404"]);
const Flex404IoProps = useIoStore((state)=>state["contact"]["Flex404"]);
const Flex404Cb = useFlex404Cb()
const Flex405Props = useStore((state)=>state["contact"]["Flex405"]);
const Flex405IoProps = useIoStore((state)=>state["contact"]["Flex405"]);
const Flex405Cb = useFlex405Cb()
const Flex406Props = useStore((state)=>state["contact"]["Flex406"]);
const Flex406IoProps = useIoStore((state)=>state["contact"]["Flex406"]);
const Flex406Cb = useFlex406Cb()
const Flex408Props = useStore((state)=>state["contact"]["Flex408"]);
const Flex408IoProps = useIoStore((state)=>state["contact"]["Flex408"]);
const Flex408Cb = useFlex408Cb()
const Flex421Props = useStore((state)=>state["contact"]["Flex421"]);
const Flex421IoProps = useIoStore((state)=>state["contact"]["Flex421"]);
const Flex421Cb = useFlex421Cb()
const Flex418Props = useStore((state)=>state["contact"]["Flex418"]);
const Flex418IoProps = useIoStore((state)=>state["contact"]["Flex418"]);
const Flex418Cb = useFlex418Cb()
const Flex416Props = useStore((state)=>state["contact"]["Flex416"]);
const Flex416IoProps = useIoStore((state)=>state["contact"]["Flex416"]);
const Flex416Cb = useFlex416Cb()
const Flex417Props = useStore((state)=>state["contact"]["Flex417"]);
const Flex417IoProps = useIoStore((state)=>state["contact"]["Flex417"]);
const Flex417Cb = useFlex417Cb()
const Flex419Props = useStore((state)=>state["contact"]["Flex419"]);
const Flex419IoProps = useIoStore((state)=>state["contact"]["Flex419"]);
const Flex419Cb = useFlex419Cb()
const Flex420Props = useStore((state)=>state["contact"]["Flex420"]);
const Flex420IoProps = useIoStore((state)=>state["contact"]["Flex420"]);
const Flex420Cb = useFlex420Cb()
const Button38Props = useStore((state)=>state["contact"]["Button38"]);
const Button38IoProps = useIoStore((state)=>state["contact"]["Button38"]);
const Button38Cb = useButton38Cb()
const TextBox689Props = useStore((state)=>state["contact"]["TextBox689"]);
const TextBox689IoProps = useIoStore((state)=>state["contact"]["TextBox689"]);
const TextBox689Cb = useTextBox689Cb()
const TextBox690Props = useStore((state)=>state["contact"]["TextBox690"]);
const TextBox690IoProps = useIoStore((state)=>state["contact"]["TextBox690"]);
const TextBox690Cb = useTextBox690Cb()
const TextBox691Props = useStore((state)=>state["contact"]["TextBox691"]);
const TextBox691IoProps = useIoStore((state)=>state["contact"]["TextBox691"]);
const TextBox691Cb = useTextBox691Cb()
const TextBox692Props = useStore((state)=>state["contact"]["TextBox692"]);
const TextBox692IoProps = useIoStore((state)=>state["contact"]["TextBox692"]);
const TextBox692Cb = useTextBox692Cb()
const Image273Props = useStore((state)=>state["contact"]["Image273"]);
const Image273IoProps = useIoStore((state)=>state["contact"]["Image273"]);
const Image273Cb = useImage273Cb()
const Button40Props = useStore((state)=>state["contact"]["Button40"]);
const Button40IoProps = useIoStore((state)=>state["contact"]["Button40"]);
const Button40Cb = useButton40Cb()
const Input46Props = useStore((state)=>state["contact"]["Input46"]);
const Input46IoProps = useIoStore((state)=>state["contact"]["Input46"]);
const Input46Cb = useInput46Cb()
const Input47Props = useStore((state)=>state["contact"]["Input47"]);
const Input47IoProps = useIoStore((state)=>state["contact"]["Input47"]);
const Input47Cb = useInput47Cb()
const Input48Props = useStore((state)=>state["contact"]["Input48"]);
const Input48IoProps = useIoStore((state)=>state["contact"]["Input48"]);
const Input48Cb = useInput48Cb()
const Input49Props = useStore((state)=>state["contact"]["Input49"]);
const Input49IoProps = useIoStore((state)=>state["contact"]["Input49"]);
const Input49Cb = useInput49Cb()
const Input50Props = useStore((state)=>state["contact"]["Input50"]);
const Input50IoProps = useIoStore((state)=>state["contact"]["Input50"]);
const Input50Cb = useInput50Cb()
const TextBox720Props = useStore((state)=>state["contact"]["TextBox720"]);
const TextBox720IoProps = useIoStore((state)=>state["contact"]["TextBox720"]);
const TextBox720Cb = useTextBox720Cb()
const TextBox721Props = useStore((state)=>state["contact"]["TextBox721"]);
const TextBox721IoProps = useIoStore((state)=>state["contact"]["TextBox721"]);
const TextBox721Cb = useTextBox721Cb()
const TextBox722Props = useStore((state)=>state["contact"]["TextBox722"]);
const TextBox722IoProps = useIoStore((state)=>state["contact"]["TextBox722"]);
const TextBox722Cb = useTextBox722Cb()
const Image296Props = useStore((state)=>state["contact"]["Image296"]);
const Image296IoProps = useIoStore((state)=>state["contact"]["Image296"]);
const Image296Cb = useImage296Cb()
const Image292Props = useStore((state)=>state["contact"]["Image292"]);
const Image292IoProps = useIoStore((state)=>state["contact"]["Image292"]);
const Image292Cb = useImage292Cb()
const Image293Props = useStore((state)=>state["contact"]["Image293"]);
const Image293IoProps = useIoStore((state)=>state["contact"]["Image293"]);
const Image293Cb = useImage293Cb()
const Image294Props = useStore((state)=>state["contact"]["Image294"]);
const Image294IoProps = useIoStore((state)=>state["contact"]["Image294"]);
const Image294Cb = useImage294Cb()
const Image295Props = useStore((state)=>state["contact"]["Image295"]);
const Image295IoProps = useIoStore((state)=>state["contact"]["Image295"]);
const Image295Cb = useImage295Cb()
const TextBox731Props = useStore((state)=>state["contact"]["TextBox731"]);
const TextBox731IoProps = useIoStore((state)=>state["contact"]["TextBox731"]);
const TextBox731Cb = useTextBox731Cb()
const TextBox732Props = useStore((state)=>state["contact"]["TextBox732"]);
const TextBox732IoProps = useIoStore((state)=>state["contact"]["TextBox732"]);
const TextBox732Cb = useTextBox732Cb()
const TextBox733Props = useStore((state)=>state["contact"]["TextBox733"]);
const TextBox733IoProps = useIoStore((state)=>state["contact"]["TextBox733"]);
const TextBox733Cb = useTextBox733Cb()
const TextBox734Props = useStore((state)=>state["contact"]["TextBox734"]);
const TextBox734IoProps = useIoStore((state)=>state["contact"]["TextBox734"]);
const TextBox734Cb = useTextBox734Cb()
const TextBox735Props = useStore((state)=>state["contact"]["TextBox735"]);
const TextBox735IoProps = useIoStore((state)=>state["contact"]["TextBox735"]);
const TextBox735Cb = useTextBox735Cb()
const TextBox736Props = useStore((state)=>state["contact"]["TextBox736"]);
const TextBox736IoProps = useIoStore((state)=>state["contact"]["TextBox736"]);
const TextBox736Cb = useTextBox736Cb()
const TextBox737Props = useStore((state)=>state["contact"]["TextBox737"]);
const TextBox737IoProps = useIoStore((state)=>state["contact"]["TextBox737"]);
const TextBox737Cb = useTextBox737Cb()
const TextBox738Props = useStore((state)=>state["contact"]["TextBox738"]);
const TextBox738IoProps = useIoStore((state)=>state["contact"]["TextBox738"]);
const TextBox738Cb = useTextBox738Cb()

  return (<>
  <Flex5 className="p-contact Flex377" {...Flex377Props} {...Flex377Cb} {...Flex377IoProps}>
<Flex5 className="p-contact Flex378" {...Flex378Props} {...Flex378Cb} {...Flex378IoProps}>
<Image5 className="p-contact Image273" {...Image273Props} {...Image273Cb} {...Image273IoProps}/>
<TextBox5 className="p-contact TextBox692" {...TextBox692Props} {...TextBox692Cb} {...TextBox692IoProps}/>
<TextBox5 className="p-contact TextBox691" {...TextBox691Props} {...TextBox691Cb} {...TextBox691IoProps}/>
<TextBox5 className="p-contact TextBox690" {...TextBox690Props} {...TextBox690Cb} {...TextBox690IoProps}/>
<TextBox5 className="p-contact TextBox689" {...TextBox689Props} {...TextBox689Cb} {...TextBox689IoProps}/>
<Button5 className="p-contact Button38" {...Button38Props} {...Button38Cb} {...Button38IoProps}/>
</Flex5>
<Flex5 className="p-contact Flex409" {...Flex409Props} {...Flex409Cb} {...Flex409IoProps}>
<Flex5 className="p-contact Flex408" {...Flex408Props} {...Flex408Cb} {...Flex408IoProps}>
<TextBox5 className="p-contact TextBox722" {...TextBox722Props} {...TextBox722Cb} {...TextBox722IoProps}/>
<TextBox5 className="p-contact TextBox721" {...TextBox721Props} {...TextBox721Cb} {...TextBox721IoProps}/>
<TextBox5 className="p-contact TextBox720" {...TextBox720Props} {...TextBox720Cb} {...TextBox720IoProps}/>
</Flex5>
<Flex5 className="p-contact Flex407" {...Flex407Props} {...Flex407Cb} {...Flex407IoProps}>
<Flex5 className="p-contact Flex406" {...Flex406Props} {...Flex406Cb} {...Flex406IoProps}>
<Input2 className="p-contact Input50" {...Input50Props} {...Input50Cb} {...Input50IoProps}/>
<Input2 className="p-contact Input49" {...Input49Props} {...Input49Cb} {...Input49IoProps}/>
</Flex5>
<Flex5 className="p-contact Flex405" {...Flex405Props} {...Flex405Cb} {...Flex405IoProps}>
<Input2 className="p-contact Input48" {...Input48Props} {...Input48Cb} {...Input48IoProps}/>
<Input2 className="p-contact Input47" {...Input47Props} {...Input47Cb} {...Input47IoProps}/>
</Flex5>
<Flex5 className="p-contact Flex404" {...Flex404Props} {...Flex404Cb} {...Flex404IoProps}>
<Input2 className="p-contact Input46" {...Input46Props} {...Input46Cb} {...Input46IoProps}/>
</Flex5>
<Flex5 className="p-contact Flex403" {...Flex403Props} {...Flex403Cb} {...Flex403IoProps}>
<Button5 className="p-contact Button40" {...Button40Props} {...Button40Cb} {...Button40IoProps}/>
</Flex5>
</Flex5>
</Flex5>
<Flex5 className="p-contact Flex421" {...Flex421Props} {...Flex421Cb} {...Flex421IoProps}>
<Flex5 className="p-contact Flex418" {...Flex418Props} {...Flex418Cb} {...Flex418IoProps}>
<Flex5 className="p-contact Flex417" {...Flex417Props} {...Flex417Cb} {...Flex417IoProps}>
<Image5 className="p-contact Image295" {...Image295Props} {...Image295Cb} {...Image295IoProps}/>
</Flex5>
<Flex5 className="p-contact Flex416" {...Flex416Props} {...Flex416Cb} {...Flex416IoProps}>
<Image5 className="p-contact Image292" {...Image292Props} {...Image292Cb} {...Image292IoProps}/>
<Image5 className="p-contact Image293" {...Image293Props} {...Image293Cb} {...Image293IoProps}/>
<Image5 className="p-contact Image294" {...Image294Props} {...Image294Cb} {...Image294IoProps}/>
</Flex5>
</Flex5>
<Flex5 className="p-contact Flex419" {...Flex419Props} {...Flex419Cb} {...Flex419IoProps}>
<TextBox5 className="p-contact TextBox732" {...TextBox732Props} {...TextBox732Cb} {...TextBox732IoProps}/>
<TextBox5 className="p-contact TextBox733" {...TextBox733Props} {...TextBox733Cb} {...TextBox733IoProps}/>
<TextBox5 className="p-contact TextBox734" {...TextBox734Props} {...TextBox734Cb} {...TextBox734IoProps}/>
<TextBox5 className="p-contact TextBox731" {...TextBox731Props} {...TextBox731Cb} {...TextBox731IoProps}/>
</Flex5>
<Flex5 className="p-contact Flex420" {...Flex420Props} {...Flex420Cb} {...Flex420IoProps}>
<TextBox5 className="p-contact TextBox736" {...TextBox736Props} {...TextBox736Cb} {...TextBox736IoProps}/>
<TextBox5 className="p-contact TextBox737" {...TextBox737Props} {...TextBox737Cb} {...TextBox737IoProps}/>
<TextBox5 className="p-contact TextBox738" {...TextBox738Props} {...TextBox738Cb} {...TextBox738IoProps}/>
<TextBox5 className="p-contact TextBox735" {...TextBox735Props} {...TextBox735Cb} {...TextBox735IoProps}/>
</Flex5>
<Image5 className="p-contact Image296" {...Image296Props} {...Image296Cb} {...Image296IoProps}/>
</Flex5>
</Flex5>
  </>);
}
