import AirCompany from "./AirCompany"
import RouteInfo from "./RouteInfo"
import TopLeftLabel from "./TopLeftLabel"

export default function MainInfo({ back }: { back?: boolean }) {
  return <div className="relative flex flex-wrap 
    items-center justify-center rounded-tl-2xl border-t">
    <TopLeftLabel>
      Невозвратный
    </TopLeftLabel>
    <AirCompany image='/лого.png'>
      S7 Airlines
    </AirCompany>
    <RouteInfo back={back} />
  </div>
}
