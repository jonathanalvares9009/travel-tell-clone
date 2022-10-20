import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex8 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div8 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Button as Button8 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox8 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image8 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useShopCb, useFlex313Cb, useFlex311Cb, useFlex312Cb, useDiv210Cb, useFlex317Cb, useFlex315Cb, useFlex314Cb, useDiv211Cb, useDiv212Cb, useDiv213Cb, useDiv214Cb, useDiv215Cb, useFlex316Cb, useFlex323Cb, useDiv216Cb, useFlex322Cb, useFlex319Cb, useFlex320Cb, useFlex321Cb, useFlex318Cb, useButton26Cb, useTextBox544Cb, useTextBox545Cb, useTextBox546Cb, useTextBox547Cb, useImage212Cb, useTextBox558Cb, useTextBox548Cb, useTextBox549Cb, useImage213Cb, useTextBox550Cb, useTextBox551Cb, useImage214Cb, useTextBox552Cb, useTextBox553Cb, useImage215Cb, useTextBox554Cb, useTextBox555Cb, useImage216Cb, useTextBox556Cb, useTextBox557Cb, useImage217Cb, useTextBox559Cb, useTextBox560Cb, useTextBox561Cb, useTextBox562Cb, useImage222Cb, useTextBox563Cb, useTextBox564Cb, useTextBox565Cb, useTextBox566Cb, useTextBox567Cb, useTextBox568Cb, useTextBox569Cb, useTextBox570Cb, useImage221Cb, useImage218Cb, useImage219Cb, useImage220Cb } from "../page-cbs/shop";
import "../page-css/shop.css"

export default function Shop() {
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

  const ShopProps = useStore((state)=>state["shop"]["Shop"]);
const ShopIoProps = useIoStore((state)=>state["shop"]["Shop"]);
const ShopCb = useShopCb()
const Flex313Props = useStore((state)=>state["shop"]["Flex313"]);
const Flex313IoProps = useIoStore((state)=>state["shop"]["Flex313"]);
const Flex313Cb = useFlex313Cb()
const Flex311Props = useStore((state)=>state["shop"]["Flex311"]);
const Flex311IoProps = useIoStore((state)=>state["shop"]["Flex311"]);
const Flex311Cb = useFlex311Cb()
const Flex312Props = useStore((state)=>state["shop"]["Flex312"]);
const Flex312IoProps = useIoStore((state)=>state["shop"]["Flex312"]);
const Flex312Cb = useFlex312Cb()
const Div210Props = useStore((state)=>state["shop"]["Div210"]);
const Div210IoProps = useIoStore((state)=>state["shop"]["Div210"]);
const Div210Cb = useDiv210Cb()
const Flex317Props = useStore((state)=>state["shop"]["Flex317"]);
const Flex317IoProps = useIoStore((state)=>state["shop"]["Flex317"]);
const Flex317Cb = useFlex317Cb()
const Flex315Props = useStore((state)=>state["shop"]["Flex315"]);
const Flex315IoProps = useIoStore((state)=>state["shop"]["Flex315"]);
const Flex315Cb = useFlex315Cb()
const Flex314Props = useStore((state)=>state["shop"]["Flex314"]);
const Flex314IoProps = useIoStore((state)=>state["shop"]["Flex314"]);
const Flex314Cb = useFlex314Cb()
const Div211Props = useStore((state)=>state["shop"]["Div211"]);
const Div211IoProps = useIoStore((state)=>state["shop"]["Div211"]);
const Div211Cb = useDiv211Cb()
const Div212Props = useStore((state)=>state["shop"]["Div212"]);
const Div212IoProps = useIoStore((state)=>state["shop"]["Div212"]);
const Div212Cb = useDiv212Cb()
const Div213Props = useStore((state)=>state["shop"]["Div213"]);
const Div213IoProps = useIoStore((state)=>state["shop"]["Div213"]);
const Div213Cb = useDiv213Cb()
const Div214Props = useStore((state)=>state["shop"]["Div214"]);
const Div214IoProps = useIoStore((state)=>state["shop"]["Div214"]);
const Div214Cb = useDiv214Cb()
const Div215Props = useStore((state)=>state["shop"]["Div215"]);
const Div215IoProps = useIoStore((state)=>state["shop"]["Div215"]);
const Div215Cb = useDiv215Cb()
const Flex316Props = useStore((state)=>state["shop"]["Flex316"]);
const Flex316IoProps = useIoStore((state)=>state["shop"]["Flex316"]);
const Flex316Cb = useFlex316Cb()
const Flex323Props = useStore((state)=>state["shop"]["Flex323"]);
const Flex323IoProps = useIoStore((state)=>state["shop"]["Flex323"]);
const Flex323Cb = useFlex323Cb()
const Div216Props = useStore((state)=>state["shop"]["Div216"]);
const Div216IoProps = useIoStore((state)=>state["shop"]["Div216"]);
const Div216Cb = useDiv216Cb()
const Flex322Props = useStore((state)=>state["shop"]["Flex322"]);
const Flex322IoProps = useIoStore((state)=>state["shop"]["Flex322"]);
const Flex322Cb = useFlex322Cb()
const Flex319Props = useStore((state)=>state["shop"]["Flex319"]);
const Flex319IoProps = useIoStore((state)=>state["shop"]["Flex319"]);
const Flex319Cb = useFlex319Cb()
const Flex320Props = useStore((state)=>state["shop"]["Flex320"]);
const Flex320IoProps = useIoStore((state)=>state["shop"]["Flex320"]);
const Flex320Cb = useFlex320Cb()
const Flex321Props = useStore((state)=>state["shop"]["Flex321"]);
const Flex321IoProps = useIoStore((state)=>state["shop"]["Flex321"]);
const Flex321Cb = useFlex321Cb()
const Flex318Props = useStore((state)=>state["shop"]["Flex318"]);
const Flex318IoProps = useIoStore((state)=>state["shop"]["Flex318"]);
const Flex318Cb = useFlex318Cb()
const Button26Props = useStore((state)=>state["shop"]["Button26"]);
const Button26IoProps = useIoStore((state)=>state["shop"]["Button26"]);
const Button26Cb = useButton26Cb()
const TextBox544Props = useStore((state)=>state["shop"]["TextBox544"]);
const TextBox544IoProps = useIoStore((state)=>state["shop"]["TextBox544"]);
const TextBox544Cb = useTextBox544Cb()
const TextBox545Props = useStore((state)=>state["shop"]["TextBox545"]);
const TextBox545IoProps = useIoStore((state)=>state["shop"]["TextBox545"]);
const TextBox545Cb = useTextBox545Cb()
const TextBox546Props = useStore((state)=>state["shop"]["TextBox546"]);
const TextBox546IoProps = useIoStore((state)=>state["shop"]["TextBox546"]);
const TextBox546Cb = useTextBox546Cb()
const TextBox547Props = useStore((state)=>state["shop"]["TextBox547"]);
const TextBox547IoProps = useIoStore((state)=>state["shop"]["TextBox547"]);
const TextBox547Cb = useTextBox547Cb()
const Image212Props = useStore((state)=>state["shop"]["Image212"]);
const Image212IoProps = useIoStore((state)=>state["shop"]["Image212"]);
const Image212Cb = useImage212Cb()
const TextBox558Props = useStore((state)=>state["shop"]["TextBox558"]);
const TextBox558IoProps = useIoStore((state)=>state["shop"]["TextBox558"]);
const TextBox558Cb = useTextBox558Cb()
const TextBox548Props = useStore((state)=>state["shop"]["TextBox548"]);
const TextBox548IoProps = useIoStore((state)=>state["shop"]["TextBox548"]);
const TextBox548Cb = useTextBox548Cb()
const TextBox549Props = useStore((state)=>state["shop"]["TextBox549"]);
const TextBox549IoProps = useIoStore((state)=>state["shop"]["TextBox549"]);
const TextBox549Cb = useTextBox549Cb()
const Image213Props = useStore((state)=>state["shop"]["Image213"]);
const Image213IoProps = useIoStore((state)=>state["shop"]["Image213"]);
const Image213Cb = useImage213Cb()
const TextBox550Props = useStore((state)=>state["shop"]["TextBox550"]);
const TextBox550IoProps = useIoStore((state)=>state["shop"]["TextBox550"]);
const TextBox550Cb = useTextBox550Cb()
const TextBox551Props = useStore((state)=>state["shop"]["TextBox551"]);
const TextBox551IoProps = useIoStore((state)=>state["shop"]["TextBox551"]);
const TextBox551Cb = useTextBox551Cb()
const Image214Props = useStore((state)=>state["shop"]["Image214"]);
const Image214IoProps = useIoStore((state)=>state["shop"]["Image214"]);
const Image214Cb = useImage214Cb()
const TextBox552Props = useStore((state)=>state["shop"]["TextBox552"]);
const TextBox552IoProps = useIoStore((state)=>state["shop"]["TextBox552"]);
const TextBox552Cb = useTextBox552Cb()
const TextBox553Props = useStore((state)=>state["shop"]["TextBox553"]);
const TextBox553IoProps = useIoStore((state)=>state["shop"]["TextBox553"]);
const TextBox553Cb = useTextBox553Cb()
const Image215Props = useStore((state)=>state["shop"]["Image215"]);
const Image215IoProps = useIoStore((state)=>state["shop"]["Image215"]);
const Image215Cb = useImage215Cb()
const TextBox554Props = useStore((state)=>state["shop"]["TextBox554"]);
const TextBox554IoProps = useIoStore((state)=>state["shop"]["TextBox554"]);
const TextBox554Cb = useTextBox554Cb()
const TextBox555Props = useStore((state)=>state["shop"]["TextBox555"]);
const TextBox555IoProps = useIoStore((state)=>state["shop"]["TextBox555"]);
const TextBox555Cb = useTextBox555Cb()
const Image216Props = useStore((state)=>state["shop"]["Image216"]);
const Image216IoProps = useIoStore((state)=>state["shop"]["Image216"]);
const Image216Cb = useImage216Cb()
const TextBox556Props = useStore((state)=>state["shop"]["TextBox556"]);
const TextBox556IoProps = useIoStore((state)=>state["shop"]["TextBox556"]);
const TextBox556Cb = useTextBox556Cb()
const TextBox557Props = useStore((state)=>state["shop"]["TextBox557"]);
const TextBox557IoProps = useIoStore((state)=>state["shop"]["TextBox557"]);
const TextBox557Cb = useTextBox557Cb()
const Image217Props = useStore((state)=>state["shop"]["Image217"]);
const Image217IoProps = useIoStore((state)=>state["shop"]["Image217"]);
const Image217Cb = useImage217Cb()
const TextBox559Props = useStore((state)=>state["shop"]["TextBox559"]);
const TextBox559IoProps = useIoStore((state)=>state["shop"]["TextBox559"]);
const TextBox559Cb = useTextBox559Cb()
const TextBox560Props = useStore((state)=>state["shop"]["TextBox560"]);
const TextBox560IoProps = useIoStore((state)=>state["shop"]["TextBox560"]);
const TextBox560Cb = useTextBox560Cb()
const TextBox561Props = useStore((state)=>state["shop"]["TextBox561"]);
const TextBox561IoProps = useIoStore((state)=>state["shop"]["TextBox561"]);
const TextBox561Cb = useTextBox561Cb()
const TextBox562Props = useStore((state)=>state["shop"]["TextBox562"]);
const TextBox562IoProps = useIoStore((state)=>state["shop"]["TextBox562"]);
const TextBox562Cb = useTextBox562Cb()
const Image222Props = useStore((state)=>state["shop"]["Image222"]);
const Image222IoProps = useIoStore((state)=>state["shop"]["Image222"]);
const Image222Cb = useImage222Cb()
const TextBox563Props = useStore((state)=>state["shop"]["TextBox563"]);
const TextBox563IoProps = useIoStore((state)=>state["shop"]["TextBox563"]);
const TextBox563Cb = useTextBox563Cb()
const TextBox564Props = useStore((state)=>state["shop"]["TextBox564"]);
const TextBox564IoProps = useIoStore((state)=>state["shop"]["TextBox564"]);
const TextBox564Cb = useTextBox564Cb()
const TextBox565Props = useStore((state)=>state["shop"]["TextBox565"]);
const TextBox565IoProps = useIoStore((state)=>state["shop"]["TextBox565"]);
const TextBox565Cb = useTextBox565Cb()
const TextBox566Props = useStore((state)=>state["shop"]["TextBox566"]);
const TextBox566IoProps = useIoStore((state)=>state["shop"]["TextBox566"]);
const TextBox566Cb = useTextBox566Cb()
const TextBox567Props = useStore((state)=>state["shop"]["TextBox567"]);
const TextBox567IoProps = useIoStore((state)=>state["shop"]["TextBox567"]);
const TextBox567Cb = useTextBox567Cb()
const TextBox568Props = useStore((state)=>state["shop"]["TextBox568"]);
const TextBox568IoProps = useIoStore((state)=>state["shop"]["TextBox568"]);
const TextBox568Cb = useTextBox568Cb()
const TextBox569Props = useStore((state)=>state["shop"]["TextBox569"]);
const TextBox569IoProps = useIoStore((state)=>state["shop"]["TextBox569"]);
const TextBox569Cb = useTextBox569Cb()
const TextBox570Props = useStore((state)=>state["shop"]["TextBox570"]);
const TextBox570IoProps = useIoStore((state)=>state["shop"]["TextBox570"]);
const TextBox570Cb = useTextBox570Cb()
const Image221Props = useStore((state)=>state["shop"]["Image221"]);
const Image221IoProps = useIoStore((state)=>state["shop"]["Image221"]);
const Image221Cb = useImage221Cb()
const Image218Props = useStore((state)=>state["shop"]["Image218"]);
const Image218IoProps = useIoStore((state)=>state["shop"]["Image218"]);
const Image218Cb = useImage218Cb()
const Image219Props = useStore((state)=>state["shop"]["Image219"]);
const Image219IoProps = useIoStore((state)=>state["shop"]["Image219"]);
const Image219Cb = useImage219Cb()
const Image220Props = useStore((state)=>state["shop"]["Image220"]);
const Image220IoProps = useIoStore((state)=>state["shop"]["Image220"]);
const Image220Cb = useImage220Cb()

  return (<>
  <Flex8 className="p-shop Shop" {...ShopProps} {...ShopCb} {...ShopIoProps}>
<Flex8 className="p-shop Flex313" {...Flex313Props} {...Flex313Cb} {...Flex313IoProps}>
<Div8 className="p-shop Div210" {...Div210Props} {...Div210Cb} {...Div210IoProps}>
<Image8 className="p-shop Image212" {...Image212Props} {...Image212Cb} {...Image212IoProps}/>
</Div8>
<Flex8 className="p-shop Flex312" {...Flex312Props} {...Flex312Cb} {...Flex312IoProps}>
<TextBox8 className="p-shop TextBox547" {...TextBox547Props} {...TextBox547Cb} {...TextBox547IoProps}/>
<TextBox8 className="p-shop TextBox546" {...TextBox546Props} {...TextBox546Cb} {...TextBox546IoProps}/>
<TextBox8 className="p-shop TextBox545" {...TextBox545Props} {...TextBox545Cb} {...TextBox545IoProps}/>
</Flex8>
<Flex8 className="p-shop Flex311" {...Flex311Props} {...Flex311Cb} {...Flex311IoProps}>
<TextBox8 className="p-shop TextBox544" {...TextBox544Props} {...TextBox544Cb} {...TextBox544IoProps}/>
<Button8 className="p-shop Button26" {...Button26Props} {...Button26Cb} {...Button26IoProps}/>
</Flex8>
</Flex8>
<Flex8 className="p-shop Flex317" {...Flex317Props} {...Flex317Cb} {...Flex317IoProps}>
<Flex8 className="p-shop Flex316" {...Flex316Props} {...Flex316Cb} {...Flex316IoProps}>
<TextBox8 className="p-shop TextBox562" {...TextBox562Props} {...TextBox562Cb} {...TextBox562IoProps}/>
<TextBox8 className="p-shop TextBox561" {...TextBox561Props} {...TextBox561Cb} {...TextBox561IoProps}/>
<TextBox8 className="p-shop TextBox559" {...TextBox559Props} {...TextBox559Cb} {...TextBox559IoProps}/>
<TextBox8 className="p-shop TextBox560" {...TextBox560Props} {...TextBox560Cb} {...TextBox560IoProps}/>
</Flex8>
<Flex8 className="p-shop Flex315" {...Flex315Props} {...Flex315Cb} {...Flex315IoProps}>
<TextBox8 className="p-shop TextBox558" {...TextBox558Props} {...TextBox558Cb} {...TextBox558IoProps}/>
<Flex8 className="p-shop Flex314" {...Flex314Props} {...Flex314Cb} {...Flex314IoProps}>
<Div8 className="p-shop Div215" {...Div215Props} {...Div215Cb} {...Div215IoProps}>
<TextBox8 className="p-shop TextBox556" {...TextBox556Props} {...TextBox556Cb} {...TextBox556IoProps}/>
<TextBox8 className="p-shop TextBox557" {...TextBox557Props} {...TextBox557Cb} {...TextBox557IoProps}/>
<Image8 className="p-shop Image217" {...Image217Props} {...Image217Cb} {...Image217IoProps}/>
</Div8>
<Div8 className="p-shop Div214" {...Div214Props} {...Div214Cb} {...Div214IoProps}>
<TextBox8 className="p-shop TextBox555" {...TextBox555Props} {...TextBox555Cb} {...TextBox555IoProps}/>
<TextBox8 className="p-shop TextBox554" {...TextBox554Props} {...TextBox554Cb} {...TextBox554IoProps}/>
<Image8 className="p-shop Image216" {...Image216Props} {...Image216Cb} {...Image216IoProps}/>
</Div8>
<Div8 className="p-shop Div213" {...Div213Props} {...Div213Cb} {...Div213IoProps}>
<TextBox8 className="p-shop TextBox553" {...TextBox553Props} {...TextBox553Cb} {...TextBox553IoProps}/>
<TextBox8 className="p-shop TextBox552" {...TextBox552Props} {...TextBox552Cb} {...TextBox552IoProps}/>
<Image8 className="p-shop Image215" {...Image215Props} {...Image215Cb} {...Image215IoProps}/>
</Div8>
<Div8 className="p-shop Div212" {...Div212Props} {...Div212Cb} {...Div212IoProps}>
<TextBox8 className="p-shop TextBox551" {...TextBox551Props} {...TextBox551Cb} {...TextBox551IoProps}/>
<TextBox8 className="p-shop TextBox550" {...TextBox550Props} {...TextBox550Cb} {...TextBox550IoProps}/>
<Image8 className="p-shop Image214" {...Image214Props} {...Image214Cb} {...Image214IoProps}/>
</Div8>
<Div8 className="p-shop Div211" {...Div211Props} {...Div211Cb} {...Div211IoProps}>
<TextBox8 className="p-shop TextBox549" {...TextBox549Props} {...TextBox549Cb} {...TextBox549IoProps}/>
<TextBox8 className="p-shop TextBox548" {...TextBox548Props} {...TextBox548Cb} {...TextBox548IoProps}/>
<Image8 className="p-shop Image213" {...Image213Props} {...Image213Cb} {...Image213IoProps}/>
</Div8>
</Flex8>
</Flex8>
</Flex8>
<Flex8 className="p-shop Flex323" {...Flex323Props} {...Flex323Cb} {...Flex323IoProps}>
<Flex8 className="p-shop Flex322" {...Flex322Props} {...Flex322Cb} {...Flex322IoProps}>
<Flex8 className="p-shop Flex321" {...Flex321Props} {...Flex321Cb} {...Flex321IoProps}>
<Image8 className="p-shop Image221" {...Image221Props} {...Image221Cb} {...Image221IoProps}/>
<Flex8 className="p-shop Flex318" {...Flex318Props} {...Flex318Cb} {...Flex318IoProps}>
<Image8 className="p-shop Image220" {...Image220Props} {...Image220Cb} {...Image220IoProps}/>
<Image8 className="p-shop Image219" {...Image219Props} {...Image219Cb} {...Image219IoProps}/>
<Image8 className="p-shop Image218" {...Image218Props} {...Image218Cb} {...Image218IoProps}/>
</Flex8>
</Flex8>
<Flex8 className="p-shop Flex320" {...Flex320Props} {...Flex320Cb} {...Flex320IoProps}>
<TextBox8 className="p-shop TextBox570" {...TextBox570Props} {...TextBox570Cb} {...TextBox570IoProps}/>
<TextBox8 className="p-shop TextBox569" {...TextBox569Props} {...TextBox569Cb} {...TextBox569IoProps}/>
<TextBox8 className="p-shop TextBox568" {...TextBox568Props} {...TextBox568Cb} {...TextBox568IoProps}/>
<TextBox8 className="p-shop TextBox567" {...TextBox567Props} {...TextBox567Cb} {...TextBox567IoProps}/>
</Flex8>
<Flex8 className="p-shop Flex319" {...Flex319Props} {...Flex319Cb} {...Flex319IoProps}>
<TextBox8 className="p-shop TextBox566" {...TextBox566Props} {...TextBox566Cb} {...TextBox566IoProps}/>
<TextBox8 className="p-shop TextBox565" {...TextBox565Props} {...TextBox565Cb} {...TextBox565IoProps}/>
<TextBox8 className="p-shop TextBox564" {...TextBox564Props} {...TextBox564Cb} {...TextBox564IoProps}/>
<TextBox8 className="p-shop TextBox563" {...TextBox563Props} {...TextBox563Cb} {...TextBox563IoProps}/>
</Flex8>
</Flex8>
<Div8 className="p-shop Div216" {...Div216Props} {...Div216Cb} {...Div216IoProps}>
<Image8 className="p-shop Image222" {...Image222Props} {...Image222Cb} {...Image222IoProps}/>
</Div8>
</Flex8>
</Flex8>
  </>);
}
