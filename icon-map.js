export const iconMap=new Map()
function mapIcons(values,iconCode){
values.forEach(value=>{
iconMap.set(value,iconCode)
})
}
mapIcons([0, 1], "/static/media/day.212e04206236caeb33f88e1c9dc942ad.svg") //sun
mapIcons([2], "/static/media/cloudy.22e97e837933a900837fe9c3eb090439.svg") //cloud
mapIcons([3], "/static/media/cloudy.22e97e837933a900837fe9c3eb090439.svg") //cloud
mapIcons([45, 48], "/static/media/cloudy.22e97e837933a900837fe9c3eb090439.svg") //cloud
mapIcons([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],"/static/media/rainy-1.f0a18c18bae7dd93dc868bcdb4b371c4.svg") //rain
mapIcons([71, 73, 75, 77, 85, 86], "/static/media/snowy-5.280aaba530372c1a192d45f7c6e40429.svg") //snow
mapIcons([95, 96, 99], "/static/media/thunder.58220cf8d60aac3af8af8d076cf52c1b.svg") //thunder
