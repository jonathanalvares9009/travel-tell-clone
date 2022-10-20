import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex80Cb, useDiv115Cb, useFlex79Cb, useFlex76Cb, useFlex77Cb, useFlex78Cb, useFlex75Cb, useFlex132Cb, useFlex130Cb, useFlex131Cb, useDiv128Cb, useImage73Cb, useTextBox97Cb, useTextBox98Cb, useTextBox99Cb, useTextBox100Cb, useTextBox101Cb, useTextBox102Cb, useTextBox103Cb, useTextBox104Cb, useImage72Cb, useImage69Cb, useImage70Cb, useImage71Cb, useButton4Cb, useTextBox169Cb, useTextBox170Cb, useTextBox171Cb, useTextBox172Cb, useImage111Cb } from "../page-cbs/blog";
import "../page-css/blog.css"

export default function Blog() {
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

  const Flex80Props = useStore((state)=>state["blog"]["Flex80"]);
const Flex80IoProps = useIoStore((state)=>state["blog"]["Flex80"]);
const Flex80Cb = useFlex80Cb()
const Div115Props = useStore((state)=>state["blog"]["Div115"]);
const Div115IoProps = useIoStore((state)=>state["blog"]["Div115"]);
const Div115Cb = useDiv115Cb()
const Flex79Props = useStore((state)=>state["blog"]["Flex79"]);
const Flex79IoProps = useIoStore((state)=>state["blog"]["Flex79"]);
const Flex79Cb = useFlex79Cb()
const Flex76Props = useStore((state)=>state["blog"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["blog"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex77Props = useStore((state)=>state["blog"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["blog"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Flex78Props = useStore((state)=>state["blog"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["blog"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Flex75Props = useStore((state)=>state["blog"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["blog"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const Flex132Props = useStore((state)=>state["blog"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["blog"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const Flex130Props = useStore((state)=>state["blog"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["blog"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const Flex131Props = useStore((state)=>state["blog"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["blog"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const Div128Props = useStore((state)=>state["blog"]["Div128"]);
const Div128IoProps = useIoStore((state)=>state["blog"]["Div128"]);
const Div128Cb = useDiv128Cb()
const Image73Props = useStore((state)=>state["blog"]["Image73"]);
const Image73IoProps = useIoStore((state)=>state["blog"]["Image73"]);
const Image73Cb = useImage73Cb()
const TextBox97Props = useStore((state)=>state["blog"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["blog"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const TextBox98Props = useStore((state)=>state["blog"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["blog"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const TextBox99Props = useStore((state)=>state["blog"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["blog"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const TextBox100Props = useStore((state)=>state["blog"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["blog"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const TextBox101Props = useStore((state)=>state["blog"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["blog"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const TextBox102Props = useStore((state)=>state["blog"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["blog"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const TextBox103Props = useStore((state)=>state["blog"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["blog"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const TextBox104Props = useStore((state)=>state["blog"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["blog"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const Image72Props = useStore((state)=>state["blog"]["Image72"]);
const Image72IoProps = useIoStore((state)=>state["blog"]["Image72"]);
const Image72Cb = useImage72Cb()
const Image69Props = useStore((state)=>state["blog"]["Image69"]);
const Image69IoProps = useIoStore((state)=>state["blog"]["Image69"]);
const Image69Cb = useImage69Cb()
const Image70Props = useStore((state)=>state["blog"]["Image70"]);
const Image70IoProps = useIoStore((state)=>state["blog"]["Image70"]);
const Image70Cb = useImage70Cb()
const Image71Props = useStore((state)=>state["blog"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["blog"]["Image71"]);
const Image71Cb = useImage71Cb()
const Button4Props = useStore((state)=>state["blog"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["blog"]["Button4"]);
const Button4Cb = useButton4Cb()
const TextBox169Props = useStore((state)=>state["blog"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["blog"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const TextBox170Props = useStore((state)=>state["blog"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["blog"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const TextBox171Props = useStore((state)=>state["blog"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["blog"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox172Props = useStore((state)=>state["blog"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["blog"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const Image111Props = useStore((state)=>state["blog"]["Image111"]);
const Image111IoProps = useIoStore((state)=>state["blog"]["Image111"]);
const Image111Cb = useImage111Cb()

  return (<>
  <Flex1 className="p-blog Flex132" {...Flex132Props} {...Flex132Cb} {...Flex132IoProps}>
<Div1 className="p-blog Div128" {...Div128Props} {...Div128Cb} {...Div128IoProps}>
<Image1 className="p-blog Image111" {...Image111Props} {...Image111Cb} {...Image111IoProps}/>
</Div1>
<Flex1 className="p-blog Flex131" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<TextBox1 className="p-blog TextBox172" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
<TextBox1 className="p-blog TextBox171" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
<TextBox1 className="p-blog TextBox170" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
</Flex1>
<Flex1 className="p-blog Flex130" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<TextBox1 className="p-blog TextBox169" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<Button1 className="p-blog Button4" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-blog Flex80" {...Flex80Props} {...Flex80Cb} {...Flex80IoProps}>
<Flex1 className="p-blog Flex79" {...Flex79Props} {...Flex79Cb} {...Flex79IoProps}>
<Flex1 className="p-blog Flex78" {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<Image1 className="p-blog Image72" {...Image72Props} {...Image72Cb} {...Image72IoProps}/>
<Flex1 className="p-blog Flex75" {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<Image1 className="p-blog Image71" {...Image71Props} {...Image71Cb} {...Image71IoProps}/>
<Image1 className="p-blog Image70" {...Image70Props} {...Image70Cb} {...Image70IoProps}/>
<Image1 className="p-blog Image69" {...Image69Props} {...Image69Cb} {...Image69IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-blog Flex77" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<TextBox1 className="p-blog TextBox104" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
<TextBox1 className="p-blog TextBox103" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
<TextBox1 className="p-blog TextBox102" {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
<TextBox1 className="p-blog TextBox101" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
</Flex1>
<Flex1 className="p-blog Flex76" {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<TextBox1 className="p-blog TextBox100" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
<TextBox1 className="p-blog TextBox99" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
<TextBox1 className="p-blog TextBox98" {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
<TextBox1 className="p-blog TextBox97" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
</Flex1>
</Flex1>
<Div1 className="p-blog Div115" {...Div115Props} {...Div115Cb} {...Div115IoProps}>
<Image1 className="p-blog Image73" {...Image73Props} {...Image73Cb} {...Image73IoProps}/>
</Div1>
</Flex1>
  </>);
}
