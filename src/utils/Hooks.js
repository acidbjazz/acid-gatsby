import { useContext, useState, useEffect } from "react"
import { Context } from "./Context"
import moment from "moment"
import "moment/locale/es"

const useResponsive = (bp = null) => {
  const { state } = useContext(Context)
  const breakpoint = bp ? bp : state.breakpoint
  const [isMobile, setIsMobile] = useState(false)
  const handler = isMatch => {
    return setIsMobile(isMatch)
  }
  useEffect(() => {
    const mql = window.matchMedia(`(max-width:${breakpoint}px)`)
    handler(mql.matches)
    mql.addListener(() => handler(mql.matches))
    return () => mql.removeListener(handler)
  })
  return isMobile
}

const useDate = date => {
  const momentDate = moment(date)
  let formatDate = momentDate.calendar({
    sameDay: `[publicado hoy] dddd`, //¡era hoy sábado, Ramón!
    lastDay: `[publicado ayer] dddd`, //ayer viernes
    lastWeek: `[publicado ${momentDate.fromNow()} ]`, //hace 5 días
    sameElse:
      momentDate.year() === moment().year()
        ? `[publicado el] DD [de] MMMM`
        : `[publicado el] LL`, //01 de enero //31 de diciembre de 2019
  })
  return formatDate
}

const useExtractDomain = url => {
  const domain = new URL(url).hostname
  const arrDomain = domain.split(".")
  const name = arrDomain.length === 2 ? arrDomain[0] : arrDomain[1]
  return name
}

export { useResponsive, useDate, useExtractDomain }
