import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex8 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div6 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox as TextBox8 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image8 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button8 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useShopCb, useFlex317Cb, useFlex315Cb, useFlex314Cb, useDiv211Cb, useDiv212Cb, useDiv213Cb, useDiv214Cb, useDiv215Cb, useFlex316Cb, useFlex429Cb, useFlex422Cb, useFlex428Cb, useFlex425Cb, useFlex423Cb, useFlex424Cb, useFlex426Cb, useFlex427Cb, useTextBox558Cb, useTextBox548Cb, useTextBox549Cb, useImage213Cb, useTextBox550Cb, useTextBox551Cb, useImage214Cb, useTextBox552Cb, useTextBox553Cb, useImage215Cb, useTextBox554Cb, useTextBox555Cb, useImage216Cb, useTextBox556Cb, useTextBox557Cb, useImage217Cb, useTextBox562Cb, useTextBox752Cb, useTextBox754Cb, useTextBox755Cb, useButton41Cb, useTextBox739Cb, useTextBox740Cb, useTextBox741Cb, useTextBox742Cb, useImage297Cb, useImage302Cb, useImage298Cb, useImage299Cb, useImage300Cb, useImage301Cb, useTextBox743Cb, useTextBox744Cb, useTextBox745Cb, useTextBox746Cb, useTextBox747Cb, useTextBox748Cb, useTextBox749Cb, useTextBox750Cb } from "../page-cbs/shop";
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
const Flex429Props = useStore((state)=>state["shop"]["Flex429"]);
const Flex429IoProps = useIoStore((state)=>state["shop"]["Flex429"]);
const Flex429Cb = useFlex429Cb()
const Flex422Props = useStore((state)=>state["shop"]["Flex422"]);
const Flex422IoProps = useIoStore((state)=>state["shop"]["Flex422"]);
const Flex422Cb = useFlex422Cb()
const Flex428Props = useStore((state)=>state["shop"]["Flex428"]);
const Flex428IoProps = useIoStore((state)=>state["shop"]["Flex428"]);
const Flex428Cb = useFlex428Cb()
const Flex425Props = useStore((state)=>state["shop"]["Flex425"]);
const Flex425IoProps = useIoStore((state)=>state["shop"]["Flex425"]);
const Flex425Cb = useFlex425Cb()
const Flex423Props = useStore((state)=>state["shop"]["Flex423"]);
const Flex423IoProps = useIoStore((state)=>state["shop"]["Flex423"]);
const Flex423Cb = useFlex423Cb()
const Flex424Props = useStore((state)=>state["shop"]["Flex424"]);
const Flex424IoProps = useIoStore((state)=>state["shop"]["Flex424"]);
const Flex424Cb = useFlex424Cb()
const Flex426Props = useStore((state)=>state["shop"]["Flex426"]);
const Flex426IoProps = useIoStore((state)=>state["shop"]["Flex426"]);
const Flex426Cb = useFlex426Cb()
const Flex427Props = useStore((state)=>state["shop"]["Flex427"]);
const Flex427IoProps = useIoStore((state)=>state["shop"]["Flex427"]);
const Flex427Cb = useFlex427Cb()
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
const TextBox562Props = useStore((state)=>state["shop"]["TextBox562"]);
const TextBox562IoProps = useIoStore((state)=>state["shop"]["TextBox562"]);
const TextBox562Cb = useTextBox562Cb()
const TextBox752Props = useStore((state)=>state["shop"]["TextBox752"]);
const TextBox752IoProps = useIoStore((state)=>state["shop"]["TextBox752"]);
const TextBox752Cb = useTextBox752Cb()
const TextBox754Props = useStore((state)=>state["shop"]["TextBox754"]);
const TextBox754IoProps = useIoStore((state)=>state["shop"]["TextBox754"]);
const TextBox754Cb = useTextBox754Cb()
const TextBox755Props = useStore((state)=>state["shop"]["TextBox755"]);
const TextBox755IoProps = useIoStore((state)=>state["shop"]["TextBox755"]);
const TextBox755Cb = useTextBox755Cb()
const Button41Props = useStore((state)=>state["shop"]["Button41"]);
const Button41IoProps = useIoStore((state)=>state["shop"]["Button41"]);
const Button41Cb = useButton41Cb()
const TextBox739Props = useStore((state)=>state["shop"]["TextBox739"]);
const TextBox739IoProps = useIoStore((state)=>state["shop"]["TextBox739"]);
const TextBox739Cb = useTextBox739Cb()
const TextBox740Props = useStore((state)=>state["shop"]["TextBox740"]);
const TextBox740IoProps = useIoStore((state)=>state["shop"]["TextBox740"]);
const TextBox740Cb = useTextBox740Cb()
const TextBox741Props = useStore((state)=>state["shop"]["TextBox741"]);
const TextBox741IoProps = useIoStore((state)=>state["shop"]["TextBox741"]);
const TextBox741Cb = useTextBox741Cb()
const TextBox742Props = useStore((state)=>state["shop"]["TextBox742"]);
const TextBox742IoProps = useIoStore((state)=>state["shop"]["TextBox742"]);
const TextBox742Cb = useTextBox742Cb()
const Image297Props = useStore((state)=>state["shop"]["Image297"]);
const Image297IoProps = useIoStore((state)=>state["shop"]["Image297"]);
const Image297Cb = useImage297Cb()
const Image302Props = useStore((state)=>state["shop"]["Image302"]);
const Image302IoProps = useIoStore((state)=>state["shop"]["Image302"]);
const Image302Cb = useImage302Cb()
const Image298Props = useStore((state)=>state["shop"]["Image298"]);
const Image298IoProps = useIoStore((state)=>state["shop"]["Image298"]);
const Image298Cb = useImage298Cb()
const Image299Props = useStore((state)=>state["shop"]["Image299"]);
const Image299IoProps = useIoStore((state)=>state["shop"]["Image299"]);
const Image299Cb = useImage299Cb()
const Image300Props = useStore((state)=>state["shop"]["Image300"]);
const Image300IoProps = useIoStore((state)=>state["shop"]["Image300"]);
const Image300Cb = useImage300Cb()
const Image301Props = useStore((state)=>state["shop"]["Image301"]);
const Image301IoProps = useIoStore((state)=>state["shop"]["Image301"]);
const Image301Cb = useImage301Cb()
const TextBox743Props = useStore((state)=>state["shop"]["TextBox743"]);
const TextBox743IoProps = useIoStore((state)=>state["shop"]["TextBox743"]);
const TextBox743Cb = useTextBox743Cb()
const TextBox744Props = useStore((state)=>state["shop"]["TextBox744"]);
const TextBox744IoProps = useIoStore((state)=>state["shop"]["TextBox744"]);
const TextBox744Cb = useTextBox744Cb()
const TextBox745Props = useStore((state)=>state["shop"]["TextBox745"]);
const TextBox745IoProps = useIoStore((state)=>state["shop"]["TextBox745"]);
const TextBox745Cb = useTextBox745Cb()
const TextBox746Props = useStore((state)=>state["shop"]["TextBox746"]);
const TextBox746IoProps = useIoStore((state)=>state["shop"]["TextBox746"]);
const TextBox746Cb = useTextBox746Cb()
const TextBox747Props = useStore((state)=>state["shop"]["TextBox747"]);
const TextBox747IoProps = useIoStore((state)=>state["shop"]["TextBox747"]);
const TextBox747Cb = useTextBox747Cb()
const TextBox748Props = useStore((state)=>state["shop"]["TextBox748"]);
const TextBox748IoProps = useIoStore((state)=>state["shop"]["TextBox748"]);
const TextBox748Cb = useTextBox748Cb()
const TextBox749Props = useStore((state)=>state["shop"]["TextBox749"]);
const TextBox749IoProps = useIoStore((state)=>state["shop"]["TextBox749"]);
const TextBox749Cb = useTextBox749Cb()
const TextBox750Props = useStore((state)=>state["shop"]["TextBox750"]);
const TextBox750IoProps = useIoStore((state)=>state["shop"]["TextBox750"]);
const TextBox750Cb = useTextBox750Cb()

  return (<>
  <Flex8 className="p-shop Shop" {...ShopProps} {...ShopCb} {...ShopIoProps}>
<Flex8 className="p-shop Flex422" {...Flex422Props} {...Flex422Cb} {...Flex422IoProps}>
<Image8 className="p-shop Image297" {...Image297Props} {...Image297Cb} {...Image297IoProps}/>
<TextBox8 className="p-shop TextBox742" {...TextBox742Props} {...TextBox742Cb} {...TextBox742IoProps}/>
<TextBox8 className="p-shop TextBox741" {...TextBox741Props} {...TextBox741Cb} {...TextBox741IoProps}/>
<TextBox8 className="p-shop TextBox740" {...TextBox740Props} {...TextBox740Cb} {...TextBox740IoProps}/>
<TextBox8 className="p-shop TextBox739" {...TextBox739Props} {...TextBox739Cb} {...TextBox739IoProps}/>
<Button8 className="p-shop Button41" {...Button41Props} {...Button41Cb} {...Button41IoProps}/>
</Flex8>
<Flex8 className="p-shop Flex317" {...Flex317Props} {...Flex317Cb} {...Flex317IoProps}>
<Flex8 className="p-shop Flex316" {...Flex316Props} {...Flex316Cb} {...Flex316IoProps}>
<TextBox8 className="p-shop TextBox562" {...TextBox562Props} {...TextBox562Cb} {...TextBox562IoProps}/>
<Flex8 className="p-shop Flex429" {...Flex429Props} {...Flex429Cb} {...Flex429IoProps}>
<TextBox8 className="p-shop TextBox754" {...TextBox754Props} {...TextBox754Cb} {...TextBox754IoProps}/>
<TextBox8 className="p-shop TextBox755" {...TextBox755Props} {...TextBox755Cb} {...TextBox755IoProps}/>
<TextBox8 className="p-shop TextBox752" {...TextBox752Props} {...TextBox752Cb} {...TextBox752IoProps}/>
</Flex8>
</Flex8>
<Flex8 className="p-shop Flex315" {...Flex315Props} {...Flex315Cb} {...Flex315IoProps}>
<TextBox8 className="p-shop TextBox558" {...TextBox558Props} {...TextBox558Cb} {...TextBox558IoProps}/>
<Flex8 className="p-shop Flex314" {...Flex314Props} {...Flex314Cb} {...Flex314IoProps}>
<Div6 className="p-shop Div215" {...Div215Props} {...Div215Cb} {...Div215IoProps}>
<TextBox8 className="p-shop TextBox556" {...TextBox556Props} {...TextBox556Cb} {...TextBox556IoProps}/>
<TextBox8 className="p-shop TextBox557" {...TextBox557Props} {...TextBox557Cb} {...TextBox557IoProps}/>
<Image8 className="p-shop Image217" {...Image217Props} {...Image217Cb} {...Image217IoProps}/>
</Div6>
<Div6 className="p-shop Div214" {...Div214Props} {...Div214Cb} {...Div214IoProps}>
<TextBox8 className="p-shop TextBox555" {...TextBox555Props} {...TextBox555Cb} {...TextBox555IoProps}/>
<TextBox8 className="p-shop TextBox554" {...TextBox554Props} {...TextBox554Cb} {...TextBox554IoProps}/>
<Image8 className="p-shop Image216" {...Image216Props} {...Image216Cb} {...Image216IoProps}/>
</Div6>
<Div6 className="p-shop Div213" {...Div213Props} {...Div213Cb} {...Div213IoProps}>
<TextBox8 className="p-shop TextBox553" {...TextBox553Props} {...TextBox553Cb} {...TextBox553IoProps}/>
<TextBox8 className="p-shop TextBox552" {...TextBox552Props} {...TextBox552Cb} {...TextBox552IoProps}/>
<Image8 className="p-shop Image215" {...Image215Props} {...Image215Cb} {...Image215IoProps}/>
</Div6>
<Div6 className="p-shop Div212" {...Div212Props} {...Div212Cb} {...Div212IoProps}>
<TextBox8 className="p-shop TextBox551" {...TextBox551Props} {...TextBox551Cb} {...TextBox551IoProps}/>
<TextBox8 className="p-shop TextBox550" {...TextBox550Props} {...TextBox550Cb} {...TextBox550IoProps}/>
<Image8 className="p-shop Image214" {...Image214Props} {...Image214Cb} {...Image214IoProps}/>
</Div6>
<Div6 className="p-shop Div211" {...Div211Props} {...Div211Cb} {...Div211IoProps}>
<TextBox8 className="p-shop TextBox549" {...TextBox549Props} {...TextBox549Cb} {...TextBox549IoProps}/>
<TextBox8 className="p-shop TextBox548" {...TextBox548Props} {...TextBox548Cb} {...TextBox548IoProps}/>
<Image8 className="p-shop Image213" {...Image213Props} {...Image213Cb} {...Image213IoProps}/>
</Div6>
</Flex8>
</Flex8>
</Flex8>
<Flex8 className="p-shop Flex428" {...Flex428Props} {...Flex428Cb} {...Flex428IoProps}>
<Flex8 className="p-shop Flex425" {...Flex425Props} {...Flex425Cb} {...Flex425IoProps}>
<Flex8 className="p-shop Flex424" {...Flex424Props} {...Flex424Cb} {...Flex424IoProps}>
<Image8 className="p-shop Image301" {...Image301Props} {...Image301Cb} {...Image301IoProps}/>
</Flex8>
<Flex8 className="p-shop Flex423" {...Flex423Props} {...Flex423Cb} {...Flex423IoProps}>
<Image8 className="p-shop Image298" {...Image298Props} {...Image298Cb} {...Image298IoProps}/>
<Image8 className="p-shop Image299" {...Image299Props} {...Image299Cb} {...Image299IoProps}/>
<Image8 className="p-shop Image300" {...Image300Props} {...Image300Cb} {...Image300IoProps}/>
</Flex8>
</Flex8>
<Flex8 className="p-shop Flex426" {...Flex426Props} {...Flex426Cb} {...Flex426IoProps}>
<TextBox8 className="p-shop TextBox744" {...TextBox744Props} {...TextBox744Cb} {...TextBox744IoProps}/>
<TextBox8 className="p-shop TextBox745" {...TextBox745Props} {...TextBox745Cb} {...TextBox745IoProps}/>
<TextBox8 className="p-shop TextBox746" {...TextBox746Props} {...TextBox746Cb} {...TextBox746IoProps}/>
<TextBox8 className="p-shop TextBox743" {...TextBox743Props} {...TextBox743Cb} {...TextBox743IoProps}/>
</Flex8>
<Flex8 className="p-shop Flex427" {...Flex427Props} {...Flex427Cb} {...Flex427IoProps}>
<TextBox8 className="p-shop TextBox748" {...TextBox748Props} {...TextBox748Cb} {...TextBox748IoProps}/>
<TextBox8 className="p-shop TextBox749" {...TextBox749Props} {...TextBox749Cb} {...TextBox749IoProps}/>
<TextBox8 className="p-shop TextBox750" {...TextBox750Props} {...TextBox750Cb} {...TextBox750IoProps}/>
<TextBox8 className="p-shop TextBox747" {...TextBox747Props} {...TextBox747Cb} {...TextBox747IoProps}/>
</Flex8>
<Image8 className="p-shop Image302" {...Image302Props} {...Image302Cb} {...Image302IoProps}/>
</Flex8>
</Flex8>
  </>);
}
