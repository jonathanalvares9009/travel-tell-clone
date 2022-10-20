import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex5 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div5 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox as TextBox5 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image5 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex117Cb, useDiv123Cb, useFlex116Cb, useFlex113Cb, useFlex114Cb, useFlex115Cb, useFlex112Cb, useTextBox20Cb, useImage103Cb, useTextBox145Cb, useTextBox146Cb, useTextBox147Cb, useTextBox148Cb, useTextBox149Cb, useTextBox150Cb, useTextBox151Cb, useTextBox152Cb, useImage102Cb, useImage99Cb, useImage100Cb, useImage101Cb } from "../page-cbs/shop ";
import "../page-css/shop .css"

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

  const Flex117Props = useStore((state)=>state["shop "]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["shop "]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Div123Props = useStore((state)=>state["shop "]["Div123"]);
const Div123IoProps = useIoStore((state)=>state["shop "]["Div123"]);
const Div123Cb = useDiv123Cb()
const Flex116Props = useStore((state)=>state["shop "]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["shop "]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Flex113Props = useStore((state)=>state["shop "]["Flex113"]);
const Flex113IoProps = useIoStore((state)=>state["shop "]["Flex113"]);
const Flex113Cb = useFlex113Cb()
const Flex114Props = useStore((state)=>state["shop "]["Flex114"]);
const Flex114IoProps = useIoStore((state)=>state["shop "]["Flex114"]);
const Flex114Cb = useFlex114Cb()
const Flex115Props = useStore((state)=>state["shop "]["Flex115"]);
const Flex115IoProps = useIoStore((state)=>state["shop "]["Flex115"]);
const Flex115Cb = useFlex115Cb()
const Flex112Props = useStore((state)=>state["shop "]["Flex112"]);
const Flex112IoProps = useIoStore((state)=>state["shop "]["Flex112"]);
const Flex112Cb = useFlex112Cb()
const TextBox20Props = useStore((state)=>state["shop "]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["shop "]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const Image103Props = useStore((state)=>state["shop "]["Image103"]);
const Image103IoProps = useIoStore((state)=>state["shop "]["Image103"]);
const Image103Cb = useImage103Cb()
const TextBox145Props = useStore((state)=>state["shop "]["TextBox145"]);
const TextBox145IoProps = useIoStore((state)=>state["shop "]["TextBox145"]);
const TextBox145Cb = useTextBox145Cb()
const TextBox146Props = useStore((state)=>state["shop "]["TextBox146"]);
const TextBox146IoProps = useIoStore((state)=>state["shop "]["TextBox146"]);
const TextBox146Cb = useTextBox146Cb()
const TextBox147Props = useStore((state)=>state["shop "]["TextBox147"]);
const TextBox147IoProps = useIoStore((state)=>state["shop "]["TextBox147"]);
const TextBox147Cb = useTextBox147Cb()
const TextBox148Props = useStore((state)=>state["shop "]["TextBox148"]);
const TextBox148IoProps = useIoStore((state)=>state["shop "]["TextBox148"]);
const TextBox148Cb = useTextBox148Cb()
const TextBox149Props = useStore((state)=>state["shop "]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["shop "]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const TextBox150Props = useStore((state)=>state["shop "]["TextBox150"]);
const TextBox150IoProps = useIoStore((state)=>state["shop "]["TextBox150"]);
const TextBox150Cb = useTextBox150Cb()
const TextBox151Props = useStore((state)=>state["shop "]["TextBox151"]);
const TextBox151IoProps = useIoStore((state)=>state["shop "]["TextBox151"]);
const TextBox151Cb = useTextBox151Cb()
const TextBox152Props = useStore((state)=>state["shop "]["TextBox152"]);
const TextBox152IoProps = useIoStore((state)=>state["shop "]["TextBox152"]);
const TextBox152Cb = useTextBox152Cb()
const Image102Props = useStore((state)=>state["shop "]["Image102"]);
const Image102IoProps = useIoStore((state)=>state["shop "]["Image102"]);
const Image102Cb = useImage102Cb()
const Image99Props = useStore((state)=>state["shop "]["Image99"]);
const Image99IoProps = useIoStore((state)=>state["shop "]["Image99"]);
const Image99Cb = useImage99Cb()
const Image100Props = useStore((state)=>state["shop "]["Image100"]);
const Image100IoProps = useIoStore((state)=>state["shop "]["Image100"]);
const Image100Cb = useImage100Cb()
const Image101Props = useStore((state)=>state["shop "]["Image101"]);
const Image101IoProps = useIoStore((state)=>state["shop "]["Image101"]);
const Image101Cb = useImage101Cb()

  return (<>
  <TextBox5 className="p-shop  TextBox20" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<Flex5 className="p-shop  Flex117" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<Flex5 className="p-shop  Flex116" {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<Flex5 className="p-shop  Flex115" {...Flex115Props} {...Flex115Cb} {...Flex115IoProps}>
<Image5 className="p-shop  Image102" {...Image102Props} {...Image102Cb} {...Image102IoProps}/>
<Flex5 className="p-shop  Flex112" {...Flex112Props} {...Flex112Cb} {...Flex112IoProps}>
<Image5 className="p-shop  Image101" {...Image101Props} {...Image101Cb} {...Image101IoProps}/>
<Image5 className="p-shop  Image100" {...Image100Props} {...Image100Cb} {...Image100IoProps}/>
<Image5 className="p-shop  Image99" {...Image99Props} {...Image99Cb} {...Image99IoProps}/>
</Flex5>
</Flex5>
<Flex5 className="p-shop  Flex114" {...Flex114Props} {...Flex114Cb} {...Flex114IoProps}>
<TextBox5 className="p-shop  TextBox152" {...TextBox152Props} {...TextBox152Cb} {...TextBox152IoProps}/>
<TextBox5 className="p-shop  TextBox151" {...TextBox151Props} {...TextBox151Cb} {...TextBox151IoProps}/>
<TextBox5 className="p-shop  TextBox150" {...TextBox150Props} {...TextBox150Cb} {...TextBox150IoProps}/>
<TextBox5 className="p-shop  TextBox149" {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
</Flex5>
<Flex5 className="p-shop  Flex113" {...Flex113Props} {...Flex113Cb} {...Flex113IoProps}>
<TextBox5 className="p-shop  TextBox148" {...TextBox148Props} {...TextBox148Cb} {...TextBox148IoProps}/>
<TextBox5 className="p-shop  TextBox147" {...TextBox147Props} {...TextBox147Cb} {...TextBox147IoProps}/>
<TextBox5 className="p-shop  TextBox146" {...TextBox146Props} {...TextBox146Cb} {...TextBox146IoProps}/>
<TextBox5 className="p-shop  TextBox145" {...TextBox145Props} {...TextBox145Cb} {...TextBox145IoProps}/>
</Flex5>
</Flex5>
<Div5 className="p-shop  Div123" {...Div123Props} {...Div123Cb} {...Div123IoProps}>
<Image5 className="p-shop  Image103" {...Image103Props} {...Image103Cb} {...Image103IoProps}/>
</Div5>
</Flex5>
  </>);
}
