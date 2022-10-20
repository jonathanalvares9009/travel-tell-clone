import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex5 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div5 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Button as Button5 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox5 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image5 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Input as Input1 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useFlex228Cb, useFlex226Cb, useFlex227Cb, useDiv154Cb, useFlex235Cb, useFlex233Cb, useFlex229Cb, useFlex230Cb, useFlex231Cb, useFlex232Cb, useFlex234Cb, useFlex241Cb, useDiv155Cb, useFlex240Cb, useFlex237Cb, useFlex238Cb, useFlex239Cb, useFlex236Cb, useButton20Cb, useTextBox386Cb, useTextBox387Cb, useTextBox388Cb, useTextBox389Cb, useImage137Cb, useButton21Cb, useInput32Cb, useInput33Cb, useInput34Cb, useInput35Cb, useInput36Cb, useTextBox390Cb, useTextBox391Cb, useTextBox392Cb, useImage142Cb, useTextBox393Cb, useTextBox394Cb, useTextBox395Cb, useTextBox396Cb, useTextBox397Cb, useTextBox398Cb, useTextBox399Cb, useTextBox400Cb, useImage141Cb, useImage138Cb, useImage139Cb, useImage140Cb } from "../page-cbs/contact";
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

  const Flex228Props = useStore((state)=>state["contact"]["Flex228"]);
const Flex228IoProps = useIoStore((state)=>state["contact"]["Flex228"]);
const Flex228Cb = useFlex228Cb()
const Flex226Props = useStore((state)=>state["contact"]["Flex226"]);
const Flex226IoProps = useIoStore((state)=>state["contact"]["Flex226"]);
const Flex226Cb = useFlex226Cb()
const Flex227Props = useStore((state)=>state["contact"]["Flex227"]);
const Flex227IoProps = useIoStore((state)=>state["contact"]["Flex227"]);
const Flex227Cb = useFlex227Cb()
const Div154Props = useStore((state)=>state["contact"]["Div154"]);
const Div154IoProps = useIoStore((state)=>state["contact"]["Div154"]);
const Div154Cb = useDiv154Cb()
const Flex235Props = useStore((state)=>state["contact"]["Flex235"]);
const Flex235IoProps = useIoStore((state)=>state["contact"]["Flex235"]);
const Flex235Cb = useFlex235Cb()
const Flex233Props = useStore((state)=>state["contact"]["Flex233"]);
const Flex233IoProps = useIoStore((state)=>state["contact"]["Flex233"]);
const Flex233Cb = useFlex233Cb()
const Flex229Props = useStore((state)=>state["contact"]["Flex229"]);
const Flex229IoProps = useIoStore((state)=>state["contact"]["Flex229"]);
const Flex229Cb = useFlex229Cb()
const Flex230Props = useStore((state)=>state["contact"]["Flex230"]);
const Flex230IoProps = useIoStore((state)=>state["contact"]["Flex230"]);
const Flex230Cb = useFlex230Cb()
const Flex231Props = useStore((state)=>state["contact"]["Flex231"]);
const Flex231IoProps = useIoStore((state)=>state["contact"]["Flex231"]);
const Flex231Cb = useFlex231Cb()
const Flex232Props = useStore((state)=>state["contact"]["Flex232"]);
const Flex232IoProps = useIoStore((state)=>state["contact"]["Flex232"]);
const Flex232Cb = useFlex232Cb()
const Flex234Props = useStore((state)=>state["contact"]["Flex234"]);
const Flex234IoProps = useIoStore((state)=>state["contact"]["Flex234"]);
const Flex234Cb = useFlex234Cb()
const Flex241Props = useStore((state)=>state["contact"]["Flex241"]);
const Flex241IoProps = useIoStore((state)=>state["contact"]["Flex241"]);
const Flex241Cb = useFlex241Cb()
const Div155Props = useStore((state)=>state["contact"]["Div155"]);
const Div155IoProps = useIoStore((state)=>state["contact"]["Div155"]);
const Div155Cb = useDiv155Cb()
const Flex240Props = useStore((state)=>state["contact"]["Flex240"]);
const Flex240IoProps = useIoStore((state)=>state["contact"]["Flex240"]);
const Flex240Cb = useFlex240Cb()
const Flex237Props = useStore((state)=>state["contact"]["Flex237"]);
const Flex237IoProps = useIoStore((state)=>state["contact"]["Flex237"]);
const Flex237Cb = useFlex237Cb()
const Flex238Props = useStore((state)=>state["contact"]["Flex238"]);
const Flex238IoProps = useIoStore((state)=>state["contact"]["Flex238"]);
const Flex238Cb = useFlex238Cb()
const Flex239Props = useStore((state)=>state["contact"]["Flex239"]);
const Flex239IoProps = useIoStore((state)=>state["contact"]["Flex239"]);
const Flex239Cb = useFlex239Cb()
const Flex236Props = useStore((state)=>state["contact"]["Flex236"]);
const Flex236IoProps = useIoStore((state)=>state["contact"]["Flex236"]);
const Flex236Cb = useFlex236Cb()
const Button20Props = useStore((state)=>state["contact"]["Button20"]);
const Button20IoProps = useIoStore((state)=>state["contact"]["Button20"]);
const Button20Cb = useButton20Cb()
const TextBox386Props = useStore((state)=>state["contact"]["TextBox386"]);
const TextBox386IoProps = useIoStore((state)=>state["contact"]["TextBox386"]);
const TextBox386Cb = useTextBox386Cb()
const TextBox387Props = useStore((state)=>state["contact"]["TextBox387"]);
const TextBox387IoProps = useIoStore((state)=>state["contact"]["TextBox387"]);
const TextBox387Cb = useTextBox387Cb()
const TextBox388Props = useStore((state)=>state["contact"]["TextBox388"]);
const TextBox388IoProps = useIoStore((state)=>state["contact"]["TextBox388"]);
const TextBox388Cb = useTextBox388Cb()
const TextBox389Props = useStore((state)=>state["contact"]["TextBox389"]);
const TextBox389IoProps = useIoStore((state)=>state["contact"]["TextBox389"]);
const TextBox389Cb = useTextBox389Cb()
const Image137Props = useStore((state)=>state["contact"]["Image137"]);
const Image137IoProps = useIoStore((state)=>state["contact"]["Image137"]);
const Image137Cb = useImage137Cb()
const Button21Props = useStore((state)=>state["contact"]["Button21"]);
const Button21IoProps = useIoStore((state)=>state["contact"]["Button21"]);
const Button21Cb = useButton21Cb()
const Input32Props = useStore((state)=>state["contact"]["Input32"]);
const Input32IoProps = useIoStore((state)=>state["contact"]["Input32"]);
const Input32Cb = useInput32Cb()
const Input33Props = useStore((state)=>state["contact"]["Input33"]);
const Input33IoProps = useIoStore((state)=>state["contact"]["Input33"]);
const Input33Cb = useInput33Cb()
const Input34Props = useStore((state)=>state["contact"]["Input34"]);
const Input34IoProps = useIoStore((state)=>state["contact"]["Input34"]);
const Input34Cb = useInput34Cb()
const Input35Props = useStore((state)=>state["contact"]["Input35"]);
const Input35IoProps = useIoStore((state)=>state["contact"]["Input35"]);
const Input35Cb = useInput35Cb()
const Input36Props = useStore((state)=>state["contact"]["Input36"]);
const Input36IoProps = useIoStore((state)=>state["contact"]["Input36"]);
const Input36Cb = useInput36Cb()
const TextBox390Props = useStore((state)=>state["contact"]["TextBox390"]);
const TextBox390IoProps = useIoStore((state)=>state["contact"]["TextBox390"]);
const TextBox390Cb = useTextBox390Cb()
const TextBox391Props = useStore((state)=>state["contact"]["TextBox391"]);
const TextBox391IoProps = useIoStore((state)=>state["contact"]["TextBox391"]);
const TextBox391Cb = useTextBox391Cb()
const TextBox392Props = useStore((state)=>state["contact"]["TextBox392"]);
const TextBox392IoProps = useIoStore((state)=>state["contact"]["TextBox392"]);
const TextBox392Cb = useTextBox392Cb()
const Image142Props = useStore((state)=>state["contact"]["Image142"]);
const Image142IoProps = useIoStore((state)=>state["contact"]["Image142"]);
const Image142Cb = useImage142Cb()
const TextBox393Props = useStore((state)=>state["contact"]["TextBox393"]);
const TextBox393IoProps = useIoStore((state)=>state["contact"]["TextBox393"]);
const TextBox393Cb = useTextBox393Cb()
const TextBox394Props = useStore((state)=>state["contact"]["TextBox394"]);
const TextBox394IoProps = useIoStore((state)=>state["contact"]["TextBox394"]);
const TextBox394Cb = useTextBox394Cb()
const TextBox395Props = useStore((state)=>state["contact"]["TextBox395"]);
const TextBox395IoProps = useIoStore((state)=>state["contact"]["TextBox395"]);
const TextBox395Cb = useTextBox395Cb()
const TextBox396Props = useStore((state)=>state["contact"]["TextBox396"]);
const TextBox396IoProps = useIoStore((state)=>state["contact"]["TextBox396"]);
const TextBox396Cb = useTextBox396Cb()
const TextBox397Props = useStore((state)=>state["contact"]["TextBox397"]);
const TextBox397IoProps = useIoStore((state)=>state["contact"]["TextBox397"]);
const TextBox397Cb = useTextBox397Cb()
const TextBox398Props = useStore((state)=>state["contact"]["TextBox398"]);
const TextBox398IoProps = useIoStore((state)=>state["contact"]["TextBox398"]);
const TextBox398Cb = useTextBox398Cb()
const TextBox399Props = useStore((state)=>state["contact"]["TextBox399"]);
const TextBox399IoProps = useIoStore((state)=>state["contact"]["TextBox399"]);
const TextBox399Cb = useTextBox399Cb()
const TextBox400Props = useStore((state)=>state["contact"]["TextBox400"]);
const TextBox400IoProps = useIoStore((state)=>state["contact"]["TextBox400"]);
const TextBox400Cb = useTextBox400Cb()
const Image141Props = useStore((state)=>state["contact"]["Image141"]);
const Image141IoProps = useIoStore((state)=>state["contact"]["Image141"]);
const Image141Cb = useImage141Cb()
const Image138Props = useStore((state)=>state["contact"]["Image138"]);
const Image138IoProps = useIoStore((state)=>state["contact"]["Image138"]);
const Image138Cb = useImage138Cb()
const Image139Props = useStore((state)=>state["contact"]["Image139"]);
const Image139IoProps = useIoStore((state)=>state["contact"]["Image139"]);
const Image139Cb = useImage139Cb()
const Image140Props = useStore((state)=>state["contact"]["Image140"]);
const Image140IoProps = useIoStore((state)=>state["contact"]["Image140"]);
const Image140Cb = useImage140Cb()

  return (<>
  <Flex5 className="p-contact Flex228" {...Flex228Props} {...Flex228Cb} {...Flex228IoProps}>
<Div5 className="p-contact Div154" {...Div154Props} {...Div154Cb} {...Div154IoProps}>
<Image5 className="p-contact Image137" {...Image137Props} {...Image137Cb} {...Image137IoProps}/>
</Div5>
<Flex5 className="p-contact Flex227" {...Flex227Props} {...Flex227Cb} {...Flex227IoProps}>
<TextBox5 className="p-contact TextBox389" {...TextBox389Props} {...TextBox389Cb} {...TextBox389IoProps}/>
<TextBox5 className="p-contact TextBox388" {...TextBox388Props} {...TextBox388Cb} {...TextBox388IoProps}/>
<TextBox5 className="p-contact TextBox387" {...TextBox387Props} {...TextBox387Cb} {...TextBox387IoProps}/>
</Flex5>
<Flex5 className="p-contact Flex226" {...Flex226Props} {...Flex226Cb} {...Flex226IoProps}>
<TextBox5 className="p-contact TextBox386" {...TextBox386Props} {...TextBox386Cb} {...TextBox386IoProps}/>
<Button5 className="p-contact Button20" {...Button20Props} {...Button20Cb} {...Button20IoProps}/>
</Flex5>
</Flex5>
<Flex5 className="p-contact Flex235" {...Flex235Props} {...Flex235Cb} {...Flex235IoProps}>
<Flex5 className="p-contact Flex234" {...Flex234Props} {...Flex234Cb} {...Flex234IoProps}>
<TextBox5 className="p-contact TextBox392" {...TextBox392Props} {...TextBox392Cb} {...TextBox392IoProps}/>
<TextBox5 className="p-contact TextBox391" {...TextBox391Props} {...TextBox391Cb} {...TextBox391IoProps}/>
<TextBox5 className="p-contact TextBox390" {...TextBox390Props} {...TextBox390Cb} {...TextBox390IoProps}/>
</Flex5>
<Flex5 className="p-contact Flex233" {...Flex233Props} {...Flex233Cb} {...Flex233IoProps}>
<Flex5 className="p-contact Flex232" {...Flex232Props} {...Flex232Cb} {...Flex232IoProps}>
<Input1 className="p-contact Input36" {...Input36Props} {...Input36Cb} {...Input36IoProps}/>
<Input1 className="p-contact Input35" {...Input35Props} {...Input35Cb} {...Input35IoProps}/>
</Flex5>
<Flex5 className="p-contact Flex231" {...Flex231Props} {...Flex231Cb} {...Flex231IoProps}>
<Input1 className="p-contact Input34" {...Input34Props} {...Input34Cb} {...Input34IoProps}/>
<Input1 className="p-contact Input33" {...Input33Props} {...Input33Cb} {...Input33IoProps}/>
</Flex5>
<Flex5 className="p-contact Flex230" {...Flex230Props} {...Flex230Cb} {...Flex230IoProps}>
<Input1 className="p-contact Input32" {...Input32Props} {...Input32Cb} {...Input32IoProps}/>
</Flex5>
<Flex5 className="p-contact Flex229" {...Flex229Props} {...Flex229Cb} {...Flex229IoProps}>
<Button5 className="p-contact Button21" {...Button21Props} {...Button21Cb} {...Button21IoProps}/>
</Flex5>
</Flex5>
</Flex5>
<Flex5 className="p-contact Flex241" {...Flex241Props} {...Flex241Cb} {...Flex241IoProps}>
<Flex5 className="p-contact Flex240" {...Flex240Props} {...Flex240Cb} {...Flex240IoProps}>
<Flex5 className="p-contact Flex239" {...Flex239Props} {...Flex239Cb} {...Flex239IoProps}>
<Image5 className="p-contact Image141" {...Image141Props} {...Image141Cb} {...Image141IoProps}/>
<Flex5 className="p-contact Flex236" {...Flex236Props} {...Flex236Cb} {...Flex236IoProps}>
<Image5 className="p-contact Image140" {...Image140Props} {...Image140Cb} {...Image140IoProps}/>
<Image5 className="p-contact Image139" {...Image139Props} {...Image139Cb} {...Image139IoProps}/>
<Image5 className="p-contact Image138" {...Image138Props} {...Image138Cb} {...Image138IoProps}/>
</Flex5>
</Flex5>
<Flex5 className="p-contact Flex238" {...Flex238Props} {...Flex238Cb} {...Flex238IoProps}>
<TextBox5 className="p-contact TextBox400" {...TextBox400Props} {...TextBox400Cb} {...TextBox400IoProps}/>
<TextBox5 className="p-contact TextBox399" {...TextBox399Props} {...TextBox399Cb} {...TextBox399IoProps}/>
<TextBox5 className="p-contact TextBox398" {...TextBox398Props} {...TextBox398Cb} {...TextBox398IoProps}/>
<TextBox5 className="p-contact TextBox397" {...TextBox397Props} {...TextBox397Cb} {...TextBox397IoProps}/>
</Flex5>
<Flex5 className="p-contact Flex237" {...Flex237Props} {...Flex237Cb} {...Flex237IoProps}>
<TextBox5 className="p-contact TextBox396" {...TextBox396Props} {...TextBox396Cb} {...TextBox396IoProps}/>
<TextBox5 className="p-contact TextBox395" {...TextBox395Props} {...TextBox395Cb} {...TextBox395IoProps}/>
<TextBox5 className="p-contact TextBox394" {...TextBox394Props} {...TextBox394Cb} {...TextBox394IoProps}/>
<TextBox5 className="p-contact TextBox393" {...TextBox393Props} {...TextBox393Cb} {...TextBox393IoProps}/>
</Flex5>
</Flex5>
<Div5 className="p-contact Div155" {...Div155Props} {...Div155Cb} {...Div155IoProps}>
<Image5 className="p-contact Image142" {...Image142Props} {...Image142Cb} {...Image142IoProps}/>
</Div5>
</Flex5>
  </>);
}
