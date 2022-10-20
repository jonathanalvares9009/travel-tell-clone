import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Carousel } from "@atrilabs/react-component-manifests/src/manifests/Carousel/Carousel.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex99Cb, useFlex105Cb, useDiv121Cb, useFlex104Cb, useFlex101Cb, useFlex102Cb, useFlex103Cb, useFlex100Cb, useFlex129Cb, useFlex127Cb, useFlex128Cb, useDiv127Cb, useCarousel1Cb, useImage93Cb, useTextBox129Cb, useTextBox130Cb, useTextBox131Cb, useTextBox132Cb, useTextBox133Cb, useTextBox134Cb, useTextBox135Cb, useTextBox136Cb, useImage92Cb, useImage89Cb, useImage90Cb, useImage91Cb, useButton3Cb, useTextBox165Cb, useTextBox166Cb, useTextBox167Cb, useTextBox168Cb, useImage110Cb } from "../page-cbs/Home";
import "../page-css/Home.css"

export default function Home() {
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

  const Flex99Props = useStore((state)=>state["Home"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["Home"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Flex105Props = useStore((state)=>state["Home"]["Flex105"]);
const Flex105IoProps = useIoStore((state)=>state["Home"]["Flex105"]);
const Flex105Cb = useFlex105Cb()
const Div121Props = useStore((state)=>state["Home"]["Div121"]);
const Div121IoProps = useIoStore((state)=>state["Home"]["Div121"]);
const Div121Cb = useDiv121Cb()
const Flex104Props = useStore((state)=>state["Home"]["Flex104"]);
const Flex104IoProps = useIoStore((state)=>state["Home"]["Flex104"]);
const Flex104Cb = useFlex104Cb()
const Flex101Props = useStore((state)=>state["Home"]["Flex101"]);
const Flex101IoProps = useIoStore((state)=>state["Home"]["Flex101"]);
const Flex101Cb = useFlex101Cb()
const Flex102Props = useStore((state)=>state["Home"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Home"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex103Props = useStore((state)=>state["Home"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["Home"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const Flex100Props = useStore((state)=>state["Home"]["Flex100"]);
const Flex100IoProps = useIoStore((state)=>state["Home"]["Flex100"]);
const Flex100Cb = useFlex100Cb()
const Flex129Props = useStore((state)=>state["Home"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Home"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Flex127Props = useStore((state)=>state["Home"]["Flex127"]);
const Flex127IoProps = useIoStore((state)=>state["Home"]["Flex127"]);
const Flex127Cb = useFlex127Cb()
const Flex128Props = useStore((state)=>state["Home"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["Home"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
const Div127Props = useStore((state)=>state["Home"]["Div127"]);
const Div127IoProps = useIoStore((state)=>state["Home"]["Div127"]);
const Div127Cb = useDiv127Cb()
const Carousel1Props = useStore((state)=>state["Home"]["Carousel1"]);
const Carousel1IoProps = useIoStore((state)=>state["Home"]["Carousel1"]);
const Carousel1Cb = useCarousel1Cb()
const Image93Props = useStore((state)=>state["Home"]["Image93"]);
const Image93IoProps = useIoStore((state)=>state["Home"]["Image93"]);
const Image93Cb = useImage93Cb()
const TextBox129Props = useStore((state)=>state["Home"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["Home"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const TextBox130Props = useStore((state)=>state["Home"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["Home"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const TextBox131Props = useStore((state)=>state["Home"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Home"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox132Props = useStore((state)=>state["Home"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["Home"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const TextBox133Props = useStore((state)=>state["Home"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["Home"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const TextBox134Props = useStore((state)=>state["Home"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["Home"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const TextBox135Props = useStore((state)=>state["Home"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["Home"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const TextBox136Props = useStore((state)=>state["Home"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["Home"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const Image92Props = useStore((state)=>state["Home"]["Image92"]);
const Image92IoProps = useIoStore((state)=>state["Home"]["Image92"]);
const Image92Cb = useImage92Cb()
const Image89Props = useStore((state)=>state["Home"]["Image89"]);
const Image89IoProps = useIoStore((state)=>state["Home"]["Image89"]);
const Image89Cb = useImage89Cb()
const Image90Props = useStore((state)=>state["Home"]["Image90"]);
const Image90IoProps = useIoStore((state)=>state["Home"]["Image90"]);
const Image90Cb = useImage90Cb()
const Image91Props = useStore((state)=>state["Home"]["Image91"]);
const Image91IoProps = useIoStore((state)=>state["Home"]["Image91"]);
const Image91Cb = useImage91Cb()
const Button3Props = useStore((state)=>state["Home"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["Home"]["Button3"]);
const Button3Cb = useButton3Cb()
const TextBox165Props = useStore((state)=>state["Home"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["Home"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const TextBox166Props = useStore((state)=>state["Home"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["Home"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const TextBox167Props = useStore((state)=>state["Home"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["Home"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const TextBox168Props = useStore((state)=>state["Home"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["Home"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const Image110Props = useStore((state)=>state["Home"]["Image110"]);
const Image110IoProps = useIoStore((state)=>state["Home"]["Image110"]);
const Image110Cb = useImage110Cb()

  return (<>
  <Flex className="p-Home Flex129" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<Div className="p-Home Div127" {...Div127Props} {...Div127Cb} {...Div127IoProps}>
<Image className="p-Home Image110" {...Image110Props} {...Image110Cb} {...Image110IoProps}/>
</Div>
<Flex className="p-Home Flex128" {...Flex128Props} {...Flex128Cb} {...Flex128IoProps}>
<TextBox className="p-Home TextBox168" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
<TextBox className="p-Home TextBox167" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
<TextBox className="p-Home TextBox166" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
</Flex>
<Flex className="p-Home Flex127" {...Flex127Props} {...Flex127Cb} {...Flex127IoProps}>
<TextBox className="p-Home TextBox165" {...TextBox165Props} {...TextBox165Cb} {...TextBox165IoProps}/>
<Button className="p-Home Button3" {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
</Flex>
</Flex>
<Carousel className="p-Home Carousel1" {...Carousel1Props} {...Carousel1Cb} {...Carousel1IoProps}/>
<Flex className="p-Home Flex99" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<Flex className="p-Home Flex105" {...Flex105Props} {...Flex105Cb} {...Flex105IoProps}>
<Flex className="p-Home Flex104" {...Flex104Props} {...Flex104Cb} {...Flex104IoProps}>
<Flex className="p-Home Flex103" {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<Image className="p-Home Image92" {...Image92Props} {...Image92Cb} {...Image92IoProps}/>
<Flex className="p-Home Flex100" {...Flex100Props} {...Flex100Cb} {...Flex100IoProps}>
<Image className="p-Home Image91" {...Image91Props} {...Image91Cb} {...Image91IoProps}/>
<Image className="p-Home Image90" {...Image90Props} {...Image90Cb} {...Image90IoProps}/>
<Image className="p-Home Image89" {...Image89Props} {...Image89Cb} {...Image89IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex102" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<TextBox className="p-Home TextBox136" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
<TextBox className="p-Home TextBox135" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
<TextBox className="p-Home TextBox134" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
<TextBox className="p-Home TextBox133" {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
</Flex>
<Flex className="p-Home Flex101" {...Flex101Props} {...Flex101Cb} {...Flex101IoProps}>
<TextBox className="p-Home TextBox132" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
<TextBox className="p-Home TextBox131" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
<TextBox className="p-Home TextBox130" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
<TextBox className="p-Home TextBox129" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
</Flex>
</Flex>
<Div className="p-Home Div121" {...Div121Props} {...Div121Cb} {...Div121IoProps}>
<Image className="p-Home Image93" {...Image93Props} {...Image93Cb} {...Image93IoProps}/>
</Div>
</Flex>
</Flex>
  </>);
}
